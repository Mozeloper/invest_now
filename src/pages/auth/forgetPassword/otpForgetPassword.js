/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Text from "../../../components/Typography/Typography";
import Button from "../../../components/Button";
import OtpInput from "react-otp-input";
import "react-phone-input-2/lib/style.css";
import MessageModal from "../../../components/modals/MessageModal";
import { handleForgetPasswordOtp, handleResetVerificationCode } from "../../../store/slices/authSlices";

export default function OtpForgetPassword() {
  const [counter, setCounter] = useState(60);
  const [openModal, setOpenModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    reason: "",
    message: "",
  });
  const [openStatusMessage, setOpenStatusMessage] = useState(false);
  const [statusMessage, setStatusMessage] = useState({
    reason: "",
    message: "",
  });
  const [isTimeOver, setIsTimeOver] = useState(false);
  const forgetPasswordState = useSelector((state) => state.authReducer.forgetPasswordState);
  const authReducer = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkTime = () => {
    if (counter === 0) {
      setIsTimeOver(true);
    }
  };

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    checkTime();
  }, [counter]);

  const handleResetVerificationOtpCode = async () => {
    const bvn = forgetPasswordState?.data?.data?.bvn;
    await dispatch(handleResetVerificationCode(bvn))
      .unwrap()
      .then((res) => {
        if (res?.data?.success) {
          setOpenStatusMessage(true);
          setStatusMessage((prev) => ({
            ...prev,
            reason: "OTP SENT",
            message: res?.data?.message,
          }));
        }
      })
      .catch((err) => {
        setOpenStatusMessage(true);
        setStatusMessage((prev) => ({
          ...prev,
          reason: "OTP NOT SENT",
          message: err?.data?.message,
        }));
      });
  };

  const forgetPasswordOtpHandler = async (otp, resetForm) => {
    const data = {
      email: forgetPasswordState.data.data.email,
      otp: {
        code: otp,
      },
    };
    await dispatch(handleForgetPasswordOtp(data))
      .unwrap()
      .then((res) => {
        if (res.status === 200 && res?.data?.success) {
          resetForm();
          navigate("/forget_password/change_password");
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

  const otpSchema = Yup.object().shape({
    otp: Yup.string().required("OTP is Required"),
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
      <Formik
        initialValues={{
          otp: "",
        }}
        validationSchema={otpSchema}
        onSubmit={async (values, { resetForm }) => {
          await forgetPasswordOtpHandler(values?.otp, resetForm);
        }}
      >
        {({ handleSubmit, setFieldValue, isSubmitting, values, touched, errors }) => (
          <Form onSubmit={handleSubmit} className="rounded-xl md:p-10 p-4 w-full h-auto flex flex-col md:w-[80%] mt-6">
            <div className="mt-3 text-start flex justify-start flex-col items-start">
              <Text weight="bold" color="text-[#65666A]" variant="h2">
                Verification code
              </Text>
              <Text variant="h4">Please enter the code sent to your emails to validate your account</Text>
            </div>
            <OtpInput
              containerStyle="flex justify-between"
              value={values.otp}
              name="otp"
              onChange={(e) => setFieldValue("otp", e)}
              numInputs={5}
              focusStyle={false}
              isInputNum={false}
              className="bg-[#E6EAEE] my-4 p-3"
            />
            {errors.otp && touched.otp ? (
              <Text variant="small" weight="normal" color="text-red">
                {errors.otp}
              </Text>
            ) : null}
            {!isTimeOver && (
              <Text format="mt-4" variant="h4">
                <p>If you didnt receive the code, resend code in {counter}secs </p>
              </Text>
            )}
            {isTimeOver && !!!values?.otp.length >= 1 && (
              <div className="items-start w-[50%] mt-4">
                <Button
                  title={`${authReducer?.isLoading ? "Loading..." : "Resend Otp"}`}
                  disabled={authReducer?.isLoading}
                  textColor="#E32526"
                  backgroundColor="none"
                  className="cursor-pointer w-full whitespace-nowrap"
                  type="button"
                  isLoading={isSubmitting}
                  style={{ borderRadius: "20px", border: "3px solid #E32526" }}
                  onClick={() => {
                    handleResetVerificationOtpCode();
                  }}
                />
              </div>
            )}
            {values?.otp.length === 5 && (
              <div className="mt-8">
                <Button title="Continue" className="cursor-pointer w-full" type="submit" isLoading={isSubmitting} />
              </div>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}
