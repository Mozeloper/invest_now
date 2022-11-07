import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import closeBtn from "../../../../../../assets/icons/close_btn.svg";
import Button from "../../../../../../components/Button";
import Input from "../../../../../../components/formFields/inputs";
import Text from "../../../../../../components/Typography/Typography";
import SearchableSelect from "../../../../../../components/formFields/selectField";

export default function UpdateBank({ handleCloseModal }) {
  const updateBankSchema = Yup.object().shape({
    bankName: Yup.string().required("Bank Name is required"),
    accountName: Yup.string().required("Account Name is Required"),
    accountNumber: Yup.string().required("Account Number is required"),
  });
  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseModal("update_bank")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <Text weight="bold" color="text-[#65666A]" variant="h2">
        Update bank Account
      </Text>
      <Formik
        initialValues={{
          bankName: "",
          accountNumber: "",
          accountName: "",
        }}
        validationSchema={updateBankSchema}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange, setFieldValue, isSubmitting, touched, errors }) => (
          <>
            <Form onSubmit={handleSubmit} className="w-[100%]">
              <div className="w-full mt-4">
                <SearchableSelect
                  options={[]}
                  name="bankName"
                  isLoading={false}
                  setFieldValue={setFieldValue}
                  placeholder="Select bank"
                  // defaultInputValue={values.bankName}
                />
                {errors.bankName && touched.bankName ? (
                  <Text variant="body" weight="normal" color="text-red">
                    {errors.bankName}
                  </Text>
                ) : null}
              </div>

              <div className="w-full mt-4">
                <Input placeholder="Account Number" type="text" name="accountNumber" handleChange={handleChange} />
                {errors.accountNumber && touched.accountNumber ? (
                  <Text variant="body" weight="normal" color="text-red">
                    {errors.accountNumber}
                  </Text>
                ) : null}
              </div>
              <div className="w-full mt-4">
                <Input placeholder="Account Name" type="text" name="accountName" handleChange={handleChange} />
                {errors.accountName && touched.accountName ? (
                  <Text variant="body" weight="normal" color="text-red">
                    {errors.accountName}
                  </Text>
                ) : null}
              </div>
              <div className="flex justify-start mt-8 lg:w-[50%] w-full">
                <Button title="Update" className="cursor-pointer w-full" type="submit" isLoading={isSubmitting} />
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
