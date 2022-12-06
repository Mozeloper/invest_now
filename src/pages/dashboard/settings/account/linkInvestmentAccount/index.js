import React, { useState } from "react";

import closeBtn from "../../../../../assets/icons/close_btn.svg";
// import Button from "../../../../../components/Button";
import MessageModal from "../../../../../components/modals/MessageModal";
import Text from "../../../../../components/Typography/Typography";
import ConfirmDialog from "./components/confirmDialog";
import Otp from "./components/otp";

export default function LinkInvestmentaccount({ handleCloseItemRouting }) {
  const [openModal, setOpenMpdal] = useState({
    confirm_otp: false,
    confirm_dialog: false,
  });

  const [linkUnlink, setLinkUnlink] = useState("");

  const [isNotEmpty] = useState(true);

  const handleOpenCardModal = (type) => {
    switch (type) {
      case "confirm_otp":
        setOpenMpdal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "confirm_dialog":
        setOpenMpdal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      default:
        break;
    }
  };

  const handleCloseCardModal = (type) => {
    switch (type) {
      case "confirm_otp":
        setOpenMpdal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "confirm_dialog":
        setOpenMpdal((prev) => ({
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
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseItemRouting("link_investment_accounts")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Text variant="h2" weight="bold">
          My Accounts
        </Text>
        {isNotEmpty && (
          <Text variant="h4" weight="normal">
            Below is the list of all your united capital accounts
          </Text>
        )}
      </div>
      {isNotEmpty ? (
        <div className="w-full mt-4">
          <table className="w-full">
            <thead className="border-b border-gray">
              <tr>
                <td className="text-[#667085] text-left whitespace-nowrap">
                  Account
                </td>
                <td className="text-[#667085] text-left whitespace-nowrap">
                  System
                </td>
                <td className="text-[#667085] text-left whitespace-nowrap"></td>
              </tr>
            </thead>
            <tbody className="w-full">
              <tr className="w-full border-b border-gray">
                <td className="text-[#667085] py-3 whitespace-nowrap">
                  OKUSANYE ABIOLA MARY
                </td>
                <td className="text-[#667085] py-3 whitespace-nowrap">
                  SECURITIES
                </td>
                <td className="whitespace-nowrap py-3 text-[#667085]">
                  <button
                    className="cursor-pointer w-full bg-primary border-none text-white p-1 cursor-pointer rounded-md"
                    type="button"
                    onClick={() => {
                      setLinkUnlink("unlink");
                      handleOpenCardModal("confirm_dialog");
                    }}
                  >
                    UNLINK
                  </button>
                </td>
              </tr>
              <tr className="w-full border-b border-gray">
                <td className="text-[#667085] py-3 whitespace-nowrap">
                  OKUSANYE ABIOLA MARY
                </td>
                <td className="text-[#667085] py-3 whitespace-nowrap">
                  ASSEST MANAGEMENT
                </td>
                <td className="whitespace-nowrap py-3  text-[#667085]">
                  <button
                    className="cursor-pointer w-full bg-BACKGROUND_GREEN border-none text-white p-1 cursor-pointer rounded-md"
                    type="button"
                    onClick={() => {
                      setLinkUnlink("link");
                      handleOpenCardModal("confirm_dialog");
                    }}
                  >
                    LINK
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col mt-2 text-center mx-auto justify-center h-[50%] items-center w-[85%]">
          <Text variant="h4" weight="bold">
            You dont have investment account. Click on the button below to add
          </Text>
          {/* <div className="flex justify-start mt-8 w-full">
            <Button
              onClick={() => handleOpenCardModal("confirm_otp")}
              title="Add New Card"
              className="cursor-pointer w-full"
              type="button"
            />
          </div> */}
        </div>
      )}
      <MessageModal
        isOpen={openModal?.confirm_otp}
        modalHeight="auto"
        minWidth="300px"
      >
        <Otp
          handleCloseCardModal={handleCloseCardModal}
          handleCloseItemRouting={handleCloseItemRouting}
        />
      </MessageModal>
      <MessageModal
        isOpen={openModal?.confirm_dialog}
        modalHeight="auto"
        minWidth="300px"
      >
        <ConfirmDialog
          handleCloseCardModal={handleCloseCardModal}
          handleCloseItemRouting={handleCloseItemRouting}
          handleOpenCardModal={handleOpenCardModal}
          linkUnlink={linkUnlink}
        />
      </MessageModal>
    </>
  );
}
