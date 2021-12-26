import React from "react";
import { useNavigate } from "react-router-dom";
import Text from "../../../../../components/Typography/Typography";
import DepositIcon from "../../../../../assets/icons/funded_notification.svg";
import withDrawalIcon from "../../../../../assets/icons/withdrawal_notification.svg";
import TrustFundAlert from "../../../../../assets/icons/trust_fund_alert.svg";

export default function Notifications({ setNotificationBar }) {
  const navigate = useNavigate();
  return (
    <div className="p-[4%]">
      <div className="flex justify-between">
        <Text variant="h3" weight="bold" format="text-center" color="text-black">
          Notifications
        </Text>
        <Text variant="body" weight="normal" format="text-center" color="text-red">
          Clear notification
        </Text>
      </div>
      <div className="w-full mt-6">
        <div className="flex justify-between border-b border-[#BCBCBC] pb-6 mt-4">
          <div className="flex gap-3">
            <img src={DepositIcon} alt="icon" />
            <div className="flex flex-col gap-2">
              <Text variant="h4" weight="bold">
                Cash account successfully funded
              </Text>
              <div className="p-3 bg-[#F2F2F2] rounded-2xl">
                <Text variant="h4" weight="bold">
                  NGN700,000 added to your Cash account
                </Text>
              </div>
            </div>
          </div>
          <Text variant="body" weight="normal">
            20/03, 09:00am
          </Text>
        </div>
        <div className="flex justify-between border-b border-[#BCBCBC] pb-6 mt-4">
          <div className="flex gap-3">
            <img src={withDrawalIcon} alt="icon" />
            <div className="flex flex-col gap-2">
              <Text variant="h4" weight="bold">
                Withdrawal successful
              </Text>
              <div className="p-3 bg-[#F2F2F2] rounded-2xl">
                <Text variant="h4" weight="bold">
                  NGN700,000 Withdrawn to your Cash account
                </Text>
              </div>
            </div>
          </div>
          <Text variant="body" weight="normal">
            20/03, 09:00am
          </Text>
        </div>
        <div
          style={{ background: "linear-gradient(180deg, #E32526 4.69%, #490D0D 100%" }}
          className="mt-4 w-full h-full p-4 flex justify-between"
        >
          <div className="flex gap-2">
            <img src={TrustFundAlert} alt="trust_fund_alert_icon" className="w-[25px] h-[25px]" />
            <div className="flex flex-col">
              <Text variant="body" weight="bold" color="text-white">
                New Trust Fund alert
              </Text>
              <Text variant="body" weight="bold" color="text-white" format="my-2 w-[70%]">
                Yay! We have added AMC holding to our portfolio. You can now invest.
              </Text>
              <Text variant="body" weight="bold" color="text-white">
                View details
              </Text>
            </div>
          </div>
          <Text variant="sub" weight="bold" color="text-white" format="whitespace-nowrap">
            20/03, 09:00am
          </Text>
        </div>
        <div className="border-b border-[#BCBCBC] pb-6"></div>
        <div
          onClick={() => {
            setNotificationBar();
            navigate("/settings/accounts");
          }}
          className="bg-[#FFFBF0] cursor-pointer p-4 flex justify-between mt-4"
        >
          <div className="flex flex-col gap-2">
            <Text variant="h4" weight="bold">
              Set up your KYC
            </Text>
            <Text variant="body" weight="normal">
              To continue trading on InvestNow set up your KYC
            </Text>
          </div>
          <Text variant="sub" weight="bold" format="whitespace-nowrap">
            20/03, 09:00am
          </Text>
        </div>
      </div>
    </div>
  );
}
