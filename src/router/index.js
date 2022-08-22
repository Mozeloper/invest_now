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
import Reports from "../pages/dashboard/reports";
import Settings from "../pages/dashboard/settings";
import Accounts from "../pages/dashboard/settings/account";
import ContactUs from "../pages/dashboard/settings/contactUs";
import Faq from "../pages/dashboard/settings/faq";
import Security from "../pages/dashboard/settings/security";
import OpenAccount from "../pages/dashboard/products/openAccount";
import AllProducts from "../pages/dashboard/products/allProducts";
import MutualFunds from "../pages/dashboard/products/mutualFunds";
import Trust from "../pages/dashboard/products/trust";
import Securities from "../pages/dashboard/products/securities";
import OtpForgetPassword from "../pages/auth/forgetPassword/otpForgetPassword";
import ChangePasswordForgetPassword from "../pages/auth/forgetPassword/changePasswordForgetPassword";
import RequestEmbassy from "../pages/dashboard/requestEmbassy";
import RelationshipManager from "../pages/dashboard/relationshipManager";
import BuyProductWrapper from "../pages/dashboard/products/buyProductWrapper";
import BuyProducts from "../pages/dashboard/products/buyProductWrapper/buyProduct";
import NewBankAccount from "../pages/dashboard/products/buyProductWrapper/newBankAccount";
import NextOfKin from "../pages/dashboard/products/buyProductWrapper/nextOfKin";
import DependentInfo from "../pages/dashboard/products/buyProductWrapper/dependentInfo";
import IdCardUpload from "../pages/dashboard/products/buyProductWrapper/idCardUpload";
import BirthCertificateUpload from "../pages/dashboard/products/buyProductWrapper/birthCertificateUpload";
import FurtherProductsUpload from "../pages/dashboard/products/buyProductWrapper/furtherInfo";

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
          <Route path="/forget_password/otp" element={<OtpForgetPassword />} />
          <Route path="/forget_password/change_password" element={<ChangePasswordForgetPassword />} />
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
          <Route element={<Products />}>
            <Route path="/products/all" exact element={<AllProducts />} />
            <Route path="/products/mutual_funds" element={<MutualFunds />} />
            <Route path="/products/trust" element={<Trust />} />
            <Route path="/products/securities" element={<Securities />} />
          </Route>
          <Route element={<BuyProductWrapper />}>
            <Route path="/products/buy_product" element={<BuyProducts />} />
            <Route path="/products/new_bank_account" element={<NewBankAccount />} />
            <Route path="/products/next_of_kin" element={<NextOfKin />} />
            <Route path="/products/:productType" element={<FurtherProductsUpload />} />
            <Route path="/products/dependent_information" element={<DependentInfo />} />
            <Route path="/products/dependent_information/id_card" element={<IdCardUpload />} />
            <Route path="/products/dependent_information/birth_certificate" element={<BirthCertificateUpload />} />
          </Route>
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings/*" element={<Settings />}>
            <Route path="accounts" element={<Accounts />} />
            <Route path="security" element={<Security />} />
            <Route path="faq" element={<Faq />} />
            <Route path="contact_us" element={<ContactUs />} />
          </Route>
          <Route path="/request_embassy_statement" element={<RequestEmbassy />} />
          <Route path="/contact_relationship_manager" element={<RelationshipManager />} />
        </Route>
        <Route path="/products/open_account/*" element={<OpenAccount />} />
        <Route path="/Not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/Not-found" replace={true} />} />
      </Routes>
    </div>
  );
}
