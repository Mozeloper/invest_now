import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import closeBtn from "../../../../../assets/icons/close_btn.svg";
import debitCard from "../../../../../assets/images/debitCard.svg";
import Button from "../../../../../components/Button";
import Input from "../../../../../components/formFields/inputs";
import MessageModal from "../../../../../components/modals/MessageModal";
import Text from "../../../../../components/Typography/Typography";

export default function PaymentCards({ handleCloseItemRouting }) {
  const [openModal, setOpenMpdal] = useState({
    add_debit_card: false,
  });

  const handleOpenCardModal = (type) => {
    switch (type) {
      case "add_debit_card":
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
      case "add_debit_card":
        setOpenMpdal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      default:
        break;
    }
  };

  const paymentCardSchema = Yup.object().shape({
    card_number: Yup.string().required("Card Number is required"),
    expiry_date: Yup.string().required("Expiry Date is Required"),
    card_name: Yup.string().required("Name is required"),
    cvv: Yup.string().required("Cvv is required"),
  });

  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseItemRouting("payment_card")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Text variant="h2" weight="bold">
          Manage Payment Cards
        </Text>
        <Text variant="h4" weight="normal">
          Select the debit card you would like to manage.
        </Text>
      </div>
      <div className="flex flex-col mt-10 text-center mx-auto justify-center h-[50%] items-center w-[85%]">
        <Text variant="h4" weight="bold">
          You have no debit cards. Click on the button below to add a new card
        </Text>
        <div className="flex justify-start mt-8 w-full">
          <Button
            onClick={() => handleOpenCardModal("add_debit_card")}
            title="Add New Card"
            className="cursor-pointer w-full"
            type="button"
          />
        </div>
      </div>
      <MessageModal isOpen={openModal?.add_debit_card} modalHeight="auto">
        <div className="flex justify-end w-full">
          <img
            onClick={() => handleCloseCardModal("add_debit_card")}
            src={closeBtn}
            alt="close_btn"
            className="h-[40px] w-[40px] cursor-pointer"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Text variant="h3" weight="bold">
            Add a debit card to fund your account with
          </Text>
          <Text variant="h4" weight="normal">
            Add the debit card you would like to make your automated repayment with
          </Text>
        </div>
        <img src={debitCard} alt="close_btn" className="mt-3 mb-6" />
        <Formik
          initialValues={{
            card_number: "",
            card_name: "",
            expiry_date: "",
            cvv: "",
          }}
          validationSchema={paymentCardSchema}
          onSubmit={async (values) => {
            console.log(values);
            handleCloseCardModal("add_debit_card");
            handleCloseItemRouting("payment_card");
          }}
        >
          {({ handleSubmit, handleChange, isSubmitting, touched, errors }) => (
            <>
              <Form onSubmit={handleSubmit} className="w-[100%]">
                <div className="w-full mt-4">
                  <label htmlFor="card_number" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                    Card Number
                  </label>
                  <Input placeholder="Your card number" type="text" name="card_number" handleChange={handleChange} />
                  {errors.card_number && touched.card_number ? (
                    <Text variant="body" weight="normal" color="text-red-700">
                      {errors.card_number}
                    </Text>
                  ) : null}
                </div>

                <div className="w-full mt-4">
                  <label htmlFor="card_name" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                    Card Holder’s Name
                  </label>
                  <Input placeholder="Your card number" type="text" name="card_name" handleChange={handleChange} />
                  {errors.card_name && touched.card_name ? (
                    <Text variant="body" weight="normal" color="text-red-700">
                      {errors.card_name}
                    </Text>
                  ) : null}
                </div>
                <div className="w-full flex gap-2">
                  <div className="w-full mt-4">
                    <label htmlFor="expiry_date" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                      Expiry Date
                    </label>
                    <Input placeholder="MM/YY" type="text" name="expiry_date" handleChange={handleChange} />
                    {errors.expiry_date && touched.expiry_date ? (
                      <Text variant="body" weight="normal" color="text-red-700">
                        {errors.expiry_date}
                      </Text>
                    ) : null}
                  </div>
                  <div className="w-full mt-4">
                    <label htmlFor="cvv" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                      Cvv
                    </label>
                    <Input placeholder="cvv" type="text" name="cvv" handleChange={handleChange} />
                    {errors.cvv && touched.cvv ? (
                      <Text variant="body" weight="normal" color="text-red-700">
                        {errors.cvv}
                      </Text>
                    ) : null}
                  </div>
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
