import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import closeBtn from "../../../../../assets/icons/close_btn.svg";
import Button from "../../../../../components/Button";
import Input from "../../../../../components/formFields/inputs";
import MessageModal from "../../../../../components/modals/MessageModal";
import Text from "../../../../../components/Typography/Typography";

export default function LinkInvestmentaccount({ handleCloseItemRouting }) {
  const [openModal, setOpenMpdal] = useState({
    add_investment_account: false,
  });

  const handleOpenCardModal = (type) => {
    switch (type) {
      case "add_investment_account":
        setOpenMpdal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      default:
        break;
    }
  };

  const handleCloseCardModal = (type) => {
    switch (type) {
      case "add_investment_account":
        setOpenMpdal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      default:
        break;
    }
  };

  const investmentAccountSchema = Yup.object().shape({
    bankName: Yup.string().required("Bank Number is required"),
    accountName: Yup.string().required("Account Name is Required"),
    accountNumber: Yup.string().required("Account Number is required"),
  });

  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseItemRouting("link_investment_accounts")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Text variant="h2" weight="bold">
          Linked Investment Accounts
        </Text>

        <Text variant="h4" weight="normal">
          Create an Investment Account
        </Text>
      </div>
      <div className="flex flex-col mt-10 text-center mx-auto justify-center h-[50%] items-center w-[85%]">
        <Text variant="h4" weight="bold">
          You dont have investment account. Click on the button below to add
        </Text>
        <div className="flex justify-start mt-8 w-full">
          <Button
            onClick={() => handleOpenCardModal("add_investment_account")}
            title="Add New Card"
            className="cursor-pointer w-full"
            type="button"
          />
        </div>
      </div>
      <MessageModal isOpen={openModal?.add_investment_account} modalHeight="auto" minWidth="300px">
        <div className="flex justify-end w-full">
          <img
            onClick={() => handleCloseCardModal("add_investment_account")}
            src={closeBtn}
            alt="close_btn"
            className="h-[40px] w-[40px] cursor-pointer"
          />
        </div>
        <Text variant="h2" weight="bold">
          Add a bank Account
        </Text>
        <Formik
          initialValues={{
            bankName: "",
            accountNumber: "",
            accountName: "",
          }}
          validationSchema={investmentAccountSchema}
          onSubmit={async (values) => {
            console.log(values);
            handleCloseCardModal("add_investment_account");
            handleCloseItemRouting("link_investment_accounts");
          }}
        >
          {({ handleSubmit, handleChange, isSubmitting, touched, errors }) => (
            <>
              <Form onSubmit={handleSubmit} className="w-[100%]">
                <div className="w-full mt-4">
                  <Input placeholder="Select Bank" type="text" name="bankName" handleChange={handleChange} />
                  {errors.bankName && touched.bankName ? (
                    <Text variant="body" weight="normal" color="text-red-700">
                      {errors.bankName}
                    </Text>
                  ) : null}
                </div>

                <div className="w-full mt-4">
                  <Input placeholder="Account Number" type="text" name="accountNumber" handleChange={handleChange} />
                  {errors.accountNumber && touched.accountNumber ? (
                    <Text variant="body" weight="normal" color="text-red-700">
                      {errors.accountNumber}
                    </Text>
                  ) : null}
                </div>
                <div className="w-full mt-4">
                  <Input placeholder="Account Name" type="text" name="accountName" handleChange={handleChange} />
                  {errors.accountName && touched.accountName ? (
                    <Text variant="body" weight="normal" color="text-red-700">
                      {errors.accountName}
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
      </MessageModal>
    </>
  );
}
