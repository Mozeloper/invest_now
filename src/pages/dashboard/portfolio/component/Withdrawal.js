import React, { useState } from "react";
import close from "../../../../assets/icons/close_btn.svg";
import Text from "../../../../components/Typography/Typography";
import Button from "../../../../components/Button";
import Input from "../../../../components/formFields/inputs";
import { useDispatch, useSelector } from "react-redux";
import {
  handleGetPortfolioPerfomance,
  handleGetPortfolioTransaction,
  handleWithdrawalRequest,
} from "../../../../store/slices/portfolioSlice";

export default function Withdrawal({ handleCloseModal, handleOpenModal }) {
  const [error, setError] = useState(false);
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const portfolioReducer = useSelector((state) => state.portfolioReducer);
  const portfolioDetails = portfolioReducer?.portfolioDetailsData?.payload?.data?.data;

  const handlePaymentMethod = () => {
    if (amount === "") {
      setError(true);
    }
    if (amount !== "") {
      console.log(amount);
      saveWithdrawalRequest();
    }
  };

  const saveWithdrawalRequest = async () => {
    const data = {
      customer_id: portfolioDetails?.deposit_account?.payment_options?.customer_id,
      amount: Number(amount),
      core_system: portfolioDetails?.deposit_account?.payment_options?.core_system,
      core_system_option: portfolioDetails?.deposit_account?.payment_options?.core_system_options,
      thirdParty: "",
    };
    await dispatch(handleWithdrawalRequest(data))
      .unwrap()
      .then((res) => {
        console.log(res);
        if (res?.data?.success) {
          handleCloseModal("withdrawal");
          handleOpenModal("responseModal", res?.data?.message, false);
          dispatch(handleGetPortfolioTransaction());
          dispatch(handleGetPortfolioPerfomance());
        }
      })
      .catch((err) => {
        handleOpenModal("responseModal", err?.data?.message, true);
      });
  };

  return (
    <div className="p-[4%]">
      <div className="flex justify-end mb-3">
        <img
          className="cursor-pointer h-[50px] w-[50px]"
          src={close}
          alt="close_btn"
          onClick={() => handleCloseModal("withdrawal")}
        />
      </div>
      <Text variant="h2" weight="bold">
        How much do you want to withdraw?
      </Text>

      <div className="w-[80%] mt-6">
        <Input
          handleChange={(e) => {
            setAmount(e.target.value);
            setError(false);
          }}
          placeholder="Enter Amount"
          type="text"
          name="amount"
        />
      </div>
      {error && (
        <Text variant="body" weight="normal" color="text-red">
          Please Enter Amount
        </Text>
      )}
      <div className="bg-[#FFEFEF] p-[4%] mt-6 flex flex-col gap-5">
        <Text variant="body" weight="normal">
          Destination account details:
        </Text>
        <div className="flex flex-col gap-2">
          <Text variant="h3" weight="bold">
            {portfolioDetails?.deposit_account?.bankAccount?.name}
          </Text>
          <Text variant="h3" weight="bold">
            {portfolioDetails?.deposit_account?.bankAccount?.number}{" "}
            {portfolioDetails?.deposit_account?.bankAccount?.bankName}
          </Text>
        </div>
      </div>
      <div className="mt-6 w-[50%]">
        <Button
          title="Proceed"
          className="h-fit px-16 py-6 whitespace-nowrap font-extrabold"
          type="button"
          textColor="#fff"
          onClick={() => handlePaymentMethod()}
          isLoading={portfolioReducer?.portfolioWithdrawalIsLoading}
        />
      </div>
    </div>
  );
}
