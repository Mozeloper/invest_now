import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { MultiStepForm, Step } from "react-multi-form";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import banner from "../../../assets/images/secondBg-login.png";
import LoginBgImg from "../../../assets/images/login-bg.png";
import Logosmall from "../../../assets/icons/logo.svg";

const slideImages = [
  {
    url: banner,
  },
  {
    url: LoginBgImg,
  },
];

export default function SignUpLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <>
      <div data-aos="fade-in" data-aos-duration="2000" className="flex w-full max-h-screen min-h-screen bg-[#fff6f6]">
        <div className="lg:w-[55%] w-[100%] md:h-screen h-full p-1 md:p-12">
          <div className="flex justify-center my-10">
            <img onClick={() => navigate("/")} src={Logosmall} alt="logo" className="cursor-pointer" />
          </div>
          <div className="overflow-x-auto overflow-hidden no-scrollbar md:px-[10%] px-[5%] md:w-[90%] w-full">
            <MultiStepForm
              accentColor="#E32526"
              activeStep={`${
                pathname === "/bvn_verification"
                  ? 1
                  : pathname === "/profile_update"
                  ? 2
                  : pathname === "/otp_verification"
                  ? 2
                  : pathname === "/create_password"
                  ? 3
                  : 4
              }`}
            >
              <Step label="BVN verification"></Step>
              <Step label="Profile update"></Step>
              <Step label="Password set up"></Step>
            </MultiStepForm>
          </div>
          <div className="wrapper flex flex-col gap-4">
            <div className="mt-4 md:basis-3/4" data-aos="fade-up" data-aos-duration="2000">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="lg:w-[43%] hidden lg:block fixed top-0 right-0 h-screen">
          <Slide arrows={false}>
            {slideImages.map((fadeImage, index) => (
              <img key={index} src={fadeImage.url} loading="lazy" alt="logo" className="h-screen w-full object-cover" />
            ))}
          </Slide>
        </div>
      </div>
    </>
  );
}
