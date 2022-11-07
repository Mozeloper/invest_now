import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import closeBtn from "../../../../../../assets/icons/close_btn.svg";
import Button from "../../../../../../components/Button";
import Input from "../../../../../../components/formFields/inputs";
import Text from "../../../../../../components/Typography/Typography";

export default function UpdateEmail({ handleCloseModal }) {
  const updateBankSchema = Yup.object().shape({
    current_email: Yup.string().required("current email is required"),
    new_email: Yup.string().required("new email is Required"),
  });
  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseModal("update_email")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <Text weight="bold" color="text-[#65666A]" variant="h2">
        Update Email
      </Text>
      <Formik
        initialValues={{
          current_email: "",
          new_email: "",
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
                <Input
                  placeholder="Current Email address"
                  type="text"
                  name="current_email"
                  handleChange={handleChange}
                />
                {errors.current_email && touched.current_email ? (
                  <Text variant="body" weight="normal" color="text-red">
                    {errors.current_email}
                  </Text>
                ) : null}
              </div>
              <div className="w-full mt-4">
                <Input placeholder="New email addresss" type="text" name="new_email" handleChange={handleChange} />
                {errors.new_email && touched.new_email ? (
                  <Text variant="body" weight="normal" color="text-red">
                    {errors.new_email}
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
