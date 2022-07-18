import React, { useState } from "react";
import close from "../../../../../assets/icons/close_btn.svg";
import Text from "../../../../../components/Typography/Typography";
import debitCard from "../../../../../assets/images/debitCard.svg";
import Button from "../../../../../components/Button";

export default function CardPayment({
  setCardSelected,
  setIsCardModalOpen,
  setIsPaymentModalOpen,
  setIsDepositSummaryOpen,
}) {
  const [showButton, setShowButton] = useState(false);
  const handleSelectCard = () => {
    setShowButton(true);
    setCardSelected("card_details");
  };

  return (
    <>
      <div className="w-full flex justify-end">
        <img
          onClick={() => setIsCardModalOpen(false)}
          src={close}
          alt="correct"
          className="w-[40px] h-[40px] cursor-pointer"
        />
      </div>
      <div className="mt-6 w-[80%] flex flex-col gap-4">
        <Text variant="h2" color="text-[#000000]" weight="bold">
          Choose debit card for funding
        </Text>
        <Text variant="h4" color="text-[#000000]">
          Choose the debit card you would like to make your payment with
        </Text>
      </div>
      <img
        onClick={() => handleSelectCard("card_details")}
        src={debitCard}
        alt="close_btn"
        className="mt-3 mb-6 cursor-pointer"
      />
      {showButton && (
        <div className="mt-6 w-full flex justify-center">
          <div className="w-[70%]">
            <Button
              onClick={() => {
                setIsDepositSummaryOpen(true);
                setIsCardModalOpen(false);
                setIsPaymentModalOpen(false);
              }}
              textColor="#fff"
              title="Next"
              className="cursor-pointer font-bold"
              type="button"
            />
          </div>
        </div>
      )}
    </>
  );
}
