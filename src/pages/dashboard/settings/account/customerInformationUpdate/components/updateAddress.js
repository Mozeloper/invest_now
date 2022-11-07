import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import closeBtn from "../../../../../../assets/icons/close_btn.svg";
import Button from "../../../../../../components/Button";
import Input from "../../../../../../components/formFields/inputs";
import Text from "../../../../../../components/Typography/Typography";
import SearchableSelect from "../../../../../../components/formFields/selectField";

export default function UpdateAddress({ handleCloseModal }) {
  const updateBankSchema = Yup.object().shape({
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is Required"),
    state: Yup.string().required("State is required"),
  });
  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseModal("update_address")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <Text weight="bold" color="text-[#65666A]" variant="h2">
        Update Address
      </Text>
      <Formik
        initialValues={{
          address: "",
          city: "",
          state: "",
        }}
        validationSchema={updateBankSchema}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange, setFieldValue, isSubmitting, touched, errors }) => (
          <>
            <Form onSubmit={handleSubmit} className="w-[100%]">
              <div className="w-full mt-4">
                <Input placeholder="Current House Address" type="text" name="address" handleChange={handleChange} />
                {errors.address && touched.address ? (
                  <Text variant="body" weight="normal" color="text-red">
                    {errors.address}
                  </Text>
                ) : null}
              </div>
              <div className="w-full mt-4">
                <SearchableSelect
                  options={[]}
                  name="city"
                  isLoading={false}
                  setFieldValue={setFieldValue}
                  placeholder="City"
                  // defaultInputValue={values.City}
                />
                {errors.city && touched.city ? (
                  <Text variant="body" weight="normal" color="text-red">
                    {errors.city}
                  </Text>
                ) : null}
              </div>
              <div className="w-full mt-4">
                <SearchableSelect
                  options={[]}
                  name="state"
                  isLoading={false}
                  setFieldValue={setFieldValue}
                  placeholder="State"
                  // defaultInputValue={values.City}
                />
                {errors.state && touched.state ? (
                  <Text variant="body" weight="normal" color="text-red">
                    {errors.state}
                  </Text>
                ) : null}
              </div>

              <div className="flex justify-start mt-8 lg:w-[50%] w-full">
                <Button title="Update" className="cursor-pointer w-full" type="submit" isLoading={isSubmitting} />
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
