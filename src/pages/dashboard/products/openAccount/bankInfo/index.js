import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import arrowLeft from "../../../../../assets/icons/arrow-left.svg";
import Button from "../../../../../components/Button";
import MyInput from "../../../../../components/formFields/inputs/MyInput";
import SearchableSelect from "../../../../../components/formFields/selectField";
import Text from "../../../../../components/Typography/Typography";

export default function BankInfo({ handleDispatchNextStep, handleDispatchPreviousStep }) {
  const bankInfoSchema = Yup.object().shape({
    bank: Yup.string().required("This field is Required"),
    accountNumber: Yup.string()
      .required("This field is Required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Account Number is not valid"
      ),
    accountName: Yup.string().required("Account Name is Required"),
  });

  return (
    <div className="w-full">
      <div className="w-full">
        <img
          onClick={() => handleDispatchPreviousStep()}
          src={arrowLeft}
          alt="arrow-left"
          className="w-[24px] h-[24px] cursor-pointer"
        />
      </div>
      <div className="flex flex-col mt-2">
        <Text weight="bold" variant="body" color="text-red">
          Step 4
        </Text>
        <Text weight="bold" variant="h4" color="text-red">
          Bank Information
        </Text>
      </div>
      <div className="flex flex-col gap-2 mt-6 w-[40%]">
        <Text weight="bold" variant="body" color="text-[#65666A]">
          Bank Information
        </Text>
        <Text weight="bold" variant="h4" color="text-[#65666A]">
          This information helps us personalise and secure your InvestNow account
        </Text>
      </div>
      <div className="bg-[#E1F0CB] p-[2%] w-[60%] mt-4">
        <Text color="text-[#65666A]" variant="h4" format="w-[70%]">
          The account provided here is where your withdrawal goes to
        </Text>
      </div>
      <div className="mt-6">
        <Formik
          initialValues={{
            bank: "",
            accountNumber: "",
            accountName: "",
          }}
          validationSchema={bankInfoSchema}
          enableReinitialize={true}
          onSubmit={async (values) => {
            console.log(values);
            handleDispatchNextStep();
          }}
        >
          {({ handleSubmit, handleChange, setFieldValue, isSubmitting, values, touched, errors }) => (
            <Form onSubmit={handleSubmit} className="w-full h-full">
              <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
                <div className="w-full">
                  <label htmlFor="bank" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                    Choose your Bank
                  </label>
                  <SearchableSelect
                    options={[{ label: "Zenith", value: "zenith" }]}
                    isLoading={false}
                    name="bank"
                    setFieldValue={setFieldValue}
                    value={values.bank}
                    placeholder="Select Bank"
                  />
                  {errors.bank && touched.bank ? (
                    <Text variant="small" weight="normal" color="text-red">
                      {errors.bank}
                    </Text>
                  ) : null}
                </div>
                <div className="w-full">
                  <MyInput
                    className="w-full"
                    placeholder="number"
                    label="Account Number"
                    name="accountNumber"
                    type="text"
                    handleChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-[50%] mt-4">
                <MyInput
                  className="w-full"
                  placeholder="name"
                  label="Account Name"
                  name="accountName"
                  type="text"
                  handleChange={handleChange}
                />
              </div>

              <div className="mt-10 w-full flex justify-center">
                <div className="w-[30%]">
                  <Button title="Next" className="cursor-pointer" type="submit" isLoading={isSubmitting} />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
