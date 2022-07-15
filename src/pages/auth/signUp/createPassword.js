import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Password from "../../../components/formFields/password";
import Text from "../../../components/Typography/Typography";
import Correct from "../../../assets/icons/correct.svg";
import Button from "../../../components/Button";
import "react-phone-input-2/lib/style.css";
import MessageModal from "../../../components/modals/MessageModal";
import { useSelector, useDispatch } from "react-redux";
import { handlePasswordCreation } from "../../../store/slices/authSlices";

export default function CreatePassword() {
  const [openModal, setOpenModal] = useState(false);
  const [openStatusMessage, setOpenStatusMessage] = useState(false);
  const [statusMessage, setStatusMessage] = useState({
    reason: "",
    message: "",
  });
  const authReducer = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePasswordUserCreation = async (data) => {
    const values = {
      bvn: authReducer?.user?.data?.bvn,
      password: { password: data.password },
    };
    await dispatch(handlePasswordCreation(values))
      .unwrap()
      .then((res) => {
        setOpenModal(true);
        localStorage.setItem("access_token", res?.data?.data?.user?.access_token);
      })
      .catch((error) => {
        if (!error?.data?.success) {
          setOpenStatusMessage(true);
          setStatusMessage((prev) => ({
            ...prev,
            reason: "Failed",
            message: error?.data?.message,
          }));
        }
      });
  };

  const passwordSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "Too Short!")
      .max(50, "Too Long!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("Password is required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password confirm is required"),
  });

  return (
    <>
      <MessageModal isOpen={openStatusMessage} modalWidth="300px" modalHeight="auto">
        <div className="flex flex-col justify-center items-center w-full">
          <Text format="text-center mt-3 whitespace-nowrap" variant="h2" color="text-[#465174]" weight="bold">
            {statusMessage?.reason}
          </Text>
          <Text format="text-center mt-3" variant="h3" color="text-[#465174]" weight="bold">
            {statusMessage?.message}
          </Text>
          <div className="mt-4 w-full">
            <Button
              onClick={() => setOpenStatusMessage(false)}
              title="close"
              className="cursor-pointer w-full"
              type="button"
            />
          </div>
        </div>
      </MessageModal>
      <Formik
        initialValues={{
          password: "",
          confirm_password: "",
        }}
        validationSchema={passwordSchema}
        onSubmit={async (values) => {
          const data = {
            password: values.password,
          };
          handlePasswordUserCreation(data);
        }}
      >
        {({ handleSubmit, handleChange, isSubmitting, values, touched, errors }) => (
          <div className="bg-BACKGROUND_WHITE rounded-xl h-auto md:p-10 p-4 w-[100%] md:w-[80%]">
            <div className="mt-3 flex justify-start flex-col">
              <Text weight="bold" color="text-[#65666A]" variant="h2">
                Set up your password
              </Text>
              <Text variant="h4">
                Create a password for your Investnow app. This code is for your eyes only and unique to only you
              </Text>
            </div>
            <Form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label htmlFor="password" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  New Password
                </label>
                <Password
                  placeholder="New Password"
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
              <div className="mt-4">
                <label htmlFor="confirm_password" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Repeat Password
                </label>
                <Password
                  placeholder="*Confirm New Password"
                  type="password"
                  name="confirm_password"
                  handleChange={handleChange}
                  className="w-full"
                />
                {errors.confirm_password && touched.confirm_password ? (
                  <Text variant="h4" weight="normal" color="text-red-700">
                    {errors.confirm_password}
                  </Text>
                ) : null}
              </div>
              <div className="mt-8">
                <Button
                  isLoading={authReducer?.isLoading}
                  title="Next"
                  className="cursor-pointer w-full"
                  type="submit"
                />
              </div>
            </Form>
          </div>
        )}
      </Formik>
      <MessageModal isOpen={openModal} modalWidth="400px" modalHeight="300px">
        <div className="flex flex-col justify-center items-center w-full">
          <img src={Correct} alt="check-img" />
          <Text format="text-center mt-3" variant="h3" color="text-[#465174]" weight="bold">
            Sign up successful
          </Text>
          <Text format="text-center mt-3" variant="body" color="text-[#465174]" weight="bold">
            Your profile has been created, click “next” to open account and start investing.
          </Text>
          <div className="mt-2 w-full">
            <Button
              onClick={() => navigate("/dashboard")}
              title="Login"
              className="cursor-pointer w-full"
              type="button"
            />
          </div>
        </div>
      </MessageModal>
    </>
  );
}
