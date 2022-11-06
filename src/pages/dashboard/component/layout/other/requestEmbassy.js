import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import closeBtn from "../../../../../assets/icons/close_btn.svg";
import Text from "../../../../../components/Typography/Typography";
import SearchableSelect from "../../../../../components/formFields/selectField";
import Button from "../../../../../components/Button";
import MyInput from "../../../../../components/formFields/inputs/MyInput";

export default function RequestEmbassy({ handleCloseModals }) {
  const requestEmbassySchema = Yup.object().shape({
    portfolio_account: Yup.string().required("Select a portfolio account"),
    full_name: Yup.string().required("Full Name is required"),
    embassy_name: Yup.string().required("Embassy Name is required"),
    delivery_mode: Yup.string().required("Please select a delivery mode"),
  });
  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseModals("request_embassy_statement")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <div className="w-full flex flex-col gap-2 mt-3">
        <Text variant="h2" weight="bold">
          Request Embassy Statement
        </Text>
        <Text variant="h4" weight="normal">
          This information helps us personalize and secure your investnow account
        </Text>
      </div>
      <Formik
        initialValues={{
          portfolio_account: "",
          full_name: "",
          embassy_name: "",
          delivery_mode: "",
        }}
        validationSchema={requestEmbassySchema}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange, setFieldValue, touched, errors, values }) => (
          <Form onSubmit={handleSubmit} className="w-[70%] mt-4">
            <div className="w-full">
              <label htmlFor="portfolio_account" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                Select portfolio account to be included
              </label>
              <SearchableSelect
                options={[]}
                isLoading={false}
                name="portfolio_account"
                setFieldValue={setFieldValue}
                value={values.portfolio_account}
                placeholder="Select account"
              />
              {errors.portfolio_account && touched.portfolio_account ? (
                <Text variant="small" weight="normal" color="text-red">
                  {errors.portfolio_account}
                </Text>
              ) : null}
            </div>
            <div className="w-full mt-4">
              <label htmlFor="delivery_mode" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                Select mode of delivery
              </label>
              <SearchableSelect
                options={[
                  { label: "Email", value: "email" },
                  { label: "Physical Address", value: "physical_address" },
                ]}
                isLoading={false}
                name="delivery_mode"
                setFieldValue={setFieldValue}
                value={values.delivery_mode}
                placeholder="Select delivery Mode"
              />
              {errors.delivery_mode && touched.delivery_mode ? (
                <Text variant="small" weight="normal" color="text-red">
                  {errors.delivery_mode}
                </Text>
              ) : null}
            </div>
            <div className="w-full my-4">
              <MyInput
                className="w-full"
                placeholder="Full name"
                label="Name to be stated on letter"
                name="full_name"
                type="text"
                handleChange={handleChange}
              />
            </div>
            <div className="w-full">
              <MyInput
                className="w-full"
                placeholder="Full name"
                label="Name of Embassy"
                name="embassy_name"
                type="text"
                handleChange={handleChange}
              />
            </div>
            <div className="w-full bg-[#FFF0F0] p-4 mt-4">
              <Text variant="h4" weight="normal">
                Processing Fee
              </Text>
              <Text variant="body" weight="normal">
                Changes according to selected portfolio
              </Text>
              <Text variant="h4" weight="bold" format="mt-2">
                N25,650.00
              </Text>
            </div>
            <div className="mt-4">
              <Button title="Proceed" className="cursor-pointer w-full" type="submit" isLoading={false} />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
