/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Text from "../../../../../components/Typography/Typography";
import downArrow from "../../../../../assets/icons/down_arrow.svg";
import downArrowWhite from "../../../../../assets/icons/white_small_logo.svg";
import {
  handleExistingCashAccount,
  reintializeState,
  setAccountType,
  setProductCode,
  setReferralCode,
} from "../../../../../store/slices/buyProductSlice";
import { handleResetStep } from "../../../../../store/slices/openAccountSlice";
import Loader from "../../../../../components/loader";

export default function BuyProducts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const dashboardReducer = useSelector((state) => state.dashboardReducer);
  const buyProductReducer = useSelector((state) => state.buyProductReducer);
  const firstName = dashboardReducer?.customerDetails?.payload?.data?.data?.firstname;
  const customerKycStep =
    dashboardReducer?.customerDetails?.payload?.data?.data?.tier_status === "TIER_0" ? true : false;
  const [activeExistingAccount, setActiveExistingAccount] = useState(false);
  const [isSelected, setIsSelected] = useState({
    self: false,
    dependent: false,
  });

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        if (customerKycStep) {
          navigate("/settings/accounts");
          dispatch(reintializeState());
          dispatch(handleResetStep());
          dispatch(handleExistingCashAccount());
        } else {
          dispatch(reintializeState());
          dispatch(handleResetStep());
          dispatch(handleExistingCashAccount());
        }
        if (location?.state !== null) {
          const myString = location?.state?.replace("?encoded_key=", "");
          const decodedString = atob(myString);
          const splitted = decodedString.split("-");
          dispatch(setProductCode(splitted[0]));
          dispatch(setReferralCode(splitted[1]));
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const handleToggleAccordion = (type) => {
    setActiveExistingAccount(false);
    setIsSelected(false);
    setIsSelected((prev) => ({
      ...prev,
      [type]: true,
    }));
  };

  const handleToggleCloseAccordion = (type) => {
    setActiveExistingAccount(false);
    setIsSelected((prev) => ({
      ...prev,
      [type]: false,
    }));
  };

  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="p-[4%]">
      <div className="flex flex-col gap-1 w-full">
        <Text color="text-black" weight="bold" variant="h3">
          Hi, {firstName}
        </Text>
        <Text color="text-black" weight="normal" variant="h3" format="tracking-wide">
          How would you like your account to be opened?
        </Text>
      </div>
      <div className="mt-4 w-full flex flex-col gap-2">
        <div className="flex flex-col gap-3">
          <div
            onClick={() => {
              !!!isSelected?.self ? handleToggleAccordion("self") : handleToggleCloseAccordion("self");
            }}
            className={`${
              isSelected?.self ? "bg-primary" : "bg-[#F8F8F8]"
            } p-[2%] lg:w-[534px] md:w-full w-full rounded-lg cursor-pointer flex justify-between items-center`}
          >
            <Text color={`${isSelected?.self ? "text-white" : null}`} weight="bold" variant="h4">
              Self
            </Text>
            <img
              src={isSelected?.self ? downArrowWhite : downArrow}
              alt="down_arrow"
              loading="lazy"
              className="w-[15px] h-[15px]"
            />
          </div>
          {isSelected?.self && (
            <>
              <div className="flex flex-col gap-1">
                <div
                  style={{ background: "linear-gradient(to right, #2B2B2B, 70%, #606161)" }}
                  className="p-[2%] lg:w-[534px] md:w-full w-full rounded-lg cursor-pointer"
                  onClick={() => {
                    navigate("/products/new_bank_account");
                    dispatch(setAccountType("MY_SELF"));
                  }}
                >
                  <Text color="text-white" weight="bold" variant="h4">
                    Create new account
                  </Text>
                </div>
                <div
                  style={{
                    background: `${
                      activeExistingAccount ? "#E32526" : "linear-gradient(to right, #2B2B2B, 70%, #606161)"
                    }`,
                  }}
                  className="p-[2%] lg:w-[534px] md:w-full w-full rounded-lg cursor-pointer flex justify-between items-center"
                  onClick={() => setActiveExistingAccount(!activeExistingAccount)}
                >
                  <Text color="text-white" weight="bold" variant="h4">
                    Use existing account details
                  </Text>
                  {activeExistingAccount && (
                    <img src={downArrowWhite} alt="down_arrow" loading="lazy" className="w-[15px] h-[15px]" />
                  )}
                </div>
              </div>
              {activeExistingAccount && (
                <div className="flex flex-col gap-1">
                  {buyProductReducer?.isExistingCashAccountIsLoaing && (
                    <div className="flex justify-center items-center h-full">
                      <Loader />
                    </div>
                  )}
                  {!!!buyProductReducer?.isExistingCashAccountIsLoaing &&
                    buyProductReducer?.existingAccountData?.type === "buyproduct/existingCashAccount/fulfilled" && (
                      <>
                        {buyProductReducer?.existingAccountData?.payload?.data?.data?.map((list, index) => {
                          return (
                            <div
                              key={index}
                              style={{ background: "linear-gradient(to right, #2B2B2B, 70%, #606161)" }}
                              className="p-[2%] lg:w-[534px] md:w-full w-full rounded-lg cursor-pointer"
                              onClick={() => {
                                navigate("/products/new_bank_account", { state: list });
                                dispatch(setAccountType("MY_SELF"));
                              }}
                            >
                              <Text color="text-white" weight="bold" variant="h4">
                                {list?.ACCOUNTTYPE}
                              </Text>
                            </div>
                          );
                        })}
                      </>
                    )}
                </div>
              )}
            </>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <div
            onClick={() => {
              !!!isSelected?.dependent ? handleToggleAccordion("dependent") : handleToggleCloseAccordion("dependent");
            }}
            className={`${
              isSelected?.dependent ? "bg-primary" : "bg-[#F8F8F8]"
            } p-[2%] lg:w-[534px] md:w-full w-full rounded-lg cursor-pointer flex justify-between items-center`}
          >
            <Text color={`${isSelected?.dependent ? "text-white" : null}`} weight="bold" variant="h4">
              Dependent
            </Text>
            <img
              src={isSelected?.dependent ? downArrowWhite : downArrow}
              alt="down_arrow"
              loading="lazy"
              className="w-[15px] h-[15px]"
            />
          </div>
          {isSelected?.dependent && (
            <div className="flex flex-col gap-1">
              <div
                style={{ background: "linear-gradient(to right, #2B2B2B, 70%, #606161)" }}
                className="p-[2%] lg:w-[534px] md:w-full w-full rounded-lg cursor-pointer"
                onClick={() => {
                  navigate("/products/dependent_information", { state: "minor" });
                  dispatch(setAccountType("DEPENDENT_MINOR"));
                }}
              >
                <Text color="text-white" weight="bold" variant="h4">
                  Minor (Less than 18 years)
                </Text>
              </div>
              <div
                style={{ background: "linear-gradient(to right, #2B2B2B, 70%, #606161)" }}
                className="p-[2%] lg:w-[534px] md:w-full w-full rounded-lg cursor-pointer"
                onClick={() => {
                  navigate("/products/dependent_information", { state: "adult" });
                  dispatch(setAccountType("DEPENDENT_ADULT"));
                }}
              >
                <Text color="text-white" weight="bold" variant="h4">
                  Adult
                </Text>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
