/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Password from "../../../components/formFields/password";
import Text from "../../../components/Typography/Typography";
import Correct from "../../../assets/icons/correct.svg";
import password_initial from "../../../assets/icons/password_initial.svg";
import password_correct from "../../../assets/icons/password_correct.svg";
import Button from "../../../components/Button";
import "react-phone-input-2/lib/style.css";
import MessageModal from "../../../components/modals/MessageModal";
import { useSelector, useDispatch } from "react-redux";
import { handlePasswordCreation } from "../../../store/slices/authSlices";

function checkUppercase(str) {
  for (var i = 0; i < str?.length; i++) {
    if (str?.charAt(i) == str?.charAt(i)?.toUpperCase() && str?.charAt(i)?.match(/[a-z]/i)) {
      return true;
    }
  }
  return false;
}

function containsNumber(str) {
  return /\d/.test(str);
}

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
  const [passwordCharacterCheck, setPasswordCharacterCheck] = useState({
    password_length: false,
    contains_uppercase: false,
    contains_number: false,
    unique_character: false,
    confirm_password_match: false,
  });

  const handlePasswordUserCreation = async (data) => {
    const values = {
      bvn: authReducer?.user?.data?.bvn,
      password: { password: data.password },
    };
    await dispatch(handlePasswordCreation(values))
      .unwrap()
      .then((res) => {
        if (res?.data?.success) {
          setOpenModal(true);
        }
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
      .required("Password is required")
      .test("password", null, function (password) {
        if (password?.trim() !== "") {
          if (password?.length >= 8) {
            setPasswordCharacterCheck((prev) => ({
              ...prev,
              password_length: true,
            }));
          } else {
            setPasswordCharacterCheck((prev) => ({
              ...prev,
              password_length: false,
            }));
          }
          if (checkUppercase(password)) {
            setPasswordCharacterCheck((prev) => ({
              ...prev,
              contains_uppercase: true,
            }));
          } else {
            setPasswordCharacterCheck((prev) => ({
              ...prev,
              contains_uppercase: false,
            }));
          }
          if (containsNumber(password)) {
            setPasswordCharacterCheck((prev) => ({
              ...prev,
              contains_number: true,
            }));
          } else {
            setPasswordCharacterCheck((prev) => ({
              ...prev,
              contains_number: false,
            }));
          }
          if (password?.match(/\W/)) {
            setPasswordCharacterCheck((prev) => ({
              ...prev,
              unique_character: true,
            }));
          } else {
            setPasswordCharacterCheck((prev) => ({
              ...prev,
              unique_character: false,
            }));
          }
        }
      }),
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
                <Text variant="small" weight="normal" color="text-red">
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
                  <Text variant="small" weight="normal" color="text-red">
                    {errors.confirm_password}
                  </Text>
                ) : null}
              </div>
              <div className="mt-4">
                <ul className="flex flex-col gap-1">
                  <li className="flex gap-2">
                    {passwordCharacterCheck?.password_length ? (
                      <img src={password_correct} alt="password_correct" loading="lazy" />
                    ) : (
                      <img src={password_initial} alt="password_initial" loading="lazy" />
                    )}
                    Minimum of 8 characters
                  </li>
                  <li className="flex gap-2">
                    {passwordCharacterCheck?.contains_uppercase ? (
                      <img src={password_correct} alt="password_correct" />
                    ) : (
                      <img src={password_initial} alt="password_initial" />
                    )}
                    One UPPERCASE character
                  </li>
                  <li className="flex gap-2">
                    {passwordCharacterCheck?.contains_number ? (
                      <img src={password_correct} alt="password_correct" />
                    ) : (
                      <img src={password_initial} alt="password_initial" />
                    )}
                    One number
                  </li>
                  <li className="flex gap-2">
                    {passwordCharacterCheck?.unique_character ? (
                      <img src={password_correct} alt="password_correct" />
                    ) : (
                      <img src={password_initial} alt="password_initial" />
                    )}
                    {`One unique character (e.g !@#$%&*)?>`}
                  </li>
                </ul>
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
