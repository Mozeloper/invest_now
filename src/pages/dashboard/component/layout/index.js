import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

export default function AppLayout() {
  return (
    <div className="w-full h-full flex">
      <div className="lg:w-[16%] fixed lg:block hidden">
        <SideBar />
      </div>
      <div className="lg:ml-[16%] lg:w-[84%] w-full">
        <Header />
        <div className="w-full mt-[88px] p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
