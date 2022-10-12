/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import closeBtn from "../../../../../assets/icons/close_btn.svg";
import Text from "../../../../../components/Typography/Typography";
import Button from "../../../../../components/Button";
import SearchableSelect from "../../../../../components/formFields/selectField";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmployementStatus,
  getSalaryBand,
  handleSaveEmployementDetails,
} from "../../../../../store/slices/settingsUpdateKycSlice";
import { handleCustomerDetails } from "../../../../../store/slices/dashboardSlice";

export default function EmploymentDetails({ handleCloseModals }) {
  const updateKycSliceReducer = useSelector((state) => state.updateKycSliceReducer);

  const emoloyementDetailsSchema = Yup.object().shape({
    employmentStatus: Yup.string().required("Employment status is required"),
    income_band: Yup.string().required("income band is required"),
  });
  const employmentStatus = [];
  const salaryBands = [];
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        dispatch(getEmployementStatus());
        dispatch(getSalaryBand());
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (updateKycSliceReducer?.employementStatus?.type === "settings/employmentStatus/fulfilled") {
    updateKycSliceReducer?.employementStatus?.payload?.data?.data.map((list) => {
      return employmentStatus.push({
        label: list.name,
        value: list.id,
      });
    });
  }

  if (updateKycSliceReducer?.salaryBand?.type === "settings/salaryband/fulfilled") {
    updateKycSliceReducer?.salaryBand?.payload?.data?.data.map((list) => {
      return salaryBands.push({
        label: list.name,
        value: list.id,
      });
    });
  }

  const handleUpdateEmploymentDetails = async (data) => {
    await dispatch(handleSaveEmployementDetails(data))
      .unwrap()
      .then((res) => {
        dispatch(handleCustomerDetails());
        setTimeout(() => {
          handleCloseModals("employment_details");
          setMessage("");
        }, 2000);
        setMessage(res?.data?.message);
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
        validationSchema={emoloyementDetailsSchema}
        onSubmit={async (values) => {
          const data = {
            employment_status_type_id: values.employmentStatus,
            salary_range_type_id: values.income_band,
          };
          handleUpdateEmploymentDetails(data);
        }}
      >
        {({ handleSubmit, setFieldValue, values, isSubmitting, touched, errors }) => (
          <>
            <Form onSubmit={handleSubmit} className="w-[100%]">
              <div className="w-full mt-4">
                <label htmlFor="employmentStatus" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Select employment status
                </label>
                <SearchableSelect
                  options={employmentStatus}
                  name="employmentStatus"
                  isLoading={updateKycSliceReducer?.isLoading}
                  setFieldValue={setFieldValue}
                  placeholder="Select status"
                  defaultValue={values.employmentStatus}
                />
                {errors.employmentStatus && touched.employmentStatus ? (
                  <Text variant="small" weight="normal" color="text-red-700">
                    {errors.employmentStatus}
                  </Text>
                ) : null}
              </div>

              <div className="w-full mt-4">
                <label htmlFor="income_band" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Select income Band
                </label>
                <SearchableSelect
                  options={salaryBands}
                  name="income_band"
                  isLoading={false}
                  setFieldValue={setFieldValue}
                  placeholder="Income band"
                  defaultValue={values.income_band}
                />
                {errors.income_band && touched.income_band ? (
                  <Text variant="small" weight="normal" color="text-red-700">
                    {errors.income_band}
                  </Text>
                ) : null}
              </div>
              <div className="flex justify-center mt-8">
                <div className="md:w-[50%] w-full">
                  <Button
                    title="Submit"
                    className="cursor-pointer w-full"
                    type="submit"
                    isLoading={updateKycSliceReducer.saveEmploymentDetailsIsLoading}
                  />
                </div>
              </div>
            </Form>
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
          </>
        )}
      </Formik>
    </>
  );
}
