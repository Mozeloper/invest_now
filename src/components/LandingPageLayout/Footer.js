import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Text from "../Typography/Typography";
import LogoFooter from "../../assets/icons/logoFooter.svg";
import twitter from "../../assets/icons/twitter.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import youtube from "../../assets/icons/youtube.svg";
import Correct from "../../assets/icons/correct.svg";
import MessageModal from "../modals/MessageModal";

export default function Footer() {
  const navigate = useNavigate();

  const [successCopy, setSuccessCopy] = useState({
    text: "",
    link: false,
  });
  const [emailValue, setEmailValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    reason: "",
    message: "",
  });

  const handleCloseModal = () => {
    setOpenModal(false);
    setEmailValue("");
    setAlertMessage((prev) => ({
      ...prev,
      reason: "",
      message: "",
    }));
  };
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
  const copyCodeToClipBoard = (data) => {
    navigator.clipboard.writeText(data).then(() => {
      setSuccessCopy((prev) => ({
        ...prev,
        text: "Phone Number copied",
        link: true,
      }));
      setTimeout(() => {
        setSuccessCopy((prev) => ({
          ...prev,
          text: "",
          link: false,
        }));
      }, 2000);
    });
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
      <div style={{ background: "linear-gradient(to right bottom, #1C1C1C, 89%, #FED23F)" }} className="w-full">
        <div className="wrapper w-full py-[4%]">
          <img src={LogoFooter} alt="footerLogo" loading="lazy" />
          <div className="w-full mt-8 flex justify-between flex-wrap">
            <div className="flex gap-16 lg:gap-36 flex-wrap">
              <div className="">
                <Text color="text-white" variant="h3" format="tracking-wide font-bold mb-2">
                  Company
                </Text>
                <ul>
                  <li
                    onClick={() => navigate("/frequently_asked_question")}
                    className="text-white cursor-pointer text-sm mb-6 hover:scale-110"
                  >
                    FAQ
                  </li>
                  <li
                    onClick={() => navigate("/contact_us_form")}
                    className="text-white cursor-pointer text-sm mb-6 hover:scale-110"
                  >
                    Contact Us
                  </li>
                  <li className="text-white cursor-pointer text-sm mb-6 hover:scale-110">Terms and Conditions</li>
                  <li className="text-white cursor-pointer text-sm mb-6 hover:scale-110">Privacy statement</li>
                </ul>
              </div>
              <div className="">
                <Text color="text-white" variant="h3" format="tracking-wide font-bold mb-2">
                  Products
                </Text>
                <ul>
                  <li
                    onClick={() => navigate("/securities/stock_trading", { state: "S" })}
                    className="text-white cursor-pointer text-sm mb-6 hover:scale-110"
                  >
                    Stock Trading
                  </li>
                  <li
                    onClick={() => navigate("/Mutual_Funds/money_market_fund", { state: "AM" })}
                    className="text-white cursor-pointer text-sm mb-6 hover:scale-110"
                  >
                    Money Market Fund
                  </li>
                  <li
                    onClick={() => navigate("/trust/education_trust", { state: "T_EDU" })}
                    className="text-white cursor-pointer text-sm mb-6 hover:scale-110"
                  >
                    Education Trust
                  </li>
                  <li
                    onClick={() => navigate("/securities/utrace", { state: "S_UT" })}
                    className="text-white cursor-pointer text-sm mb-6 hover:scale-110"
                  >
                    UTrace
                  </li>
                  <li
                    onClick={() => navigate("/Mutual_Funds/nigerian_euroband_fund", { state: "AM_EURO" })}
                    className="text-white cursor-pointer text-sm mb-6 hover:scale-110"
                  >
                    Nigeria Eurobond Fund
                  </li>
                  <li
                    onClick={() => navigate("/trust/nigerian_diaspora_trust", { state: "T_EURO" })}
                    className="text-white cursor-pointer text-sm mb-6 hover:scale-110"
                  >
                    Nigeria Diaspora Fund
                  </li>
                </ul>
              </div>
              <div className="">
                <Text color="text-white" variant="h3" format="tracking-wide font-bold mb-2">
                  Contact
                </Text>
                <ul>
                  <li className="text-white cursor-pointer text-sm mb-6 hover:scale-110">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="mailto:Support@investnow.com?subject = Feedback&body = Message"
                    >
                      Support@investnow.com
                    </a>
                  </li>
                  <li className="text-white cursor-pointer text-sm mb-6 hover:scale-110">
                    <a target="_blank" rel="noreferrer" href="https://wa.me/090768456789">
                      Whatsapp
                    </a>
                  </li>
                  <li
                    onClick={() => copyCodeToClipBoard("090768456789")}
                    className="text-white cursor-pointer text-sm mb-2 hover:scale-110"
                  >
                    <a href="tel:(+234)90768456789">(+234) 90768456789</a>
                  </li>
                  {successCopy.link && (
                    <Text variant="small" weight="bold" format="mb-2" color="text-green-600">
                      {successCopy?.text}
                    </Text>
                  )}
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
                  <img className="cursor-pointer hover:scale-110" loading="lazy" src={twitter} alt="twitter" />
                  <img className="cursor-pointer hover:scale-110" loading="lazy" src={facebook} alt="facebook" />
                  <img className="cursor-pointer hover:scale-110" loading="lazy" src={instagram} alt="instagram" />
                  <img className="cursor-pointer hover:scale-110" loading="lazy" src={youtube} alt="youtube" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
