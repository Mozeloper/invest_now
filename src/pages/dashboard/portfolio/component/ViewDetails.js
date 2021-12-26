import React from "react";
import close from "../../../../assets/icons/close_btn.svg";
import Button from "../../../../components/Button";
import Text from "../../../../components/Typography/Typography";
import totalEarnings from "../../../../assets/icons/total_earnings.svg";
import totalWithdrawals from "../../../../assets/icons/total_withdrawals.svg";
import totalDeposits from "../../../../assets/icons/total_deposits.svg";

export default function ViewDetails({ handleCloseModal, handleOpenModal }) {
  return (
    <div className="p-[4%]">
      <div className="flex justify-end mb-3">
        <img
          className="cursor-pointer h-[50px] w-[50px]"
          src={close}
          alt="close_btn"
          onClick={() => handleCloseModal("view_details")}
        />
      </div>
      <Text variant="h2" weight="bold">
        Equity Fund
      </Text>
      <div className="mt-4 w-full p-[4%] rounded-lg bg-[#FBE3E3] flex gap-8">
        <div className="flex flex-col gap-4">
          <Text variant="h4" weight="normal">
            Current Value
          </Text>
          <Text variant="h2" weight="bold">
            N124,456.00
          </Text>
        </div>
        <div className="flex flex-col gap-1 mt-6">
          <Text variant="body" weight="normal">
            Gains
          </Text>
          <div className="flex gap-4">
            <Text variant="body" weight="normal">
              +N12,234.00
            </Text>
            <Text color="text-[#009A49]" variant="body" weight="normal">
              2.5%
            </Text>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-6">
        <Button
          title="Add Money"
          className="h-fit px-16 py-6 whitespace-nowrap font-extrabold"
          type="button"
          textColor="#fff"
          onClick={() => {
            handleCloseModal("view_details");
            handleOpenModal("add_money");
          }}
        />
        <Button
          title="Withdraw"
          className="h-fit px-16 py-6 whitespace-nowrap font-extrabold"
          type="button"
          textColor="#fff"
          onClick={() => {
            handleCloseModal("view_details");
            handleOpenModal("withdrawal");
          }}
        />
      </div>
      <div className="mt-6 border border-[#A4A5A7] p-[6%]">
        <Text variant="h4" weight="bold">
          Asset Details
        </Text>
        <div className="w-full flex flex-col gap-8 mt-4">
          <div className="flex gap-3">
            <img src={totalEarnings} alt="icon" />
            <div className="flex flex-col gap-1">
              <Text weight="normal" variant="body">
                Total earnings
              </Text>
              <Text weight="bold" variant="h4">
                N230,000.56
              </Text>
            </div>
          </div>
          <div className="flex gap-3">
            <img src={totalWithdrawals} alt="icon" />
            <div className="flex flex-col gap-1">
              <Text weight="normal" variant="body">
                Total Withdrawals
              </Text>
              <Text weight="bold" variant="h4">
                N13,000.56
              </Text>
            </div>
          </div>
          <div className="flex gap-3">
            <img src={totalDeposits} alt="icon" />
            <div className="flex flex-col gap-1">
              <Text weight="normal" variant="body">
                Total Deposits
              </Text>
              <Text weight="bold" variant="h4">
                N13,000.56
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
