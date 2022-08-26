import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Button from "../../../../components/Button";
import Input from "../../../../components/formFields/inputs";
import Loader from "../../../../components/loader";
import { SearchBar } from "../../../../components/SearchBar";
import Text from "../../../../components/Typography/Typography";
import arrowDeposit from "../../../../assets/icons/arrow_deposit.svg";
import { handleGetDepositHistory } from "../../../../store/slices/transactionSlice";
import PaginationControlled from "../../../../components/Pagination";

export default function DepositHistory() {
  const transactionReducer = useSelector((state) => state.transactionReducer);
  const depositHistoryData = transactionReducer?.depositHistoryData?.payload?.data?.data ?? [];
  const otherDetails = transactionReducer?.depositHistoryData?.payload?.data?.metadata;
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [paginationNumber, setPaginationNumber] = useState(1);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const handlePaginationChange = (_, page) => {
    setPaginationNumber(page);
    setSearchText("");
  };

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        dispatch(handleGetDepositHistory({ paginationNumber }));
      }
    })();
    return () => {
      mounted = false;
    };
  }, [dispatch, paginationNumber]);

  const handleFilter = () => {
    if (searchText !== "" || startDate !== null || endDate !== null) {
      setPaginationNumber(1);
      dispatch(handleGetDepositHistory({ paginationNumber, searchText, startDate, endDate }));
    }
    return null;
  };

  return (
    <>
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
        <Text variant="body" weight="bold" format="mt-4">
          {`Showing ${otherDetails?.page ?? 0} - ${otherDetails?.perPage ?? 0} of  ${otherDetails?.total ?? 0}`}
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
        {transactionReducer?.depositHistoryIsLoading && (
          <div className="flex justify-center items-center h-full">
            <Loader />
          </div>
        )}
        {!!!transactionReducer?.depositHistoryIsLoading && depositHistoryData.length <= 0 && (
          <div className="w-full flex justify-center mt-[8%]">
            <Text variant="h3" weight="bold">
              {transactionReducer?.depositHistoryData?.payload?.data?.message}
            </Text>
          </div>
        )}
        {depositHistoryData.length >= 1 &&
          transactionReducer?.depositHistoryData?.type === "transactions/depositHistory/fulfilled" &&
          !!!transactionReducer?.depositHistoryIsLoading && (
            <>
              {depositHistoryData.map((history, index) => {
                return (
                  <div key={index} className="w-full mb-6 flex justify-between">
                    <div className="basis-1/12">
                      <Text variant="h4" weight="bold">
                        {history.id}
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
            </>
          )}
        {!!!transactionReducer?.depositHistoryIsLoading && depositHistoryData.length >= 1 && (
          <div className="flex justify-end pt-3">
            <PaginationControlled
              handlePaginationChange={handlePaginationChange}
              totalNumberOfPages={otherDetails?.total}
              page={paginationNumber}
            />
          </div>
        )}
      </div>
    </>
  );
}
