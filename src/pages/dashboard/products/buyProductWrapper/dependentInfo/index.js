import React, { useEffect } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import Button from "../../../../../components/Button";
import MyInput from "../../../../../components/formFields/inputs/MyInput";
import SearchableSelect from "../../../../../components/formFields/selectField";
import Text from "../../../../../components/Typography/Typography";
import { useDispatch, useSelector } from "react-redux";
import { handleGetGender } from "../../../../../store/slices/authSlices";
import { getRelationShipStatus } from "../../../../../store/slices/openAccountSlice";

export default function DependentInfo() {
  const authReducer = useSelector((state) => state.authReducer);
  const genderType = authReducer?.gender;
  const genders = [];
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        dispatch(handleGetGender());
        dispatch(getRelationShipStatus());
      }
    })();
    return () => {
      mounted = false;
    };
  }, [dispatch]);

  if (genderType?.success && genderType?.message === "Retrieved successfully") {
    genderType?.data.map((list) => {
      return genders.push({
        label: list?.name,
        value: list?.code,
      });
    });
  }
  const dependentInfoSchema = Yup.object().shape({
    phone_number: Yup.string(),
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    middleName: Yup.string(),
    dateOfBirth: Yup.string(),
    bvn: Yup.string(),
    gender: Yup.string().required("Gender is Required"),
    email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
  });
  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="p-[2%]">
      <div className="flex flex-col gap-1 w-full">
        <Text color="text-black" weight="bold" variant="h3">
          Tell us a little about yourself
        </Text>
        <Text color="text-black" weight="normal" variant="h4" format="tracking-wide">
          This information helps us personalise and secure your InvestNow account
        </Text>
      </div>
      <div className="mt-8">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            middleName: "",
            phone_number: "",
            gender: "",
            email: "",
            dateOfBirth: "",
            bvn: "",
          }}
          validationSchema={dependentInfoSchema}
          enableReinitialize={true}
          onSubmit={async (values) => {
            console.log(values);
          }}
        >
          {({ handleSubmit, handleChange, setFieldValue, values, touched, errors }) => (
            <Form onSubmit={handleSubmit} className="w-full h-full">
              <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
                <div className="w-full">
                  <MyInput
                    className="w-full"
                    label="First Name"
                    name="firstName"
                    type="text"
                    handleChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <MyInput
                    className="w-full"
                    label="Middle name"
                    name="middleName"
                    type="text"
                    handleChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
                <div className="w-full">
                  <MyInput
                    className="w-full"
                    label="Last Name"
                    name="lastName"
                    type="text"
                    handleChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="gender" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                    Gender
                  </label>
                  <SearchableSelect
                    options={genders}
                    isLoading={authReducer?.isGenderLoading}
                    name="gender"
                    setFieldValue={setFieldValue}
                    value={values.gender}
                    placeholder="Select gender"
                  />
                  {errors.gender && touched.gender ? (
                    <Text variant="small" weight="normal" color="text-red">
                      {errors.gender}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
                <div className="w-full">
                  <MyInput
                    className="w-full"
                    placeholder="Enter Email Address"
                    label="Email Address"
                    name="email"
                    type="email"
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
                    onChange={(e) => setFieldValue("phone_number", e)}
                  />
                  {errors.phone_number && touched.phone_number ? (
                    <Text variant="small" weight="normal" color="text-red">
                      {errors.phone_number}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
                <div className="w-full">
                  <MyInput
                    className="w-full"
                    label="Date of birth"
                    name="dateOfBirth"
                    type="date"
                    handleChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <MyInput
                    className="w-full"
                    label="Bank Verification Number"
                    name="bvn"
                    type="text"
                    handleChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full flex gap-2 mt-8">
                <input className="accent-primary" type="checkbox" name="agreement" onChange={handleChange} />
                <Text variant="body">
                  By clicking on the I agree button, I hereby affirm that in line with the relevant Data Prottection
                  laws in Nigeria, I consent to the coleection and processing of my personal data and information
                </Text>
              </div>
              <div className="mt-6 w-full flex justify-center">
                <div className="w-[30%]">
                  <Button title="Submit" className="cursor-pointer" type="submit" isLoading={false} />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
