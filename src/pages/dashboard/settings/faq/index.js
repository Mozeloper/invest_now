import React, { useState } from "react";
import Text from "../../../../components/Typography/Typography";
import rightArrow from "../../../../assets/icons/big_chrevon_right.svg";
import downArrow from "../../../../assets/icons/down_arrow.svg";

export default function Faq() {
  const [isActive, setIsActive] = useState({
    investnow_related: false,
    mutual_funds: false,
    equity: false,
  });

  const handleToggleAccordion = (type) => {
    setIsActive(false);
    setIsActive((prev) => ({
      ...prev,
      [type]: true,
    }));
  };

  const handleToggleCloseAccordion = (type) => {
    setIsActive((prev) => ({
      ...prev,
      [type]: false,
    }));
  };

  return (
    <>
      <div className="w-full p-4 h-auto bg-secondary">
        <Text weight="bold" variant="body" color="text-headerColor" format="mb-4">
          FREQUENTLY ASKED QUESTIONS
        </Text>

        <div
          onClick={() => {
            !!!isActive?.investnow_related
              ? handleToggleAccordion("investnow_related")
              : handleToggleCloseAccordion("investnow_related");
          }}
          className="px-[2%] my-6 flex justify-between cursor-pointer"
        >
          <Text weight="bold" variant="h3" color="text-headerColor">
            Investnow Related
          </Text>
          {isActive?.investnow_related ? (
            <img src={downArrow} alt="down_arrow" />
          ) : (
            <img src={rightArrow} alt="right_arrow" />
          )}
        </div>
        {isActive?.investnow_related && (
          <div className="px-[4%] flex flex-col gap-4">
            <Text weight="normal" variant="h4" color="text-headerColor">
              What is InvestNow?
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              How can I learn more on the Company products on InvestNow?
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              How can I activate my account for online access?
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              How do I view my portfolio?
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              How do I fund my account through investnow?
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              What happens if I forget my password?
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              How can I access the portal if the link sent to me has expired?
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              How do I gain access to more information that will help me make better investment choices.
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              What else can I do with investnow?
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              I still have some enquiries not covered here. How can I get help?
            </Text>
          </div>
        )}
        <div className="my-10">
          <div
            onClick={() => {
              !!!isActive?.mutual_funds
                ? handleToggleAccordion("mutual_funds")
                : handleToggleCloseAccordion("mutual_funds");
            }}
            className="px-[2%] my-3 flex justify-between cursor-pointer"
          >
            <Text weight="bold" variant="h3" color="text-headerColor">
              Mutual Funds & Trusteeship
            </Text>
            {isActive?.mutual_funds ? (
              <img src={downArrow} alt="down_arrow" />
            ) : (
              <img src={rightArrow} alt="right_arrow" />
            )}
          </div>
          {isActive?.mutual_funds && (
            <div className="px-[4%] flex flex-col gap-4 my-3">
              <Text weight="normal" variant="h4" color="text-headerColor">
                How do I subscribe to United Capital Asset Management Mutual Funds?
              </Text>
              <Text weight="normal" variant="h4" color="text-headerColor">
                How do I redeem my United Capital Asset Management Mutual Fund investment?
              </Text>
              <Text weight="normal" variant="h4" color="text-headerColor">
                How do I redeem my Short term Portfolio Management Scheme (SPMS) and Trusts Placements?
              </Text>
              <Text weight="normal" variant="h4" color="text-headerColor">
                Can I trade with a Mutual Fund account?
              </Text>
              <Text weight="normal" variant="h4" color="text-headerColor">
                Can I invest in Mutual Funds or trusts accounts while having a securities account?
              </Text>
            </div>
          )}
        </div>
        <div
          onClick={() => {
            !!!isActive?.equity ? handleToggleAccordion("equity") : handleToggleCloseAccordion("equity");
          }}
          className="px-[2%] my-3 flex justify-between cursor-pointer"
        >
          <Text weight="bold" variant="h3" color="text-headerColor">
            Equities Trading
          </Text>
          {isActive?.equity ? <img src={downArrow} alt="down_arrow" /> : <img src={rightArrow} alt="right_arrow" />}
        </div>
        {isActive?.equity && (
          <div className="px-[4%] flex flex-col gap-4 my-3">
            <Text weight="normal" variant="h4" color="text-headerColor">
              How do I trade using the investnow platform?
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              What does the error message ‘You do not have a valid CSCS account’ mean?
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              Will my proceeds from trading be paid directly into my account?
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              I would like to buy shares and I am not sure what to do?
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              How are dividends paid?
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              Do I need to fund the account before indicating the shares I would like to purchase?
            </Text>
          </div>
        )}
      </div>
    </>
  );
}
