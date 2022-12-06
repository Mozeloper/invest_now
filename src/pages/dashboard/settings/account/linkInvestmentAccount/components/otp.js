import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import closeBtn from "../../../../../../assets/icons/close_btn.svg";
import Button from "../../../../../../components/Button";
import Text from "../../../../../../components/Typography/Typography";
import OtpInput from "react-otp-input";
import "react-phone-input-2/lib/style.css";

export default function Otp({ handleCloseCardModal, handleCloseItemRouting }) {
  const investmentAccountSchema = Yup.object().shape({
    otp: Yup.string().required("Otp is required"),
  });
  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseCardModal("confirm_otp")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <Text variant="h2" weight="bold" format="mb-1">
        Enter One Time Password
      </Text>
      <Text variant="body" weight="normal" color="text-primary">
        Please enter the one time password that has been sent to your email
        Address (seyi@unitedcapital.com)
      </Text>
      <Formik
        initialValues={{
          otp: "",
        }}
        validationSchema={investmentAccountSchema}
        onSubmit={async (values) => {
          console.log(values);
          handleCloseCardModal("confirm_otp");
          handleCloseItemRouting("link_investment_accounts");
        }}
      >
        {({
          handleSubmit,
          values,
          setFieldValue,
          isSubmitting,
          touched,
          errors,
        }) => (
          <>
            <Form onSubmit={handleSubmit} className="w-[100%]">
              <div className="mt-2 w-full">
                <OtpInput
                  containerStyle="flex justify-between"
                  value={values.otp}
                  name="otp"
                  onChange={(e) => setFieldValue("otp", e)}
                  numInputs={6}
                  focusStyle={false}
                  isInputNum={false}
                  className="bg-[#E6EAEE] my-4 p-3 outline-none"
                />
                {errors.otp && touched.otp ? (
                  <Text variant="small" weight="normal" color="text-red">
                    {errors.otp}
                  </Text>
                ) : null}
                <div className="w-full flex justify-end mt-4">
                  <div className="w-[50%] flex gap-2">
                    <Button
                      title="Cancel"
                      className="cursor-pointer"
                      type="button"
                      backgroundColor="#F6BE00"
                      textColor="#fff"
                      size="small"
                      onClick={() => handleCloseCardModal("confirm_otp")}
                    />
                    <Button
                      title="Validate"
                      className="cursor-pointer"
                      type="submit"
                      backgroundColor="#00C48C"
                      textColor="#fff"
                      size="small"
                      isLoading={isSubmitting}
                    />
                  </div>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
