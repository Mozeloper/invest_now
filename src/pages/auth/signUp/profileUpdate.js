/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Text from "../../../components/Typography/Typography";
import Button from "../../../components/Button";
import Input from "../../../components/formFields/inputs";
import MyInput from "../../../components/formFields/inputs/MyInput";
import SearchableSelect from "../../../components/formFields/selectField";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  handleCreateCustomer,
  resetState,
  handleGetAllState,
  handleGetCountry,
  handleGetGender,
} from "../../../store/slices/authSlices";
import MessageModal from "../../../components/modals/MessageModal";

export default function ProfileUpdate() {
  const navigate = useNavigate();
  let [allCountry, setallCountry] = useState([]);
  let [allState, setallState] = useState([]);
  const [openStatusMessage, setOpenStatusMessage] = useState(false);
  const [statusMessage, setStatusMessage] = useState({
    reason: "",
    message: "",
  });
  const dispatch = useDispatch();
  const authReducer = useSelector((state) => state.authReducer);

  const handleSubmitCreateCustomer = async (values) => {
    const data = {
      bvn: authReducer?.user?.data?.bvn,
      first_name: values?.first_name,
      last_name: values?.last_name,
      email: values?.email,
      phone_number: values?.phone_number,
      date_of_birth: values?.date_of_birth,
      gender_type: values?.gender_type,
      referral_code: values?.referral_code,
      residential_address: values?.residential_address,
      country_code: values?.country_code,
      state_id: values?.state_id,
    };
    await dispatch(handleCreateCustomer(data))
      .unwrap()
      .then((res) => {
        if (res?.data?.success && res?.data?.data?.onboarding_step === "CREATE_CUSTOMER") {
          navigate("/otp_verification", { state: values });
        }
      })
      .catch((error) => {
        if (error?.status === 400 && error?.data?.message === "customer already exists.") {
          setOpenStatusMessage(true);
          setStatusMessage((prev) => ({
            ...prev,
            reason: "User Aleady Exist",
            message: error?.data?.message,
          }));
        }
      });
  };

  const handleGetStateList = async (id) => {
    dispatch(resetState());
    await dispatch(handleGetAllState(id))
      .unwrap()
      .then((res) => {
        const stateData = [];
        if (res) {
          res?.data?.data.map((list) => {
            return stateData.push({
              label: list.name,
              value: list.code,
            });
          });
        }
        setallState((prev) => [...stateData]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGetGenderCountry = async () => {
    await dispatch(handleGetGender());
    await dispatch(handleGetCountry())
      .unwrap()
      .then((response) => {
        const countryData = [];
        if (response) {
          response?.data?.data.map((list) => {
            return countryData.push({
              label: list.name,
              value: list.code,
            });
          });
        }
        setallCountry((prev) => [...countryData]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleGetGenderCountry();
  }, []);

  const genderType = [
    { label: authReducer?.gender?.data[0].name, value: authReducer?.gender?.data[0].code },
    { label: authReducer?.gender?.data[1].name, value: authReducer?.gender?.data[1].code },
  ];

  const profileSchema = Yup.object().shape({
    // first_name: Yup.string().required("First Name is Required"),
    // last_name: Yup.string().required("Last Name is Required"),
    email: Yup.string().required("Email is Required"),
    // phone_number: Yup.string().required("Phone Number is Required"),
    // date_of_birth: Yup.string().required("Date of Birth is Required"),
    gender_type: Yup.string().required("Gender is Required"),
    country_code: Yup.string().required("Country is Required"),
    state_id: Yup.string().required("State is Required"),
    // residential_address: Yup.string().required("Residential Address is Required"),
    // referral_code: Yup.string(),
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
            <Button onClick={() => navigate("/login")} title="Login" className="cursor-pointer w-full" type="button" />
          </div>
        </div>
      </MessageModal>
      <Formik
        initialValues={{
          first_name: authReducer?.smileDetails?.FullData?.FirstName,
          last_name: authReducer?.smileDetails?.FullData?.LastName,
          email: authReducer?.smileDetails?.FullData?.email,
          phone_number: authReducer?.smileDetails?.FullData?.PhoneNumber1,
          date_of_birth: authReducer?.smileDetails?.DOB,
          gender_type: authReducer?.smileDetails?.FullData?.Gender,
          country_code: authReducer?.smileDetails?.FullData?.nationality,
          state_id: authReducer?.smileDetails?.FullData?.stateOfOrigin,
          residential_address: authReducer?.smileDetails?.FullData?.residentialAddress,
          referral_code: "",
        }}
        validationSchema={profileSchema}
        enableReinitialize={true}
        onSubmit={async (values) => {
          await handleSubmitCreateCustomer(values);
        }}
      >
        {({ handleSubmit, handleChange, setFieldValue, isSubmitting, values, touched, errors }) => (
          <Form onSubmit={handleSubmit} className="w-full rounded-xl h-auto bg-BACKGROUND_WHITE md:p-10 p-4 mb-10">
            <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
              <div className="w-full">
                <MyInput
                  className="w-full"
                  disabled
                  placeholder="*First Name"
                  label="First Name"
                  name="first_name"
                  type="text"
                  readOnly
                  handleChange={handleChange}
                />
              </div>
              <div className="w-full">
                <MyInput
                  className="w-full"
                  disabled
                  placeholder="*Last name"
                  label="Last name"
                  name="last_name"
                  type="text"
                  readOnly
                  handleChange={handleChange}
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
              <div className="w-full">
                <MyInput
                  className="w-full"
                  placeholder="*Email"
                  label="Email"
                  name="email"
                  type="text"
                  readOnly
                  handleChange={handleChange}
                />
              </div>
              <div className="w-full">
                <label htmlFor="phone_number" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Phone Number
                </label>
                <PhoneInput
                  inputProps={{
                    name: "phone_number",
                    required: true,
                    autoFocus: true,
                  }}
                  inputStyle={{
                    width: "100%",
                    height: 56,
                    backgroundColor: "#F2F2F2",
                  }}
                  country={"ng"}
                  value={values.phone_number}
                  onChange={handleChange}
                  disabled
                />
                {errors.phone_number && touched.phone_number ? (
                  <Text variant="h4" weight="normal" color="text-red-700">
                    {errors.phone_number}
                  </Text>
                ) : null}
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
              <div className="w-full">
                <MyInput
                  className="w-full"
                  placeholder="*Date Of birth"
                  label="Date Of birth"
                  name="date_of_birth"
                  type="date"
                  readOnly
                  disabled
                  handleChange={handleChange}
                />
              </div>
              <div className="w-full">
                <label htmlFor="gender_type" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Gender type
                </label>
                <SearchableSelect
                  options={genderType}
                  name="gender_type"
                  isLoading={authReducer?.isLoading}
                  setFieldValue={setFieldValue}
                  placeholder="Select gender"
                  defaultValue={values.gender_type}
                />
                {errors.gender_type && touched.gender_type ? (
                  <Text variant="small" weight="normal" color="text-red-700">
                    {errors.gender_type}
                  </Text>
                ) : null}
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
              <div className="w-full">
                <label htmlFor="country_code" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Country
                </label>
                <SearchableSelect
                  options={allCountry}
                  isLoading={authReducer?.isLoading}
                  name="country_code"
                  setFieldValue={setFieldValue}
                  value={values.country_code}
                  placeholder="Select Country"
                  extraFunction={handleGetStateList}
                />
                {errors.country_code && touched.country_code ? (
                  <Text variant="small" weight="normal" color="text-red-700">
                    {errors.country_code}
                  </Text>
                ) : null}
              </div>
              <div className="w-full">
                <label htmlFor="state_id" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  State
                </label>
                <SearchableSelect
                  options={allState}
                  isLoading={authReducer?.isLoading}
                  name="state_id"
                  setFieldValue={setFieldValue}
                  value={values.state_id}
                  placeholder="Select State"
                />
                {errors.state_id && touched.state_id ? (
                  <Text variant="small" weight="normal" color="text-red-700">
                    {errors.state_id}
                  </Text>
                ) : null}
              </div>
            </div>
            <div className="mt-4 w-full">
              <MyInput
                className="w-full"
                disabled
                placeholder="*Residential Address"
                label="Residential Address"
                name="residential_address"
                type="text"
                readOnly
                handleChange={handleChange}
              />
            </div>
            <div className="mt-4 w-full">
              <label htmlFor="referral_code" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                Do you have a referral code? Please input below
              </label>
              <Input placeholder="code" type="text" name="referral_code" handleChange={handleChange} />
              {errors.referral_code && touched.referral_code ? (
                <Text variant="h4" weight="normal" color="text-red-700">
                  {errors.referral_code}
                </Text>
              ) : null}
            </div>
            <div className="mt-8">
              <Button title="Next" className="cursor-pointer w-full" type="submit" isLoading={isSubmitting} />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
