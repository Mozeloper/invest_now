import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import closeBtn from "../../../../../assets/icons/close_btn.svg";
import Text from "../../../../../components/Typography/Typography";
import Input from "../../../../../components/formFields/inputs";
import Button from "../../../../../components/Button";

export default function EmploymentDetails({ handleCloseModals }) {
  const loginSchema = Yup.object().shape({
    employmentStatus: Yup.string().required("Employment status is required"),
    income_band: Yup.string().required("income band is required"),
  });

  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseModals("employment_details")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <div className="w-full flex flex-col gap-2 mb-10">
        <Text variant="h2" weight="bold">
          Employment details
        </Text>
        <Text variant="h4" weight="normal">
          Select which of the following you will like to update
        </Text>
        <Text variant="sub" weight="normal">
          This information helps us personalise and secure your InvestNow account
        </Text>
      </div>
      <Formik
        initialValues={{
          employmentStatus: "",
          income_band: "",
        }}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          console.log(values);
          handleCloseModals("employment_details");
        }}
      >
        {({ handleSubmit, handleChange, isSubmitting, touched, errors }) => (
          <>
            <Form onSubmit={handleSubmit} className="w-[100%]">
              <div className="w-full mt-4">
                <label htmlFor="employmentStatus" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Select employment status
                </label>
                <Input placeholder="status" type="text" name="employmentStatus" handleChange={handleChange} />
                {errors.employmentStatus && touched.employmentStatus ? (
                  <Text variant="h4" weight="normal" color="text-red-700">
                    {errors.employmentStatus}
                  </Text>
                ) : null}
              </div>

              <div className="w-full mt-4">
                <label htmlFor="income_band" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Select income Band
                </label>
                <Input placeholder="Select annual income" type="text" name="income_band" handleChange={handleChange} />
                {errors.income_band && touched.income_band ? (
                  <Text variant="h4" weight="normal" color="text-red-700">
                    {errors.income_band}
                  </Text>
                ) : null}
              </div>

              <div className="flex justify-start mt-8 lg:w-[50%] w-full">
                <Button title="Submit" className="cursor-pointer w-full" type="submit" isLoading={isSubmitting} />
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
