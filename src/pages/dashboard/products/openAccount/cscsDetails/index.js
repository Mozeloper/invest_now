import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import arrowLeft from "../../../../../assets/icons/arrow-left.svg";
import Button from "../../../../../components/Button";
import Input from "../../../../../components/formFields/inputs";
import MyInput from "../../../../../components/formFields/inputs/MyInput";
import Text from "../../../../../components/Typography/Typography";
import { getIdentityTypes } from "../../../../../store/slices/settingsUpdateKycSlice";
import SearchableSelect from "../../../../../components/formFields/selectField";

export default function CscsDetails({
  handleDispatchNextStep,
  handleDispatchPreviousStep,
  isBothTrue,
  isBothFalse,
  isbeneficiaryTrue,
  isCHNTrue,
}) {
  const dispatch = useDispatch();
  const updateKycSliceReducer = useSelector((state) => state.updateKycSliceReducer);
  const idType = [];
  const chnDetailsSchema = Yup.object().shape({
    cscsNumber: Yup.string()
      .required("This field is Required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "cscs Number is not valid"
      ),
    id_number: Yup.string()
      .required("This field is Required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "cscs Number is not valid"
      ),
    id_type: Yup.string().required("This field is Required"),
  });
  console.log(updateKycSliceReducer);
  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        dispatch(getIdentityTypes());
      }
    })();
    return () => {
      mounted = false;
    };
  }, [dispatch]);

  if (updateKycSliceReducer?.identityTypeState?.type === "settings/identityTypes/fulfilled") {
    updateKycSliceReducer?.identityTypeState?.payload?.data?.data.map((list) => {
      return idType.push({
        label: list.identity_type_name,
        value: list.id,
      });
    });
  }

  return (
    <div className="w-full">
      <div className="w-full">
        <img
          onClick={() => handleDispatchPreviousStep(1, "chn")}
          src={arrowLeft}
          alt="arrow-left"
          className="w-[24px] h-[24px] cursor-pointer"
        />
      </div>
      <div className="flex flex-col mt-2">
        <Text weight="bold" variant="body" color="text-red">
          Step 2
        </Text>
        <Text weight="bold" variant="h4" color="text-red">
          CSCS Status
        </Text>
      </div>
      <div className="flex flex-col gap-2 mt-6 w-[40%]">
        <Text weight="bold" variant="body" color="text-[#65666A]">
          CSCS (CHN) Account number
        </Text>
        <Text weight="bold" variant="h4" color="text-[#65666A]">
          This information helps us personalise and secure your InvestNow account
        </Text>
      </div>
      <div className="bg-[#65666A] p-[4%] w-[85%] mt-4 flex flex-col gap-3 h-auto">
        <Text color="text-white" variant="h4">
          What is CSCS?
        </Text>
        <Text color="text-white" variant="h4" format="w-[70%]">
          CSCS stands for Central Securities Clearing system. They are the market overseers on the NIgerian Stock
          Exchange. Your CSCS Number is a number assigned to you after you open a new brokerage account.
        </Text>
      </div>
      <div className="mt-6">
        <Formik
          initialValues={{
            cscsNumber: "",
            id_type: "",
            id_number: "",
            exp_date: "",
          }}
          validationSchema={chnDetailsSchema}
          enableReinitialize={true}
          onSubmit={async (values) => {
            if (isBothTrue) {
              handleDispatchNextStep(null, values, 3, "chn");
            } else if (isCHNTrue) {
              handleDispatchNextStep(null, values, 4, "chn");
            }
          }}
        >
          {({ handleSubmit, handleChange, setFieldValue, isSubmitting, values, touched, errors }) => (
            <Form onSubmit={handleSubmit} className="w-full h-full">
              <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
                <div className="w-[50%]">
                  <label htmlFor="cscsNumber" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                    CSCS (CHN) Account number
                  </label>
                  <Input placeholder="Enter 9 digit" type="text" name="cscsNumber" handleChange={handleChange} />
                  {errors.cscsNumber && touched.cscsNumber ? (
                    <Text variant="body" weight="normal" color="text-red">
                      {errors.cscsNumber}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="mt-4">
                <Text variant="h4" weight="bold" color="text-[#000000]">
                  Identity Information
                </Text>
              </div>
              <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
                <div className="w-full">
                  <label htmlFor="bank" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                    Id Type
                  </label>
                  <SearchableSelect
                    options={idType}
                    isLoading={updateKycSliceReducer?.isLoading}
                    name="id_type"
                    setFieldValue={setFieldValue}
                    value={values.id_type}
                    placeholder="Select id"
                  />
                  {errors.id_type && touched.id_type ? (
                    <Text variant="small" weight="normal" color="text-red">
                      {errors.id_type}
                    </Text>
                  ) : null}
                </div>
                <div className="w-full">
                  <MyInput
                    className="w-full"
                    placeholder="*Enter 9 digit"
                    label="ID Number"
                    name="id_number"
                    type="text"
                    handleChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
                <div className="w-[50%]">
                  <MyInput
                    className="w-full"
                    placeholder="*DD/MM/YYYY"
                    label="ID Exp Date"
                    name="exp_date"
                    type="date"
                    handleChange={handleChange}
                  />
                </div>
              </div>
              <div className="mt-10 w-full flex justify-center">
                <div className="w-[30%]">
                  <Button title="Next" className="cursor-pointer" type="submit" isLoading={false} />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
