import React, { useState } from "react";
import { useDispatch } from "react-redux";
import closeBtn from "../../../../../assets/icons/close_btn.svg";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Password from "../../../../../components/formFields/password";
import Text from "../../../../../components/Typography/Typography";
import Button from "../../../../../components/Button";
import { handleResetPassword } from "../../../../../store/slices/settingsUpdateKycSlice";

export default function ResetPassword({ handleCloseItemRouting }) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordReset = async (data) => {
    await dispatch(handleResetPassword(data))
      .unwrap()
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          handleCloseItemRouting("change_password");
          setMessage("");
        }, 2000);
        setMessage(res?.data?.message);
      })
      .catch((error) => {
        console.log(error);
        setTimeout(() => {
          setErrorMessage("");
        }, 2000);
        setErrorMessage(error?.data?.message);
      });
  };

  const passwordSchema = Yup.object().shape({
    current_password: Yup.string()
      .min(8, "Too Short!")
      .max(50, "Too Long!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("Current Password is required"),
    new_password: Yup.string()
      .min(8, "Too Short!")
      .max(50, "Too Long!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("Password is required"),
    confirm_new_password: Yup.string()
      .oneOf([Yup.ref("new_password"), null], "Passwords must match")
      .required("Password confirm is required"),
  });
  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseItemRouting("change_password")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <Formik
        initialValues={{
          current_password: "",
          new_password: "",
          confirm_new_password: "",
        }}
        validationSchema={passwordSchema}
        onSubmit={async (values) => {
          await handlePasswordReset(values);
        }}
      >
        {({ handleSubmit, handleChange, isSubmitting, touched, errors }) => (
          <div className="w-[100%]">
            <div className="mt-3 flex items-center flex-col">
              <Text weight="bold" color="text-[#65666A]" variant="h2">
                Set new password
              </Text>
              <Text variant="h4">
                Create a password for your Investnow app. This code is for your eyes only and unique to only you
              </Text>
            </div>
            <Form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label htmlFor="current_password" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Current Password
                </label>
                <Password
                  placeholder="Current Password"
                  type="password"
                  name="current_password"
                  handleChange={handleChange}
                  className="w-full"
                />
              </div>
              {errors.current_password && touched.current_password ? (
                <Text variant="small" weight="normal" color="text-red">
                  {errors.current_password}
                </Text>
              ) : null}
              <div className="mt-4">
                <label htmlFor="new_password" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  New Password
                </label>
                <Password
                  placeholder="New Password"
                  type="password"
                  name="new_password"
                  handleChange={handleChange}
                  className="w-full"
                />
              </div>
              {errors.new_password && touched.new_password ? (
                <Text variant="small" weight="normal" color="text-red">
                  {errors.new_password}
                </Text>
              ) : null}
              <div className="mt-4">
                <label htmlFor="confirm_new_password" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Repeat Password
                </label>
                <Password
                  placeholder="*Confirm New Password"
                  type="password"
                  name="confirm_new_password"
                  handleChange={handleChange}
                  className="w-full"
                />
                {errors.confirm_new_password && touched.confirm_new_password ? (
                  <Text variant="small" weight="normal" color="text-red">
                    {errors.confirm_new_password}
                  </Text>
                ) : null}
              </div>
              <div className="mt-8">
                <Button isLoading={isSubmitting} title="Continue" className="cursor-pointer w-full" type="submit" />
              </div>
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
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}
