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

  // const [successCopy, setSuccessCopy] = useState({
  //   text: "",
  //   link: false,
  // });
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
        message: `${emailValue} Subscribed to newsletter`,
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
  // const copyCodeToClipBoard = (data) => {
  //   navigator.clipboard.writeText(data).then(() => {
  //     setSuccessCopy((prev) => ({
  //       ...prev,
  //       text: "Phone Number copied",
  //       link: true,
  //     }));
  //     setTimeout(() => {
  //       setSuccessCopy((prev) => ({
  //         ...prev,
  //         text: "",
  //         link: false,
  //       }));
  //     }, 2000);
  //   });
  // };

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
            <div className="flex justify-between w-full flex-wrap">
              <div className="">
                <Text color="text-white" variant="h3" format="tracking-wide font-bold mb-2">
                  Company
                </Text>
                <ul>
                  <li
                    onClick={() => navigate("/frequently_asked_question")}
                    className="text-white cursor-pointer text-sm mb-6 hover:scale-110"
                  >
                    FAQs
                  </li>
                  <li
                    onClick={() => navigate("/contact_us_form")}
                    className="text-white cursor-pointer text-sm mb-6 hover:scale-110"
                  >
                    Contact Us
                  </li>
                  <li
                    onClick={() => navigate("/terms_and_conditions")}
                    className="text-white cursor-pointer text-sm mb-6 hover:scale-110"
                  >
                    Terms and Conditions
                  </li>
                  <li
                    onClick={() => navigate("/privacy_statement")}
                    className="text-white cursor-pointer text-sm mb-6 hover:scale-110"
                  >
                    Privacy statement
                  </li>
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
                  Research
                </Text>
                <ul>
                  <li className="text-white cursor-pointer text-sm mb-6 hover:scale-110">
                    <a target="_blank" rel="noreferrer" href="https://unitedcapitalplcgroup.com/market-news">
                      Market News
                    </a>
                  </li>
                  <li className="text-white cursor-pointer text-sm mb-6 hover:scale-110">
                    <a target="_blank" rel="noreferrer" href="https://unitedcapitalplcgroup.com/pan-africa-monitor">
                      Pan African Monitor
                    </a>
                  </li>
                  <li className="text-white cursor-pointer text-sm mb-6 hover:scale-110">
                    <a target="_blank" rel="noreferrer" href="https://unitedcapitalplcgroup.com">
                      United Capital website
                    </a>
                  </li>
                </ul>
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
                    <a href="https://twitter.com/UnitedCap" target="_blank" rel="noreferrer">
                      <img className="cursor-pointer hover:scale-110" loading="lazy" src={twitter} alt="twitter" />
                    </a>
                    <a href="https://web.facebook.com/UnitedCapitalPlc/?_rdc=1&_rdr" target="_blank" rel="noreferrer">
                      <img className="cursor-pointer hover:scale-110" loading="lazy" src={facebook} alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com/unitedcapitalplc" target="_blank" rel="noreferrer">
                      <img className="cursor-pointer hover:scale-110" loading="lazy" src={instagram} alt="instagram" />
                    </a>
                    <a href="https://www.youtube.com/channel/UC07ZLKfSkCUUm3CBHIWBL_Q" target="_blank" rel="noreferrer">
                      <img className="cursor-pointer hover:scale-110" loading="lazy" src={youtube} alt="youtube" />
                    </a>
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
