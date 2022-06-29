/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Text from "../../../components/Typography/Typography";
import Button from "../../../components/Button";
import OtpInput from "react-otp-input";
import "react-phone-input-2/lib/style.css";
import {
  handleValidateOtpCode,
  handleGetVerificationCode,
  handleResetVerificationCode,
} from "../../../store/slices/authSlices";
import MessageModal from "../../../components/modals/MessageModal";

export default function OTPverify() {
  const [counter, setCounter] = useState(60);
  const [openStatusMessage, setOpenStatusMessage] = useState(false);
  const [statusMessage, setStatusMessage] = useState({
    reason: "",
    message: "",
  });
  const [isTimeOver, setIsTimeOver] = useState(false);
  const dispatch = useDispatch();
  const state = useLocation();
  const authReducer = useSelector((state) => state.authReducer);

  const handleValidateCode = async (values) => {
    const data = {
      bvn: authReducer?.user?.data?.bvn,
      code: { code: values.otp },
    };
    console.log(data);
    await dispatch(handleValidateOtpCode(data))
      .unwrap()
      .then((res) => {
        console.log(res);
        // route user to create password page
        navigate("/create_password", { state: state?.state?.email });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleVerificationOtp = async () => {
    const email = state?.state?.email;
    await dispatch(handleGetVerificationCode(email))
      .unwrap()
      .then((res) => {})
      .catch((err) => {
        console.log(err);
        setOpenStatusMessage(true);
        setStatusMessage((prev) => ({
          ...prev,
          reason: "OTP NOT SENT",
          message: err?.data?.message,
        }));
      });
  };

  const handleResetVerificationOtpCode = async () => {
    const bvn = authReducer?.user?.data?.bvn;
    await dispatch(handleResetVerificationCode(bvn))
      .unwrap()
      .then((res) => {})
      .catch((err) => {
        setOpenStatusMessage(true);
        setStatusMessage((prev) => ({
          ...prev,
          reason: "OTP NOT SENT",
          message: err?.data?.message,
        }));
      });
  };

  const checkTime = () => {
    if (counter === 0) {
      setIsTimeOver(true);
    }
  };

  useEffect(() => {
    if (state?.state !== null && state?.state !== undefined) {
      handleVerificationOtp();
    } else {
      handleResetVerificationOtpCode();
    }
  }, []);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    checkTime();
  }, [counter]);

  const navigate = useNavigate();

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
      <Formik
        initialValues={{
          otp: "",
        }}
        validationSchema={otpSchema}
        onSubmit={async (values) => {
          await handleValidateCode(values);
        }}
      >
        {({ handleSubmit, handleChange, setFieldValue, isSubmitting, values, touched, errors }) => (
          <Form onSubmit={handleSubmit} className="w-[80%] md:w-[60%] mt-6">
            <OtpInput
              containerStyle="flex justify-between"
              value={values.otp}
              name="otp"
              onChange={(e) => setFieldValue("otp", e)}
              numInputs={5}
              focusStyle={false}
              isInputNum={false}
              className="bg-BACKGROUND_WHITE mb-4 p-3"
            />
            {errors.otp && touched.otp ? (
              <Text variant="h4" weight="normal" color="text-red-700">
                {errors.otp}
              </Text>
            ) : null}
            {!isTimeOver && (
              <Text format="mt-4" variant="h4">
                <p>If you didnt receive the code, resend code in {counter}secs </p>
              </Text>
            )}
            {isTimeOver && (
              <div className="flex w-[30%]  mt-8">
                <Button
                  title="Resend Otp"
                  textColor="#E32526"
                  backgroundColor="none"
                  className="cursor-pointer w-full"
                  type="button"
                  isLoading={isSubmitting}
                  style={{ borderRadius: "20px", border: "3px solid #E32526" }}
                  onClick={() => handleResetVerificationOtpCode()}
                />
              </div>
            )}
            {values?.otp.length === 5 && (
              <div className="mt-8">
                <Button title="Submit" className="cursor-pointer w-full" type="submit" isLoading={isSubmitting} />
              </div>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}
