/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from "recharts";
import { Skeleton, Box } from "@mui/material";
import Text from "../../components/Typography/Typography";
import Button from "../../components/Button";
import RedIcon from "../../assets/icons/bg_red.svg";
import GreenIcon from "../../assets/icons/bg_green.svg";
import PurpleIcon from "../../assets/icons/bg_purple.svg";
import setupIcon from "../../assets/icons/set_icon.svg";
import checked from "../../assets/icons/checked.svg";
import profit from "../../assets/icons/profit.svg";
// import loss from "../../assets/icons/loss.svg";
import empty from "../../assets/icons/empty.svg";
import redFrame from "../../assets/icons/red_frame.svg";
import purpleFrame from "../../assets/icons/purple_frame.svg";
import greenFrame from "../../assets/icons/green_frame.svg";
import {
  handlecompletionSummary,
  handleDashboardSummary,
  handleSlidingRating,
} from "../../store/slices/dashboardSlice";
import { currencyEntities } from "../../helper";
import MessageModal from "../../components/modals/MessageModal";
import Referral from "./component/referral";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";
import { handleGetPortfolioPerfomance } from "../../store/slices/portfolioSlice";

const data = [
  {
    name: "Page A",
    Mutual_Funds: 4000,
    Trust_Fund: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    Mutual_Funds: 3000,
    Trust_Fund: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    Mutual_Funds: 2000,
    Trust_Fund: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    Mutual_Funds: 2780,
    Trust_Fund: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    Mutual_Funds: 1890,
    Trust_Fund: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    Mutual_Funds: 2390,
    Trust_Fund: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    Mutual_Funds: 3490,
    Trust_Fund: 4300,
    amt: 2100,
  },
];

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isReferralModalOpen, setIsReferralModalOpen] = useState(false);
  const portfolioReducer = useSelector((state) => state.portfolioReducer);
  const portfolio_items = portfolioReducer?.portfolioPerformanceData?.payload?.data?.data?.portfolio_items;
  const userDetails = useSelector((state) => state?.authReducer.authedUser);
  const firstName = userDetails?.data?.customer?.firstname;
  const customerId = userDetails?.data?.customer?.id;
  const dashboardSummaryDetails = useSelector((state) => state?.dashboardReducer);
  const completion_statuses = dashboardSummaryDetails?.completionSummary?.data?.data;
  const account_summary = dashboardSummaryDetails?.dashboardSummary?.payload?.data?.data;
  const slidingRate = dashboardSummaryDetails?.slidingRate;

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        dispatch(handleDashboardSummary());
        dispatch(handlecompletionSummary(customerId));
        dispatch(handleSlidingRating());
        dispatch(handleGetPortfolioPerfomance());
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <MessageModal modalHeight="80vh" isOpen={isReferralModalOpen}>
        <Referral setIsReferralModalOpen={setIsReferralModalOpen} />
      </MessageModal>
      <div data-aos="fade-up" data-aos-duration="2000">
        <div className="w-full">
          <Text weight="bold" variant="h1">
            Welcome {firstName},
          </Text>
        </div>
        {dashboardSummaryDetails?.completionSummaryIsLoading && (
          <div className="my-24">
            <Box>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
          </div>
        )}
        {!!!dashboardSummaryDetails?.completionSummaryIsLoading && (
          <div className="w-full bg-[#FFFBF0] p-5 rounded-md overflow-hidden">
            <div className="w-full flex lg:flex-row flex-col gap-2 justify-between">
              <div className="w-full flex gap-2 items-center">
                <img src={setupIcon} className="w-[40px] h-[40px]" alt="set_icon" />
                <div>
                  <Text format="whitespace-nowrap" weight="bold" variant="h3">
                    {completion_statuses?.total_percent}% of profile complete
                  </Text>
                  <Text format="whitespace-nowrap" variant="body">
                    Complete your profile so you can start investing
                  </Text>
                </div>
              </div>
              <div
                onClick={() => setIsReferralModalOpen(true)}
                className="bg-[#FFD8D8] cursor-pointer w-full p-5 text-right rounded-md"
              >
                <Text color="text-[#E32526]" weight="bold" variant="h4">
                  Refer and Earn
                </Text>
                <Text color="text-[#E32526]" variant="body">
                  Become an Investnow affiliate marketer and earn up 3% commission
                </Text>
              </div>
            </div>
            <div className="border-b-2 border-[#7B839C] w-full my-4"></div>
            <div className="overflow-x-auto no-scrollbar py-4 w-full flex gap-8">
              {completion_statuses?.completion_status.map((step, index) => {
                return (
                  <div key={index + 1} className="flex gap-3 items-center">
                    <div
                      className={`${
                        step?.is_completed ? "bg-[#FFCF5C]" : "bg-[#A4A5A7]"
                      } rounded-full h-[24px] w-[24px] text-center font-bold text-[#000000]`}
                    >
                      {index + 1}
                    </div>
                    <div className="flex flex-col">
                      <div className="flex gap-2 items-center">
                        <Text format="whitespace-nowrap" weight="extrabold" variant="h4">
                          {step?.label}
                        </Text>
                        {step?.is_completed && <img src={checked} className="w-[12px] h-[12px]" alt="set_icon" />}
                      </div>
                      <Text format="tracking-wide whitespace-nowrap" variant="body">
                        Completes your profile up to {step?.percent}
                      </Text>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {dashboardSummaryDetails?.dashboardSummaryIsLoading && (
          <div className="">
            <Skeleton sx={{ bgcolor: "grey.200" }} variant="rectangular" width="100%" height={118} />
          </div>
        )}
        {!!!dashboardSummaryDetails?.dashboardSummaryIsLoading &&
          dashboardSummaryDetails?.dashboardSummary?.type === "dashboard/summary/fulfilled" && (
            <>
              <div className="w-full mt-4">
                <Text format="mb-3" weight="bold" variant="h3">
                  Account summary
                </Text>
              </div>
              <div className="w-full flex gap-2 no-scrollbar overflow-hidden overflow-x-auto">
                <div
                  style={{ backgroundImage: `url(${redFrame})` }}
                  className="p-4 flex items-center gap-4 min-w-[345px] h-[148px]"
                >
                  <img src={RedIcon} alt="icon" className="w-[64px] h-[64px]" />
                  <div className="flex flex-col justify-center">
                    <Text variant="body" color="text-white">
                      Portfolio Net Value
                    </Text>
                    <Text weight="bold" variant="h2" color="text-white">
                      {currencyEntities[account_summary?.agregateSummary[0]?.CurrencyId]}{" "}
                      {account_summary?.agregateSummary[0]?.Total}
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
                      Cash Account
                    </Text>
                    <Text weight="bold" variant="h2" color="text-[#65666A]">
                      {currencyEntities[account_summary?.cashAccountSummary[0]?.CurrencyId]}{" "}
                      {account_summary?.cashAccountSummary[0]?.Total}
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
                      Loans
                    </Text>
                    <Text weight="bold" variant="h2" color="text-[#65666A]">
                      &#8358; 0.00
                    </Text>
                  </div>
                </div>
                <div
                  style={{ backgroundImage: `url(${redFrame})` }}
                  className=" p-4 flex items-center gap-4 min-w-[345px] h-[148px]"
                >
                  <img src={RedIcon} alt="icon" className="w-[64px] h-[64px]" />
                  <div className="flex flex-col justify-center">
                    <Text color="text-white" variant="body">
                      Trust
                    </Text>
                    <Text weight="bold" variant="h2" color="text-white">
                      &#8358; 0.00
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
                      Mutual Funds
                    </Text>
                    <Text weight="bold" variant="h2" color="text-[#65666A]">
                      {currencyEntities[account_summary?.mutualFundsSummary[0]?.CurrencyId]}{" "}
                      {account_summary?.mutualFundsSummary[0]?.Total}
                    </Text>
                  </div>
                </div>
                <div
                  style={{ backgroundImage: `url(${redFrame})` }}
                  className="p-4 flex items-center gap-4 min-w-[345px] h-[148px]"
                >
                  <img src={RedIcon} alt="icon" className="w-[64px] h-[64px]" />
                  <div className="flex flex-col justify-center">
                    <Text color="text-[#fff]" variant="body">
                      Securities
                    </Text>
                    <Text weight="bold" variant="h2" color="text-[#fff]">
                      {currencyEntities[account_summary?.equitySummary[0]?.CurrencyId]}{" "}
                      {account_summary?.equitySummary[0]?.Total}
                    </Text>
                  </div>
                </div>
              </div>
            </>
          )}
        <div className="w-full mt-4">
          <Text format="mb-3" weight="bold" variant="h3">
            Performance
          </Text>
        </div>
        <div className="w-full flex lg:flex-row flex-col gap-2">
          <div className="bg-BACKGROUND_WHITE p-6 lg:basis-2/3 lg:w-[729px] h-[529px]">
            <div className="flex justify-between">
              <Text format="mb-3" weight="bold" variant="h3">
                Portfolio Performance
              </Text>
              <div className="flex gap-3">
                <div className="flex gap-2">
                  <div className="bg-[#EF69A7] w-[16px] h-[16px]"></div>
                  <Text format="mb-3" weight=" normal" variant="body">
                    Mutual Funds
                  </Text>
                </div>
                <div className="flex gap-2">
                  <div className="bg-[#21C3F2] w-[16px] h-[16px]"></div>
                  <Text format="mb-3" weight=" normal" variant="body">
                    Trust Fund
                  </Text>
                </div>
              </div>
            </div>
            <div className="w-full">
              <ResponsiveContainer width="95%" height={400}>
                <LineChart width={600} height={800} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                  <XAxis dataKey="name" />
                  <Tooltip />
                  <CartesianGrid stroke="#f5f5f5" />
                  <Line type="monotone" dataKey="Mutual_Funds" stroke="#EF69A7" yAxisId={0} />
                  <Line type="monotone" dataKey="Trust_Fund" stroke="#21C3F2" yAxisId={1} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          {dashboardSummaryDetails?.slidingRateIsLoading ? (
            <div className="">
              <Skeleton sx={{ bgcolor: "grey.200" }} variant="rectangular" width="100%" height={118} />
            </div>
          ) : (
            <div className="bg-[#FFFBF0] overflow-y-auto overflow-hidden no-scrollbar W-[100%] lg:basis-1/3 h-[529px] p-6">
              <div className="w-full mb-10">
                <Text weight="bold" variant="h3">
                  Daily Market rates
                </Text>
              </div>
              <div className="flex flex-col gap-6">
                {slidingRate?.type === "dashboard/rating/fulfilled" &&
                  slidingRate?.payload?.data?.data.map((list, index) => {
                    return (
                      <div key={index} className="bg-[#F8F0F0] w-full py-4 px-3 rounded-lg flex justify-between">
                        <Text format="self-center" weight="bold" variant="h4">
                          {list?.fundName}
                        </Text>
                        <div className="flex items-center gap-2">
                          {/* <img src={loss} alt="profit" className="w-[15px] h-[7px]" /> */}
                          <img src={profit} alt="profit" className="w-[15px] h-[7px]" />
                          <Text format="text-[#009A49]" weight="bold" variant="body">
                            {list?.rate}%
                          </Text>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
        <div className="w-full mt-4 flex lg:flex-row flex-col gap-2">
          <div className="bg-BACKGROUND_WHITE min-h-[400px] h-full p-6 lg:basis-1/2 basis-1">
            <div className="w-full mt-4">
              <Text format="mb-3" weight="bold" variant="h3">
                My Portfolio
              </Text>
            </div>
            {portfolioReducer?.portfolioPerformanceIsLoading && (
              <div className="w-full h-[80%] flex flex-col justify-center items-center">
                <Loader />
              </div>
            )}
            {!!!portfolioReducer?.portfolioPerformanceIsLoading &&
              portfolioReducer?.portfolioPerformanceData?.type === "portfolio/portfolioPerfomance/fulfilled" && (
                <>
                  {portfolio_items !== undefined &&
                    portfolio_items?.length >= 1 &&
                    portfolio_items.map((data, index) => {
                      return (
                        <div key={index} className="w-full flex flex-col">
                          <div className="w-full mb-4 border-b border-[#BCBCBC]">
                            <Text format="mb-1" weight="normal" variant="h4">
                              {data?.account_type?.name}
                            </Text>
                            <div className="flex justify-between">
                              <Text format="mb-1" weight="normal" variant="h4">
                                {currencyEntities[data?.currency?.symbol]} {data?.current_balance}
                              </Text>
                              <div className="flex gap-2">
                                <Text format="mb-1" weight="normal" variant="h4" color="text-green-600">
                                  {data?.accrued_credit_interest}%
                                </Text>
                                <Text format="mb-1" weight="normal" variant="h4">
                                  + {currencyEntities[data?.currency?.symbol]} {data?.gains}
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </>
              )}
            {!!!portfolioReducer?.portfolioPerformanceIsLoading &&
              portfolioReducer?.portfolioPerformanceData?.type === "portfolio/portfolioPerfomance/fulfilled" &&
              portfolio_items?.length === 0 && (
                <div className="w-full h-[80%] flex flex-col justify-center items-center">
                  <img src={empty} alt="empty" className="w-[200px] h-[100px]" />
                  <Text format="mb-3" weight="bold" variant="body">
                    You currently have no portfolio
                  </Text>
                  <div>
                    <Button
                      title="Build your portfolio"
                      className="h-fit px-16 py-6 whitespace-nowrap font-extrabold"
                      type="button"
                      textColor="#fff"
                      onClick={() => navigate("/portfolio")}
                    />
                  </div>
                </div>
              )}
          </div>
          <div className="bg-BACKGROUND_WHITE h-[400px] p-6 lg:basis-1/2 basis-1">
            <div className="w-full mt-4">
              <Text format="mb-3" weight="bold" variant="h3">
                My Loans
              </Text>
            </div>
            <div className="w-full h-[70%] flex flex-col justify-center items-center">
              <img src={empty} alt="empty" className="w-[200px] h-[100px]" />
              <Text format="px-20" weight="bold" variant="body">
                You have no loans.
              </Text>
              <Text format="mb-3 px-20" weight="bold" variant="body">
                Never run out of money for your business
              </Text>
              <div>
                <Button
                  title="Get a loan"
                  className="h-fit px-16 py-6 whitespace-nowrap font-extrabold"
                  type="button"
                  textColor="#fff"
                  onClick={() => navigate("/loans")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
