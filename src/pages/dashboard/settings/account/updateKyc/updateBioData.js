import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import closeBtn from "../../../../../assets/icons/close_btn.svg";
import Text from "../../../../../components/Typography/Typography";
import Input from "../../../../../components/formFields/inputs";
import SearchableSelect from "../../../../../components/formFields/selectField";
import Button from "../../../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  getcustomerTitle,
  getMaritalStatus,
  getReligion,
  handleSaveBioData,
} from "../../../../../store/slices/settingsUpdateKycSlice";
import { handleCustomerDetails } from "../../../../../store/slices/dashboardSlice";

export default function UpdateBioData({ handleCloseModals }) {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const updateKycSliceReducer = useSelector((state) => state.updateKycSliceReducer);
  const listTitle = [];
  const religionList = [];
  const maritalStatusList = [];

  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        try {
          dispatch(getcustomerTitle());
          dispatch(getReligion());
          dispatch(getMaritalStatus());
        } catch (error) {
          console.log(error);
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, [dispatch]);

  if (updateKycSliceReducer?.customerTitle?.type === "settings/customerTitles/fulfilled") {
    updateKycSliceReducer?.customerTitle?.payload?.data?.data.map((list) => {
      return listTitle.push({
        label: list.name,
        value: list.name,
      });
    });
  }

  if (updateKycSliceReducer?.religion?.type === "settings/religion/fulfilled") {
    updateKycSliceReducer?.religion?.payload?.data?.data.map((list) => {
      return religionList.push({
        label: list.name,
        value: list.name,
      });
    });
  }

  if (updateKycSliceReducer?.maritalStatus?.type === "settings/maritalStatus/fulfilled") {
    updateKycSliceReducer?.maritalStatus?.payload?.data?.data.map((list) => {
      return maritalStatusList.push({
        label: list.name,
        value: list.name,
      });
    });
  }

  const handleUploadBioData = async (data) => {
    await dispatch(handleSaveBioData(data))
      .unwrap()
      .then((res) => {
        dispatch(handleCustomerDetails());
        setTimeout(() => {
          handleCloseModals("bio_data");
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

  const updateBioSchema = Yup.object().shape({
    title: Yup.string().required("title is required"),
    maidenName: Yup.string().required("Mother's maiden name is required"),
    religion: Yup.string().required("select a religion"),
    marital_status: Yup.string().required("marital status is required"),
  });

  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseModals("bio_data")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <div className="w-full flex flex-col gap-2 mb-10">
        <Text variant="h2" weight="bold">
          Update Bio Data
        </Text>
        <Text variant="h4" weight="normal">
          Select which of the following you will like to update
        </Text>
      </div>
      <Formik
        initialValues={{
          title: "",
          maidenName: "",
          religion: "",
          marital_status: "",
        }}
        validationSchema={updateBioSchema}
        onSubmit={async (values) => {
          const data = {
            title: values.title !== "" ? values.title : "",
            mothers_maiden_name: values.maidenName !== "" ? values.maidenName : "",
            religion: values.religion !== "" ? values.religion : "",
            marital_status: values.marital_status !== "" ? values.marital_status : "",
          };
          handleUploadBioData(data);
        }}
      >
        {({ handleSubmit, handleChange, values, setFieldValue, isSubmitting, touched, errors }) => (
          <>
            <Form onSubmit={handleSubmit} className="w-[100%]">
              <div className="w-full mt-4">
                <label htmlFor="title" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Title
                </label>
                <SearchableSelect
                  options={listTitle}
                  name="title"
                  isLoading={updateKycSliceReducer?.isLoading}
                  setFieldValue={setFieldValue}
                  placeholder="Select title"
                  defaultValue={values.title}
                />
                {errors.title && touched.title ? (
                  <Text variant="body" weight="normal" color="text-red">
                    {errors.title}
                  </Text>
                ) : null}
              </div>

              <div className="w-full mt-4">
                <label htmlFor="maidenName" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Mother's Maiden Name
                </label>
                <Input placeholder="Mother's maiden name" type="text" name="maidenName" handleChange={handleChange} />
                {errors.maidenName && touched.maidenName ? (
                  <Text variant="body" weight="normal" color="text-red">
                    {errors.maidenName}
                  </Text>
                ) : null}
              </div>
              <div className="w-full mt-4">
                <label htmlFor="title" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Title
                </label>
                <SearchableSelect
                  options={religionList}
                  name="religion"
                  isLoading={updateKycSliceReducer?.isLoading}
                  setFieldValue={setFieldValue}
                  placeholder="Select religion"
                  defaultValue={values.religion}
                />
                {errors.religion && touched.religion ? (
                  <Text variant="body" weight="normal" color="text-red">
                    {errors.religion}
                  </Text>
                ) : null}
              </div>

              <div className="w-full mt-4">
                <label htmlFor="marital_status" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Marital Status
                </label>
                <SearchableSelect
                  options={maritalStatusList}
                  name="marital_status"
                  isLoading={updateKycSliceReducer?.isLoading}
                  setFieldValue={setFieldValue}
                  placeholder="Select status"
                  defaultValue={values.marital_status}
                />
                {errors.marital_status && touched.marital_status ? (
                  <Text variant="body" weight="normal" color="text-red">
                    {errors.marital_status}
                  </Text>
                ) : null}
              </div>

              <div className="mt-8">
                <Button
                  title="Submit"
                  className="cursor-pointer w-full"
                  type="submit"
                  isLoading={updateKycSliceReducer?.saveBioDataisLoading}
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
                <Text variant="h4" color="text-red">
                  {errorMessage}
                </Text>
              </div>
            )}
          </>
        )}
      </Formik>
    </>
  );
}
