import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Text from "../../../components/Typography/Typography";
import RedIcon from "../../../assets/icons/bg_red.svg";
import GreenIcon from "../../../assets/icons/bg_green.svg";
import PurpleIcon from "../../../assets/icons/bg_purple.svg";
import redFrame from "../../../assets/icons/red_frame.svg";
import purpleFrame from "../../../assets/icons/purple_frame.svg";
import greenFrame from "../../../assets/icons/green_frame.svg";
import DepositHistory from "./components/depositHistory";
import WithdrawalHistory from "./components/withdrawalHistory";
import { handleGetTransactionStatistics } from "../../../store/slices/transactionSlice";
import { Skeleton } from "@mui/material";

export default function Transactions() {
  const [activeTab, setActiveTab] = useState("deposit_history");
  const transactionReducer = useSelector((state) => state.transactionReducer);
  const statisticsData = transactionReducer?.transactionStatistcisData?.payload?.data?.data;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        dispatch(handleGetTransactionStatistics());
      }
    })();
    return () => {
      mounted = false;
    };
  }, [dispatch]);

  return (
    <div className="overflow-hidden" data-aos="fade-up" data-aos-duration="2000">
      <div className="flex justify-between md:flex-row flex-col">
        <Text variant="h1" weight="bold">
          Transactions
        </Text>
        <div className="flex md:flex-row flex-col gap-2">
          <Button
            title="View Reports"
            className="h-fit px-12 py-6 whitespace-nowrap font-extrabold"
            type="button"
            textColor="#fff"
            onClick={() => navigate("/statements")}
          />

          <Button
            title="Active Recurrent Payments"
            className="h-fit px-12 py-6 whitespace-nowrap font-extrabold border border-[#65666A]"
            type="button"
            textColor="#65666A"
            backgroundColor="none"
            onClick={() => navigate("/active_reccurent_payments")}
          />
        </div>
      </div>
      <div className="my-4 w-full flex">
        <Text variant="h3" weight="bold">
          Transactions over view
        </Text>
      </div>
      {transactionReducer?.transactionStatistcisIsLoading && (
        <div className="flex gap-4">
          <Skeleton sx={{ bgcolor: "grey.200" }} variant="rectangular" width="345px" height={118} />
          <Skeleton sx={{ bgcolor: "grey.200" }} variant="rectangular" width="345px" height={118} />
          <Skeleton sx={{ bgcolor: "grey.200" }} variant="rectangular" width="345px" height={118} />
        </div>
      )}
      {!!!transactionReducer?.transactionStatistcisIsLoading && (
        <div className="w-full flex gap-2 no-scrollbar overflow-hidden overflow-x-auto">
          <div
            style={{ backgroundImage: `url(${redFrame})` }}
            className="p-4 flex items-center gap-4 min-w-[345px] h-[148px]"
          >
            <img src={RedIcon} alt="icon" className="w-[64px] h-[64px]" />
            <div className="flex flex-col justify-center">
              <Text variant="body" color="text-white">
                Total Portfolio Amount
              </Text>
              <Text weight="bold" variant="h2" color="text-white">
                &#8358; {statisticsData?.total_portfolio_amount?.toFixed(2)}
              </Text>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${greenFrame})` }}
            className="p-4 flex items-center gap-4 min-w-[345px] h-[148px]"
          >
            <img src={GreenIcon} alt="icon" className="w-[64px] h-[64px]" />
            <div className="flex flex-col justify-center">
              <Text color="text-[#65666A]" variant="body">
                Total Deposit
              </Text>
              <Text weight="bold" variant="h2" color="text-[#65666A]">
                &#8358; {statisticsData?.total_deposits?.toFixed(2)}
              </Text>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${purpleFrame})` }}
            className="p-4 flex items-center gap-4 min-w-[345px] h-[148px]"
          >
            <img src={PurpleIcon} alt="icon" className="w-[64px] h-[64px]" />
            <div className="flex flex-col justify-center">
              <Text color="text-[#65666A]" variant="body">
                Total withdrawal
              </Text>
              <Text weight="bold" variant="h2" color="text-[#65666A]">
                &#8358; {statisticsData?.total_withdrawals?.toFixed(2)}
              </Text>
            </div>
          </div>
        </div>
      )}
      <div className="mt-4 w-full">
        <div className="bg-BACKGROUND_WHITE rounded-t-lg w-full p-[2%] flex gap-4">
          <div
            onClick={() => setActiveTab("deposit_history")}
            className={`cursor-pointer text-base ${
              activeTab === "deposit_history" ? "text-primary font-black" : "text-[#615F62] font-normal"
            }`}
          >
            Deposit History
          </div>
          <div
            onClick={() => setActiveTab("withdrawal_history")}
            className={`cursor-pointer text-base ${
              activeTab === "withdrawal_history" ? "text-primary font-black" : "text-[#615F62] font-normal"
            }`}
          >
            Withdrawal History
          </div>
        </div>
        <div className="w-full mb-6">
          {activeTab === "deposit_history" && <DepositHistory />}
          {activeTab === "withdrawal_history" && <WithdrawalHistory />}
        </div>
      </div>
    </div>
  );
}
