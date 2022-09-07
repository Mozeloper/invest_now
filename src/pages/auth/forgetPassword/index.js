import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Text from "../../../components/Typography/Typography";
import Button from "../../../components/Button";
import Input from "../../../components/formFields/inputs";
import { handleForgetPassword } from "../../../store/slices/authSlices";
import MessageModal from "../../../components/modals/MessageModal";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    reason: "",
    message: "",
  });

  const forgetPasswordHandler = async (email) => {
    await dispatch(handleForgetPassword(email))
      .unwrap()
      .then((res) => {
        if (res.status === 200 && res?.data?.success) {
          navigate("/forget_password/otp");
        }
      })
      .catch((error) => {
        setAlertMessage((prev) => ({
          ...prev,
          reason: "Failed...",
          message: error?.data?.message,
        }));
        setOpenModal(true);
      });
  };

  const forgetPasswordSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
  });
  return (
    <>
      <MessageModal isOpen={openModal} modalWidth="300px" modalHeight="auto">
        <div className="flex flex-col justify-center items-center w-full">
          <Text format="text-center mt-3 whitespace-nowrap" variant="h3" color="text-[#465174]" weight="bold">
            {alertMessage?.reason}
          </Text>
          <Text format="text-center mt-3" variant="h4" color="text-[#465174]" weight="bold">
            {alertMessage?.message}
          </Text>
          <div className="mt-4 w-full">
            <Button onClick={() => setOpenModal(false)} title="Close" className="cursor-pointer w-full" type="button" />
          </div>
        </div>
      </MessageModal>
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
          await forgetPasswordHandler(values?.email);
        }}
      >
        {({ handleSubmit, handleChange, isSubmitting, touched, errors }) => (
          <>
            <Form onSubmit={handleSubmit} className="w-[100%] md:w-[60%]">
              <div className="w-full mt-4">
                <label htmlFor="email" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Email Addrerss
                </label>
                <Input placeholder="Enter email address" type="text" name="email" handleChange={handleChange} />
                {errors.email && touched.email ? (
                  <Text variant="h4" weight="normal" color="text-red">
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
