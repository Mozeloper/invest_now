/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import closeBtn from "../../../../../assets/icons/close_btn.svg";
import Text from "../../../../../components/Typography/Typography";
import Input from "../../../../../components/formFields/inputs";
import Button from "../../../../../components/Button";
import SearchableSelect from "../../../../../components/formFields/selectField";
import { useDispatch, useSelector } from "react-redux";
import { handleGetCountry } from "../../../../../store/slices/authSlices";
import { getReasonList, handleSaveSelfCertification } from "../../../../../store/slices/settingsUpdateKycSlice";
import MessageModal from "../../../../../components/modals/MessageModal";
import { handleCustomerDetails } from "../../../../../store/slices/dashboardSlice";

export default function SelfCertification({ handleCloseModals }) {
  const [openNoReasonModal, setNoReasonModal] = useState(false);
  const [reasonOption, setNoReasonOption] = useState({
    id: null,
    reason: "",
  });
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const authReducer = useSelector((state) => state.authReducer);
  const updateKycSliceReducer = useSelector((state) => state.updateKycSliceReducer);
  const countryList = [];

  const selfCertificationSchema = Yup.object().shape({
    country: Yup.string().required("Employment status is required"),
    tin: Yup.string(),
  });
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        try {
          dispatch(handleGetCountry());
          dispatch(getReasonList());
        } catch (error) {
          console.log(error);
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (authReducer?.country?.message === "Countries loaded.") {
    authReducer?.country?.data.map((list) => {
      return countryList.push({
        label: list.name,
        value: list.code,
      });
    });
  }

  const handleSelectNoReason = (list) => {
    setNoReasonOption((prev) => ({
      ...prev,
      id: list.id,
      reason: list.title,
    }));
    setNoReasonModal(false);
  };

  const handleSelfCertificationForm = async (data) => {
    const result = {
      jurisdiction_of_tax_residence: data.country !== "" ? data.country : "",
      tin: data?.tin !== "" ? data?.tin : "",
      no_tin_reason: reasonOption?.id !== "" ? reasonOption?.id : null,
    };

    await dispatch(handleSaveSelfCertification(result))
      .unwrap()
      .then((res) => {
        dispatch(handleCustomerDetails());
        setTimeout(() => {
          handleCloseModals("self_certification");
          setMessage("");
        }, 2000);
        setMessage(res?.data?.message);
      })
      .catch((error) => {
        setTimeout(() => {
          setErrorMessage("");
        }, 2000);
        setErrorMessage(error?.data?.message);
      });
  };

  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseModals("self_certification")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <div className="w-full flex flex-col gap-2 mb-10">
        <Text variant="h2" weight="bold">
          Self certfication Form
        </Text>
        <Text variant="sub" weight="normal">
          Individual Tax residency self certification
        </Text>
        <Text variant="body" weight="normal" format="my-4">
          Country/Jurisdiction of Residence for Tax Purposes and related Taxpayer Identication Number or equivalent
          number
        </Text>
        <Text variant="body" weight="normal">
          Please complete the following table indicating
        </Text>
        <Text variant="body" weight="normal">
          1 Where the Account Holder is tax resident;
        </Text>
        <Text variant="body" weight="normal">
          2 The Account Holder's TIN for each country/jurisdiction indicated. If the Account Holder is tax resident in
          more than three countries/jurisdictions, please use a separate sheet.
        </Text>
      </div>
      <Formik
        initialValues={{
          country: "",
          tin: "",
        }}
        validationSchema={selfCertificationSchema}
        onSubmit={async (values) => {
          handleSelfCertificationForm(values);
        }}
      >
        {({ handleSubmit, handleChange, setFieldValue, values, isSubmitting, touched, errors }) => (
          <>
            <Form onSubmit={handleSubmit} className="w-[100%]">
              <div className="w-full mt-4">
                <label htmlFor="country" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Country/Jurisdiction of Tax Residence
                </label>
                <SearchableSelect
                  options={countryList}
                  name="country"
                  isLoading={authReducer?.isLoading}
                  setFieldValue={setFieldValue}
                  placeholder="Select country"
                  defaultValue={values.country}
                />
                {errors.country && touched.country ? (
                  <Text variant="h4" weight="normal" color="text-red-700">
                    {errors.country}
                  </Text>
                ) : null}
              </div>

              <div className="w-full mt-4">
                <label htmlFor="tin" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Tax Identification Number ( TIN )
                </label>
                <Input placeholder="Tin" type="text" name="tin" handleChange={handleChange} />
                {errors.tin && touched.tin ? (
                  <Text variant="h4" weight="normal" color="text-red-700">
                    {errors.tin}
                  </Text>
                ) : null}
              </div>
              {values?.tin === "" && (
                <div className="w-full mt-4">
                  <label htmlFor="no_reason" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                    If no TIN available enter Reason A, B or C
                  </label>
                  <div onClick={() => setNoReasonModal(true)} className="w-full p-4 bg-[#F2F2F2] cursor-pointer">
                    <Text variant="h4">{reasonOption.reason !== "" ? reasonOption.reason : "Select Reason"}</Text>
                  </div>
                </div>
              )}

              <div className="flex justify-start mt-8 lg:w-[50%] w-full">
                <Button
                  title="Submit"
                  className="cursor-pointer w-full"
                  type="submit"
                  isLoading={updateKycSliceReducer?.selfCertificationIsLoading}
                />
              </div>
            </Form>
            {message !== "" && (
              <div className="w-full text-center mt-4">
                <Text variant="h4" color="text-green-600">
                  {message}
                </Text>
              </div>
            )}
            {errorMessage !== "" && (
              <div className="w-full text-center mt-4">
                <Text variant="h4" color="text-red-500">
                  {errorMessage}
                </Text>
              </div>
            )}
          </>
        )}
      </Formik>
      <MessageModal modalHeight="auto" isOpen={openNoReasonModal}>
        <div className="flex justify-end w-full">
          <img
            onClick={() => setNoReasonModal(false)}
            src={closeBtn}
            alt="close_btn"
            className="h-[40px] w-[40px] cursor-pointer"
          />
        </div>
        <div className="w-full flex flex-col gap-2 mb-6">
          <Text variant="h2" weight="bold">
            Self certfication Form
          </Text>
          <Text variant="h4" weight="normal">
            Tap On a Reason to select
          </Text>
        </div>

        <div className="w-full">
          {updateKycSliceReducer?.noReasonList?.type === "settings/noReasonList/fulfilled" && (
            <>
              {updateKycSliceReducer?.noReasonList?.payload?.data?.data.map((list) => {
                return (
                  <div
                    onClick={() => handleSelectNoReason(list)}
                    key={list.id}
                    className="w-full bg-pink cursor-pointer p-4 mb-4"
                  >
                    <Text variant="h3" weight="bold" color="text-primary">
                      {list?.title}
                    </Text>
                    <Text variant="h4" weight="bold" format="my-4">
                      {list?.description}
                    </Text>
                    <Text variant="h4" weight="bold">
                      {list?.hint}
                    </Text>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </MessageModal>
    </>
  );
}
