import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backbutton from "../../../assets/icons/loan_back_button.svg";
import StepsIndicatorLoan from "../../../components/StepsIndicatorLoan";
import Text from "../../../components/Typography/Typography";
import LoanDetails from "./components/LoanDetails";
import LoanSummary from "./components/LoanSummary";

export default function CreateLoan() {
  const [stepIndex, setStepIndex] = useState(1);
  const navigate = useNavigate();

  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="py-[.5%] px-[8%] w-full">
      <img src={backbutton} alt="back_button" className="mb-2 cursor-pointer" onClick={() => navigate("/loans")} />
      <div className="w-full relative">
        <div className="w-full h-[122px] rounded-lg px-[3%] bg-red flex justify-between lg:items-center md:items-start lg:pt-0 md:pt-4 pt-4">
          <Text color="text-BACKGROUND_WHITE" weight="bold" variant="h2">
            Loan origination
          </Text>
        </div>
        <div className="absolute xl:w-[900px] lg:w-[700px] md:w-[600px] w-full bg-BACKGROUND_WHITE min-h-[667px] h-auto inset-x-0 shadow-md  mx-auto lg:-mt-10 md:-mt-12 -mt-16 rounded-lg p-[3%]">
          <div className="md:px-[15%] px-[5%]">
            <StepsIndicatorLoan currentStep={stepIndex} />
            {(stepIndex === 1 || stepIndex === 2) && <LoanDetails setStepIndex={setStepIndex} />}
            {stepIndex === 3 && <LoanSummary setStepIndex={setStepIndex} />}
          </div>
        </div>
      </div>
    </div>
  );
}
