import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Text from "../../../components/Typography/Typography";
// import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/formFields/inputs";

export default function ForgetPassword() {
  // const navigate = useNavigate();

  const forgetPasswordSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
  });
  return (
    <>
      <div className="md:w-[50%] w-[100%]">
        <Text variant="h1" weight="bold" format="whitespace-nowrap">
          Forgot Password?
        </Text>
        <Text variant="h4" weight="normal">
          Enter your registered email address for you to receive an OTP to reset your account
        </Text>
      </div>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={forgetPasswordSchema}
        onSubmit={async (values) => {
          // navigate("/otp_verification");
          alert(values?.email);
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange, isSubmitting, touched, errors }) => (
          <>
            <Form onSubmit={handleSubmit} className="w-[100%] md:w-[60%]">
              <div className="w-full mt-4">
                <label htmlFor="email" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Email Addrerss
                </label>
                <Input placeholder="Enter email adress" type="text" name="email" handleChange={handleChange} />
                {errors.email && touched.email ? (
                  <Text variant="h4" weight="normal" color="text-red-700">
                    {errors.email}
                  </Text>
                ) : null}
              </div>
              <div className="mt-8">
                <Button title="Continue" className="cursor-pointer w-full" type="submit" isLoading={isSubmitting} />
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
