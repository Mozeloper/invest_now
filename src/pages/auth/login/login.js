/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Text from "../../../components/Typography/Typography";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Password from "../../../components/formFields/password";
import Input from "../../../components/formFields/inputs";
import { handleLogin } from "../../../store/slices/authSlices";
import MessageModal from "../../../components/modals/MessageModal";

export default function Login() {
  const [openModal, setOpenModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    reason: "",
    message: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmitLogin = async (values) => {
    await dispatch(handleLogin(values))
      .unwrap()
      .then((res) => {
        const userData = res?.data;
        if (userData?.success && userData?.message === "User login was successful.") {
          localStorage.setItem("access_token", res?.data?.data?.user?.access_token);
          navigate("/dashboard");
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

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
    password: Yup.string().min(8, "Too Short!").max(50, "Too Long!").required("Password is required"),
  });

  return (
    <>
      <MessageModal isOpen={openModal} modalWidth="300px" modalHeight="auto">
        <div className="flex flex-col justify-center items-center w-full">
          <Text format="text-center mt-3 whitespace-nowrap" variant="h3" color="text-[#465174]" weight="bold">
            {alertMessage?.reason}
          </Text>
          <Text format="text-center mt-3" variant="body" color="text-[#465174]" weight="bold">
            {alertMessage?.message}
          </Text>
          <div className="mt-4 w-full">
            <Button onClick={() => setOpenModal(false)} title="Close" className="cursor-pointer w-full" type="button" />
          </div>
        </div>
      </MessageModal>
      <Text variant="h1" weight="bold">
        Welcome Back
      </Text>
      <Text variant="h4" weight="normal">
        Provide your login details to access your account.
      </Text>
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          const data = {
            username: values?.email,
            password: values.password,
          };
          await handleSubmitLogin(data);
        }}
      >
        {({ handleSubmit, handleChange, isSubmitting, touched, errors }) => (
          <>
            <Form onSubmit={handleSubmit} className="w-[100%] lg:w-[60%]">
              <div className="w-full mt-4">
                <label htmlFor="email" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Email
                </label>
                <Input
                  placeholder="Enter email adress or Customer ID"
                  type="text"
                  name="email"
                  handleChange={handleChange}
                />
                {errors.email && touched.email ? (
                  <Text variant="h4" weight="normal" color="text-red-700">
                    {errors.email}
                  </Text>
                ) : null}
              </div>
              <div className="mt-4">
                <label htmlFor="password" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Password
                </label>
                <Password
                  placeholder="Password"
                  type="password"
                  name="password"
                  handleChange={handleChange}
                  className="w-full"
                />
              </div>
              {errors.password && touched.password ? (
                <Text variant="body" weight="normal" color="text-red-700">
                  {errors.password}
                </Text>
              ) : null}
              <div className="mt-8">
                <Button title="Login" className="cursor-pointer w-full" type="submit" isLoading={isSubmitting} />
              </div>
              <Text onClick={() => navigate("/forget_password")} variant="h4" format="mt-4 text-center cursor-pointer">
                Forgot password?
              </Text>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
