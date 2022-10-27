import React from "react";

export default function StepsIndicatorLoan({ currentStep }) {
  return (
    <div className="mb-10">
      <div className="mx-4">
        <div className="flex items-center">
          <div className="flex items-center relative">
            <div
              className={
                currentStep >= 1
                  ? "rounded-full transition duration-500 ease-in-out h-[32px] w-[32px] flex items-center justify-center text-center bg-[#E32526] text-white font-extrabold"
                  : "rounded-full transition duration-500 ease-in-out h-[32px] w-[32px] flex items-center justify-center text-center text-[#A4A5A7] font-extrabold"
              }
            >
              <h2>1</h2>
            </div>
            <div className={`absolute top-0 -ml-10 text-center mt-10 w-32 text-base font-bold text-primary`}>
              Loan Details
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              currentStep > 1 ? "border-[#E32526]" : "border-[#D9D9D9]"
            }`}
          ></div>
          <div className="flex items-center relative">
            <div
              className={
                currentStep >= 2
                  ? "rounded-full transition duration-500 ease-in-out h-[32px] w-[32px] flex items-center justify-center text-center bg-[#E32526] text-white font-extrabold"
                  : "rounded-full transition duration-500 ease-in-out h-[32px] w-[32px] flex items-center justify-center text-center text-[#A4A5A7] font-extrabold bg-[#D9D9D9]"
              }
            >
              <h2>2</h2>
            </div>
            <div
              className={`absolute top-0 -ml-10 text-center mt-10 w-32 text-base whitespace-nowrap ${
                currentStep >= 2 ? "text-primary font-bold" : "text-[#65666A] font-normal"
              }`}
            >
              Add repayment card
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              currentStep > 2 ? "border-[#E32526]" : "border-[#D9D9D9]"
            }`}
          ></div>
          <div className="flex items-center text-gray-500 relative">
            <div
              className={
                currentStep === 3
                  ? "rounded-full transition duration-500 ease-in-out h-[32px] w-[32px] flex items-center justify-center text-center bg-[#E32526] text-white font-extrabold"
                  : "rounded-full transition duration-500 ease-in-out h-[32px] w-[32px] flex items-center justify-center text-center text-[#A4A5A7] font-extrabold bg-[#D9D9D9]"
              }
            >
              <h2>3</h2>
            </div>
            <div
              className={`absolute top-0 -ml-10 text-center mt-10 w-32 text-base font-bold whitespace-nowrap ${
                currentStep >= 3 ? "text-primary font-bold" : "text-[#65666A] font-normal"
              }`}
            >
              Loan summary
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
