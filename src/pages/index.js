/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";

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
import Correct from "../assets/icons/correct.svg";
import googleplayStore from "../assets/icons/googlePlayStore_icon.svg";
import appleIcon from "../assets/icons/apple_icon.svg";

import { resetInitialState } from "../store/slices/authSlices";
import MessageModal from "../components/modals/MessageModal";

const slideImages = [
  {
    url: banner,
  },
  {
    url: bannerSecond,
  },
];

const settings = {
  infinite: true,
  speed: 1000,
  lazyLoad: true,
  initialSlide: 0,
  vertical: true,
  autoplay: true,
  // slidesToShow: 1,
  // slidesToScroll: 1,
  adaptiveHeight: true,
};

export default function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  setTimeout(() => {
    if (count === 2) return setCount(1);
    setCount(count + 1);
  }, 3500);

  useEffect(() => {
    dispatch(resetInitialState());
  }, []);

  return (
    <>
      <MessageModal isOpen={openModal} modalWidth="300px" modalHeight="auto">
        <div className="flex flex-col justify-center items-center w-full">
          <img src={Correct} alt="check-img" />
          <Text format="text-center mt-3" variant="body" color="text-[#465174]" weight="bold">
            Coming Soon..
          </Text>
          <div className="mt-4 w-full">
            <Button onClick={() => setOpenModal(false)} title="Close" className="cursor-pointer w-full" type="button" />
          </div>
        </div>
      </MessageModal>
      <div className="lg:min-h-[calc(100vh-72px)] lg:h-[calc(100vh-72px)] h-[calc(80vh-72px)] mt-[72px] w-[100%] flex justify-between">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="lg:w-[60%] w-full wrapper flex flex-col items-center lg:items-start justify-center"
        >
          <div className="text-wrap lg:text-start text-center w-[60%] lg:w-[80%] h-[160px] md:mb-6 mb-20">
            {count === 1 && (
              <div className="text-5xl font-bold smooth w-[80%]">All your investment needs now just one tap away</div>
            )}
            {count === 2 && (
              <div className="text-5xl font-bold smooth">
                InvestNow enables you have complete control of your investment portfolio
              </div>
            )}
          </div>
          <div className="lg:self-start self-center">
            <Button
              title="Create a free account"
              onClick={() => navigate("/bvn_verification")}
              className="mt-4 px-12 py-4 whitespace-nowrap font-extrabold capitalize"
              style={{ border: "3px solid #E32526" }}
            />
          </div>
          <div className="flex md:flex-row flex-col gap-3 mt-6">
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
          <div className="w-full">
            <Slider {...settings}>
              <div>
                <img
                  alt="banner"
                  src={slideImages[0].url}
                  className="w-full object-cover min-h-[calc(100vh-72px)] h-[calc(100vh-72px)]"
                />
              </div>
              <div>
                <img
                  alt="banner"
                  src={slideImages[1].url}
                  className="w-full object-cover min-h-[calc(100vh-72px)] h-[calc(100vh-72px)]"
                />
              </div>
            </Slider>
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
            Enjoy competitive returns when you invest with us.
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
            Get real-time information on your investments in one place.
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
            With Asset-Backed Loan, you can access a loan of up to 95% of your investment value to meet your urgent
            needs.
          </Text>
          <div onClick={() => setOpenModal(true)} className="flex gap-2">
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
            Looking to do more with your money? Let’s help you kickstart your investment journey.
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
              Select a product from our array of Investment offerings.
            </Text>
          </div>
          <div className="flex flex-col basis-1/4 md:items-start items-center gap-1">
            <img src={stepTwo} alt="step-1" className="w-[50px] h-[50px]" loading="lazy" />
            <Text>Step 2</Text>
            <Text variant="h4" format="text-[#000000] font-bold">
              Open an account
            </Text>
            <Text variant="h4" format="text-[#000000] text-center md:text-left w-[60%] font-normal">
              Simply provide us with some information about you.
            </Text>
          </div>
          <div className="flex flex-col basis-1/4 md:items-start items-center gap-1">
            <img src={stepThree} alt="step-1" className="w-[50px] h-[50px]" loading="lazy" />
            <Text>Step 3</Text>
            <Text variant="h4" format="text-[#000000] font-bold">
              Fund your account
            </Text>
            <Text variant="h4" format="text-[#000000] text-center md:text-left w-[60%] font-normal">
              Put funds into your account with your debit card or bank account.
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
              Put your money to work with our Mutual Funds and start earning competitive returns.
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
              Build your wealth and preserve your legacy to last for generations.
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
              Trade stocks like a pro on the floor of the Nigerian Stock Exchange.
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
          <div className="bg-BACKGROUND_WHITE min-w-[420px] h-[220px] p-4">
            <Text variant="h4" format="w-[90%] font-extrabold mb-4">
              They pay good attention to me. They also provide quality and timely service which has, in no small
              measure, enabled me to achieve the much-needed objective of good returns on investment.
            </Text>
            <div className="flex gap-2">
              <img loading="lazy" className="w-[50px] h-[50px]" src={Ted} alt="img" />
              <Text variant="small" format="mt-4 font-extrabold mb-4">
                Jimmy Oshinowo
              </Text>
            </div>
          </div>
          <div className="bg-BACKGROUND_WHITE min-w-[420px] h-[220px] p-4">
            <Text variant="h4" format="w-[90%] font-extrabold mb-4">
              I’ve had a very good experience with United Capital Plc. The company has related with me very well and has
              really added value to my business. They take pride in putting your interests first.
            </Text>
            <div className="flex gap-2">
              <img loading="lazy" className="w-[50px] h-[50px]" src={Ted} alt="img" />
              <Text variant="small" format="mt-4 font-extrabold mb-4">
                Mrs Aremu Ejiro
              </Text>
            </div>
          </div>
          <div className="bg-BACKGROUND_WHITE min-w-[420px] h-[220px] p-4">
            <Text variant="h4" format="w-[90%] font-extrabold mb-4">
              I’ve invested with United Capital for a while now, and I’ve been telling others to join in. If they
              weren’t good at what they do, I wouldn’t have been transacting with them for over eight years.
            </Text>

            <div className="flex gap-2">
              <img loading="lazy" className="w-[50px] h-[50px]" src={Ted} alt="img" />
              <Text variant="small" format="mt-4 font-extrabold mb-4">
                Chief Chimezie Eleberi
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper w-full mt-16">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="w-full p-10 h-full flex justify-between md:items-center mb-16 gap-4 bg-primary rounded-md"
        >
          <div className="basis-1/2 h-full flex flex-col justify-center">
            <div>
              <ReactStars
                count={5}
                value={4}
                // onChange={ratingChanged}
                size={24}
                isHalf={true}
              />
            </div>
            <div>
              <Text color="text-white" variant="h3" format="font-extrabold mb-4">
                4/5 ratings on app stores
              </Text>
              <Text color="text-white" variant="h4" format="w-[90%] font-extrabold mb-4">
                Enjoy an optimized user-experience with the InvestNow app.
              </Text>
            </div>
            <div className="flex md:flex-row flex-col gap-3 mt-6">
              <button
                type="button"
                className="flex gap-3 py-3 px-6 rounded-md border-2 border-white text-white whitespace-nowrap"
              >
                <div className="w-[20px] h-[20px]">
                  <img src={googleplayStore} alt="play_store" loading="lazy" />
                </div>
                Get on android
              </button>
              <button
                type="button"
                className="flex gap-3 py-3 px-6 rounded-md border-2 border-white text-white whitespace-nowrap"
              >
                <div className="w-[20px] h-[20px]">
                  <img src={appleIcon} alt="appleIcon" loading="lazy" />
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
    </>
  );
}
