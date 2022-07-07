import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import closeBtn from "../../../../../assets/icons/close_btn.svg";
import Text from "../../../../../components/Typography/Typography";
import Input from "../../../../../components/formFields/inputs";
import Button from "../../../../../components/Button";

export default function SelfCertification({ handleCloseModals }) {
  const selfCertificationSchema = Yup.object().shape({
    country: Yup.string().required("Employment status is required"),
    no_reason: Yup.string().required("give us a reason"),
    tin: Yup.string().required("tin is required"),
  });

  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseModals("self_certification")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <div className="w-full flex flex-col gap-2 mb-10">
        <Text variant="h2" weight="bold">
          Self certfication Form
        </Text>
        <Text variant="sub" weight="normal">
          Individual Tax residency self certification
        </Text>
        <Text variant="body" weight="normal" format="my-4">
          Country/Jurisdiction of Residence for Tax Purposes and related Taxpayer Identication Number or equivalent
          number
        </Text>
        <Text variant="body" weight="normal">
          Please complete the following table indicating
        </Text>
        <Text variant="body" weight="normal">
          1 Where the Account Holder is tax resident;
        </Text>
        <Text variant="body" weight="normal">
          2 The Account Holder's TIN for each country/jurisdiction indicated. If the Account Holder is tax resident in
          more than three countries/jurisdictions, please use a separate sheet.
        </Text>
      </div>
      <Formik
        initialValues={{
          country: "",
          tin: "",
          no_reason: "",
        }}
        validationSchema={selfCertificationSchema}
        onSubmit={async (values) => {
          console.log(values);
          handleCloseModals("self_certification");
        }}
      >
        {({ handleSubmit, handleChange, isSubmitting, touched, errors }) => (
          <>
            <Form onSubmit={handleSubmit} className="w-[100%]">
              <div className="w-full mt-4">
                <label htmlFor="country" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Country/Jurisdiction of Tax Residence
                </label>
                <Input placeholder="status" type="text" name="country" handleChange={handleChange} />
                {errors.country && touched.country ? (
                  <Text variant="h4" weight="normal" color="text-red-700">
                    {errors.country}
                  </Text>
                ) : null}
              </div>

              <div className="w-full mt-4">
                <label htmlFor="tin" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Tax Identification Number ( TIN )
                </label>
                <Input placeholder="Select annual income" type="text" name="tin" handleChange={handleChange} />
                {errors.tin && touched.tin ? (
                  <Text variant="h4" weight="normal" color="text-red-700">
                    {errors.tin}
                  </Text>
                ) : null}
              </div>
              <div className="w-full mt-4">
                <label htmlFor="no_reason" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  If no TIN available enter Reason A, B or C
                </label>
                <Input placeholder="Select annual income" type="text" name="no_reason" handleChange={handleChange} />
                {errors.no_reason && touched.no_reason ? (
                  <Text variant="h4" weight="normal" color="text-red-700">
                    {errors.no_reason}
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
