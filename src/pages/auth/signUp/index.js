import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

import Logo from "../../../assets/icons/Frame.svg";
import Logosmall from "../../../assets/icons/logo.svg";
import SignUpImg from "../../../assets/images/imgsignup.svg";
import Button from "../../../components/Button";
import Typography from "../../../components/Typography/Typography";

export default function SignUpLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <div data-aos="fade-in" data-aos-duration="2000" className="flex w-full max-h-screen min-h-screen">
        <div className="lg:w-[70%] w-[100%] h-full p-6 md:p-12">
          <img src={Logosmall} alt="logo" className="block md:hidden" />
          <div className="flex justify-end">
            <div className="flex flex-col">
              <Typography format="self-end" variant="h4">
                Already have an account?
              </Typography>
              <div className="self-end">
                <Button
                  title="Sign in here"
                  onClick={() => navigate("/login")}
                  className="mt-4 md:mt-0 px-8 py-6 whitespace-nowrap font-medium"
                />
              </div>
            </div>
          </div>
          <div className="wrapper flex flex-col gap-4">
            <div className="flex overflow-x-auto md:gap-8">
              <div className={`flex flex-col px-3 ${pathname === "/bvn_verification" ? "bg-tertiary" : ""}`}>
                <Typography variant="h4" color={`${pathname === "/bvn_verification" ? "text-white" : "text-tertiary"}`}>
                  Step 1
                </Typography>
                <Typography
                  format="whitespace-nowrap"
                  variant="h3"
                  color={`${pathname === "/bvn_verification" ? "text-white" : "text-tertiary"}`}
                >
                  BVN verification
                </Typography>
              </div>
              <div
                className={`flex flex-col px-3 ${
                  pathname === "/profile_update" || pathname === "/otp_verification" ? "bg-tertiary" : ""
                }`}
              >
                <Typography
                  variant="h4"
                  color={`${
                    pathname === "/profile_update" || pathname === "/otp_verification" ? "text-white" : "text-tertiary"
                  }`}
                >
                  Step 2
                </Typography>
                <Typography
                  format="whitespace-nowrap"
                  variant="h3"
                  color={`${
                    pathname === "/profile_update" || pathname === "/otp_verification" ? "text-white" : "text-tertiary"
                  }`}
                >
                  Profile update
                </Typography>
              </div>
              <div className={`flex flex-col px-3 ${pathname === "/create_password" ? "bg-tertiary" : ""}`}>
                <Typography variant="h4" color={`${pathname === "/create_password" ? "text-white" : "text-tertiary"}`}>
                  Step 3
                </Typography>
                <Typography
                  format="whitespace-nowrap"
                  variant="h3"
                  color={`${pathname === "/create_password" ? "text-white" : "text-tertiary"}`}
                >
                  Password set up
                </Typography>
              </div>
            </div>
            <div className="md:basis-3/4" data-aos="fade-up" data-aos-duration="2000">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="bg-primary lg:w-[30%] hidden lg:block fixed top-0 right-0 h-screen">
          <img loading="lazy" src={Logo} alt="logo" className="m-8" />
          <img loading="lazy" data-aos="fade-up" data-aos-duration="2000" src={SignUpImg} alt="logo" className="mt-2" />
        </div>
      </div>
    </>
  );
}
