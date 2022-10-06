/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Text from "../../../components/Typography/Typography";
import Button from "../../../components/Button";
import Input from "../../../components/formFields/inputs";
import MessageModal from "../../../components/modals/MessageModal";
import TermsOfService from "./components/termsOfService";
import { handleCustomerExist, handleSmileIdentity, resetInitialState } from "../../../store/slices/authSlices";
import axios from "axios";

export default function BvnVerify() {
  const [showMessageAlert, setShowMessageAlert] = useState(true);
  const [signature, setsignature] = useState("");
  const [openSmileModal, setOpenSmileModal] = useState(false);
  const [smileMessage, setSmileMessage] = useState({
    reason: "",
    message: "",
  });

  const [openStatusMessage, setOpenStatusMessage] = useState(false);
  const [statusMessage, setStatusMessage] = useState({
    reason: "",
    message: "",
  });

  const navigate = useNavigate();
  const authReducer = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const getSignature = async () => {
    const data = await axios.get("https://vision-islam.herokuapp.com/api/v1/misc/smile-signature");
    setsignature(data);
    // dispatch(resetInitialState());
  };

  useEffect(() => {
    getSignature();
    dispatch(resetInitialState());
  }, []);

  const bvnSchema = Yup.object().shape({
    bvn: Yup.string()
      .required("This field is Required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Bvn is not valid"
      ),
  });

  const handleRouting = (onBoardingStep) => {
    switch (onBoardingStep) {
      case "SIGNUP_COMPLETED":
        navigate("/login");
        break;
      case "NEW_CUSTOMER":
        navigate("/profile_update");
        break;
      case "CREATE_CUSTOMER":
        navigate("/otp_verification");
        break;
      case "CUSTOMER_VERIFIED":
        navigate("/create_password");
        break;
      default:
        break;
    }
  };

  const handleSubmitSmileIdentity = async (bvn, step) => {
    const data = {
      signature: signature?.data?.data?.signature,
      timestamp: signature?.data?.data?.ISO8601timestamp,
      partner_params: {
        user_id: signature?.data?.data?.userid,
        job_id: signature?.data?.data?.jobid,
        job_type: 5,
      },
      country: "NG",
      id_type: "BVN",
      id_number: bvn.toString(),
      first_name: "",
      last_name: "",
      dob: "",
      partner_id: signature?.data?.data?.partner_id,
    };

    await dispatch(handleSmileIdentity(data))
      .unwrap()
      .then((response) => {
        if (response?.ResultText === "Unable to validate ID - Not Found") {
          setSmileMessage((prev) => ({
            ...prev,
            reason: "Try Again",
            message: response?.ResultText,
          }));
          setOpenSmileModal(true);
          dispatch(resetInitialState());
        } else {
          handleRouting(step);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmitCustomerExist = async (data) => {
    await dispatch(handleCustomerExist(data?.bvn))
      .unwrap()
      .then((res) => {
        const step = res?.data?.data?.onboarding_step;
        if (res && res?.data?.success) {
          if (step === "NEW_CUSTOMER") {
            handleSubmitSmileIdentity(data?.bvn, step);
          } else if (step === "SIGNUP_COMPLETED") {
            setOpenStatusMessage(true);
            setStatusMessage((prev) => ({
              ...prev,
              reason: "User Aleady Exist",
              message: res?.data?.message,
            }));
          } else {
            handleRouting(res?.data?.data?.onboarding_step);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const displayMessageAlert = () => {
    if (!!showMessageAlert) {
      return (
        <MessageModal isOpen={showMessageAlert} minWidth="auto" modalWidth="886px" modalHeight="auto">
          <TermsOfService setShowMessageAlert={() => setShowMessageAlert(!showMessageAlert)} />
        </MessageModal>
      );
    }
  };

  return (
    <>
      {displayMessageAlert()}
      <MessageModal isOpen={openStatusMessage} modalWidth="300px" modalHeight="auto">
        <div className="flex flex-col justify-center items-center w-full">
          <Text format="text-center mt-3 whitespace-nowrap" variant="h2" color="text-[#465174]" weight="bold">
            {statusMessage?.reason}
          </Text>
          <Text format="text-center mt-3" variant="h3" color="text-[#465174]" weight="bold">
            {statusMessage?.message}
          </Text>
          <div className="mt-4 w-full">
            <Button onClick={() => navigate("/login")} title="Login" className="cursor-pointer w-full" type="button" />
          </div>
        </div>
      </MessageModal>
      <MessageModal isOpen={openSmileModal} modalWidth="300px" modalHeight="auto">
        <div className="flex flex-col justify-center items-center w-full">
          <Text format="text-center mt-3 whitespace-nowrap" variant="h2" color="text-[#465174]" weight="bold">
            {smileMessage?.reason}
          </Text>
          <Text format="text-center mt-3" variant="h3" color="text-[#465174]" weight="bold">
            {smileMessage?.message}
          </Text>
          <div className="mt-4 w-full">
            <Button
              onClick={() => setOpenSmileModal(false)}
              title="close"
              className="cursor-pointer w-full"
              type="button"
            />
          </div>
        </div>
      </MessageModal>
      <Formik
        initialValues={{
          bvn: "",
        }}
        validationSchema={bvnSchema}
        onSubmit={async (values) => {
          const data = {
            bvn: +values.bvn,
          };
          await handleSubmitCustomerExist(data);
        }}
      >
        {({ handleSubmit, handleChange, isSubmitting, values, touched, errors }) => (
          <div className="bg-BACKGROUND_WHITE rounded-xl md:w-[85%] w-full p-10 h-auto">
            <div className="mt-3 flex justify-center flex-col items-center">
              <Text weight="bold" color="text-[#65666A]" variant="h2">
                Sign Up
              </Text>
              <Text variant="h4">Sign up to create your InvestNow Account </Text>
            </div>
            <div className="mt-8">
              <Text color="text-[#10B165]" weight="bold" variant="h2">
                Hello
              </Text>
              <Text variant="h4">kindly provide your BVN for your account set up </Text>
            </div>
            <Form onSubmit={handleSubmit} className="mt-6 md:w-[60%] w-full">
              <div className="mt-4">
                <label htmlFor="bvn" className="font-normal text-lg text-NEUTRAL-_900 pb-2">
                  Bvn
                </label>
                <Input placeholder="Enter BVN" type="text" name="bvn" handleChange={handleChange} />
                {errors.bvn && touched.bvn ? (
                  <Text variant="small" weight="normal" color="text-red">
                    {errors.bvn}
                  </Text>
                ) : null}
              </div>
              {values.bvn.length === 11 && (
                <div className="mt-4">
                  <Button
                    title="Next"
                    className="cursor-pointer w-full"
                    type="submit"
                    isLoading={authReducer?.isLoading}
                  />
                </div>
              )}
            </Form>
          </div>
        )}
      </Formik>
      <div className="w-full mt-3 flex gap-2 justify-center">
        <Text weight="bold" color="text-[#65666A]" variant="h4">
          Already have an account?
        </Text>
        <Text
          onClick={() => {
            navigate("/login");
          }}
          format="cursor-pointer"
          weight="bold"
          variant="h4"
          color="text-[#E32526]"
        >
          Sign in here
        </Text>
      </div>
    </>
  );
}
