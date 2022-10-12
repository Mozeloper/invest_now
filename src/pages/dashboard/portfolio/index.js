import React, { useEffect, useState } from "react";
import Carousel from "react-grid-carousel";
import moment from "moment";
import { Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from "recharts";
import { currencyEntities } from "../../../helper";
import Correct from "../../../assets/icons/correct.svg";
import Button from "../../../components/Button";
import Text from "../../../components/Typography/Typography";
import RedIcon from "../../../assets/icons/bg_red.svg";
import GreenIcon from "../../../assets/icons/bg_green.svg";
// import PurpleIcon from "../../../assets/icons/bg_purple.svg";
// import purpleFrame from "../../../assets/icons/purple_frame.svg";
import redFrame from "../../../assets/icons/red_frame.svg";
import greenFrame from "../../../assets/icons/green_frame.svg";
import totalEarnings from "../../../assets/icons/total_earnings.svg";
import totalWithdrawals from "../../../assets/icons/total_withdrawals.svg";
import totalDeposits from "../../../assets/icons/total_deposits.svg";
import totalAssests from "../../../assets/icons/total_assets.svg";
import arrowDeposit from "../../../assets/icons/arrow_deposit.svg";
import SideRightModal from "../../../components/modals/SideRightModal";
import { SearchBar } from "../../../components/SearchBar";
import Loader from "../../../components/loader";
import Addmoney from "./component/Addmoney";
import Withdrawal from "./component/Withdrawal";
import ViewDetails from "./component/ViewDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  handleGetPortfolioPerfomance,
  handleGetPortfolioStatistics,
  handleGetPortfolioSummary,
  handleGetPortfolioTransaction,
} from "../../../store/slices/portfolioSlice";
import EmptyState from "../../../assets/images/empty_state.svg";
import MessageModal from "../../../components/modals/MessageModal";
import Input from "../../../components/formFields/inputs";
import PaginationControlled from "../../../components/Pagination";

const data = [
  null,
  {
    name: "Jan",
    investment_returns: 3000,
    amt: 2210,
  },
  {
    name: "Feb",
    investment_returns: 2000,
    amt: 2290,
  },
  {
    name: "Mar",
    investment_returns: 2780,
    amt: 2000,
  },
  {
    name: "April",
    investment_returns: 1890,
    amt: 2181,
  },
  {
    name: "May",
    investment_returns: 2390,
    amt: 2500,
  },
  {
    name: "June",
    investment_returns: 3490,
    amt: 2100,
  },
  {
    name: "july",
    investment_returns: 1890,
    amt: 2181,
  },
  {
    name: "August",
    investment_returns: 2780,
    amt: 2000,
  },
  {
    name: "Sept",
    investment_returns: 3490,
    amt: 2100,
  },
  {
    name: "Oct",
    investment_returns: 1890,
    amt: 2181,
  },
  {
    name: "Nov",
    investment_returns: 1890,
    amt: 2181,
  },
  {
    name: "Dec",
    investment_returns: 2700,
    amt: 2181,
  },
];

