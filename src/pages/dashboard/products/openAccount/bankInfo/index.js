/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDebounce } from "use-debounce";
import arrowLeft from "../../../../../assets/icons/arrow-left.svg";
import Button from "../../../../../components/Button";
import Loader from "../../../../../components/loader";
import MyInput from "../../../../../components/formFields/inputs/MyInput";
import SearchableSelect from "../../../../../components/formFields/selectField";
import Text from "../../../../../components/Typography/Typography";
import { getBankList, verifyBankAccount } from "../../../../../store/slices/openAccountSlice";

export default function BankInfo({
  handleDispatchNextStep,
  handleDispatchPreviousStep,
  isBothTrue,
  isBothFalse,
  isbeneficiaryTrue,
  isCHNTrue,
}) {
  const dispatch = useDispatch();
  const openAccountReducer = useSelector((state) => state.openAccountReducer);
  const account_name = openAccountReducer?.verifiedBankAccount?.payload?.data?.data?.account_name ?? "";
  const bankList = [];
  const [accountNumber, setAccountNumber] = useState();
  const [bankCode, setBankCode] = useState();
  const [debouncedText] = useDebounce(accountNumber, 500);

  const bankInfoSchema = Yup.object().shape({
    // bank: Yup.string().required("This field is Required"),
    // accountNumber: Yup.string()
    //   .required("This field is Required")
    //   .matches(
    //     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    //     "Account Number is not valid"
    //   ),
    // accountName: Yup.string().required("Account Name is Required"),
  });

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        dispatch(getBankList());
      }
    })();
    return () => {
      mounted = false;
    };
  }, [dispatch]);

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted && debouncedText !== undefined) {
        const data = {
          code: bankCode,
          account_number: debouncedText,
        };
        dispatch(verifyBankAccount(data));
      }
    })();
    return () => {
      mounted = false;
    };
  }, [debouncedText]);

  if (openAccountReducer?.bankListData?.type === "openaccount/banklist/fulfilled") {
    openAccountReducer?.bankListData?.payload?.data?.data.map((list) => {
      return bankList.push({
        label: list.name,
        value: list.code,
      });
    });
  }

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
          Step 1
        </Text>
        <Text weight="bold" variant="h4" color="text-red">
          Bank Information
        </Text>
      </div>
      <div className="flex flex-col gap-2 mt-6 w-[40%]">
        <Text weight="bold" variant="body" color="text-[#65666A]">
          Bank Information
        </Text>
        <Text weight="bold" variant="h4" color="text-[#65666A]">
          This information helps us personalise and secure your InvestNow account
        </Text>
      </div>
      <div className="bg-[#E1F0CB] p-[2%] w-[60%] mt-4">
        <Text color="text-[#65666A]" variant="h4" format="w-[70%]">
          The account provided here is where your withdrawal goes to
        </Text>
      </div>
      <div className="mt-6">
        <Formik
          initialValues={{
            bank: bankCode !== undefined ? bankCode : "",
            accountNumber: accountNumber !== undefined ? accountNumber : "",
            accountName: account_name !== undefined ? account_name : "",
          }}
          validationSchema={bankInfoSchema}
          enableReinitialize={true}
          onSubmit={async (values) => {
            if (isBothTrue) {
              handleDispatchNextStep(null, values, 2, "bank");
            } else if (isBothFalse) {
              handleDispatchNextStep(null, values, 4, "bank");
            } else if (isbeneficiaryTrue) {
              handleDispatchNextStep(null, values, 3, "bank");
            } else if (isCHNTrue) {
              handleDispatchNextStep(null, values, 2, "bank");
            }
          }}
        >
          {({ handleSubmit, handleChange, setFieldValue, isSubmitting, values, touched, errors }) => (
            <Form onSubmit={handleSubmit} className="w-full h-full">
              <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
                <div className="w-full">
                  <label htmlFor="bank" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                    Choose your Bank
                  </label>
                  <SearchableSelect
                    options={bankList}
                    isLoading={openAccountReducer?.bankIsLoading}
                    name="bank"
                    setFieldValue={setFieldValue}
                    value={values.bank}
                    placeholder="Select Bank"
                  />
                  {errors.bank && touched.bank ? (
                    <Text variant="small" weight="normal" color="text-red">
                      {errors.bank}
                    </Text>
                  ) : null}
                </div>
                <div className="w-full">
                  <MyInput
                    className="w-full"
                    placeholder="number"
                    label="Account Number"
                    name="accountNumber"
                    value={values.accountNumber}
                    type="text"
                    handleChange={(e) => {
                      setFieldValue("accountNumber", e.target.value);
                      if (e.target.value.length === 10) {
                        setAccountNumber(e.target.value);
                        setBankCode(values?.bank);
                      }
                    }}
                  />
                </div>
              </div>
              {openAccountReducer?.verifyAccountIsLoading && (
                <div className="w-[50%] mt-4">
                  <Loader />
                </div>
              )}
              {!!!openAccountReducer?.verifyAccountIsLoading && values?.accountName !== "" && (
                <>
                  <div className="w-[50%] mt-4">
                    <MyInput
                      className="w-full"
                      placeholder="name"
                      label="Account Name"
                      name="accountName"
                      type="text"
                      readOnly
                      disabled
                      handleChange={handleChange}
                    />
                  </div>
                  <div className="mt-10 w-full flex justify-center">
                    <div className="w-[30%]">
                      <Button title="Next" className="cursor-pointer" type="submit" isLoading={false} />
                    </div>
                  </div>
                </>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
