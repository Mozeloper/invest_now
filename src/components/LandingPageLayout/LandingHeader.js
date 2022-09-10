import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Text from "../Typography/Typography";
import Logo from "../../assets/icons/logo.svg";

export default function LandingHeader() {
  const navigate = useNavigate();
  const [showDropDownMenu, setShowDropDownMenu] = useState({
    mutual_funds: false,
    trust: false,
    securities: false,
    analysis: false,
  });

  const handleCategoryClickOpen = (type) => {
    setShowDropDownMenu((prev) => ({
      ...prev,
      [type]: true,
    }));
  };

  const handleCategoryClickClose = (type) => {
    setShowDropDownMenu((prev) => ({
      ...prev,
      [type]: false,
    }));
  };
  return (
    <>
      <div className="z-20 w-full bg-BACKGROUND_WHITE shadow flex gap-8 lg:gap-16 justify-between header">
        <img
          onClick={() => navigate("/")}
          src={Logo}
          alt="logo"
          loading="lazy"
          className="min-w-[150px] max-w-[150px] self-center cursor-pointer"
        />
        <div className="w-full md:flex gap-4 hidden">
          <div
            onMouseEnter={() => handleCategoryClickOpen("mutual_funds")}
            onMouseLeave={() => handleCategoryClickClose("mutual_funds")}
            className="hover:bg-primary flex items-center hover:text-white px-[2%] font-normal text-xl
                whitespace-nowrap cursor-pointer relative"
          >
            Mutual funds
            {showDropDownMenu?.mutual_funds && (
              <div
                style={{ minWidth: "500px", backgroundColor: "#FFF0F0", height: "auto" }}
                className="absolute left-0 top-[72px] z-10 p-[25%] flex flex-col gap-6 cursor-default"
              >
                <div className="w-full flex justify-between">
                  <Text
                    onClick={() => navigate("/Mutual_Funds/fixed_income_fund", { state: "AM_BON" })}
                    variant="h3"
                    format="font-normal cursor-pointer"
                    color="text-[#000000]"
                  >
                    Fixed Income Fund
                  </Text>
                  <Text
                    onClick={() => navigate("/Mutual_Funds/equity_fund", { state: "AM_EQ" })}
                    variant="h3"
                    format="font-normal cursor-pointer"
                    color="text-[#000000]"
                  >
                    Equity Fund
                  </Text>
                </div>
                <div className="w-full flex justify-between">
                  <Text
                    onClick={() => navigate("/Mutual_Funds/money_market_fund", { state: "AM" })}
                    variant="h3"
                    format="font-normal cursor-pointer"
                    color="text-[#000000]"
                  >
                    Money Market Fund
                  </Text>
                  <Text
                    onClick={() => navigate("/Mutual_Funds/balanced_fund", { state: "AM_BF" })}
                    variant="h3"
                    format="font-normal cursor-pointer"
                    color="text-[#000000]"
                  >
                    Balanced Fund
                  </Text>
                </div>
                <div className="w-full flex justify-between">
                  <Text
                    onClick={() => navigate("/Mutual_Funds/wealth_for_women_fund", { state: "AM_WFW" })}
                    variant="h3"
                    format="font-normal cursor-pointer"
                    color="text-[#000000]"
                  >
                    Wealth for Women Fund
                  </Text>
                  <Text
                    onClick={() => navigate("/Mutual_Funds/sukuk_fund", { state: "AM_SUKUK" })}
                    variant="h3"
                    format="font-normal cursor-pointer"
                    color="text-[#000000]"
                  >
                    Sukuk Fund
                  </Text>
                </div>
                <div className="w-full flex justify-between">
                  <Text
                    onClick={() => navigate("/Mutual_Funds/nigerian_eurobond_fund", { state: "AM_EURO" })}
                    variant="h3"
                    format="font-normal cursor-pointer"
                    color="text-[#000000]"
                  >
                    Nigerian Eurobond Fund
                  </Text>
                </div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => handleCategoryClickOpen("trust")}
            onMouseLeave={() => handleCategoryClickClose("trust")}
            className="hover:bg-primary relative flex items-center hover:text-white px-[2%] font-normal text-xl whitespace-nowrap cursor-pointer"
          >
            Trusts
            {showDropDownMenu?.trust && (
              <div
                style={{ backgroundColor: "#FFF0F0", height: "auto", width: "auto" }}
                className="absolute left-0 top-[72px] z-10 p-[25%] flex flex-col gap-6 cursor-default"
              >
                <Text
                  onClick={() => navigate("/trust/education_trust", { state: "T_EDU" })}
                  variant="h3"
                  format="font-normal cursor-pointer"
                  color="text-[#000000]"
                >
                  Education Trust
                </Text>
                <Text
                  onClick={() => navigate("/trust/nigerian_diaspora_trust", { state: "T_EURO" })}
                  variant="h3"
                  format="font-normal cursor-pointer"
                  color="text-[#000000]"
                >
                  Nigeria Diaspora Trust
                </Text>
                <Text
                  onClick={() => navigate("/trust/private_investment", { state: "T" })}
                  variant="h3"
                  format="font-normal cursor-pointer"
                  color="text-[#000000]"
                >
                  Private Investment
                </Text>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => handleCategoryClickOpen("securities")}
            onMouseLeave={() => handleCategoryClickClose("securities")}
            className="hover:bg-primary relative flex items-center hover:text-white px-[2%] font-normal text-xl whitespace-nowrap cursor-pointer"
          >
            Securities
            {showDropDownMenu?.securities && (
              <div
                style={{ backgroundColor: "#FFF0F0", height: "auto", width: "auto" }}
                className="absolute left-0 top-[72px] z-10 p-[25%] flex flex-col gap-6 cursor-default"
              >
                <Text
                  onClick={() => navigate("/securities/stock_trading", { state: "S" })}
                  variant="h3"
                  format="font-normal cursor-pointer"
                  color="text-[#000000]"
                >
                  Stock Trading
                </Text>
                <Text
                  onClick={() => navigate("/securities/utrace", { state: "S_UT" })}
                  variant="h3"
                  format="font-normal cursor-pointer"
                  color="text-[#000000]"
                >
                  Utrace
                </Text>
              </div>
            )}
          </div>
          {/* <div className="hover:bg-primary relative flex items-center hover:text-white px-[2%] font-normal text-xl whitespace-nowrap cursor-pointer">
            SME financing
          </div> */}
          <div
            onMouseEnter={() => handleCategoryClickOpen("analysis")}
            onMouseLeave={() => handleCategoryClickClose("analysis")}
            className="hover:bg-primary relative flex items-center hover:text-white px-[2%] font-normal text-xl whitespace-nowrap cursor-pointer"
          >
            Analysis
            {showDropDownMenu?.analysis && (
              <div
                style={{ backgroundColor: "#FFF0F0", height: "auto", width: "auto" }}
                className="absolute left-0 top-[72px] z-10 p-[25%] flex flex-col gap-6 cursor-default"
              >
                <Text
                  // onClick={() => navigate("/analysis/weekly_investment_view")}
                  variant="h3"
                  format="font-normal cursor-pointer"
                  color="text-[#000000]"
                >
                  Weekly Investment View
                </Text>
                <Text
                  // onClick={() => navigate("/analysis/pan_african_monitor")}
                  variant="h3"
                  format="font-normal cursor-pointer"
                  color="text-[#000000]"
                >
                  Pan African Monitor
                </Text>
                <Text
                  // onClick={() => navigate("/analysis/daily_price_list")}
                  variant="h3"
                  format="font-normal cursor-pointer"
                  color="text-[#000000]"
                >
                  Daily Price List
                </Text>
                <Text
                  // onClick={() => navigate("/analysis/interest_calculator")}
                  variant="h3"
                  format="font-normal cursor-pointer"
                  color="text-[#000000]"
                >
                  Interest Calculator
                </Text>
                <Text
                  // onClick={() => navigate("/analysis/mutual_funds_return")}
                  variant="h3"
                  format="font-normal cursor-pointer"
                  color="text-[#000000]"
                >
                  Mutual Funds Return
                </Text>
              </div>
            )}
          </div>
        </div>
        <div className="lg:flex hidden lg:flex-row gap-4 self-center">
          <Button
            title="Sign In"
            onClick={() => navigate("/login")}
            className="px-12 py-4 whitespace-nowrap font-extrabold capitalize"
            style={{ border: "3px solid #E32526" }}
          />
          <Button
            title="Create a free account"
            backgroundColor="#65666A"
            onClick={() => navigate("/bvn_verification")}
            className="h-fit px-12 py-6 whitespace-nowrap font-extrabold"
            style={{ fontWeigth: "bold" }}
          />
        </div>
      </div>
    </>
  );
}
