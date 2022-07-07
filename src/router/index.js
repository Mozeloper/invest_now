/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import Dashboard from "../pages/dashboard";
import SplashScreen from "../pages";
import LoginLayout from "../pages/auth/login";
import SignUpLayout from "../pages/auth/signUp";
import NotFound from "../pages/404";
import BvnVerify from "../pages/auth/signUp/bvnVerify";
import ProfileUpdate from "../pages/auth/signUp/profileUpdate";
import CreatePassword from "../pages/auth/signUp/createPassword";
import OTPverify from "../pages/auth/signUp/otpverify";
import Login from "../pages/auth/login/login";
import ForgetPassword from "../pages/auth/forgetPassword";

import AppLayout from "../pages/dashboard/component/layout";
import Portfolio from "../pages/dashboard/portfolio";
import Products from "../pages/dashboard/products";
import Transactions from "../pages/dashboard/transactions";
import Loans from "../pages/dashboard/loans";
import LiveTrading from "../pages/dashboard/liveTrading";
import Reports from "../pages/dashboard/reports";
import Settings from "../pages/dashboard/settings";
import Accounts from "../pages/dashboard/settings/account";
import ContactUs from "../pages/dashboard/settings/contactUs";
import Faq from "../pages/dashboard/settings/faq";
import Security from "../pages/dashboard/settings/security";

function InappPrivateRoute() {
  const { isLoggedIn } = useSelector((state) => state.authReducer);
  const isAuthed = isLoggedIn;
  return isAuthed ? (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ) : (
    <Navigate to="/login" />
  );
}

function AuthappPrivateRoute() {
  const { isLoggedIn } = useSelector((state) => state.authReducer);
  const isAuthed = !isLoggedIn;
  return isAuthed ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/dashboard" />
  );
}

export default function AppRoute() {
  return (
    <div>
      <Routes>
        {/* <Route element={<AuthappPrivateRoute />}> */}
        <Route path="/" element={<SplashScreen />} />
        <Route element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/forget_password" element={<ForgetPassword />} />
        </Route>
        <Route element={<SignUpLayout />}>
          <Route path="/bvn_verification" element={<BvnVerify />} />
          <Route path="/profile_update" element={<ProfileUpdate />} />
          <Route path="/otp_verification" element={<OTPverify />} />
          <Route path="/create_password" element={<CreatePassword />} />
        </Route>
        {/* </Route> */}

        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/products" element={<Products />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/live_trading" element={<LiveTrading />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings/*" element={<Settings />}>
            <Route path="accounts" element={<Accounts />} />
            <Route path="security" element={<Security />} />
            <Route path="faq" element={<Faq />} />
            <Route path="contact_us" element={<ContactUs />} />
          </Route>
        </Route>
        <Route path="/Not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/Not-found" replace={true} />} />
      </Routes>
    </div>
  );
}