export default function Portfolio() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const portfolioReducer = useSelector((state) => state.portfolioReducer);
  const portfolioSummary = portfolioReducer?.portfolioSummaryData?.payload?.data?.data;
  const portfolio_items = portfolioReducer?.portfolioPerformanceData?.payload?.data?.data?.portfolio_items;
  const otherDetails = portfolioReducer?.portfolioTransaction?.payload?.data?.metadata;
  const portfolioStats = portfolioReducer?.portfolioStatisticsData?.payload?.data?.data;

  const [cashAccountId, setCashAccountId] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchText, setSearchText] = useState("");
  const [paginationNumber, setPaginationNumber] = useState(1);

  const [showModal, setShowModal] = useState({
    add_money: false,
    withdrawal: false,
    view_details: false,
    isVerifying: false,
    updateKycNotUpdated: false,
    errorText: false,
    responseModal: false,
    responseMessage: null,
  });

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        dispatch(handleGetPortfolioPerfomance());
        dispatch(handleGetPortfolioSummary());
        dispatch(handleGetPortfolioStatistics());
      }
    })();
    return () => {
      mounted = false;
    };
  }, [dispatch]);

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        dispatch(handleGetPortfolioTransaction({ paginationNumber }));
      }
    })();
    return () => {
      mounted = false;
    };
  }, [dispatch, paginationNumber]);

  const handleFilter = () => {
    if (searchText !== "" || startDate !== null || endDate !== null) {
      setPaginationNumber(1);
      dispatch(handleGetPortfolioTransaction({ paginationNumber, searchText, startDate, endDate }));
    }
    return null;
  };

  const clearFilter = () => {
    if (searchText !== "" || startDate !== null || endDate !== null) {
      setSearchText("");
      setStartDate("");
      setEndDate("");
      setPaginationNumber(1);
      dispatch(handleGetPortfolioTransaction({ paginationNumber }));
    }
  };

  const handlePaginationChange = (_, page) => {
    setPaginationNumber(page);
    setSearchText("");
  };

  const handleOpenModal = (type, data, errorText) => {
    switch (type) {
      case "add_money":
        setShowModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "withdrawal":
        setShowModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "view_details":
        setShowModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "isVerifying":
        setShowModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "updateKycNotUpdated":
        setShowModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "responseModal":
        setShowModal((prev) => ({
          ...prev,
          responseMessage: data,
          errorText: errorText,
          [type]: true,
        }));
        break;
      default:
        break;
    }
  };

  const handleCloseModal = (type) => {
    switch (type) {
      case "add_money":
        setShowModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "withdrawal":
        setShowModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "view_details":
        setShowModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "isVerifying":
        setShowModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "updateKycNotUpdated":
        setShowModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "responseModal":
        setShowModal((prev) => ({
          ...prev,
          responseMessage: null,
          errorText: false,
          [type]: false,
        }));
        break;
      default:
        break;
    }
  };

  return (
    <>
      <MessageModal modalHeight="200px" modalWidth="400px" isOpen={showModal?.isVerifying} bgColor={true}>
        <div className="flex flex-col justify-center h-full items-center">
          <Text variant="h3" weight="bold">
            Kyc Is Undergoing verification try again later
          </Text>
          <div className="flex justify-center w-full my-6">
            <div className="w-[40%]">
              <Button
                onClick={() => handleCloseModal("isVerifying")}
                title="Cancel"
                textColor="#E32526"
                style={{ border: "1px solid #E32526" }}
                backgroundColor="none"
                className="px-3 font-bold outline-none self-center"
              />
            </div>
          </div>
        </div>
      </MessageModal>
      <MessageModal modalHeight="200px" modalWidth="400px" isOpen={showModal?.updateKycNotUpdated} bgColor={true}>
        <div className="flex flex-col justify-center h-full items-center">
          <Text variant="h2" weight="bold">
            Kyc Not Completed
          </Text>
          <div className="flex gap-2 w-full my-6">
            <Button
              onClick={() => navigate("/settings/accounts")}
              title="Update KYC"
              textColor="#fff"
              className="px-3 font-bold outline-none self-start"
            />
            <Button
              onClick={() => handleCloseModal("updateKycNotUpdated")}
              title="Cancel"
              textColor="#E32526"
              style={{ border: "1px solid #E32526" }}
              backgroundColor="none"
              className="px-3 font-bold outline-none self-start"
            />
          </div>
        </div>
      </MessageModal>
      <MessageModal isOpen={showModal?.responseModal} modalWidth="300px" modalHeight="auto">
        <div className="flex flex-col justify-center items-center w-full">
          {showModal?.errorText ? (
            <Text format="text-center mt-3 whitespace-nowrap" variant="h3" color="text-[#465174]" weight="bold">
              !Oops
            </Text>
          ) : (
            <img src={Correct} alt="check-img" />
          )}
          <Text format="text-center mt-3" variant="body" color="text-[#465174]" weight="bold">
            {showModal?.responseMessage}
          </Text>
          <div className="mt-4 w-full">
            <Button
              onClick={() => handleCloseModal("responseModal")}
              title="Close"
              className="cursor-pointer w-full"
              type="button"
            />
          </div>
        </div>
      </MessageModal>
      <SideRightModal isOpen={showModal?.view_details} modalWidth="512px">
        <ViewDetails
          cashAccountId={cashAccountId}
          customerId={customerId}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
        />
      </SideRightModal>
      <SideRightModal isOpen={showModal?.withdrawal} modalWidth="512px">
        <Withdrawal
          handleOpenModal={handleOpenModal}
          cashAccountId={cashAccountId}
          customerId={customerId}
          handleCloseModal={handleCloseModal}
        />
      </SideRightModal>
      <SideRightModal bgColor={true} isOpen={showModal?.add_money} modalWidth="512px">
        <Addmoney customerId={customerId} cashAccountId={cashAccountId} handleCloseModal={handleCloseModal} />
      </SideRightModal>
      <div className="overflow-hidden" data-aos="fade-up" data-aos-duration="2000">
        <div className="w-full flex md:flex-row flex-col justify-between mb-10">
          <Text variant="h1" weight="bold">
            My Portfolio
          </Text>

          <div className="flex md:flex-row flex-col gap-2">
            <Button
              title="Add Asset"
              className="h-fit px-16 py-6 whitespace-nowrap font-extrabold"
              type="button"
              textColor="#fff"
              onClick={() => navigate("/products/all")}
            />
          </div>
        </div>
        <div className="w-full flex gap-2 no-scrollbar overflow-hidden overflow-x-auto">
          {portfolioReducer?.portfolioStatisticsIsLoading && (
            <div className="w-full flex gap-2">
              <Skeleton sx={{ bgcolor: "grey.200" }} variant="rectangular" width="345px" height={148} />
              <Skeleton sx={{ bgcolor: "grey.200" }} variant="rectangular" width="345px" height={148} />
              <Skeleton sx={{ bgcolor: "grey.200" }} variant="rectangular" width="345px" height={148} />
            </div>
          )}
          {!!!portfolioReducer?.portfolioStatisticsIsLoading &&
            portfolioReducer?.portfolioStatisticsData?.type === "portfolio/portfolioStatistics/fulfilled" && (
              <Carousel
                responsiveLayout={[
                  {
                    breakpoint: 1200,
                    cols: 2,
                  },
                  {
                    breakpoint: 990,
                    cols: 1,
                  },
                ]}
                mobileBreakpoint={670}
                cols={4}
                rows={1}
                // gap={4}
                showDots={true}
              >
                <Carousel.Item>
                  <div
                    style={{ backgroundImage: `url(${greenFrame})` }}
                    className="p-4 flex items-center gap-4 w-[345px] h-[148px]"
                  >
                    <img src={GreenIcon} alt="icon" className="w-[64px] h-[64px]" />
                    <div className="flex flex-col justify-center">
                      <Text variant="body" color="text-[#65666A]">
                        Portfolio Net Value
                      </Text>
                      <Text weight="bold" variant="h2" color="text-[#65666A]">
                        &#8358; {portfolioStats?.portfolio_net_value}
                      </Text>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div
                    style={{ backgroundImage: `url(${redFrame})` }}
                    className=" p-4 flex items-center gap-4 w-[345px] h-[148px]"
                  >
                    <img src={RedIcon} alt="icon" className="w-[64px] h-[64px]" />
                    <div className="flex flex-col justify-center">
                      <Text color="text-white" variant="body">
                        Trust
                      </Text>
                      <Text weight="bold" variant="h2" color="text-white">
                        &#8358; {portfolioStats?.trust}
                      </Text>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div
                    style={{ backgroundImage: `url(${redFrame})` }}
                    className="p-4 flex items-center gap-4 w-[345px] h-[148px]"
                  >
                    <img src={RedIcon} alt="icon" className="w-[64px] h-[64px]" />
                    <div className="flex flex-col justify-center">
                      <Text color="text-white" variant="body">
                        Mutual Funds
                      </Text>
                      <Text weight="bold" variant="h2" color="text-white">
                        &#8358; {portfolioStats?.mutual_funds}
                      </Text>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div
                    style={{ backgroundImage: `url(${redFrame})` }}
                    className="p-4 flex items-center gap-4 w-[345px] h-[148px]"
                  >
                    <img src={RedIcon} alt="icon" className="w-[64px] h-[64px]" />
                    <div className="flex flex-col justify-center">
                      <Text color="text-[#fff]" variant="body">
                        Securities
                      </Text>
                      <Text weight="bold" variant="h2" color="text-[#fff]">
                        &#8358; {portfolioStats?.securities}
                      </Text>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            )}
        </div>
        {!!!portfolioReducer?.portfolioPerformanceIsLoading &&
          portfolio_items?.length === 0 &&
          portfolioReducer?.portfolioPerformanceData?.type === "portfolio/portfolioPerfomance/fulfilled" && (
            <div className="mt-4 flex flex-col gap-2 justify-center items-center w-full h-[550px] bg-white">
              <img src={EmptyState} alt="empty_state" />
              <Text variant="h3" weight="normal">
                You have no portfolios
              </Text>
              <Text variant="h3" weight="normal">
                Lets make building your wealth easier.
              </Text>
              <div>
                <Button
                  title="Start Investing"
                  className="h-fit px-16 py-6 whitespace-nowrap font-extrabold"
                  type="button"
                  textColor="#fff"
                  onClick={() => navigate("/products/all")}
                />
              </div>
            </div>
          )}
        <>
          <div className="w-full mt-4">
            {!!!portfolioReducer?.portfolioPerformanceIsLoading &&
              portfolio_items !== undefined &&
              portfolio_items?.length >= 1 && (
                <div className="w-full">
                  <Text variant="h3" weight="bold">
                    Portfolio and performance
                  </Text>
                </div>
              )}
            {portfolioReducer?.portfolioPerformanceIsLoading && (
              <div className="w-full flex gap-2">
                <Skeleton sx={{ bgcolor: "grey.200" }} variant="rectangular" width="345px" height={148} />
                <Skeleton sx={{ bgcolor: "grey.200" }} variant="rectangular" width="345px" height={148} />
                <Skeleton sx={{ bgcolor: "grey.200" }} variant="rectangular" width="345px" height={148} />
              </div>
            )}
            <div className="w-full mt-3 flex gap-2 no-scrollbar overflow-hidden overflow-x-auto">
              {!!!portfolioReducer?.portfolioPerformanceIsLoading &&
                portfolioReducer?.portfolioPerformanceData?.type === "portfolio/portfolioPerfomance/fulfilled" && (
                  <>
                    {portfolio_items !== undefined &&
                      portfolio_items?.length >= 1 &&
                      portfolio_items.map((data, index) => {
                        return (
                          <div
                            key={index}
                            onClick={() => {
                              handleOpenModal("view_details");
                              setCashAccountId(data?.portfolio_account_id);
                              setCustomerId(data?.customer_id);
                            }}
                            className={`cursor-pointer w-[345px] h-[148px] p-4 ${
                              index === 1 ? "bg-[#E2FFB7]" : index % 2 ? "bg-[#FFD8EF]" : "bg-[#65666A]"
                            }`}
                          >
                            <div className="flex flex-col justify-between h-full">
                              <div>
                                <Text
                                  variant="h3"
                                  weight="normal"
                                  color={`${
                                    index === 0
                                      ? "text-white"
                                      : index === 1
                                      ? "text-tertiary"
                                      : index % 3
                                      ? "text-white"
                                      : ""
                                  }`}
                                >
                                  {data?.account_type?.name}
                                </Text>
                                <Text
                                  variant="h4"
                                  weight="bold"
                                  format="tracking-wide"
                                  color={`${
                                    index === 0
                                      ? "text-white"
                                      : index === 1
                                      ? "text-tertiary"
                                      : index % 3
                                      ? "text-white"
                                      : ""
                                  }`}
                                >
                                  {currencyEntities[data?.currency?.symbol]} {data?.current_balance}
                                </Text>
                              </div>
                              <div className="flex justify-between w-full">
                                <Text
                                  variant="h4"
                                  weight="normal"
                                  color={`${
                                    index === 0
                                      ? "text-white"
                                      : index === 1
                                      ? "text-tertiary"
                                      : index % 3
                                      ? "text-white"
                                      : ""
                                  }`}
                                >
                                  + {currencyEntities[data?.currency?.symbol]} {data?.gains}
                                </Text>
                                <Text
                                  color={`${
                                    index === 0
                                      ? "text-white"
                                      : index === 1
                                      ? "text-tertiary"
                                      : index % 3
                                      ? "text-white"
                                      : ""
                                  }`}
                                  variant="h4"
                                  weight="bold"
                                  format="tracking-wide"
                                >
                                  {data?.accrued_credit_interest}%
                                </Text>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </>
                )}
            </div>
          </div>
          <div className="w-full mt-4">
            {!!!portfolioReducer?.portfolioPerformanceIsLoading &&
              portfolio_items !== undefined &&
              portfolio_items?.length >= 1 && (
                <div className="w-full">
                  <Text variant="h3" weight="bold">
                    Performance
                  </Text>
                </div>
              )}
            <div className="w-full flex lg:flex-row flex-col gap-3">
              {!!!portfolioReducer?.portfolioPerformanceIsLoading &&
                portfolio_items !== undefined &&
                portfolio_items?.length >= 1 && (
                  <div className="bg-BACKGROUND_WHITE p-6 lg:basis-2/3 h-[500px]">
                    <div className="flex justify-between">
                      <Text format="mb-3" weight="bold" variant="h4">
                        Investment Rate
                      </Text>
                      <Text format="mb-3" weight=" normal" variant="body">
                        Investment
                      </Text>
                    </div>
                    <div className="w-full">
                      <ResponsiveContainer width="95%" height={400}>
                        <LineChart
                          width={600}
                          height={800}
                          data={data}
                          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                        >
                          <XAxis dataKey="name" />
                          <Tooltip />
                          <CartesianGrid stroke="#f5f5f5" />
                          <Line type="monotone" dataKey="investment_returns" stroke="#0FC6C2" yAxisId={0} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}
              {!!!portfolioReducer?.portfolioSummaryIsLoading &&
                !!!portfolioReducer?.portfolioPerformanceIsLoading &&
                portfolio_items !== undefined &&
                portfolio_items?.length >= 1 && (
                  <div className="bg-[#FFF8F8] W-[100%] lg:basis-1/3 h-[500px] p-6">
                    <div className="w-full mb-10">
                      <Text weight="bold" variant="h3">
                        Performance summary
                      </Text>
                    </div>
                    <div className="w-full flex flex-col gap-6">
                      <div className="flex gap-3 border-b border-[#CCCCCC] pb-6">
                        <img src={totalEarnings} alt="icon" />
                        <div className="flex flex-col gap-1">
                          <Text weight="normal" variant="body">
                            Total earnings
                          </Text>
                          <Text weight="bold" variant="h4">
                            {portfolioSummary?.total_earnings ?? 0}
                          </Text>
                        </div>
                      </div>
                      <div className="flex gap-3 border-b border-[#CCCCCC] pb-6">
                        <img src={totalWithdrawals} alt="icon" />
                        <div className="flex flex-col gap-1">
                          <Text weight="normal" variant="body">
                            Total Withdrawals
                          </Text>
                          <Text weight="bold" variant="h4">
                            {portfolioSummary?.total_withdrawals ?? 0}
                          </Text>
                        </div>
                      </div>
                      <div className="flex gap-3 border-b border-[#CCCCCC] pb-6">
                        <img src={totalDeposits} alt="icon" />
                        <div className="flex flex-col gap-1">
                          <Text weight="normal" variant="body">
                            Total Deposits
                          </Text>
                          <Text weight="bold" variant="h4">
                            {portfolioSummary?.total_deposits ?? 0}
                          </Text>
                        </div>
                      </div>
                      <div className="flex gap-3 border-b border-[#CCCCCC] pb-6">
                        <img src={totalAssests} alt="icon" />
                        <div className="flex flex-col gap-1">
                          <Text weight="normal" variant="body">
                            Total Assets
                          </Text>
                          <Text weight="bold" variant="h4">
                            {portfolioSummary?.total_assets ?? 0}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
            </div>
          </div>
          <div className="w-full mt-4">
            {!!!portfolioReducer?.portfolioPerformanceIsLoading &&
              portfolio_items !== undefined &&
              portfolio_items?.length >= 1 && (
                <>
                  <div className="w-full">
                    <Text variant="h3" weight="bold">
                      Portfolio transactions
                    </Text>
                  </div>

                  <div className="w-full mb-6">
                    <div className="bg-[#F3F3F3] px-[4%] py-[2%] h-full flex items-center gap-4 flex-wrap w-full">
                      <SearchBar
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="search transactions"
                      />
                      <Text variant="body" weight="bold" format="mt-4">
                        Filter By
                      </Text>
                      <div className="">
                        <Input
                          className="w-full"
                          placeholder="*Start"
                          value={startDate}
                          name="start"
                          type="date"
                          handleChange={(e) => setStartDate(e.target.value)}
                        />
                      </div>
                      <Text variant="body" weight="bold" format="mt-4">
                        to
                      </Text>
                      <div className="">
                        <Input
                          className="w-full"
                          placeholder="*End"
                          value={endDate}
                          name="end"
                          type="date"
                          handleChange={(e) => setEndDate(e.target.value)}
                        />
                      </div>
                      <div>
                        <Button
                          title="Filter"
                          className="px-8 py-2 whitespace-nowrap font-extrabold border border-[#65666A]"
                          type="button"
                          size="small"
                          textColor="#fff"
                          onClick={() => handleFilter()}
                        />
                      </div>
                      <div>
                        <Button
                          onClick={() => clearFilter()}
                          title="clear filter"
                          className="cursor-pointer w-full border-none outline-none"
                          type="button"
                          backgroundColor="none"
                          textColor="#E32526"
                        />
                      </div>
                      <Text variant="body" weight="bold" format="mt-4">
                        {`Showing ${otherDetails?.page ?? 0} - ${otherDetails?.perPage ?? 0} of  ${
                          otherDetails?.total ?? 0
                        }`}
                      </Text>
                    </div>
                    <div className="w-full px-[4%] py-[2%] bg-white overflow-x-auto overflow-hidden no-scrollbar">
                      <div className="w-full flex justify-between mb-6">
                        <div className="basis-1/12">
                          <Text variant="h4" weight="bold">
                            S/N
                          </Text>
                        </div>
                        <div className="basis-1/12"></div>
                        <div className="basis-3/12">
                          <Text variant="h4" weight="bold">
                            Transaction
                          </Text>
                        </div>
                        <div className="basis-3/12">
                          <Text variant="h4" weight="bold">
                            Amount
                          </Text>
                        </div>
                        <div className="basis-3/12">
                          <Text variant="h4" weight="bold">
                            Status
                          </Text>
                        </div>
                      </div>
                      {portfolioReducer?.portfolioTransactionIsLoading && (
                        <div className="flex justify-center items-center h-full">
                          <Loader />
                        </div>
                      )}
                      {!!!portfolioReducer?.portfolioTransactionIsLoading &&
                        portfolioReducer?.portfolioTransaction?.type === "portfolio/portfolioTransaction/fulfilled" && (
                          <>
                            {portfolioReducer?.portfolioTransaction?.payload?.data?.data.map((history, index) => {
                              return (
                                <div key={history.id} className="w-full mb-6 flex justify-between">
                                  <div className="basis-1/12">
                                    <Text variant="h4" weight="bold">
                                      {index + 1}
                                    </Text>
                                  </div>
                                  <div className="basis-1/12">
                                    <img
                                      className="md:w-[40px] md:h-[40px] w-[30px] h-[30px]"
                                      src={arrowDeposit}
                                      alt="icon"
                                      loading="lazy"
                                    />
                                  </div>
                                  <div className="basis-3/12">
                                    <div>
                                      <Text variant="h4" weight="bold">
                                        {history?.channel.charAt(0).toUpperCase() + history?.channel.slice(1)} Deposit
                                      </Text>
                                      <Text variant="body" weight="normal">
                                        {moment(history?.paidAt).format("LLLL")}
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="basis-3/12">
                                    <Text variant="h4" weight="bold" color="text-[#00C48C]">
                                      {history?.currency} +{history?.amount}
                                    </Text>
                                  </div>
                                  <div className="basis-3/12">
                                    <Text
                                      variant="h4"
                                      weight="bold"
                                      format="bg-[#00C48C] text-center lg:w-[30%] md:w-[40%] w-[90%] p-2 rounded-lg"
                                      color="text-white"
                                    >
                                      {history?.status}
                                    </Text>
                                  </div>
                                </div>
                              );
                            })}
                            {portfolioReducer?.portfolioTransaction?.payload?.data?.data?.length <= 0 && (
                              <div className="w-full flex justify-center mt-4">
                                <Text variant="h3" weight="bold">
                                  No Data Avaliable
                                </Text>
                              </div>
                            )}
                          </>
                        )}
                      {!!!portfolioReducer?.portfolioTransactionIsLoading &&
                        portfolioReducer?.portfolioTransaction?.payload?.data?.data?.length >= 1 && (
                          <div className="flex justify-end pt-3">
                            <PaginationControlled
                              handlePaginationChange={handlePaginationChange}
                              totalNumberOfPages={otherDetails?.total}
                              page={paginationNumber}
                            />
                          </div>
                        )}
                    </div>
                  </div>
                </>
              )}
          </div>
        </>
      </div>
    </>
  );
}
