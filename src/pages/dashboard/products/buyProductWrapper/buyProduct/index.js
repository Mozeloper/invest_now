import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Text from "../../../../../components/Typography/Typography";
import downArrow from "../../../../../assets/icons/down_arrow.svg";
import downArrowWhite from "../../../../../assets/icons/white_small_logo.svg";

export default function BuyProducts() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeExistingAccount, setActiveExistingAccount] = useState(false);
  const [isSelected, setIsSelected] = useState({
    self: false,
    dependent: false,
  });

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
          Hi, Moses
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
                  onClick={() => navigate("/products/new_bank_account", { state: location?.state })}
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
                  <div
                    style={{ background: "linear-gradient(to right, #2B2B2B, 70%, #606161)" }}
                    className="p-[2%] lg:w-[534px] md:w-full w-full rounded-lg cursor-pointer"
                    onClick={() => navigate("/products/new_bank_account", { state: location?.state })}
                  >
                    <Text color="text-white" weight="bold" variant="h4">
                      Your money market account
                    </Text>
                  </div>
                  <div
                    style={{ background: "linear-gradient(to right, #2B2B2B, 70%, #606161)" }}
                    className="p-[2%] lg:w-[534px] md:w-full w-full rounded-lg cursor-pointer"
                    onClick={() => navigate("/products/new_bank_account", { state: location?.state })}
                  >
                    <Text color="text-white" weight="bold" variant="h4">
                      Your stock trading account
                    </Text>
                  </div>
                  <div
                    style={{ background: "linear-gradient(to right, #2B2B2B, 70%, #606161)" }}
                    className="p-[2%] lg:w-[534px] md:w-full w-full rounded-lg cursor-pointer"
                    onClick={() => navigate("/products/new_bank_account", { state: location?.state })}
                  >
                    <Text color="text-white" weight="bold" variant="h4">
                      Your security account
                    </Text>
                  </div>
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
                onClick={() => navigate("/products/dependent_information", { state: "minor" })}
              >
                <Text color="text-white" weight="bold" variant="h4">
                  Minor (Less than 18 years)
                </Text>
              </div>
              <div
                style={{ background: "linear-gradient(to right, #2B2B2B, 70%, #606161)" }}
                className="p-[2%] lg:w-[534px] md:w-full w-full rounded-lg cursor-pointer"
                onClick={() => navigate("/products/dependent_information", { state: "adult" })}
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
