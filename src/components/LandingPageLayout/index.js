import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import LandingHeader from "./LandingHeader";

export default function WrapperLayout() {
  return (
    <div className="bg-BACKGROUND_WHITE w-full max-w-full overflow-hidden">
      <LandingHeader />
      <Outlet />
      <Footer />
    </div>
  );
}
