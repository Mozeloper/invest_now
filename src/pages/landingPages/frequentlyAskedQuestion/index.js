import React, { useEffect, useState } from "react";
import Text from "../../../components/Typography/Typography";
import rightArrow from "../../../assets/icons/big_chrevon_right.svg";
import downArrow from "../../../assets/icons/down_arrow.svg";

export default function FrequentlyAskedQuestion() {
  const [isActive, setIsActive] = useState({
    general: false,
    mutual_funds: false,
    equity: false,
  });

  const [openQuestions, setOpenQuestions] = useState(false);

  const handleToggleAccordion = (type) => {
    setIsActive(false);
    setOpenQuestions(false);
    setIsActive((prev) => ({
      ...prev,
      [type]: true,
    }));
  };

  const handleToggleCloseAccordion = (type) => {
    setIsActive((prev) => ({
      ...prev,
      [type]: false,
    }));
  };

  const handleOpenInnerQuestions = (type) => {
    setOpenQuestions(false);
    setOpenQuestions((prev) => ({
      ...prev,
      [type]: true,
    }));
  };

  const handleCloseInnerQuestions = (type) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [type]: false,
    }));
  };

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="mt-[120px] min-h-[60vh] w-full">
      <div className="wrapper w-full">
        <Text weight="bold" variant="h1" format="tracking-wide mb-4">
          Frequently Asked Questions
        </Text>
        <div
          onClick={() => {
            !!!isActive?.general ? handleToggleAccordion("general") : handleToggleCloseAccordion("general");
          }}
          className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
        >
          <Text weight="bold" variant="h3">
            General
          </Text>
          {isActive?.general ? <img src={downArrow} alt="down_arrow" /> : <img src={rightArrow} alt="right_arrow" />}
        </div>
        {isActive?.general && (
          <div className="px-[4%] flex flex-col gap-4">
            <div
              onClick={() => {
                !!!openQuestions?.general_1
                  ? handleOpenInnerQuestions("general_1")
                  : handleCloseInnerQuestions("general_1");
              }}
              className="p-[1%] bg-[#EDEDED] w-full cursor-pointer flex justify-between"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                1) What is InvestNow?
              </Text>
              {openQuestions?.general_1 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.general_1 && (
              <Text weight="normal" variant="body" color="text-headerColor">
                Investnow is an Integrated online web and mobile apps platform powered by United Capital Plc, that
                enables you to have complete management over your portfolio with us. You can open account(s) with any of
                our Businesses (Securities, Trustees and Asset Management) through it. You can also view your cash and
                portfolio holding balance, fund your account (one off and recurrent/standing instruction) and view all
                your accounts for the various Businesses under a Consolidated portfolio dashboard view. Subscription and
                liquidation of your Mutual Funds and other investments products can be done through the portal. You can
                also trade live on the Nigerian Stock exchange on an online real time basis as well as monitor your
                order placements during trading hours.
              </Text>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.general_2
                  ? handleOpenInnerQuestions("general_2")
                  : handleCloseInnerQuestions("general_2");
              }}
              className="p-[1%] bg-[#EDEDED] w-full cursor-pointer flex justify-between"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                2) How can I learn more on the Company products on InvestNow?
              </Text>
              {openQuestions?.general_2 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.general_2 && (
              <div className="font-normal text-sm text-headerColor">
                You can learn more about our products by following the link{" "}
                <a
                  href="https://investnow.ng/Registration"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary font-bold text-sm cursor-pointer"
                >
                  https://investnow.ng/Registration
                </a>
              </div>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.general_3
                  ? handleOpenInnerQuestions("general_3")
                  : handleCloseInnerQuestions("general_3");
              }}
              className="p-[1%] bg-[#EDEDED] w-full cursor-pointer flex justify-between"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                3) How can I activate my account for online access?
              </Text>
              {openQuestions?.general_3 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.general_3 && (
              <div>
                <ul className="list-disc ml-[4%]">
                  <li className="font-normal text-sm text-headerColor">
                    Click on the link:{" "}
                    <a
                      href="https://investnow.ng/Registration/Existing"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary font-bold text-sm cursor-pointer"
                    >
                      https://investnow.ng/Registration/Existing
                    </a>
                  </li>
                  <li className="font-normal text-sm text-headerColor">Input your client ID/account number</li>
                  <li className="font-normal text-sm text-headerColor">Select the account type you have with us</li>
                  <li className="font-normal text-sm text-headerColor">
                    Click on the box that says you are not a robot
                  </li>
                  <li className="font-normal text-sm text-headerColor">
                    An activation mail will be sent to you. Follow all instructions within the mail to have online
                    access to your portfolio.
                  </li>
                </ul>
              </div>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.general_4
                  ? handleOpenInnerQuestions("general_4")
                  : handleCloseInnerQuestions("general_4");
              }}
              className="p-[1%] bg-[#EDEDED] w-full cursor-pointer flex justify-between"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                4) How do I view my portfolio via web?
              </Text>
              {openQuestions?.general_4 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.general_4 && (
              <div>
                <ul className="list-disc ml-[4%]">
                  <li className="font-normal text-sm text-headerColor">To view your portfolio via web:</li>
                  <li className="font-normal text-sm text-headerColor">
                    Visit{" "}
                    <a
                      href="https://investnow.ng"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary font-bold text-sm cursor-pointer"
                    >
                      investnow.ng
                    </a>{" "}
                    on your web browser.
                  </li>
                  <li className="font-normal text-sm text-headerColor">Log in.</li>
                  <li className="font-normal text-sm text-headerColor">
                    Click on my Portfolios and you will see a drop down of options.
                  </li>
                  <li className="font-normal text-sm text-headerColor">
                    Click on the product you have with us and you will be able to view your portfolio.
                  </li>
                </ul>
              </div>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.general_5
                  ? handleOpenInnerQuestions("general_5")
                  : handleCloseInnerQuestions("general_5");
              }}
              className="p-[1%] bg-[#EDEDED] w-full cursor-pointer flex justify-between"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                5) How do I view my portfolio via Mobile?
              </Text>
              {openQuestions?.general_5 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.general_5 && (
              <div>
                <ul className="list-disc ml-[4%]">
                  <li className="font-normal text-sm text-headerColor">
                    To view your portfolio via the Investnow mobile App:
                  </li>

                  <li className="font-normal text-sm text-headerColor">Log in.</li>
                  <li className="font-normal text-sm text-headerColor">Click on My Dashboard</li>
                  <li className="font-normal text-sm text-headerColor">
                    Click on the dropdown menu besides My Dashboard ?
                  </li>
                  <li className="font-normal text-sm text-headerColor">Click on my portfolio.</li>
                  <li className="font-normal text-sm text-headerColor">
                    Click on the product you are currently investing in and view your portfolio.
                  </li>
                </ul>
              </div>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.general_6
                  ? handleOpenInnerQuestions("general_6")
                  : handleCloseInnerQuestions("general_6");
              }}
              className="p-[1%] bg-[#EDEDED] w-full cursor-pointer flex justify-between"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                6) How do I fund my account through investnow web?
              </Text>
              {openQuestions?.general_6 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.general_6 && (
              <div>
                <ul className="list-disc ml-[4%]">
                  <li className="font-normal text-sm text-headerColor">
                    You can fund your account either on a one off or recurrent (standing instruction) basis. To fund
                    your account through the web platform:
                  </li>
                  <li className="font-normal text-sm text-headerColor">
                    Visit{" "}
                    <a
                      href="https://investnow.ng"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary font-bold text-sm cursor-pointer"
                    >
                      investnow.ng
                    </a>{" "}
                    on your web browser.
                  </li>
                  <li className="font-normal text-sm text-headerColor">Log in.</li>
                  <li className="font-normal text-sm text-headerColor">Click on Fund Account</li>
                  <li className="font-normal text-sm text-headerColor">
                    Click on select Wallet and choose the account you wish to fund
                  </li>
                  <li className="font-normal text-sm text-headerColor">
                    Select Frequency (Daily, Weekly, Monthly for recurrent funding or One Off for single funding)
                  </li>
                  <li className="font-normal text-sm text-headerColor">Indicate the amount you wish to fund</li>
                  <li className="font-normal text-sm text-headerColor">
                    Click the dates you want the payment to be effected and
                  </li>
                  <li className="font-normal text-sm text-headerColor">
                    Click on Pay Now. After clicking that button, you will be redirected to input your card details
                  </li>
                  <li className="font-normal text-sm text-headerColor">
                    Once you input your card information, click on submit and you will get a notification through your
                    registered email with us that your transaction has been successful
                  </li>
                </ul>
              </div>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.general_7
                  ? handleOpenInnerQuestions("general_7")
                  : handleCloseInnerQuestions("general_7");
              }}
              className="p-[1%] bg-[#EDEDED] w-full cursor-pointer flex justify-between"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                7) How do I fund my account through investnow mobile?
              </Text>
              {openQuestions?.general_7 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.general_7 && (
              <div>
                <ul className="list-disc ml-[4%]">
                  <li className="font-normal text-sm text-headerColor">Log in</li>
                  <li className="font-normal text-sm text-headerColor">Click on My Dashboard</li>
                  <li className="font-normal text-sm text-headerColor">
                    Click on the drop down menu besides My Dashboard
                  </li>
                  <li className="font-normal text-sm text-headerColor">Click on Funding</li>
                  <li className="font-normal text-sm text-headerColor">Click on Fund Account</li>
                  <li className="font-normal text-sm text-headerColor">Click on Pay with Card</li>
                  <li className="font-normal text-sm text-headerColor">
                    On the next page select the account you wish to credit
                  </li>
                  <li className="font-normal text-sm text-headerColor">
                    Once you have selected the account you wish to credit, you will be led to a page where you can fill
                    in the amount and frequency of payment that you want
                  </li>
                  <li className="font-normal text-sm text-headerColor">Click Next</li>
                  <li className="font-normal text-sm text-headerColor">Input your card details</li>
                  <li className="font-normal text-sm text-headerColor"> Click Proceed</li>
                  <li className="font-normal text-sm text-headerColor">
                    {" "}
                    Once you input your card information, click on submit and you should get a notification through your
                    registered email with us that your transaction was been successful.
                  </li>
                </ul>
              </div>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.general_8
                  ? handleOpenInnerQuestions("general_8")
                  : handleCloseInnerQuestions("general_8");
              }}
              className="p-[1%] bg-[#EDEDED] w-full cursor-pointer flex justify-between"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                8) How do I link my accounts on InvestNow?
              </Text>
              {openQuestions?.general_8 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.general_8 && (
              <div className="flex flex-col gap-2 ml-[4%]">
                <Text weight="normal" variant="body" color="text-headerColor">
                  Yes! You can link one or more accounts irrespective of the Business to your existing account, this
                  include accounts belonging to minors that you are the guardian and signatory too. Please find below
                  steps. To link your account on the investnow web platform:
                </Text>

                <div>
                  <ul className="list-disc">
                    <li className="font-normal text-sm text-headerColor">
                      {" "}
                      Visit{" "}
                      <a
                        href="https://investnow.ng"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary font-bold text-sm cursor-pointer"
                      >
                        investnow.ng
                      </a>{" "}
                      on your web browser.
                    </li>
                    <li className="font-normal text-sm text-headerColor">Log in.</li>
                    <li className="font-normal text-sm text-headerColor">Click on my accounts.</li>
                    <li className="font-normal text-sm text-headerColor">Select link another account.</li>
                    <li className="font-normal text-sm text-headerColor">
                      Input the client ID of the account you wish to link.
                    </li>
                    <li className="font-normal text-sm text-headerColor">
                      Select the Business Unit (Securities, Trustees or Asset Management) of the account you wish to
                      link.
                    </li>
                    <li className="font-normal text-sm text-headerColor">Click on proceed.</li>
                  </ul>
                  <div className="mt-3 flex flex-col gap-3">
                    <Text weight="bold" variant="body" color="text-headerColor">
                      To link your account via the Investnow mobile App:
                    </Text>
                    <ul className="list-disc">
                      <li className="font-normal text-sm text-headerColor">Log in.</li>
                      <li className="font-normal text-sm text-headerColor">Click on Dashboard.</li>
                      <li className="font-normal text-sm text-headerColor">Click on link accounts.</li>
                      <li className="font-normal text-sm text-headerColor">
                        Input the client ID of the account you wish to link.
                      </li>
                      <li className="font-normal text-sm text-headerColor">Select account type.</li>
                      <li className="font-normal text-sm text-headerColor">Click on proceed.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.general_9
                  ? handleOpenInnerQuestions("general_9")
                  : handleCloseInnerQuestions("general_9");
              }}
              className="p-[1%] bg-[#EDEDED] w-full cursor-pointer flex justify-between"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                9) What happens if I forget my password?
              </Text>
              {openQuestions?.general_9 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.general_9 && (
              <>
                <Text weight="normal" variant="body" color="text-headerColor">
                  You can reset your password by following these steps.
                </Text>
                <div className="flex flex-col gap-3 ml-[4%]">
                  <ul className="list-disc">
                    <li className="font-normal text-sm text-headerColor">
                      {" "}
                      Visit{" "}
                      <a
                        href="https://investnow.ng"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary font-bold text-sm cursor-pointer"
                      >
                        investnow.ng
                      </a>{" "}
                      on your web browser.
                    </li>
                    <li className="font-normal text-sm text-headerColor">Click on forgot password.</li>
                    <li className="font-normal text-sm text-headerColor">Input your registered email</li>
                    <li className="font-normal text-sm text-headerColor">
                      Tick the box that confirms that you are not a robot and click on proceed
                    </li>
                    <li className="font-normal text-sm text-headerColor">
                      A reset password email link will be sent to you. Follow the link to change your password.
                    </li>
                  </ul>
                </div>
              </>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.general_10
                  ? handleOpenInnerQuestions("general_10")
                  : handleCloseInnerQuestions("general_10");
              }}
              className="p-[1%] bg-[#EDEDED] w-full cursor-pointer flex justify-between"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                10) How can I access the portal if the link sent to me has expired?
              </Text>
              {openQuestions?.general_10 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.general_10 && (
              <>
                <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                  If the link sent to your registered email has expired, please go through the process of resetting your
                  password again.
                </Text>
                <div className="flex flex-col gap-3 ml-[4%]">
                  <Text weight="normal" variant="body" color="text-headerColor">
                    I still have some enquiries not covered here. How can I get help?
                  </Text>
                  <ul className="list-disc">
                    <li className="font-normal text-sm text-headerColor">
                      Email: customerservice@unitedcapitalplcgroup.com
                    </li>
                    <li className="font-normal text-sm text-headerColor">Phone: 07000468378 (07000INVEST)</li>
                    <li className="font-normal text-sm text-headerColor">
                      Live chat: investnow.ng ; unitedcapitalplcgroup.com
                    </li>
                    <li className="font-normal text-sm text-headerColor">WhatsApp: 08168282396</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        )}
        <div className="my-6">
          <div
            onClick={() => {
              !!!isActive?.mutual_funds
                ? handleToggleAccordion("mutual_funds")
                : handleToggleCloseAccordion("mutual_funds");
            }}
            className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
          >
            <Text weight="bold" variant="h3">
              Mutual Funds & Trusteeship
            </Text>
            {isActive?.mutual_funds ? (
              <img src={downArrow} alt="down_arrow" />
            ) : (
              <img src={rightArrow} alt="right_arrow" />
            )}
          </div>
          {isActive?.mutual_funds && (
            <div className="px-[4%] flex flex-col my-3">
              <div
                onClick={() => {
                  !!!openQuestions?.mutual_funds_1
                    ? handleOpenInnerQuestions("mutual_funds_1")
                    : handleCloseInnerQuestions("mutual_funds_1");
                }}
                className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
              >
                <Text weight="bold" variant="h4" color="text-headerColor">
                  1) How does a Mutual Fund work?
                </Text>
                {openQuestions?.mutual_funds_1 ? (
                  <img src={downArrow} alt="down_arrow" />
                ) : (
                  <img src={rightArrow} alt="right_arrow" />
                )}
              </div>
              {openQuestions?.mutual_funds_1 && (
                <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                  A Mutual Fund is an investment vehicle which allows a group of investors to pool their funds with a
                  predetermined investment objective. The pooling of investible funds allows the fund manager to derive
                  the maximum benefits by investing in selected asset classes based on the investment objectives of the
                  pool, such as safety, regular income, capital appreciation, and wealth preservation.
                </Text>
              )}
              <div
                onClick={() => {
                  !!!openQuestions?.mutual_funds_2
                    ? handleOpenInnerQuestions("mutual_funds_2")
                    : handleCloseInnerQuestions("mutual_funds_2");
                }}
                className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
              >
                <Text weight="bold" variant="h4" color="text-headerColor">
                  2) How do I subscribe to United Capital Asset Management Mutual Funds?
                </Text>
                {openQuestions?.mutual_funds_2 ? (
                  <img src={downArrow} alt="down_arrow" />
                ) : (
                  <img src={rightArrow} alt="right_arrow" />
                )}
              </div>
              {openQuestions?.mutual_funds_2 && (
                <>
                  <div className="ml-[2%]">
                    <Text weight="normal" variant="body" color="text-headerColor">
                      Please be informed that you will only be able to subscribe to products that you have an investment
                      in.
                    </Text>
                    <Text weight="normal" variant="body" color="text-headerColor">
                      To make a subscription through the web platform:
                    </Text>
                  </div>
                  <div className="ml-[4%]">
                    <ul className="list-disc">
                      <li className="font-normal text-sm text-headerColor">
                        {" "}
                        Visit{" "}
                        <a
                          href="https://investnow.ng"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary font-bold text-sm cursor-pointer"
                        >
                          investnow.ng
                        </a>{" "}
                        on your web browser.
                      </li>
                      <li className="font-normal text-sm text-headerColor">Log in</li>
                      <li className="font-normal text-sm text-headerColor">
                        Click on my portfolio and you will see the drop down menu
                      </li>
                      <li className="font-normal text-sm text-headerColor">
                        Click on Mutual Funds and you will be able to view all your Asset Management Mutual Funds
                        accounts you have with us. (if you have more than one)
                      </li>
                      <li className="font-normal text-sm text-headerColor">
                        Underneath each of the products you will be able to choose subscribe, redeem or view statement.
                        Click on subscribe
                      </li>
                      <li className="font-normal text-sm text-headerColor">
                        Select the portfolio you wish to subscribe and then input the amount you wish to subscribe. The
                        units will be automatically compiled. (Please note that you must fund the account using the
                        funding option first before you can subscribe)
                      </li>
                      <li className="font-normal text-sm text-headerColor">Click on submit</li>
                    </ul>
                  </div>
                  <div className="ml-[2%]">
                    <Text weight="normal" variant="body" color="text-headerColor">
                      To subscribe to United Capital Asset Management Mutual Funds via the Investnow mobile App:
                    </Text>
                  </div>
                  <div className="ml-[4%]">
                    <ul className="list-disc">
                      <li className="font-normal text-sm text-headerColor">Log in</li>
                      <li className="font-normal text-sm text-headerColor">Click on Mutual Funds</li>
                      <li className="font-normal text-sm text-headerColor">Click on subscribe</li>
                      <li className="font-normal text-sm text-headerColor">
                        Select the mutual funds product you wish to subscribe to
                      </li>
                      <li className="font-normal text-sm text-headerColor">Input the amount you wish to subscribe</li>
                      <li className="font-normal text-sm text-headerColor">Select frequency</li>
                      <li className="font-normal text-sm text-headerColor">Then click on proceed</li>
                    </ul>
                  </div>
                </>
              )}
              <div
                onClick={() => {
                  !!!openQuestions?.mutual_funds_3
                    ? handleOpenInnerQuestions("mutual_funds_3")
                    : handleCloseInnerQuestions("mutual_funds_3");
                }}
                className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
              >
                <Text weight="bold" variant="h4" color="text-headerColor">
                  3) How do I fund my Trust account?
                </Text>
                {openQuestions?.mutual_funds_3 ? (
                  <img src={downArrow} alt="down_arrow" />
                ) : (
                  <img src={rightArrow} alt="right_arrow" />
                )}
              </div>
              {openQuestions?.mutual_funds_3 && (
                <>
                  <div className="ml-[2%]">
                    <Text weight="normal" variant="body" color="text-headerColor">
                      Please be informed that you will only be able to fund Trust products that you have an investment
                      in.
                    </Text>
                    <Text weight="normal" variant="body" color="text-headerColor">
                      To fund your Trust account on web:
                    </Text>
                  </div>
                  <div className="ml-[4%]">
                    <ul className="list-disc">
                      <li className="font-normal text-sm text-headerColor">
                        {" "}
                        Visit{" "}
                        <a
                          href="https://investnow.ng"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary font-bold text-sm cursor-pointer"
                        >
                          investnow.ng
                        </a>{" "}
                        on your web browser.
                      </li>
                      <li className="font-normal text-sm text-headerColor">Log in</li>
                      <li className="font-normal text-sm text-headerColor">
                        Click on my portfolio and you will see the drop down menu
                      </li>
                      <li className="font-normal text-sm text-headerColor">
                        Click on Trust and you will be able to view all your Trust accounts you have with us. (if you
                        have more than one)
                      </li>
                      <li className="font-normal text-sm text-headerColor">
                        Underneath each of the products you will be able to choose fund, redeem or view statement. Click
                        on Fund
                      </li>
                      <li className="font-normal text-sm text-headerColor">
                        Select the portfolio you wish to subscribe and then input the amount you wish to subscribe. The
                        units will be automatically compiled. (Please note that you must fund the account using the
                        funding option first before you can subscribe)
                      </li>
                      <li className="font-normal text-sm text-headerColor">Click on submit</li>
                    </ul>
                  </div>
                  <div className="ml-[2%]">
                    <Text weight="normal" variant="body" color="text-headerColor">
                      To fund your United Capital Trust account via the Investnow mobile App:
                    </Text>
                  </div>
                  <div className="ml-[4%]">
                    <ul className="list-disc">
                      <li className="font-normal text-sm text-headerColor">Log in</li>
                      <li className="font-normal text-sm text-headerColor">Click on Trust</li>
                      <li className="font-normal text-sm text-headerColor">Click on Fund</li>
                      <li className="font-normal text-sm text-headerColor">
                        Select the Trust product you wish to fund
                      </li>
                      <li className="font-normal text-sm text-headerColor">Input the amount you wish to fund</li>
                      <li className="font-normal text-sm text-headerColor">Select frequency</li>
                      <li className="font-normal text-sm text-headerColor">Then click on proceed</li>
                    </ul>
                  </div>
                </>
              )}
              <div
                onClick={() => {
                  !!!openQuestions?.mutual_funds_4
                    ? handleOpenInnerQuestions("mutual_funds_4")
                    : handleCloseInnerQuestions("mutual_funds_4");
                }}
                className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
              >
                <Text weight="bold" variant="h4" color="text-headerColor">
                  4) How do I redeem my United Capital Asset Management Mutual Fund investment?
                </Text>
                {openQuestions?.mutual_funds_4 ? (
                  <img src={downArrow} alt="down_arrow" />
                ) : (
                  <img src={rightArrow} alt="right_arrow" />
                )}
              </div>
              {openQuestions?.mutual_funds_4 && (
                <>
                  <div className="ml-[4%]">
                    <Text weight="normal" variant="h4" color="text-headerColor">
                      To redeem your UCAM investment through the investnow web platform:
                    </Text>
                    <ul className="list-disc">
                      <li className="font-normal text-sm text-headerColor">
                        {" "}
                        Visit{" "}
                        <a
                          href="https://investnow.ng"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary font-bold text-sm cursor-pointer"
                        >
                          investnow.ng
                        </a>{" "}
                        on your web browser.
                      </li>
                      <li className="font-normal text-sm text-headerColor">Log in</li>
                      <li className="font-normal text-sm text-headerColor">
                        Click on my portfolio and you will see the drop down menu
                      </li>
                      <li className="font-normal text-sm text-headerColor">Click on Mutual Funds</li>
                      <li className="font-normal text-sm text-headerColor">
                        Click on Redeem (which is highlighted in red)
                      </li>
                      <li className="font-normal text-sm text-headerColor">Input the amount you want to redeem</li>
                      <li className="font-normal text-sm text-headerColor">Click on submit</li>
                    </ul>
                  </div>
                  <div className="ml-[4%]">
                    <Text weight="normal" variant="h4" color="text-headerColor">
                      To redeem your UCAM investment through the Investnow Mobile App:
                    </Text>
                    <ul className="list-disc">
                      <li className="font-normal text-sm text-headerColor">Log in</li>
                      <li className="font-normal text-sm text-headerColor">Click on My Dashboard</li>
                      <li className="font-normal text-sm text-headerColor">
                        Click on the dropdown menu My Dashboard ?(there will be a drop down of options to choose from)
                      </li>
                      <li className="font-normal text-sm text-headerColor">Click on My Portfolio</li>
                      <li className="font-normal text-sm text-headerColor">
                        Click on Mutual Funds (for Mutual Fund clients)
                      </li>
                      <li className="font-normal text-sm text-headerColor">Click on the red arrow icon</li>
                      <li className="font-normal text-sm text-headerColor">Select the amount you want to redeem</li>
                      <li className="font-normal text-sm text-headerColor">Click on Proceed</li>
                    </ul>
                  </div>
                </>
              )}
              <div
                onClick={() => {
                  !!!openQuestions?.mutual_funds_5
                    ? handleOpenInnerQuestions("mutual_funds_5")
                    : handleCloseInnerQuestions("mutual_funds_5");
                }}
                className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
              >
                <Text weight="bold" variant="h4" color="text-headerColor">
                  5) How do I redeem my Short term Portfolio Management Scheme (SPMS) and Trusts Placements?
                </Text>
                {openQuestions?.mutual_funds_5 ? (
                  <img src={downArrow} alt="down_arrow" />
                ) : (
                  <img src={rightArrow} alt="right_arrow" />
                )}
              </div>
              {openQuestions?.mutual_funds_5 && (
                <>
                  <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                    To redeem your Short term Portfolio Management Scheme(SPMS) and Trusts Placements through the
                    Investnow Mobile App?
                  </Text>
                  <div className="ml-[5%]">
                    <ul className="list-disc">
                      <li className="font-normal text-sm text-headerColor">Log in</li>
                      <li className="font-normal text-sm text-headerColor">Click on My Dashboard</li>
                      <li className="font-normal text-sm text-headerColor">
                        Click on the menu icon besides My Dashboard ?(there will be a drop down of options to choose
                        from)
                      </li>
                      <li className="font-normal text-sm text-headerColor">Click on My Portfolio</li>
                      <li className="font-normal text-sm text-headerColor">Click on Placement/Trust</li>
                      <li className="font-normal text-sm text-headerColor">Click on the red arrow icon &gt;</li>
                      <li className="font-normal text-sm text-headerColor">Select the amount you want to redeem</li>
                      <li className="font-normal text-sm text-headerColor">Click on Proceed</li>
                    </ul>
                  </div>
                </>
              )}
              <div
                onClick={() => {
                  !!!openQuestions?.mutual_funds_6
                    ? handleOpenInnerQuestions("mutual_funds_6")
                    : handleCloseInnerQuestions("mutual_funds_6");
                }}
                className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
              >
                <Text weight="bold" variant="h4" color="text-headerColor">
                  6) Are the Rate of Returns on the Mutual Funds investment fixed or guaranteed?
                </Text>
                {openQuestions?.mutual_funds_6 ? (
                  <img src={downArrow} alt="down_arrow" />
                ) : (
                  <img src={rightArrow} alt="right_arrow" />
                )}
              </div>
              {openQuestions?.mutual_funds_6 && (
                <div className="ml-[5%]">
                  <ul className="list-disc">
                    <li className="font-normal text-sm text-headerColor">
                      Returns on mutual funds are not fixed. The returns vary as they are controlled by market trends
                      and yields obtainable in the Nigerian Financial Market.
                    </li>
                  </ul>
                </div>
              )}
              <div
                onClick={() => {
                  !!!openQuestions?.mutual_funds_7
                    ? handleOpenInnerQuestions("mutual_funds_7")
                    : handleCloseInnerQuestions("mutual_funds_7");
                }}
                className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
              >
                <Text weight="bold" variant="h4" color="text-headerColor">
                  7) Can I trade with a Mutual Fund account?
                </Text>
                {openQuestions?.mutual_funds_7 ? (
                  <img src={downArrow} alt="down_arrow" />
                ) : (
                  <img src={rightArrow} alt="right_arrow" />
                )}
              </div>
              {openQuestions?.mutual_funds_7 && (
                <div className="ml-[3%]">
                  <Text weight="normal" variant="body" color="text-headerColor">
                    No, you cannot trade with a Mutual Fund account. However, to trade on securities listed on the NSE,
                    you will be required to open a securities trading account by giving us a written instruction and
                    filling the Direct Cash Settlement form which is a requirement to open a CSCS account.
                  </Text>
                </div>
              )}
              <div
                onClick={() => {
                  !!!openQuestions?.mutual_funds_8
                    ? handleOpenInnerQuestions("mutual_funds_8")
                    : handleCloseInnerQuestions("mutual_funds_8");
                }}
                className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
              >
                <Text weight="bold" variant="h4" color="text-headerColor">
                  8) Can I invest in Mutual Funds or trusts accounts while having a securities account?
                </Text>
                {openQuestions?.mutual_funds_8 ? (
                  <img src={downArrow} alt="down_arrow" />
                ) : (
                  <img src={rightArrow} alt="right_arrow" />
                )}
              </div>
              {openQuestions?.mutual_funds_8 && (
                <div className="ml-[3%]">
                  <Text weight="normal" variant="body" color="text-headerColor">
                    Yes. You can invest in our Mutual Funds product or Trusts product by selecting any of our Mutual
                    Funds and creating an account.
                  </Text>
                </div>
              )}
              <div
                onClick={() => {
                  !!!openQuestions?.mutual_funds_9
                    ? handleOpenInnerQuestions("mutual_funds_9")
                    : handleCloseInnerQuestions("mutual_funds_9");
                }}
                className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
              >
                <Text weight="bold" variant="h4" color="text-headerColor">
                  9) How do I view my account Holding statement?
                </Text>
                {openQuestions?.mutual_funds_9 ? (
                  <img src={downArrow} alt="down_arrow" />
                ) : (
                  <img src={rightArrow} alt="right_arrow" />
                )}
              </div>
              {openQuestions?.mutual_funds_9 && (
                <>
                  <Text weight="normal" variant="body" color="text-headerColor">
                    You can view your statement by following these steps:
                  </Text>
                  <ul className="list-disc ml-[4%]">
                    <li className="font-normal text-sm text-headerColor">
                      {" "}
                      Visit{" "}
                      <a
                        href="https://investnow.ng"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary font-bold text-sm cursor-pointer"
                      >
                        investnow.ng
                      </a>{" "}
                      on your web browser.
                    </li>
                    <li className="font-normal text-sm text-headerColor">Click on my portfolio</li>
                    <li className="font-normal text-sm text-headerColor">
                      Click on the type of account you have with us.
                    </li>
                    <li className="font-normal text-sm text-headerColor">Click on view statement.</li>
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
        <div
          onClick={() => {
            !!!isActive?.equity ? handleToggleAccordion("equity") : handleToggleCloseAccordion("equity");
          }}
          className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
        >
          <Text weight="bold" variant="h3">
            Securities (Stock Trading)
          </Text>
          {isActive?.equity ? <img src={downArrow} alt="down_arrow" /> : <img src={rightArrow} alt="right_arrow" />}
        </div>
        {isActive?.equity && (
          <div className="px-[4%] flex flex-col mt-3 mb-10">
            <div
              onClick={() => {
                !!!openQuestions?.securities_1
                  ? handleOpenInnerQuestions("securities_1")
                  : handleCloseInnerQuestions("securities_1");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                1) How do I buy shares?
              </Text>
              {openQuestions?.securities_1 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_1 && (
              <>
                <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                  To invest in shares on the Nigerian Stock Exchange, you need to open a stock broking account with a
                  stockbroker. Kindly download the InvestNow app from the Google Play or IOS store, or use the web to
                  get started.
                </Text>
                <div className="ml-[2%] text-headerColor text-sm font-normal">
                  You can also click on the link{" "}
                  <a
                    href="https://investnow.ng/Products/S"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary font-bold text-sm cursor-pointer"
                  >
                    https://investnow.ng/Products/S
                  </a>{" "}
                  For any assistance, you can reach our Customer Experience Helpdesk through any of the following
                  channels below:
                </div>
                <ul className="list-disc ml-[4%]">
                  <li className="font-normal text-sm text-headerColor">
                    Email: customerservice@unitedcapitalplcgroup.com
                  </li>
                  <li className="font-normal text-sm text-headerColor">Phone Lines: 01631-7887, 01631-7888</li>
                  <li className="font-normal text-sm text-headerColor">
                    Live chat: investnow.ng, unitedcapitalplcgroup.com
                  </li>
                  <li className="font-normal text-sm text-headerColor"> WhatsApp: 08168282396</li>
                </ul>
              </>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_2
                  ? handleOpenInnerQuestions("securities_2")
                  : handleCloseInnerQuestions("securities_2");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                2) How do I access the live trading platform?
              </Text>
              {openQuestions?.securities_2 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_2 && (
              <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                You can access the live trading platform directly by visiting trade.investnow.ng. You can also access
                the live trading platform by clicking on “Live Trading” on InvestNow mobile or web. You would be
                redirected to the platform.
              </Text>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_3
                  ? handleOpenInnerQuestions("securities_3")
                  : handleCloseInnerQuestions("securities_3");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                3) How are dividends paid?
              </Text>
              {openQuestions?.securities_3 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_3 && (
              <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                Dividends are portions of a company’s profit due at the end of a particular financial period. In the
                Nigerian stock market, dividends are paid twice in a year: Interim (at half year) &amp; Final (at year
                end). N.B: Please note that not all companies pay interim dividend, but most pay final dividend at the
                end of the financial year.
              </Text>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_4
                  ? handleOpenInnerQuestions("securities_4")
                  : handleCloseInnerQuestions("securities_4");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                4) Do I need to fund the account before indicating the shares I would like to purchase?
              </Text>
              {openQuestions?.securities_4 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_4 && (
              <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                Accounts must be funded to purchase stocks on the Nigerian Stock Exchange via our live trading platform.
              </Text>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_5
                  ? handleOpenInnerQuestions("securities_5")
                  : handleCloseInnerQuestions("securities_5");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                5) I bought shares a long time ago, how do I trace and get my dividends on them?
              </Text>
              {openQuestions?.securities_5 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_5 && (
              <>
                <div className="ml-[2%] text-headerColor text-sm font-normal">
                  Please visit the Investnow portal{" "}
                  <a
                    href="https://investnow.ng"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary font-bold text-sm cursor-pointer"
                  >
                    https://investnow.ng
                  </a>{" "}
                  and click on the U-Trace feature. For more information, you can reach our Customer Experience Helpdesk
                  through any of the following channels below:
                </div>
                <ul className="list-disc ml-[4%]">
                  <li className="font-normal text-sm text-headerColor">
                    Email: customerservice@unitedcapitalplcgroup.com
                  </li>
                  <li className="font-normal text-sm text-headerColor">Phone Lines: 01631-7887, 01631-7888</li>
                  <li className="font-normal text-sm text-headerColor">
                    Live chat: investnow.ng, unitedcapitalplcgroup.com
                  </li>
                  <li className="font-normal text-sm text-headerColor"> WhatsApp: 08168282396</li>
                </ul>
              </>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_6
                  ? handleOpenInnerQuestions("securities_6")
                  : handleCloseInnerQuestions("securities_6");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                6) Will the Money Market Fund help me with investment in shares?
              </Text>
              {openQuestions?.securities_6 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_6 && (
              <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                The money market fund is one of the Mutual Fund products provided by United Capital Plc’s Asset
                Management business, and cannot help you with your desire for direct investment in shares. However, you
                may decide to move some money from your money market fund account for purchase of shares once your
                account is fully set up.
              </Text>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_7
                  ? handleOpenInnerQuestions("securities_7")
                  : handleCloseInnerQuestions("securities_7");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                7) How does investment work?
              </Text>
              {openQuestions?.securities_7 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_7 && (
              <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                The aim is to buy shares of companies with good fundamentals at a cheap price and either sell when they
                appreciate or keep mopping up volumes for yearly dividends, which could serve as interest on investment.
              </Text>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_8
                  ? handleOpenInnerQuestions("securities_8")
                  : handleCloseInnerQuestions("securities_8");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                8) How can Investnow help me reach my financial goals?
              </Text>
              {openQuestions?.securities_8 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_8 && (
              <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                Investment plans vary based on different objectives and constraints like age, retirement, risk factors
                etc. But the key to equity investment is to always invest in quality asset (companies with strong
                fundamentals) with medium to long term investment potentials.
              </Text>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_9
                  ? handleOpenInnerQuestions("securities_9")
                  : handleCloseInnerQuestions("securities_9");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                9) How long does it take to fund and set up an investment account?
              </Text>
              {openQuestions?.securities_9 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_9 && (
              <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                Funding and setting up an investment account takes 48 working hours.
              </Text>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_10
                  ? handleOpenInnerQuestions("securities_10")
                  : handleCloseInnerQuestions("securities_10");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                10) How much do I typically need to set up an investment account?
              </Text>
              {openQuestions?.securities_10 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_10 && (
              <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                You can open a brokerage account with Zero balance while funding will be based on what you are willing
                to buy.
              </Text>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_11
                  ? handleOpenInnerQuestions("securities_11")
                  : handleCloseInnerQuestions("securities_11");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                11) How are returns paid?
              </Text>
              {openQuestions?.securities_11 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_11 && (
              <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                Returns on investment comes in the form of periodic dividend payments and capital appreciation on
                investment which can be unlocked by selling the shares. Settlement of such sales will be paid into your
                account within three working days from the transaction day.
              </Text>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_12
                  ? handleOpenInnerQuestions("securities_12")
                  : handleCloseInnerQuestions("securities_12");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                12) What is the ROI on available investments?
              </Text>
              {openQuestions?.securities_12 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_12 && (
              <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                Return on Investments are not fixed or guaranteed for investments in stocks.
              </Text>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_13
                  ? handleOpenInnerQuestions("securities_13")
                  : handleCloseInnerQuestions("securities_13");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                13) I have spare 100,000, how can I go about investing?
              </Text>
              {openQuestions?.securities_13 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_13 && (
              <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                You can invest N100,000 on fundamentally sound stocks based on our well-researched recommendations. You
                will have access to the recommendation once your account is fully set up.
              </Text>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_14
                  ? handleOpenInnerQuestions("securities_14")
                  : handleCloseInnerQuestions("securities_14");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                14) Do I have to focus on one investment package?
              </Text>
              {openQuestions?.securities_14 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_14 && (
              <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                No. You do not have to focus on one investment package, other packages are available within our company.
              </Text>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_15
                  ? handleOpenInnerQuestions("securities_15")
                  : handleCloseInnerQuestions("securities_15");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                15) Can I access your research information or weekly investment views?
              </Text>
              {openQuestions?.securities_15 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_15 && (
              <div className="ml-[2%] text-headerColor text-sm font-normal">
                Research Information/reports can be accessed by visiting our website or sending a mail to{" "}
                <a
                  href="mailto:customerservice@unitedcapitalplcgroup.com?subject = Feedback&body = Message"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary font-bold text-sm cursor-pointer"
                >
                  customerservice@unitedcapitalplcgroup.com
                </a>{" "}
                to be added to the mailing list.
              </div>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_16
                  ? handleOpenInnerQuestions("securities_16")
                  : handleCloseInnerQuestions("securities_16");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                16) How do I know when my order has been executed?
              </Text>
              {openQuestions?.securities_16 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_16 && (
              <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                Once your order has been executed on the platform, you will see it on the executed order column and
                contract note sent after close of trade that day.
              </Text>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_17
                  ? handleOpenInnerQuestions("securities_17")
                  : handleCloseInnerQuestions("securities_17");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                17) I’m not a Nigerian, can I open a Securities account?
              </Text>
              {openQuestions?.securities_17 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_17 && (
              <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                Yes. You can open an account if you have a local bank account in Nigeria and a Bank Verification Number
                (BVN) for KYC purposes. Otherwise, you will need to enlist the services of a custodian.
              </Text>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_18
                  ? handleOpenInnerQuestions("securities_18")
                  : handleCloseInnerQuestions("securities_18");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                18) Can I transfer my account from my current stockbroker to United Capital Securities?
              </Text>
              {openQuestions?.securities_18 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_18 && (
              <>
                <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                  Yes. You can transfer your account from your stockbroker to United Capital Securities Limited through
                  an Inter-Member transfer migration. For more information, please contact our customer experience
                  Helpdesk through any of the following channels below:
                </Text>
                <ul className="list-disc ml-[4%]">
                  <li className="font-normal text-sm text-headerColor">
                    Email: customerservice@unitedcapitalplcgroup.com
                  </li>
                  <li className="font-normal text-sm text-headerColor">Phone Lines: 01631-7887, 01631-7888</li>
                  <li className="font-normal text-sm text-headerColor">
                    Live chat: investnow.ng, unitedcapitalplcgroup.com
                  </li>
                  <li className="font-normal text-sm text-headerColor"> WhatsApp: 08168282396</li>
                </ul>
              </>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_19
                  ? handleOpenInnerQuestions("securities_19")
                  : handleCloseInnerQuestions("securities_19");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                19) Can I pay cash into my Stock broking account?
              </Text>
              {openQuestions?.securities_19 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_19 && (
              <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                Yes. You can pay through your bank, but it has to be within the stipulated cash transaction limit as set
                by the regulators.
              </Text>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_20
                  ? handleOpenInnerQuestions("securities_20")
                  : handleCloseInnerQuestions("securities_20");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                20) What is a Market Order?
              </Text>
              {openQuestions?.securities_20 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_20 && (
              <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                A market order is a buy or sell order to be executed immediately at the current market price. As long as
                there are willing sellers and buyers, market orders are filled.
              </Text>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_21
                  ? handleOpenInnerQuestions("securities_21")
                  : handleCloseInnerQuestions("securities_21");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                21) What is a Limit Order?
              </Text>
              {openQuestions?.securities_21 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_21 && (
              <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                A limit order is an order to buy or sell a stock at a specific price or better. A buy limit order can
                only be executed at the limit price or lower, and a sell limit order can only be executed at the limit
                price or higher.
              </Text>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_22
                  ? handleOpenInnerQuestions("securities_22")
                  : handleCloseInnerQuestions("securities_22");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                22) How can I reset my password?
              </Text>
              {openQuestions?.securities_22 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_22 && (
              <ul className="list-disc ml-[4%]">
                <li className="font-normal text-sm text-headerColor">
                  Go to{" "}
                  <a
                    href="https://trade.investnow.ng"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary font-bold text-sm cursor-pointer"
                  >
                    trade.investnow.ng
                  </a>{" "}
                  on your browser
                </li>
                <li className="font-normal text-sm text-headerColor">Click on “I forgot my password”.</li>
                <li className="font-normal text-sm text-headerColor">
                  Input your username (Your username contains letters and 5 numbers that had been sent in the login
                  credential email), and your registered email address in the required boxes.
                </li>
                <li className="font-normal text-sm text-headerColor">Then click on submit</li>
                <li className="font-normal text-sm text-headerColor">
                  You will receive a new password in your registered email address, kindly use that to log in and follow
                  the prompt to change to a new password.
                </li>
              </ul>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_23
                  ? handleOpenInnerQuestions("securities_23")
                  : handleCloseInnerQuestions("securities_23");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                23) Where can I see my portfolio?
              </Text>
              {openQuestions?.securities_23 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_23 && (
              <ul className="list-disc ml-[4%]">
                <li className="font-normal text-sm text-headerColor">The portfolio icon is on the Menu Bar.</li>
                <li className="font-normal text-sm text-headerColor">
                  However, if you would like to access your portfolio valuation statement, please
                </li>
                <li className="font-normal text-sm text-headerColor">
                  click on the Menu Bar , then click on the “My Report” option
                </li>
                <li className="font-normal text-sm text-headerColor">
                  Then, click on the drop-down to navigate to “Portfolio Valuation. (Summary)
                </li>
                <li className="font-normal text-sm text-headerColor">Then click the “RUN” button.</li>
              </ul>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_24
                  ? handleOpenInnerQuestions("securities_24")
                  : handleCloseInnerQuestions("securities_24");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                24) What do I do if I am unable to view my portfolio?
              </Text>
              {openQuestions?.securities_24 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_24 && (
              <div className="ml-[2%] text-headerColor text-sm font-normal">
                Clients’ portfolio statement and summary are always available on the platform. But if you are still
                unable to access the portfolio, please send an email to our Customer Experience helpdesk at{" "}
                <a
                  href="mailto:customerservice@unitedcapitalplcgroup.com?subject = Feedback&body = Message"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary font-bold text-sm cursor-pointer"
                >
                  customerservice@unitedcapitalplcgroup.com
                </a>
              </div>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_25
                  ? handleOpenInnerQuestions("securities_25")
                  : handleCloseInnerQuestions("securities_25");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                25) How can I cancel a mandate?
              </Text>
              {openQuestions?.securities_25 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_25 && (
              <>
                <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                  Two options are available to you when you want to cancel an order.
                </Text>
                <ul className="list-disc ml-[4%]">
                  <li className="font-normal text-sm text-headerColor">
                    You can right-click on the order in the Order Book, then click in the option to “Withdraw”..
                  </li>
                  <li className="font-normal text-sm text-headerColor">
                    You can scroll to the left-hand side of the Order Book, then click on the “Delete” option that is
                    available.
                  </li>
                </ul>
              </>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_26
                  ? handleOpenInnerQuestions("securities_26")
                  : handleCloseInnerQuestions("securities_26");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                26) How do I get access to trading information that will benefit me when trading? Can I also get
                historical data of the stock’s performance?
              </Text>
              {openQuestions?.securities_26 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_26 && (
              <ul className="list-disc ml-[4%]">
                <li className="font-normal text-sm text-headerColor">
                  You can explore and study the general market direction before keying in any orders. To do this, click
                  on the Menu Bar, scroll down, and click on “Market View”
                </li>
                <li className="font-normal text-sm text-headerColor">
                  You can also get market news as uploaded by the NSE on the platform. To get this, click “News” on the
                  Menu Bar.
                </li>
                <li className="font-normal text-sm text-headerColor">
                  To get historical data on any stock, click on “Report” under “Market” in the Menu Bar. Then, click on
                  the option you wish to explore i.e., monthly price list or yearly price list, etc. Then, enter the
                  symbol (stock that you wish to access), and fill in the period (i.e., date), then click on the “RUN”
                  button.
                </li>
              </ul>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_27
                  ? handleOpenInnerQuestions("securities_27")
                  : handleCloseInnerQuestions("securities_27");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                27) Can I get access to pricelist on the platform?
              </Text>
              {openQuestions?.securities_27 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_27 && (
              <>
                <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                  Yes, Price List is available on the platform. To get the price list, click on Menu, click on
                </Text>
                <ul className="list-disc ml-[4%]">
                  <li className="font-normal text-sm text-headerColor">
                    “Report” under “Market” segment in the Menu Bar.
                  </li>
                  <li className="font-normal text-sm text-headerColor">
                    Then, choose the option of “Daily Price List &amp; Market Summary”. Then, click on the “RUN” button.
                  </li>
                </ul>
              </>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_28
                  ? handleOpenInnerQuestions("securities_28")
                  : handleCloseInnerQuestions("securities_28");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                28) How can I view my statement?
              </Text>
              {openQuestions?.securities_28 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_28 && (
              <ul className="list-disc ml-[4%]">
                <li className="font-normal text-sm text-headerColor">Go to the Menu Bar on the dashboard,</li>
                <li className="font-normal text-sm text-headerColor">Click on “My Reports”</li>
                <li className="font-normal text-sm text-headerColor">
                  Input the period you want the statement of account for. Select the date in the “On/From” and “To”
                  Segment and click on the “RUN” Button.
                </li>
              </ul>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_29
                  ? handleOpenInnerQuestions("securities_29")
                  : handleCloseInnerQuestions("securities_29");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                29) How can I download contract notes?
              </Text>
              {openQuestions?.securities_29 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_29 && (
              <ul className="list-disc ml-[4%]">
                <li className="font-normal text-sm text-headerColor">Go to menu on the dashboard,</li>
                <li className="font-normal text-sm text-headerColor">Click on “My Reports”</li>
                <li className="font-normal text-sm text-headerColor">
                  Click on the seen report drop-down to navigate to “Purchase Contract Note” and “Sale Contract Note”
                  respectively
                </li>
                <li className="font-normal text-sm text-headerColor">
                  Click, then click on the button at the top left to download the contract notes.
                </li>
              </ul>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_30
                  ? handleOpenInnerQuestions("securities_30")
                  : handleCloseInnerQuestions("securities_30");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                30) The trading orders placed appear in different colors in the order book section, what do the colors
                signify?
              </Text>
              {openQuestions?.securities_30 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_30 && (
              <Text format="ml-[2%]" weight="normal" variant="body" color="text-headerColor">
                When you place orders under the TRADE REAL-TIME tab on the Menu.
              </Text>
            )}
            <div
              onClick={() => {
                !!!openQuestions?.securities_31
                  ? handleOpenInnerQuestions("securities_31")
                  : handleCloseInnerQuestions("securities_31");
              }}
              className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
            >
              <Text weight="bold" variant="h4" color="text-headerColor">
                31) The orders appear in different colors on the order book section, below are the significance of each
                colour:
              </Text>
              {openQuestions?.securities_31 ? (
                <img src={downArrow} alt="down_arrow" />
              ) : (
                <img src={rightArrow} alt="right_arrow" />
              )}
            </div>
            {openQuestions?.securities_31 && (
              <ul className="list-disc ml-[4%]">
                <li className="font-normal text-sm text-headerColor">
                  Yellow: This represents a fresh order keyed in which has not been filled (executed).
                </li>
                <li className="font-normal text-sm text-headerColor">
                  Deep Green: This represents that the order has been filled (executed)
                </li>
                <li className="font-normal text-sm text-headerColor">
                  Light Green: This represents that the order has been partially filled (partially executed)
                </li>
                <li className="font-normal text-sm text-headerColor">
                  Red: This represents the orders that are withdrawn or cancelled from the market before being filled
                </li>
                <li className="font-normal text-sm text-headerColor">
                  Chocolate Brown: This represents the orders that are rejected by the market owing to several reasons
                  (e.g., quoting price out of price-band for the day, or an attempt to sell from an insufficient
                  account.)
                </li>
                <li className="font-normal text-sm text-headerColor">
                  Light Brown/Orange: This represents orders that are amended or adjusted before being filled.
                </li>
                <li className="font-normal text-sm text-headerColor">
                  Ash: This represents orders that are expired. This occurs when the order does not eventually go
                  through at the close of market for the day.
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
