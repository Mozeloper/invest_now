import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import arrowLeft from "../../../../../assets/icons/arrow-left.svg";
import Button from "../../../../../components/Button";
import Input from "../../../../../components/formFields/inputs";
import Text from "../../../../../components/Typography/Typography";
import SearchableSelect from "../../../../../components/formFields/selectField";

export default function PepStatus({ handleDispatchNextStep, handleDispatchPreviousStep }) {
  const pepStatusSchema = Yup.object().shape({
    politicallyExposed: Yup.string().required("This Field is Required"),
    describe: Yup.string(),
  });

  const exposed = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];

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
          Step 6
        </Text>
        <Text weight="bold" variant="h4" color="text-red">
          PEP Status
        </Text>
      </div>
      <div className="flex flex-col gap-2 mt-6 w-[40%]">
        <Text weight="bold" variant="body" color="text-[#65666A]">
          PEP Status
        </Text>
        <Text weight="bold" variant="h4" color="text-[#65666A]">
          This information helps us personalise and secure your InvestNow account
        </Text>
      </div>
      <div className="bg-[#65666A] p-[4%] w-[85%] mt-4 flex flex-col gap-3">
        <Text color="text-white" variant="h4">
          Who is a Politically-Exposed Person?
        </Text>
        <Text color="text-white" variant="h4" format="w-[70%]">
          Individuals who are or have been entrusted with prominent politically public functions by a foreign country.
          for example, Heads of State or Government, Senior Politicians, Senior Government, Judicial or Military
          officials, Senior Executives of state-owned corporations and important political party officials. Learn more
          on the FAQ page
        </Text>
      </div>
      <div className="mt-6">
        <Formik
          initialValues={{
            politicallyExposed: "",
            describe: "",
          }}
          validationSchema={pepStatusSchema}
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
                  <label htmlFor="politicallyExposed" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                    Are you politically Exposed?
                  </label>
                  <SearchableSelect
                    options={exposed}
                    isLoading={false}
                    name="politicallyExposed"
                    setFieldValue={setFieldValue}
                    value={values.politicallyExposed}
                    placeholder="Select your answer"
                  />
                  {errors.politicallyExposed && touched.politicallyExposed ? (
                    <Text variant="small" weight="normal" color="text-red-700">
                      {errors.politicallyExposed}
                    </Text>
                  ) : null}
                </div>
                {values.politicallyExposed === "yes" && (
                  <div className="w-[50%]">
                    <label htmlFor="describe" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                      Please Describe Your Position
                    </label>
                    <Input placeholder="Enter Text" type="text" name="describe" handleChange={handleChange} />
                    {errors.describe && touched.describe ? (
                      <Text variant="body" weight="normal" color="text-red">
                        {errors.describe}
                      </Text>
                    ) : null}
                  </div>
                )}
              </div>
              {(values.politicallyExposed === "yes" || values.politicallyExposed === "no") && (
                <div className="mt-10 w-full flex justify-center">
                  <div className="w-[30%]">
                    <Button title="Next" className="cursor-pointer" type="submit" isLoading={isSubmitting} />
                  </div>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
