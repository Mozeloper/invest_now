import React from "react";
import Text from "../../../../components/Typography/Typography";
import loanCoins from "../../../../assets/icons/loan_coins.svg";
import checkLogo from "../../../../assets/icons/correct_two.svg";
import Button from "../../../../components/Button";
import { useState } from "react";
import MessageModal from "../../../../components/modals/MessageModal";
import { useNavigate } from "react-router-dom";

export default function LoanSummary({ setStepIndex }) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <MessageModal modalHeight="400px" modalWidth="450px" isOpen={showModal} bgColor={true}>
        <div className="flex gap-3 items-center">
          <img src={checkLogo} alt="correct" className="h-[50px] w-[50px]" />
          <Text variant="h2" weight="bold" format="whitespace-nowrap">
            Loan request accepted
          </Text>
        </div>
        <div className="w-full p-6">
          <Text variant="h3" weight="normal" format="mt-4">
            Your account has been successfully funded with NGN2,000,000
          </Text>
        </div>
        <div className="w-full flex justify-center">
          <div className="mt-8 w-[50%]">
            <Button
              title="View Loans"
              className="cursor-pointer w-full outline-none"
              type="button"
              onClick={() => navigate("/loans")}
            />
          </div>
        </div>
      </MessageModal>
      <div
        className="w-full h-[158px] flex justify-between"
        style={{ background: "linear-gradient(180deg, #E32526 0%, #720B0C 100%)" }}
      >
        <div className="w-full flex flex-col gap-2 m-[6%]">
          <Text color="text-white" weight="normal" variant="h4">
            Loan amount
          </Text>
          <Text color="text-white" weight="bold" variant="h3">
            NGN 2,000,000.00
          </Text>
        </div>
        <img src={loanCoins} alt="loan_coin" className="mt-8" />
      </div>
      <div className="w-full flex flex-col gap-4 mt-4">
        <div className="w-full flex flex-col gap-2">
          <Text color="text-[#65666A]" weight="bold" variant="h4">
            Interest
          </Text>
          <div className="w-full bg-[#FFF8F8] p-[4%] flex flex-col gap-6">
            <div className="flex justify-between">
              <Text color="text-[#65666A]" weight="normal" variant="h4">
                Interest rate
              </Text>
              <Text color="text-[#65666A]" weight="normal" variant="h4">
                4.5%
              </Text>
            </div>
            <div className="w-full border-t border-[#C8CBD5]"></div>
            <div className="flex justify-between">
              <Text color="text-[#65666A]" weight="normal" variant="h4">
                Monthly repayment
              </Text>
              <Text color="text-[#65666A]" weight="normal" variant="h4">
                N196,000.56
              </Text>
            </div>
            <div className="w-full border-t border-[#C8CBD5]"></div>
            <div className="flex justify-between">
              <Text color="text-[#65666A]" weight="normal" variant="h4">
                Total Repayment
              </Text>
              <Text color="text-[#65666A]" weight="normal" variant="h4">
                N296,000,560.56
              </Text>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <Text color="text-[#65666A]" weight="bold" variant="h4">
            Tenure and frequency
          </Text>
          <div className="w-full bg-[#FFF8F8] p-[4%] flex flex-col gap-6">
            <div className="flex justify-between">
              <Text color="text-[#65666A]" weight="normal" variant="h4">
                Loan Tenure
              </Text>
              <Text color="text-[#65666A]" weight="normal" variant="h4">
                6 Months
              </Text>
            </div>
            <div className="w-full border-t border-[#C8CBD5]"></div>
            <div className="flex justify-between">
              <Text color="text-[#65666A]" weight="normal" variant="h4">
                Repayment Frequency
              </Text>
              <Text color="text-[#65666A]" weight="normal" variant="h4">
                Monthly
              </Text>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <Text color="text-[#65666A]" weight="bold" variant="h4">
            Payment Details
          </Text>
          <div className="w-full bg-[#FFF8F8] p-[4%] flex flex-col gap-6">
            <div className="flex justify-between">
              <Text color="text-[#65666A]" weight="normal" variant="h4">
                Debit Card
              </Text>
              <Text color="text-[#65666A]" weight="normal" variant="h4">
                123 *** *** 234
              </Text>
            </div>
            <div className="w-full border-t border-[#C8CBD5]"></div>
            <div className="flex justify-between">
              <Text color="text-[#65666A]" weight="normal" variant="h4">
                Asset Backing Loan
              </Text>
              <Text color="text-[#65666A]" weight="normal" variant="h4">
                Money Market Loan
              </Text>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center gap-3">
          <div className="mt-8 w-[30%]">
            <Button
              title="Cancel"
              className="font-extrabold border border-[#65666A]"
              type="button"
              textColor="#65666A"
              backgroundColor="none"
              onClick={() => setStepIndex(1)}
            />
          </div>
          <div className="mt-8 w-[30%]">
            <Button
              title="Continue"
              className="cursor-pointer w-full outline-none"
              type="button"
              onClick={() => setShowModal(true)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
