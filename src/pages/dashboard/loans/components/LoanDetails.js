import React from "react";
import Carousel from "react-grid-carousel";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Text from "../../../../components/Typography/Typography";
import greenRateLoan from "../../../../assets/icons/green_rate_loan.svg";
import Input from "../../../../components/formFields/inputs";
import SearchableSelect from "../../../../components/formFields/selectField";
import Button from "../../../../components/Button";

export default function LoanDetails({ setStepIndex }) {
  const LoanDetailsSchema = Yup.object().shape({
    assettype: Yup.string().required("Please Select Asset Type"),
    amount: Yup.string().required("Amount is Required"),
    duration: Yup.string().required("Duration is Required"),
    frequency: Yup.string().required("Duration is Required"),
  });

  return (
    <>
      <div className="w-full text-center flex flex-col gap-2">
        <Text color="text-[#65666A]" weight="bold" variant="h2">
          Your loan journey starts here
        </Text>
        <Text color="text-[#65666A]" weight="normal" variant="h4">
          Select which of your assets you will like to use to back your loan
        </Text>
      </div>

      <Formik
        initialValues={{
          assettype: "",
          duration: "",
          amount: "",
          frequency: "",
        }}
        validationSchema={LoanDetailsSchema}
        onSubmit={async (values) => {
          // console.log(values);
          setStepIndex((prev) => prev + 1);
        }}
      >
        {({ handleSubmit, handleChange, setFieldValue, touched, errors, values }) => (
          <Form onSubmit={handleSubmit} className="w-full">
            <div className="w-full mt-4">
              <Carousel
                // key={i}
                responsiveLayout={[
                  {
                    breakpoint: 1200,
                    cols: 3,
                  },
                  {
                    breakpoint: 990,
                    cols: 2,
                  },
                ]}
                mobileBreakpoint={670}
                cols={2}
                rows={1}
                gap={10}
                showDots={false}
              >
                <Carousel.Item>
                  <div className="bg-[#E7EBEC] p-[10%] w-[240px] h-[169px]">
                    <div className="flex justify-between mb-2">
                      <Text color="text-[#65666A]" weight="normal" variant="h4">
                        Equity Fund
                      </Text>
                      <input
                        onChange={handleChange}
                        type="radio"
                        name="assettype"
                        value="EQ"
                        className="accent-primary border border-primary outline-none"
                      />
                    </div>
                    <Text color="text-[#65666A]" weight="normal" variant="h3">
                      N124,456.00
                    </Text>
                    <div className="flex justify-between items-center mt-10">
                      <Text color="text-[#65666A]" weight="normal" variant="h4">
                        +N12,234.00
                      </Text>
                      <div className="flex gap-2 items-center">
                        <img src={greenRateLoan} alt="rate_icon" className="h-[23px] w-[23px]" />
                        <Text color="text-[#009A49]" weight="normal" variant="body">
                          2.5%
                        </Text>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
              {errors.assettype && touched.assettype ? (
                <Text variant="small" weight="normal" color="text-red">
                  {errors.assettype}
                </Text>
              ) : null}
              <div className="w-full px-6">
                <div className="mt-4 flex flex-col gap-2">
                  <Text color="text-[#65666A]" weight="normal" variant="h4">
                    Loan amount you are eligible for
                  </Text>
                  <div className="w-full p-[2%] bg-[#DADADA]">
                    <Text color="text-[#65666A]" weight="bold" variant="h4">
                      N500,000
                    </Text>
                  </div>
                </div>
                <div className="w-full mt-4">
                  <label htmlFor="amount" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                    How much would you like to loan?
                  </label>
                  <Input placeholder="Enter amount" type="text" name="amount" handleChange={handleChange} />
                  {errors.amount && touched.amount ? (
                    <Text variant="small" weight="normal" color="text-red">
                      {errors.amount}
                    </Text>
                  ) : null}
                </div>
                <div className="w-full mt-4">
                  <label htmlFor="frequency" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                    Repayment frequency
                  </label>
                  <SearchableSelect
                    options={[
                      { label: "Monthly", value: "monthly" },
                      { label: "Quarterly", value: "quarterly" },
                      { label: "One Off", value: "oneOff" },
                    ]}
                    isLoading={false}
                    name="frequency"
                    setFieldValue={setFieldValue}
                    value={values.frequency}
                    placeholder="Select frequency"
                  />
                  {errors.frequency && touched.frequency ? (
                    <Text variant="small" weight="normal" color="text-red">
                      {errors.frequency}
                    </Text>
                  ) : null}
                </div>
                <div className="w-full mt-4">
                  <label htmlFor="amount" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                    Repayment tenure
                  </label>
                  <Input placeholder="select duration" type="date" name="duration" handleChange={handleChange} />
                  {errors.duration && touched.duration ? (
                    <Text variant="small" weight="normal" color="text-red">
                      {errors.duration}
                    </Text>
                  ) : null}
                </div>
                <div className="w-full flex justify-center">
                  <div className="mt-8 w-[30%]">
                    <Button title="Next" className="cursor-pointer w-full outline-none" type="submit" />
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
