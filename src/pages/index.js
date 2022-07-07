/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Slide } from "react-slideshow-image";
import ReactStars from "react-rating-stars-component";
import "react-slideshow-image/dist/styles.css";
import Logo from "../assets/icons/logo.svg";
import Text from "../components/Typography/Typography";
import Button from "../components/Button";
import banner from "../assets/images/banner.svg";
import bannerSecond from "../assets/images/banner2.svg";
import bannerThird from "../assets/images/banner3.svg";
import bannerFourth from "../assets/images/banner4.svg";
import bannerFifth from "../assets/images/banner5.svg";
import bannerSisth from "../assets/images/banner6.svg";
import stepOne from "../assets/images/step1.svg";
import stepTwo from "../assets/images/step2.svg";
import stepThree from "../assets/images/step3.svg";
import stepFour from "../assets/images/step4.svg";
import bag from "../assets/images/bag.svg";
import hand from "../assets/images/hand.svg";
import chart from "../assets/images/chart.svg";
import Ted from "../assets/images/ted.svg";
import LogoFooter from "../assets/icons/logoFooter.svg";
import twitter from "../assets/icons/twitter.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import youtube from "../assets/icons/youtube.svg";
import Correct from "../assets/icons/correct.svg";
import MessageModal from "../components/modals/MessageModal";
import { resetInitialState } from "../store/slices/authSlices";

const slideImages = [
  {
    url: banner,
  },
  {
    url: bannerSecond,
  },
];

