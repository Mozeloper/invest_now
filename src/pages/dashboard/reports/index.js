import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Text from "../../../components/Typography/Typography";
import Input from "../../../components/formFields/inputs";
import SearchableSelect from "../../../components/formFields/selectField";
import Button from "../../../components/Button";
import MessageModal from "../../../components/modals/MessageModal";
import checked from "../../../assets/icons/correct.svg";
import { handleGetStatementAccount, handleRequestStatementAccount } from "../../../store/slices/statementSlice";

export default function Reports() {
  const dispatch = useDispatch();
  const accounts = [];
  const statementReducer = useSelector((state) => state.statementReducer);
  const [reportType, setReportType] = useState(null);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState({
    error: false,
    success: false,
    message: null,
  });

  if (statementReducer?.statementAccountData?.type === "portfolio/statementAccount/fulfilled") {
    statementReducer?.statementAccountData?.payload?.data?.data.map((list) => {
      return accounts.push({
        label: reportType === 1 ? list.ACCOUNTTYPE : list.FUNDNAME,
        value: list,
      });
    });
  }

  const requestStatementAccount = async (values) => {
    let data = null;
    if (reportType === 1) {
      data = {
        type: "cash_statement",
        payload: {
          customer_id: values?.account?.Account?.CustomerId,
          from: values?.startDate,
          to: values?.endDate,
          core_system: values?.account?.Account?.CoreSystem,
          options: values?.account?.ACCOUNTID,
        },
      };
    } else {
      data = {
        type: "portfolio_statement",
        payload: {
          customer_id: values?.account?.Account?.CustomerId,
          portfolio_code: values?.account?.ACCOUNTID,
          from: values?.startDate,
          to: values?.endDate,
        },
      };
    }
    await dispatch(handleRequestStatementAccount(data))
      .unwrap()
      .then((res) => {
        if (res?.data?.success) {
          setShowModal((prev) => ({
            ...prev,
            success: true,
            message: res?.data?.message,
          }));
          setTimeout(() => {
            window.open(res?.data?.data);
            setShowModal((prev) => ({
              ...prev,
              success: false,
              message: null,
            }));
          }, 4000);
        }
      })
      .catch((err) => {
        setShowModal((prev) => ({
          ...prev,
          error: true,
          message: err?.data?.message,
        }));
        setTimeout(() => {
          setShowModal((prev) => ({
            ...prev,
            error: false,
            message: null,
          }));
        }, 4000);
      });
  };

  const reportSchema = Yup.object().shape({
    account: Yup.object().required("Account is required"),
    startDate: Yup.string().required("Start Date is required"),
    endDate: Yup.string().required("End Date is required"),
  });

  return (
    <>
      <MessageModal bgColor={true} modalWidth="300px" modalHeight="auto" isOpen={showModal?.error}>
        <div className="flex flex-col gap-4 justify-center items-center">
          <Text variant="h4" weight="bold" format="text-center">
            {showModal?.message}
          </Text>
        </div>
      </MessageModal>
      <MessageModal bgColor={true} modalWidth="300px" modalHeight="auto" isOpen={showModal?.success}>
        <div className="flex flex-col gap-4 justify-center items-center">
          <img src={checked} alt="correct" className="w-[50px] h-[50px]" />
          <Text variant="h4" weight="bold" format="text-center">
            {showModal?.message}
          </Text>
        </div>
      </MessageModal>
      <div data-aos="fade-up" data-aos-duration="2000">
        <div className="w-full">
          <Text variant="h1" weight="bold">
            Reports
          </Text>
        </div>
        <div className="w-full bg-white h-full mt-4 p-[3%]">
          <div className="flex flex-col gap-2">
            <Text variant="h2" weight="bold" color="text-[#000000]">
              Type of report
            </Text>

            <Text variant="h4" weight="normal" color="text-[#000000]">
              Which report would you like to receive?
            </Text>
          </div>
          <div className="flex gap-4 mt-5 md:flex-row flex-col">
            <div
              onClick={() => {
                setReportType(1);
                setError(false);
                dispatch(handleGetStatementAccount("cash_statement"));
              }}
              className={` ${
                reportType === 1 ? "md:border-2 md:border-red" : ""
              } bg-[#E7E7E7] outline-none border-transparent border hover:border-red py-[3%] px-[2%] basis-1/3 cursor-pointer`}
            >
              <Text variant="h4" weight="normal">
                Cash statements
              </Text>
              <Text variant="body" weight="normal">
                Inflows and Outflows
              </Text>
            </div>
            <div
              onClick={() => {
                setReportType(2);
                setError(false);
                dispatch(handleGetStatementAccount("portfolio_statement"));
              }}
              className={`${
                reportType === 2 ? "md:border-2 md:border-red" : ""
              } bg-[#E7E7E7] outline-none border-transparent border hover:border-red py-[3%] px-[2%] basis-1/3 cursor-pointer`}
            >
              <Text variant="h4" weight="normal">
                Portfolio statements
              </Text>
              <Text variant="body" weight="normal">
                Dividend payment and Dividend subscriptions
              </Text>
            </div>
          </div>
          {error && (
            <Text variant="body" weight="normal" color="text-red">
              Please Select Report Type
            </Text>
          )}
          <div className="border-b border-[lightGray] w-full md:mt-10 mt-6"></div>
          <div className="w-full my-5">
            <div className="flex flex-col gap-2">
              <Text variant="h3" weight="bold" color="text-[#000000]">
                Report Parameters and Timeline
              </Text>
              <Text variant="h4" weight="normal" format="tracking-wide">
                Set parameters for account and timeline
              </Text>
            </div>
            <div className="w-full">
              <Formik
                initialValues={{
                  account: null,
                  startDate: "",
                  endDate: "",
                }}
                validationSchema={reportSchema}
                onSubmit={async (values, { resetForm }) => {
                  if (reportType !== null) {
                    requestStatementAccount(values, resetForm);
                  } else {
                    setError(true);
                  }
                }}
              >
                {({ handleSubmit, handleChange, setFieldValue, isSubmitting, touched, errors }) => (
                  <Form onSubmit={handleSubmit} className="md:w-[80%] w-full">
                    <div className="flex md:flex-row flex-col gap-4 mt-4">
                      <div className="w-full">
                        <label htmlFor="account" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                          Select an account
                        </label>
                        <SearchableSelect
                          options={accounts}
                          name="account"
                          setFieldValue={setFieldValue}
                          placeholder="Select Account"
                          isLoading={statementReducer?.statementAccountIsLoading}
                        />
                        {errors.account && touched.account ? (
                          <Text variant="small" weight="normal" color="text-red">
                            {errors.account}
                          </Text>
                        ) : null}
                      </div>
                      <div className="w-full">
                        <label htmlFor="startDate" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                          Start date
                        </label>
                        <Input
                          className="w-full"
                          placeholder="*Start Date"
                          name="startDate"
                          type="date"
                          handleChange={handleChange}
                        />
                        {errors.startDate && touched.startDate ? (
                          <Text variant="small" weight="normal" color="text-red">
                            {errors.startDate}
                          </Text>
                        ) : null}
                      </div>
                    </div>
                    <div className="md:w-[50%] w-full mt-4">
                      <label htmlFor="endDate" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                        End date
                      </label>
                      <Input
                        className="w-full"
                        placeholder="*Start Date"
                        name="endDate"
                        type="date"
                        handleChange={handleChange}
                      />
                      {errors.endDate && touched.endDate ? (
                        <Text variant="small" weight="normal" color="text-red">
                          {errors.endDate}
                        </Text>
                      ) : null}
                    </div>
                    <div className="mt-8 md:w-[30%] w-full">
                      <Button
                        title="Submit"
                        className="cursor-pointer w-full"
                        type="submit"
                        isLoading={statementReducer?.requetstatementAccountIsLoading}
                      />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
