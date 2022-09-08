import React, { useEffect } from "react";
import close from "../../../../assets/icons/close_btn.svg";
import Button from "../../../../components/Button";
import Text from "../../../../components/Typography/Typography";
import totalEarnings from "../../../../assets/icons/total_earnings.svg";
import totalWithdrawals from "../../../../assets/icons/total_withdrawals.svg";
import totalDeposits from "../../../../assets/icons/total_deposits.svg";
import { handleGetPortfolioDetails } from "../../../../store/slices/portfolioSlice";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import { currencyEntities } from "../../../../helper";

export default function ViewDetails({ handleCloseModal, handleOpenModal, cashAccountId, customerId }) {
  const dispatch = useDispatch();
  const dashboardReducer = useSelector((state) => state.dashboardReducer);
  const portfolioReducer = useSelector((state) => state.portfolioReducer);
  const portfolioDetails = portfolioReducer?.portfolioDetailsData?.payload?.data?.data;
  const isCompleted =
    dashboardReducer?.customerDetails?.payload?.data?.data?.tier_status === "TIER_2" &&
    dashboardReducer?.customerDetails?.payload?.data?.data?.kycStep === "KYC_COMPLETED";
  const isVerifying =
    dashboardReducer?.customerDetails?.payload?.data?.data?.tier_status === "TIER_1" &&
    dashboardReducer?.customerDetails?.payload?.data?.data?.kycStep === "KYC_COMPLETED";
  const isNotCompleted =
    dashboardReducer?.customerDetails?.payload?.data?.data?.tier_status === "TIER_1" &&
    dashboardReducer?.customerDetails?.payload?.data?.data?.kycStep === "KYC_NOT_STARTED";

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        dispatch(handleGetPortfolioDetails({ cashAccountId, customerId }));
      }
    })();
    return () => {
      mounted = false;
    };
  }, [dispatch, cashAccountId, customerId]);

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
      {portfolioReducer?.portfolioDetailsIsLoading && (
        <div className="w-full flex flex-col gap-5">
          <Skeleton sx={{ bgcolor: "grey.200" }} variant="rectangular" width="345px" height={200} />
          <Skeleton sx={{ bgcolor: "grey.200" }} variant="rectangular" width="345px" height={200} />
        </div>
      )}
      {!!!portfolioReducer?.portfolioDetailsIsLoading &&
        portfolioReducer?.portfolioDetailsData?.type === "portfolio/portfolioDetails/rejected" && (
          <div className="h-full w-full flex justify-center mt-24">
            <Text variant="h1" weight="bold">
              {portfolioReducer?.portfolioDetailsData?.payload?.data?.message}
            </Text>
          </div>
        )}
      {!!!portfolioReducer?.portfolioDetailsIsLoading &&
        portfolioReducer?.portfolioDetailsData?.type === "portfolio/portfolioDetails/fulfilled" && (
          <>
            <Text variant="h2" weight="bold">
              {portfolioDetails?.account_type?.name}
            </Text>
            <div className="mt-4 w-full p-[4%] rounded-lg bg-[#FBE3E3] flex gap-8">
              <div className="flex flex-col gap-4">
                <Text variant="h4" weight="normal">
                  Current Value
                </Text>
                <Text variant="h2" weight="bold">
                  {currencyEntities[portfolioDetails?.deposit_account?.currency?.symbol]}{" "}
                  {portfolioDetails?.current_value}
                </Text>
              </div>
              <div className="flex flex-col gap-1 mt-6">
                <Text variant="body" weight="normal">
                  Gains
                </Text>
                <div className="flex gap-4">
                  <Text variant="body" weight="normal">
                    + {currencyEntities[portfolioDetails?.deposit_account?.currency?.symbol]}{" "}
                    {portfolioDetails?.gains?.amount}
                  </Text>
                  <Text color="text-[#009A49]" variant="body" weight="normal">
                    {portfolioDetails?.gains?.percent}%
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
                  if (isCompleted) {
                    handleOpenModal("withdrawal");
                  } else if (isVerifying) {
                    handleOpenModal("isVerifying");
                  } else if (isNotCompleted) {
                    handleOpenModal("updateKycNotUpdated");
                  } else {
                    return null;
                  }
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
                      {currencyEntities[portfolioDetails?.deposit_account?.currency?.symbol]}{" "}
                      {portfolioDetails?.asset_details?.total_earnings}
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
                      {currencyEntities[portfolioDetails?.deposit_account?.currency?.symbol]}{" "}
                      {portfolioDetails?.asset_details?.total_withrawals}
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
                      {currencyEntities[portfolioDetails?.deposit_account?.currency?.symbol]}{" "}
                      {portfolioDetails?.asset_details?.total_deposits}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
    </div>
  );
}