export default function Index() {
  const [emailValue, setEmailValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    reason: "",
    message: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem("access_token");
    dispatch(resetInitialState());
  }, []);

  const handleNewsLetterEmail = (e) => {
    e.preventDefault();
    if (emailValue !== "" && emailValue !== null) {
      setAlertMessage((prev) => ({
        ...prev,
        reason: "Successful",
        message: `Email Sent to ${emailValue}`,
      }));
      setOpenModal(true);
    } else {
      setAlertMessage((prev) => ({
        ...prev,
        reason: "Email Address Not Provider",
        message: "Please Input Your Email Address",
      }));
      setOpenModal(true);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEmailValue("");
    setAlertMessage((prev) => ({
      ...prev,
      reason: "",
      message: "",
    }));
  };

  return (
    <>
      <MessageModal isOpen={openModal} modalWidth="300px" modalHeight="auto">
        <div className="flex flex-col justify-center items-center w-full">
          {alertMessage?.reason === "Successful" && <img src={Correct} alt="check-img" />}
          <Text format="text-center mt-3 whitespace-nowrap" variant="h3" color="text-[#465174]" weight="bold">
            {alertMessage?.reason}
          </Text>
          <Text format="text-center mt-3" variant="body" color="text-[#465174]" weight="bold">
            {alertMessage?.message}
          </Text>
          <div className="mt-4 w-full">
            <Button onClick={() => handleCloseModal()} title="Close" className="cursor-pointer w-full" type="button" />
          </div>
        </div>
      </MessageModal>
      <div className="bg-BACKGROUND_WHITE w-full max-w-full overflow-hidden">
        <div className="bg-BACKGROUND_WHITE">
          <div className="z-20 w-full bg-BACKGROUND_WHITE flex gap-8 lg:gap-16 justify-between header">
            <img src={Logo} alt="logo" loading="lazy" className="min-w-[150px] max-w-[150px]" />
            <div className="w-full md:flex gap-4 mt-3 hidden">
              <Text variant="h3" format="whitespace-nowrap cursor-pointer">
                Mutual funds
              </Text>
              <Text variant="h3" format="whitespace-nowrap cursor-pointer">
                Trusts
              </Text>
              <Text variant="h3" format="whitespace-nowrap cursor-pointer">
                Securities
              </Text>
              <Text variant="h3" format="whitespace-nowrap cursor-pointer">
                SME financing
              </Text>
              <Text variant="h3" format="whitespace-nowrap cursor-pointer">
                Analysis
              </Text>
            </div>
            <div className="lg:flex hidden lg:flex-row gap-4">
              <Button
                title="Sign In"
                onClick={() => navigate("/login")}
                className="px-12 py-4 whitespace-nowrap font-extrabold capitalize"
                style={{ border: "3px solid #E32526" }}
              />
              <Button
                title="Create a free account"
                backgroundColor="#65666A"
                onClick={() => navigate("/bvn_verification")}
                className="h-fit px-20 py-6 whitespace-nowrap font-extrabold"
                style={{ fontWeigth: "bold" }}
              />
            </div>
          </div>
          <div className="lg:min-h-[calc(100vh-72px)] lg:h-[calc(100vh-72px)] h-[calc(70vh-72px)] mt-[72px] w-[100%] flex">
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="lg:w-[60%] w-full wrapper flex flex-col items-center lg:items-start justify-center"
            >
              <div className="text-wrap lg:text-start text-center w-[100%] lg:w-[80%]">
                <Text variant="h0" format="cursor-pointer font-bold">
                  All your investment needs now just one tap away
                </Text>
              </div>
              <div className="lg:self-start self-center">
                <Button
                  title="Create a free account"
                  onClick={() => navigate("/bvn_verification")}
                  className="mt-4 px-12 py-4 whitespace-nowrap font-extrabold capitalize"
                  style={{ border: "3px solid #E32526" }}
                />
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  className="flex gap-3 py-3 px-6 rounded-md border-2 border-slate-400 whitespace-nowrap"
                >
                  <div className="w-[20px] h-[20px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                    </svg>
                  </div>
                  Get on android
                </button>
                <button
                  type="button"
                  className="flex gap-3 py-3 px-6 rounded-md border-2 border-slate-400 whitespace-nowrap"
                >
                  <div className="w-[20px] h-[20px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                  </div>
                  Get on apple
                </button>
              </div>
            </div>
            <div className="w-[50%] hidden lg:block h-full self-end">
              <div className="w-full bg-red-700">
                <Slide arrows={false}>
                  {slideImages.map((fadeImage, index) => (
                    <img
                      key={index}
                      src={fadeImage.url}
                      alt="banner"
                      loading="lazy"
                      className="w-full object-cover min-h-[calc(100vh-72px)] h-[calc(100vh-72px)]"
                    />
                  ))}
                </Slide>
              </div>
            </div>
          </div>
          <div className="wrapper my-16 w-full flex md:flex-row flex-col-reverse">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="basis-full md:basis-1/2 wrapper flex flex-col justify-center"
            >
              <Text variant="h1" format="font-bold">
                Invest your money in money in profitable assets{" "}
              </Text>
              <Text variant="h3" format="font-normal my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, morbi nulla est tellus integer.
              </Text>
              <div onClick={() => navigate("/login")} className="flex gap-2">
                <Text variant="h4" color="text-primary" format="cursor-pointer self-start font-bold">
                  Start investing
                </Text>
                &gt;
              </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000" className="basis-full md:basis-1/2">
              <img src={bannerThird} alt="img" loading="lazy" />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="wrapper my-16 w-full flex md:flex-row flex-col-reverse"
          >
            <div className="basis-full md:basis-1/2">
              <img src={bannerFourth} alt="img" loading="lazy" />
            </div>
            <div className="basis-full md:basis-1/2 wrapper flex flex-col justify-center">
              <Text variant="h1" format="font-bold">
                Track and monitor your portfolio with ease
              </Text>
              <Text variant="h3" format="font-normal my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, morbi nulla est tellus integer.
              </Text>
              <div onClick={() => navigate("/login")} className="flex gap-2">
                <Text variant="h4" color="text-primary" format="cursor-pointer self-start font-bold">
                  Start investing
                </Text>
                &gt;
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="wrapper my-16 w-full flex md:flex-row flex-col-reverse"
          >
            <div className="basis-full md:basis-1/2 wrapper flex flex-col justify-center">
              <Text variant="h1" format="font-bold">
                Never run out of cash to keep your business running
              </Text>
              <Text variant="h3" format="font-normal my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, morbi nulla est tellus integer.
              </Text>
              <div onClick={() => navigate("/login")} className="flex gap-2">
                <Text variant="h4" color="text-primary" format="cursor-pointer self-start font-bold">
                  Get A Loan
                </Text>
                &gt;
              </div>
            </div>
            <div className="basis-full md:basis-1/2">
              <img src={bannerFifth} alt="img" loading="lazy" />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="w-full flex flex-col items-center justify-center wrapper mb-16"
          >
            <div className="flex flex-col items-center">
              <Text variant="h0" format="text-[#000000] font-bold">
                Start today
              </Text>
              <Text variant="h4" format="text-[#000000] lg:w-[40%] w-[80%] text-center font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, morbi nulla est tellus integer.
              </Text>
            </div>
            <div className="w-full flex md:flex-row flex-col items-center justify-center gap-2 my-4 md:my-8">
              <div className="flex flex-col basis-1/4 md:items-start items-center gap-1">
                <img src={stepOne} alt="step-1" className="w-[50px] h-[50px]" loading="lazy" />
                <Text>Step 1</Text>
                <Text variant="h4" format="text-[#000000]" weight="extrabold">
                  Choose a product
                </Text>
                <Text variant="h4" format="text-[#000000] text-center md:text-left w-[60%] font-normal">
                  Select a product from our robust investment menu.
                </Text>
              </div>
              <div className="flex flex-col basis-1/4 md:items-start items-center gap-1">
                <img src={stepTwo} alt="step-1" className="w-[50px] h-[50px]" loading="lazy" />
                <Text>Step 2</Text>
                <Text variant="h4" format="text-[#000000] font-bold">
                  Open an account
                </Text>
                <Text variant="h4" format="text-[#000000] text-center md:text-left w-[60%] font-normal">
                  Simply provide us with some information about you to open your investment account
                </Text>
              </div>
              <div className="flex flex-col basis-1/4 md:items-start items-center gap-1">
                <img src={stepThree} alt="step-1" className="w-[50px] h-[50px]" loading="lazy" />
                <Text>Step 3</Text>
                <Text variant="h4" format="text-[#000000] font-bold">
                  Fund your account
                </Text>
                <Text variant="h4" format="text-[#000000] text-center md:text-left w-[60%] font-normal">
                  Fund your account with a simple click with either your debit card or bank acount!
                </Text>
              </div>
              <div className="flex flex-col basis-1/4 md:items-start items-center gap-1">
                <img src={stepFour} alt="step-1" className="w-[50px] h-[50px]" loading="lazy" />
                <Text>Step 4</Text>
                <Text variant="h4" format="text-[#000000] font-bold">
                  Receive returns
                </Text>
                <Text variant="h4" format="text-[#000000] text-center md:text-left w-[60%] font-normal">
                  Start recieving returns!
                </Text>
              </div>
            </div>
            <div className="self-center">
              <Button
                title="Create a free account"
                onClick={() => navigate("/bvn_verification")}
                className="mt-4 px-12 py-4 whitespace-nowrap font-extrabold capitalize"
                style={{ border: "3px solid #E32526" }}
              />
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" className="w-full mb-16 wrapper">
            <div className="w-full mb-8">
              <Text variant="h1" format="text-[#000000] font-bold text-center">
                Available investment plans
              </Text>
            </div>
            <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-8">
              <div className="bg-[#FFF6F7] flex flex-col p-6 basis-1/3">
                <img src={bag} alt="bag" className="w-[200px] h-[150px] self-center" loading="lazy" />
                <Text variant="h2" format="text-[#615F62] font-bold">
                  Mutual funds
                </Text>
                <Text variant="h4" format="text-[#000000] my-3 w-[60%] font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, morbi nulla est tellus integer.
                </Text>
                <div onClick={() => navigate("/login")} className="flex gap-2">
                  <Text variant="h3" color="text-primary" format="cursor-pointer self-start font-bold">
                    Get Started
                  </Text>
                  &gt;
                </div>
              </div>
              <div className="bg-[#FFF6F7] flex flex-col p-6 basis-1/3">
                <img src={hand} alt="bag" className="w-[200px] h-[150px] self-center" loading="lazy" />
                <Text variant="h2" format="text-[#615F62] font-bold">
                  Trust
                </Text>
                <Text variant="h4" format="text-[#000000] my-3 w-[60%] font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, morbi nulla est tellus integer.
                </Text>
                <div onClick={() => navigate("/login")} className="flex gap-2">
                  <Text variant="h3" color="text-primary" format="cursor-pointer self-start font-bold">
                    Get Started
                  </Text>
                  &gt;
                </div>
              </div>
              <div className="bg-[#FFF6F7] flex flex-col p-6 basis-1/3">
                <img src={chart} alt="bag" className="w-[200px] h-[150px] self-center" loading="lazy" />
                <Text variant="h2" format="text-[#615F62] font-bold">
                  Securities
                </Text>
                <Text variant="h4" format="text-[#000000] my-3 w-[60%] font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, morbi nulla est tellus integer.
                </Text>
                <div onClick={() => navigate("/login")} className="flex gap-2">
                  <Text variant="h3" color="text-primary" format="cursor-pointer self-start font-bold">
                    Get Started
                  </Text>
                  &gt;
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col bg-tertiary p-6 pb-16">
            <Text color="text-white" variant="h1" format="self-center font-extrabold mb-4">
              What our investors say about us
            </Text>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="flex justify-start overflow-x-auto no-scrollbar wrapper gap-4"
            >
              <div className="bg-BACKGROUND_WHITE min-w-[420px] h-full p-4">
                <Text variant="h4" format="w-[90%] font-extrabold mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, morbi nulla est tellus integer. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Vel, morbi nulla est tellus integer.
                </Text>
                <div className="flex gap-2">
                  <img loading="lazy" className="w-[50px] h-[50px]" src={Ted} alt="img" />
                  <Text variant="small" format="mt-4 font-extrabold mb-4">
                    Ted Lasso
                  </Text>
                </div>
              </div>
              <div className="bg-BACKGROUND_WHITE min-w-[420px] h-full p-4">
                <Text variant="h4" format="w-[90%] font-extrabold mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, morbi nulla est tellus integer. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Vel, morbi nulla est tellus integer.
                </Text>
                <div className="flex gap-2">
                  <img loading="lazy" className="w-[50px] h-[50px]" src={Ted} alt="img" />
                  <Text variant="small" format="mt-4 font-extrabold mb-4">
                    Ted Lasso
                  </Text>
                </div>
              </div>
              <div className="bg-BACKGROUND_WHITE min-w-[420px] h-full p-4">
                <Text variant="h4" format="w-[90%] font-extrabold mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, morbi nulla est tellus integer. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Vel, morbi nulla est tellus integer.
                </Text>

                <div className="flex gap-2">
                  <img loading="lazy" className="w-[50px] h-[50px]" src={Ted} alt="img" />
                  <Text variant="small" format="mt-4 font-extrabold mb-4">
                    Ted Lasso
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper w-full mt-16">
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="w-full h-full flex justify-center items-center mb-16 gap-4 bg-primary rounded-md"
            >
              <div className="basis-1/2 h-full p-16">
                <ReactStars
                  count={5}
                  value={4}
                  // onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                />
                <Text color="text-white" variant="h3" format="font-extrabold mb-4">
                  4/5 ratings on app stores
                </Text>
                <Text color="text-white" variant="h4" format="w-[90%] font-extrabold mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, morbi nulla est tellus integer. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Vel, morbi nulla est tellus integer.
                </Text>
                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    className="flex gap-3 py-3 px-6 rounded-md border-2 border-white text-white whitespace-nowrap"
                  >
                    <div className="w-[20px] h-[20px]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                      </svg>
                    </div>
                    Get on android
                  </button>
                  <button
                    type="button"
                    className="flex gap-3 py-3 px-6 rounded-md border-2 border-white text-white whitespace-nowrap"
                  >
                    <div className="w-[20px] h-[20px]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                      </svg>
                    </div>
                    Get on apple
                  </button>
                </div>
              </div>
              <div className="md:basis-1/2 hidden md:block mt-4">
                <img loading="lazy" src={bannerSisth} alt="banner" className="h-full" />
              </div>
            </div>
          </div>
          <div className="bg-[#1C1C1C] w-full">
            <div className="wrapper w-full py-[4%]">
              <img src={LogoFooter} alt="footerLogo" loading="lazy" />
              <div className="w-full mt-8 flex justify-between flex-wrap">
                <div className="flex gap-16 lg:gap-36 flex-wrap">
                  <div className="">
                    <Text color="text-white" variant="h3" format="tracking-wide font-bold mb-2">
                      Company
                    </Text>
                    <ul>
                      <li className="text-white cursor-pointer text-sm mb-6 hover:scale-110">FAQ</li>
                      <li className="text-white cursor-pointer text-sm mb-6 hover:scale-110">Contact Us</li>
                      <li className="text-white cursor-pointer text-sm mb-6 hover:scale-110">Terms and Conditions</li>
                      <li className="text-white cursor-pointer text-sm mb-6 hover:scale-110">Privacy statement</li>
                    </ul>
                  </div>
                  <div className="">
                    <Text color="text-white" variant="h3" format="tracking-wide font-bold mb-2">
                      Products
                    </Text>
                    <ul>
                      <li className="text-white cursor-pointer text-sm mb-6 hover:scale-110">Stock Trading</li>
                      <li className="text-white cursor-pointer text-sm mb-6 hover:scale-110">Money Market Fund</li>
                      <li className="text-white cursor-pointer text-sm mb-6 hover:scale-110">Heritage Trust</li>
                      <li className="text-white cursor-pointer text-sm mb-6 hover:scale-110">UTrace</li>
                      <li className="text-white cursor-pointer text-sm mb-6 hover:scale-110">Nigeria Eurobond Fund</li>
                      <li className="text-white cursor-pointer text-sm mb-6 hover:scale-110">Nigeria Diaspora Fund</li>
                    </ul>
                  </div>
                  <div className="">
                    <Text color="text-white" variant="h3" format="tracking-wide font-bold mb-2">
                      Contact
                    </Text>
                    <ul>
                      <li className="text-white cursor-pointer text-sm mb-6 hover:scale-110">
                        <a href="mailto:Support@investnow.com?subject = Feedback&body = Message">
                          Support@investnow.com
                        </a>
                      </li>
                      <li className="text-white cursor-pointer text-sm mb-6 hover:scale-110">
                        <a href="https://wa.me/090768456789">Whatsapp</a>
                      </li>
                      <li className="text-white cursor-pointer text-sm mb-6 hover:scale-110">
                        <a href="tel:(+234)90768456789">(+234) 90768456789</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <Text color="text-white" variant="h4" format="w-[60%] whitespace-nowrap  tracking-wide mb-2">
                      Never miss out on investment opportunities
                    </Text>
                    <Text color="text-white" variant="h4" format="tracking-wide font-bold mb-2">
                      Join our newsletter
                    </Text>
                    <div className="flex gap-3">
                      <input
                        placeholder="Email address"
                        type="text"
                        name="email"
                        value={emailValue}
                        className="border-white outline-none border-2 p-2 bg-none"
                        onChange={(e) => setEmailValue(e.target.value)}
                      />
                      <Button
                        title="Submit"
                        onClick={(e) => handleNewsLetterEmail(e)}
                        className="whitespace-nowrap justify-start font-extrabold capitalize"
                        style={{ border: "3px solid #E32526" }}
                      />
                    </div>
                  </div>
                  <div>
                    <Text color="text-white" variant="h3" format="w-[60%] tracking-wide mb-2">
                      We are sociable
                    </Text>
                    <div className="flex gap-4">
                      <img className="cursor-pointer" loading="lazy" src={twitter} alt="twitter" />
                      <img className="cursor-pointer" loading="lazy" src={facebook} alt="facebook" />
                      <img className="cursor-pointer" loading="lazy" src={instagram} alt="instagram" />
                      <img className="cursor-pointer" loading="lazy" src={youtube} alt="youtube" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
