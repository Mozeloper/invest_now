import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Skeleton } from "@mui/material";
import profit from "../../../../../assets/icons/profit.svg";
import close from "../../../../../assets/icons/close_btn.svg";
import Text from "../../../../../components/Typography/Typography";
import { handleSlidingRating } from "../../../../../store/slices/dashboardSlice";

export default function ViewDailyRates({ setViewDailyRates }) {
  const dispatch = useDispatch();

  const dashboardSummaryDetails = useSelector((state) => state?.dashboardReducer);
  const slidingRate = dashboardSummaryDetails?.slidingRate;
  console.log(slidingRate);

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        dispatch(handleSlidingRating());
      }
    })();
    return () => {
      mounted = false;
    };
  }, [dispatch]);

  return (
    <div className="p-[4%]">
      <div className="flex justify-end mb-3">
        <img
          className="cursor-pointer h-[50px] w-[50px]"
          src={close}
          alt="close_btn"
          onClick={() => setViewDailyRates(false)}
        />
      </div>
      <div className="mt-2">
        <Text variant="h2" weight="bold">
          Daily Market Rate
        </Text>
      </div>
      {dashboardSummaryDetails?.slidingRateIsLoading ? (
        <div className="mt-16">
          <Skeleton sx={{ bgcolor: "grey.200" }} variant="rectangular" width="100%" height={500} />
        </div>
      ) : (
        <div className="mt-16 overflow-y-auto overflow-hidden no-scrollbar W-[100%] lg:basis-1/3 h-[529px] p-6">
          <div className="flex flex-col gap-6">
            {slidingRate?.type === "dashboard/rating/fulfilled" &&
              slidingRate?.payload?.data?.data.map((list, index) => {
                return (
                  <div key={index} className="bg-[#F8F0F0] w-full py-4 px-3 rounded-lg flex justify-between">
                    <Text format="self-center" weight="bold" variant="h4">
                      {list?.fundName}
                    </Text>
                    <div className="flex items-center gap-2">
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
  );
}
