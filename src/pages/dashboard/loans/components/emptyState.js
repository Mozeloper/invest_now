import React from "react";
import Button from "../../../../components/Button";
import Text from "../../../../components/Typography/Typography";
import LoanCoin from "../../../../assets/icons/loan_coin.svg";
import { useNavigate } from "react-router-dom";

export default function EmptyState() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-BACKGROUND_WHITE p-[2%] h-[496px] mt-4 flex flex-col items-center gap-4 text-center">
      <Text variant="h3" weight="normal">
        You have no Loans
      </Text>
      <Text variant="h2" weight="bold">
        Never run out of cash to keep your business running
      </Text>
      <div className="">
        <Button
          title="Get a loan"
          className="h-fit p-6 whitespace-nowrap font-extrabold"
          type="button"
          textColor="#fff"
          onClick={() => navigate("/loans/request_loan")}
        />
      </div>
      <img src={LoanCoin} alt="Loan_coin" loading="lazy" className="h-[164px] mt-10" />
    </div>
  );
}
