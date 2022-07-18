import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import arrowLeft from "../../../../../assets/icons/arrow-left.svg";
import Button from "../../../../../components/Button";
import Input from "../../../../../components/formFields/inputs";
import MyInput from "../../../../../components/formFields/inputs/MyInput";
import SearchableSelect from "../../../../../components/formFields/selectField";
import Text from "../../../../../components/Typography/Typography";

export default function BvnDetails({ handleDispatchNextStep, handleDispatchPreviousStep }) {
  const bvnDetailsSchema = Yup.object().shape({
    bvn: Yup.string()
      .required("This field is Required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Bvn is not valid"
      ),
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
          Step 1
        </Text>
        <Text weight="bold" variant="h4" color="text-red">
          Input BVN Detail
        </Text>
      </div>
      <div className="flex flex-col gap-2 mt-6 w-[40%]">
        <Text weight="bold" variant="body" color="text-[#65666A]">
          Tell us a little about yourself
        </Text>
        <Text weight="bold" variant="h4" color="text-[#65666A]">
          This information helps us personalise and secure your InvestNow account
        </Text>
      </div>
      <div className="mt-6">
        <Formik
          initialValues={{
            bvn: "",
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            date_of_birth: "",
            gender_type: "",
            title: "",
            maiden_name: "",
          }}
          validationSchema={bvnDetailsSchema}
          enableReinitialize={true}
          onSubmit={async (values) => {
            console.log(values);
            handleDispatchNextStep();
          }}
        >
          {({ handleSubmit, handleChange, setFieldValue, isSubmitting, values, touched, errors }) => (
            <Form onSubmit={handleSubmit} className="w-full h-full">
              <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
                <div className="w-[50%]">
                  <label htmlFor="bvn" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                    Bank Verification Number
                  </label>
                  <Input placeholder="Enter Bvn" type="text" name="bvn" handleChange={handleChange} />
                  {errors.bvn && touched.bvn ? (
                    <Text variant="body" weight="normal" color="text-red">
                      {errors.bvn}
                    </Text>
                  ) : null}
                </div>
              </div>
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
                  <label htmlFor="gender" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                    Gender
                  </label>
                  <SearchableSelect
                    options={[]}
                    isLoading={false}
                    name="gender"
                    setFieldValue={setFieldValue}
                    value={values.gender}
                    placeholder="Select gender"
                  />
                  {errors.gender && touched.gender ? (
                    <Text variant="small" weight="normal" color="text-red-700">
                      {errors.gender}
                    </Text>
                  ) : null}
                </div>
              </div>

              <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
                <div className="w-full">
                  <label htmlFor="title" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                    title
                  </label>
                  <SearchableSelect
                    options={[]}
                    isLoading={false}
                    name="title"
                    setFieldValue={setFieldValue}
                    value={values.title}
                    placeholder="Select title"
                  />
                  {errors.title && touched.title ? (
                    <Text variant="small" weight="normal" color="text-red-700">
                      {errors.title}
                    </Text>
                  ) : null}
                </div>
                <div className="w-full">
                  <MyInput
                    className="w-full"
                    placeholder="*name"
                    label="Mother’s Maiden name"
                    name="maiden_name"
                    type="text"
                    handleChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-[80%] flex gap-2 mt-4">
                <input type="checkbox" name="agreement" onChange={handleChange} />
                <Text variant="body">
                  By clicking on the I agree button, I hereby affirm that in line with the relevant Data Prottection
                  laws in Nigeria, I consent to the ccoleection and processing of my personal data and information
                </Text>
              </div>
              <div className="mt-10 w-full flex justify-center">
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
