import React from "react";
import Text from "../../../../components/Typography/Typography";
// import logo from "../../../../assets/icons/white_logo.svg";
import { Outlet } from "react-router-dom";

export default function BuyProductWrapper() {
  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="w-full relative">
      <div className="w-full h-[122px] px-[3%] bg-red flex justify-between lg:items-center md:items-start lg:pt-0 md:pt-4 pt-4">
        <Text color="text-BACKGROUND_WHITE" weight="bold" variant="h2">
          Open an account
        </Text>
        {/* <img src={logo} alt="logo" loading="lazy" className="h-[24px] w-[148px]" /> */}
      </div>
      <div className="absolute xl:w-[900px] lg:w-[700px] md:w-[600px] w-full bg-[#FFF8F8] min-h-[667px] h-auto inset-x-0 shadow-md  mx-auto lg:-mt-10 md:-mt-12 -mt-16 rounded-lg p-[4%]">
        <Outlet />
      </div>
    </div>
  );
}
