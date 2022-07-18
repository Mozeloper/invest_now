import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import arrowLeft from "../../../../../assets/icons/arrow-left.svg";
import Button from "../../../../../components/Button";
import MyInput from "../../../../../components/formFields/inputs/MyInput";
import SearchableSelect from "../../../../../components/formFields/selectField";
import Text from "../../../../../components/Typography/Typography";

export default function NextOfKin({ handleDispatchNextStep, handleDispatchPreviousStep }) {
  const nextOfKinSchema = Yup.object().shape({
    phone_number: Yup.string(),
    fullName: Yup.string().required("Full Name is Required"),
    gender: Yup.string().required("Gender is Required"),
    email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
    relationship: Yup.string().required("Relationship is Required"),
    address: Yup.string().required("Address is Required"),
  });

  return (
    <div className="w-full">
      <div className="w-full">
        <img
          onClick={() => handleDispatchPreviousStep()}
          src={arrowLeft}
          alt="arrow-left"
          className="w-[24px] h-[24px] cursor-pointer"
        />
      </div>
      <div className="flex flex-col mt-2">
        <Text weight="bold" variant="body" color="text-red">
          Step 5
        </Text>
        <Text weight="bold" variant="h4" color="text-red">
          Next Of Kin
        </Text>
      </div>
      <div className="flex flex-col gap-2 mt-6 w-[40%]">
        <Text weight="bold" variant="h2" color="text-[#65666A]">
          Next Of Kin
        </Text>
        <Text weight="bold" variant="h4" color="text-[#65666A]">
          This information helps us personalise and secure your InvestNow account
        </Text>
      </div>
      <div className="mt-8">
        <Formik
          initialValues={{
            fullName: "",
            relationship: "",
            phone_number: "",
            gender: "",
            email: "",
            address: "",
          }}
          validationSchema={nextOfKinSchema}
          enableReinitialize={true}
          onSubmit={async (values) => {
            console.log(values);
            handleDispatchNextStep("last_step");
          }}
        >
          {({ handleSubmit, handleChange, setFieldValue, isSubmitting, values, touched, errors }) => (
            <Form onSubmit={handleSubmit} className="w-full h-full">
              <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
                <div className="w-full">
                  <MyInput
                    className="w-full"
                    placeholder="Enter Name"
                    label="Full Name"
                    name="fullName"
                    type="text"
                    handleChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="relationship" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                    Relationship
                  </label>
                  <SearchableSelect
                    options={[{ label: "Sister", value: "sister" }]}
                    isLoading={false}
                    name="relationship"
                    setFieldValue={setFieldValue}
                    value={values.relationship}
                    placeholder="Select relationship"
                  />
                  {errors.relationship && touched.relationship ? (
                    <Text variant="small" weight="normal" color="text-red">
                      {errors.relationship}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
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
                    // disabled
                  />
                  {errors.phone_number && touched.phone_number ? (
                    <Text variant="small" weight="normal" color="text-red">
                      {errors.phone_number}
                    </Text>
                  ) : null}
                </div>
                <div className="w-full">
                  <label htmlFor="gender" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                    Gender
                  </label>
                  <SearchableSelect
                    options={[{ label: "Sister", value: "sister" }]}
                    isLoading={false}
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
              <div className="w-[50%] mt-4">
                <MyInput
                  className="w-full"
                  placeholder="Enter Email Address"
                  label="Email Address"
                  name="email"
                  type="email"
                  handleChange={handleChange}
                />
              </div>
              <div className="flex flex-col w-full mt-4">
                <label htmlFor="address" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Address
                </label>
                <Field className="w-[80%] h-[153px] p-4 outline-none bg-[#f2f2f2]" name="address" as="textarea" />
              </div>
              {errors.address && touched.address ? (
                <Text variant="small" weight="normal" color="text-red">
                  {errors.address}
                </Text>
              ) : null}
              <div className="mt-6 w-full flex justify-center">
                <div className="w-[30%]">
                  <Button title="Next" className="cursor-pointer" type="submit" isLoading={isSubmitting} />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
