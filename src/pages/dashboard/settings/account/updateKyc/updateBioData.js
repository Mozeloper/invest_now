import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import closeBtn from "../../../../../assets/icons/close_btn.svg";
import Text from "../../../../../components/Typography/Typography";
import Input from "../../../../../components/formFields/inputs";
import Button from "../../../../../components/Button";

export default function UpdateBioData({ handleCloseModals }) {
  const loginSchema = Yup.object().shape({
    nationality: Yup.string().required("nationality is required"),
    state: Yup.string().required("state is required"),
    marital_status: Yup.string().required("marital status is required"),
  });

  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseModals("bio_data")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <div className="w-full flex flex-col gap-2 mb-10">
        <Text variant="h2" weight="bold">
          Update Kyc
        </Text>
        <Text variant="h4" weight="normal">
          Select which of the following you will like to update
        </Text>
      </div>
      <Formik
        initialValues={{
          nationality: "",
          state: "",
          marital_status: "",
        }}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          console.log(values);
          handleCloseModals("bio_data");
        }}
      >
        {({ handleSubmit, handleChange, isSubmitting, touched, errors }) => (
          <>
            <Form onSubmit={handleSubmit} className="w-[100%]">
              <div className="w-full mt-4">
                <label htmlFor="nationality" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Nationality
                </label>
                <Input placeholder="Country" type="text" name="nationality" handleChange={handleChange} />
                {errors.nationality && touched.nationality ? (
                  <Text variant="h4" weight="normal" color="text-red-700">
                    {errors.nationality}
                  </Text>
                ) : null}
              </div>

              <div className="w-full mt-4">
                <label htmlFor="state" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  State Of Origin
                </label>
                <Input placeholder="state" type="text" name="state" handleChange={handleChange} />
                {errors.state && touched.state ? (
                  <Text variant="h4" weight="normal" color="text-red-700">
                    {errors.state}
                  </Text>
                ) : null}
              </div>

              <div className="w-full mt-4">
                <label htmlFor="marital_status" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Marital Status
                </label>
                <Input placeholder="marital_status" type="text" name="marital_status" handleChange={handleChange} />
                {errors.marital_status && touched.marital_status ? (
                  <Text variant="h4" weight="normal" color="text-red-700">
                    {errors.marital_status}
                  </Text>
                ) : null}
              </div>

              <div className="mt-8">
                <Button title="Submit" className="cursor-pointer w-full" type="submit" isLoading={isSubmitting} />
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
