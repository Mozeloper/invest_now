import React from "react";
import close from "../../../../../assets/icons/close_btn.svg";
import Button from "../../../../../components/Button";
import Text from "../../../../../components/Typography/Typography";
import { currencyFormat } from "../../../../../helper";

export default function DepositSummary({ amount, setIsDepositSummaryOpen, setIsFundingSuccess }) {
  const handlePayment = () => {
    setIsFundingSuccess(true);
    setIsDepositSummaryOpen(false);
  };
  return (
    <>
      <div className="w-full flex justify-end">
        <img
          onClick={() => setIsDepositSummaryOpen(false)}
          src={close}
          alt="correct"
          className="w-[40px] h-[40px] cursor-pointer"
        />
      </div>
      <div className="w-[70%] flex flex-col gap-6">
        <Text variant="h2" weight="bold">
          You’re about to deposit NGN {currencyFormat(amount)}
        </Text>
        <Text variant="h3" weight="normal">
          NGN {currencyFormat(amount)} would be debited from your bank account
        </Text>
      </div>
      <div className="mt-6 w-full flex gap-4">
        <div className="w-[50%]">
          <Button
            onClick={() => setIsDepositSummaryOpen(false)}
            title="Cancel"
            backgroundColor="none"
            textColor="#E32526"
            style={{ border: "1px solid #E32526" }}
            className="cursor-pointer"
            type="button"
          />
        </div>
        <div className="w-[50%]">
          <Button onClick={() => handlePayment()} title="Proceed" className="cursor-pointer" type="button" />
        </div>
      </div>
    </>
  );
}
