import React, { useState } from "react";
import Text from "../../../../components/Typography/Typography";
import NotificationIcon from "../../../../assets/icons/notification_icon.svg";
import ratesIcon from "../../../../assets/icons/rates.svg";
import { SearchBar } from "../../../../components/SearchBar";
import SideLeftModal from "../../../../components/modals/SideLeftModal";
import MobileSideBar from "./mobileSideBar";
import NotificationModal from "../../../../components/modals/notificationModal";
import Notifications from "./other/notifications";
import SideRightModal from "../../../../components/modals/SideRightModal";
import ViewDailyRates from "./other/viewDailyRates";

export default function Header() {
  const [sideBar, setsideBar] = useState(false);
  const [notificationBar, setNotificationBar] = useState(false);
  const [viewDailyRates, setViewDailyRates] = useState(false);

  return (
    <>
      <SideRightModal modalWidth="500px" bgColor={true} isOpen={viewDailyRates}>
        <ViewDailyRates setViewDailyRates={setViewDailyRates} />
      </SideRightModal>
      <SideLeftModal setsideBar={() => setsideBar(false)} modalHeight="100vh" modalWidth="375px" isOpen={sideBar}>
        <MobileSideBar />
      </SideLeftModal>
      <NotificationModal setNotificationBar={() => setNotificationBar(false)} isOpen={notificationBar}>
        <Notifications setNotificationBar={() => setNotificationBar(false)} />
      </NotificationModal>
      <div className="bg-BACKGROUND_WHITE h-[88px] fixed w-full lg:w-[84%] z-50">
        <div className="hidden h-[88px] w-full lg:block p-4">
          <div className="w-full flex gap-4 justify-end items-center">
            <SearchBar placeholder="search transactions, products, portfolios e.t.c" />
            <div
              onClick={() => setViewDailyRates(true)}
              className="flex gap-2 justify-center items-center cursor-pointer"
            >
              <img src={ratesIcon} alt="notification_icon" className="w-[22px] h-[12px]" />
              <Text variant="h4">View daily rates</Text>
            </div>
            <img
              onClick={() => setNotificationBar(true)}
              src={NotificationIcon}
              alt="notification_icon"
              className="w-[40px] h-[40px] cursor-pointer"
            />
          </div>
        </div>
        <div className="lg:pl-[16%] lg:hidden h-[88px] w-full flex justify-between">
          <div onClick={() => setsideBar(true)} className="my-auto ml-3 cursor-pointer">
            <div className="hambuger"></div>
            <div className="hambuger"></div>
            <div className="hambuger"></div>
          </div>
          <div className="w-full flex justify-around items-center">
            <SearchBar placeholder="search transactions, products, portfolios e.t.c" />

            <div
              onClick={() => setViewDailyRates(true)}
              className="flex gap-2 justify-center items-center cursor-pointer"
            >
              <img src={ratesIcon} alt="rate_icon" className="w-[22px] h-[12px]" />
              <Text variant="h4">View daily rates</Text>
            </div>
            <img
              onClick={() => setNotificationBar(true)}
              src={NotificationIcon}
              alt="notification_icon"
              className="w-[40px] h-[40px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
