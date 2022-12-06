import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Text from "../../../../components/Typography/Typography";
import rightArrow from "../../../../assets/icons/right_arrow.svg";
import MessageModal from "../../../../components/modals/MessageModal";
import UpdateKyc from "./updateKyc";
import PaymentCards from "./paymentCards";
import LinkInvestmentaccount from "./linkInvestmentAccount";
import ResetPassword from "./resetPassword";
import CustomerInformationUpdate from "./customerInformationUpdate";

export default function Accounts() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState({
    update_kyc: false,
    get_statement: false,
    payment_card: false,
    link_investment_accounts: false,
    change_password: false,
    information_update: false,
  });

  const itemTitles = [
    {
      title: "Update KYC",
      type: "update_kyc",
    },
    {
      title: "Transactions History",
      type: "transaction_history",
    },
    {
      title: "Get statement",
      type: "get_statement",
    },
    {
      title: "Payment Cards",
      type: "payment_card",
    },
    {
      title: "Manage Recurring Funding",
      type: "recurring_fundings",
    },
    {
      title: "Link Investment Accounts",
      type: "link_investment_accounts",
    },
    {
      title: "Customer information update",
      type: "information_update",
    },
    {
      title: "Change Password",
      type: "change_password",
    },
  ];

  const handleOpenItemRouting = (type) => {
    switch (type) {
      case "update_kyc":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "get_statement":
        navigate("/statements");
        break;
      case "transaction_history":
        navigate("/transactions");
        break;
      case "payment_card":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "recurring_fundings":
        navigate("/active_reccurent_payments");
        break;
      case "link_investment_accounts":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "information_update":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "change_password":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      default:
        break;
    }
  };

  const handleCloseItemRouting = (type) => {
    switch (type) {
      case "update_kyc":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "get_statement":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "payment_card":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "link_investment_accounts":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "information_update":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "change_password":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="w-full bg-secondary p-4 h-full">
        <Text weight="bold" variant="h3" color="text-headerColor" format="mb-4">
          ACCOUNT
        </Text>
        <div className="mb-5">
          {itemTitles.map((list, index) => {
            return (
              <div className="px-[2%] flex flex-col" key={index}>
                <div
                  onClick={() => handleOpenItemRouting(list?.type)}
                  className="flex justify-between cursor-pointer"
                >
                  <Text weight="normal" variant="body" color="text-headerColor">
                    {list?.title}
                  </Text>
                  <img src={rightArrow} alt="right_arrow" />
                </div>
                {index !== 7 && (
                  <div className="border-b border-[#BCBCBC] w-full my-5"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <MessageModal
        isOpen={openModal?.update_kyc}
        modalHeight="auto"
        minWidth="320px"
      >
        <UpdateKyc handleCloseItemRouting={handleCloseItemRouting} />
      </MessageModal>
      <MessageModal
        isOpen={openModal?.payment_card}
        modalHeight="auto"
        minWidth="300px"
      >
        <PaymentCards handleCloseItemRouting={handleCloseItemRouting} />
      </MessageModal>
      <MessageModal
        isOpen={openModal?.link_investment_accounts}
        modalHeight="auto"
        modalWidth="700px"
      >
        <LinkInvestmentaccount
          handleCloseItemRouting={handleCloseItemRouting}
        />
      </MessageModal>
      <MessageModal
        isOpen={openModal?.change_password}
        modalHeight="auto"
        minWidth="300px"
      >
        <ResetPassword handleCloseItemRouting={handleCloseItemRouting} />
      </MessageModal>
      <MessageModal
        isOpen={openModal?.information_update}
        modalHeight="95vh"
        minWidth="350px"
      >
        <CustomerInformationUpdate
          handleCloseItemRouting={handleCloseItemRouting}
        />
      </MessageModal>
    </>
  );
}
