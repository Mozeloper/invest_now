import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import closeBtn from "../../../../../assets/icons/close_btn.svg";
import Text from "../../../../../components/Typography/Typography";
import Button from "../../../../../components/Button";
import SearchableSelect from "../../../../../components/formFields/selectField";
import { handlePepStatus } from "../../../../../store/slices/settingsUpdateKycSlice";
import { useDispatch, useSelector } from "react-redux";
import { handleCustomerDetails } from "../../../../../store/slices/dashboardSlice";
import { useState } from "react";

export default function PepStatus({ handleCloseModals }) {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const updateKycSliceReducer = useSelector((state) => state.updateKycSliceReducer);

  const pepStatusSchema = Yup.object().shape({
    politicallyExposed: Yup.string().required("This Field is Required"),
  });

  const exposed = [
    { label: "Yes", value: true },
    { label: "No", value: false },
  ];

  const handlePoliticalStatus = async (values) => {
    const data = {
      pep_status: values?.politicallyExposed,
    };
    await dispatch(handlePepStatus(data))
      .unwrap()
      .then((res) => {
        dispatch(handleCustomerDetails());
        if (res?.data?.success) {
          setTimeout(() => {
            setMessage("");
            handleCloseModals("pep_status");
          }, 2000);
          setMessage(res?.data?.message);
        }
      })
      .catch((error) => {
        setTimeout(() => {
          setErrorMessage("");
        }, 2000);
        setErrorMessage(error?.data?.message);
      });
  };

  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseModals("pep_status")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <div className="w-full flex flex-col gap-2 mb-2">
        <Text variant="h2" weight="bold">
          Pep Status
        </Text>
        <Text variant="h4" weight="normal">
          This information helps us personalise and secure your InvestNow account
        </Text>
      </div>
      <div className="bg-[#65666A] p-[2%] w-full flex flex-col gap-3">
        <Text color="text-white" variant="h4" weight="bold">
          Who is a Politically-Exposed Person?
        </Text>
        <Text color="text-white" variant="h4" format="w-full" weight="normal">
          Individuals who are or have been entrusted with prominent politically public functions by a foreign country.
          for example, Heads of State or Government, Senior Politicians, Senior Government, Judicial or Military
          officials, Senior Executives of state-owned corporations and important political party officials. Learn more
          on the FAQ page
        </Text>
      </div>
      <div className="mt-10">
        <Formik
          initialValues={{
            politicallyExposed: "",
          }}
          validationSchema={pepStatusSchema}
          enableReinitialize={true}
          onSubmit={async (values) => {
            handlePoliticalStatus(values);
          }}
        >
          {({ handleSubmit, setFieldValue, isSubmitting, values, touched, errors }) => (
            <Form onSubmit={handleSubmit} className="w-full h-full">
              <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
                <div className="w-full">
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
              </div>
              <div className="mt-10 w-full flex justify-center">
                <div className="w-[50%]">
                  <Button
                    title="Submit"
                    className="cursor-pointer"
                    type="submit"
                    isLoading={updateKycSliceReducer?.setPepStatusIsLoading}
                  />
                </div>
              </div>
              {message !== "" && (
                <div className="w-full text-center mt-4">
                  <Text variant="h4" color="text-green-600">
                    {message}
                  </Text>
                </div>
              )}
              {errorMessage !== "" && (
                <div className="w-full text-center mt-4">
                  <Text variant="h4" color="text-red-500">
                    {errorMessage}
                  </Text>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
