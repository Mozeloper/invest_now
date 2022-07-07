import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import banner from "../../../assets/images/secondBg-login.png";
import LoginBgImg from "../../../assets/images/login-bg.png";
import Logosmall from "../../../assets/icons/logo.svg";
import Button from "../../../components/Button";
import Typography from "../../../components/Typography/Typography";

const slideImages = [
  {
    url: banner,
  },
  {
    url: LoginBgImg,
  },
];

export default function LoginLayout() {
  const navigate = useNavigate();

  return (
    <>
      <div data-aos="fade-in" data-aos-duration="2000" className="flex w-full max-h-screen min-h-screen">
        <div className="lg:w-[55%] w-[100%] h-full p-6 md:p-12">
          <img src={Logosmall} alt="logo" className="block md:hidden" />
          <div className="flex justify-end">
            <div className="flex flex-col">
              <Typography format="self-end" variant="h4">
                Don't have an account?
              </Typography>
              <div className="self-end">
                <Button
                  title="Sign up here"
                  onClick={() => navigate("/bvn_verification")}
                  className="mt-4 md:mt-0 px-8 py-6 whitespace-nowrap font-medium"
                />
              </div>
            </div>
          </div>
          <div className="wrapper mt-10">
            <div className="md:basis-3/4" data-aos="fade-up" data-aos-duration="2000">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="lg:w-[43%] hidden lg:block fixed top-0 right-0 h-screen">
          <Slide arrows={false}>
            {slideImages.map((fadeImage, index) => (
              <img key={index} src={fadeImage.url} loading="lazy" alt="logo" className="h-screen w-full" />
            ))}
          </Slide>
        </div>
      </div>
    </>
  );
}
