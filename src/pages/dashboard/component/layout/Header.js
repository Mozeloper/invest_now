import React from "react";
import Text from "../../../../components/Typography/Typography";
import NotificationIcon from "../../../../assets/icons/notification_icon.svg";
import ratesIcon from "../../../../assets/icons/rates.svg";
import { SearchBar } from "../../../../components/SearchBar";

export default function Header() {
  return (
    <div className="bg-BACKGROUND_WHITE h-[88px] fixed w-full lg:w-[84%] z-50">
      <div className="hidden h-[88px] w-full lg:block p-4">
        <div className="w-full flex gap-4 justify-end items-center">
          <SearchBar placeholder="search transactions, products, portfolios e.t.c" />
          <div className="flex gap-2 justify-center items-center">
            <img src={ratesIcon} alt="notification_icon" className="w-[22px] h-[12px]" />
            <Text variant="h4">View daily rates</Text>
          </div>
          <img src={NotificationIcon} alt="notification_icon" className="w-[40px] h-[40px] cursor-pointer" />
        </div>
      </div>
      <div className="lg:pl-[16%] lg:hidden h-[88px] w-full flex justify-between">
        <div className="w-full flex justify-around items-center">
          <SearchBar placeholder="search transactions, products, portfolios e.t.c" />
          <div className="flex gap-2 justify-center items-center">
            <img src={ratesIcon} alt="notification_icon" className="w-[22px] h-[12px]" />
            <Text variant="h4">View daily rates</Text>
          </div>
          <img src={NotificationIcon} alt="notification_icon" className="w-[40px] h-[40px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
