import React from "react";
import { useState } from "react";
import closeBtn from "../../../../../assets/icons/close_btn.svg";
import MessageModal from "../../../../../components/modals/MessageModal";
import Text from "../../../../../components/Typography/Typography";
import UpdateAddress from "./components/updateAddress";
import UpdateBank from "./components/updateBank";
import UpdateEmail from "./components/updateEmail";

export default function CustomerInformationUpdate({ handleCloseItemRouting }) {
  const [openModal, setOpenModal] = useState({
    update_bank: false,
    update_address: false,
    update_email: false,
  });

  const handleOpenModal = (type) => {
    switch (type) {
      case "update_bank":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "update_address":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "update_email":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      default:
        break;
    }
  };

  const handleCloseModal = (type) => {
    switch (type) {
      case "update_bank":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "update_address":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "update_email":
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
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseItemRouting("information_update")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <Text weight="bold" color="text-[#65666A]" variant="h2">
        Customer Information Update
      </Text>
      <div className="w-full flex flex-col gap-2">
        <div className="w-full bg-[#EDEDED] p-6 rounded-lg mt-4 flex flex-col gap-6 justify-between">
          <div className="flex flex-col gap-1 w-full">
            <Text variant="h4" weight="normal">
              00345678903
            </Text>
            <Text variant="h4" weight="bold">
              Paul Akilapa
            </Text>
            <Text variant="body" weight="normal">
              United Bank of Africa
            </Text>
          </div>
          <div
            onClick={() => handleOpenModal("update_bank")}
            className="mt-4 cursor-pointer border-2 border-[#FFC8C8] rounded-lg font-bold text-[#E32526] text-sm flex justify-center items-center w-[164px] h-[38px]"
          >
            Update Bank
          </div>
        </div>
        <div className="w-full bg-[#EDEDED] p-6 rounded-lg mt-4 flex flex-col gap-6 justify-between">
          <div className="flex flex-col gap-1 w-full">
            <Text variant="h4" weight="normal">
              House Address
            </Text>
            <Text variant="h4" weight="bold">
              No 4 Allen Avenue, Ikeja, Lagos
            </Text>
            <Text variant="body" weight="normal">
              Nigeria
            </Text>
          </div>
          <div
            onClick={() => handleOpenModal("update_address")}
            className="mt-4 cursor-pointer border-2 border-[#FFC8C8] rounded-lg font-bold text-[#E32526] text-sm flex justify-center items-center w-[164px] h-[38px]"
          >
            Update Address
          </div>
        </div>
        <div className="w-full bg-[#EDEDED] p-6 rounded-lg mt-4 flex flex-col gap-6 justify-between">
          <div className="flex flex-col gap-1 w-full">
            <Text variant="h4" weight="normal">
              Email Address:
            </Text>
            <Text variant="h4" weight="bold">
              Paakilapa@gmail.com
            </Text>
          </div>
          <div
            onClick={() => handleOpenModal("update_email")}
            className="mt-4 cursor-pointer border-2 border-[#FFC8C8] rounded-lg font-bold text-[#E32526] text-sm flex justify-center items-center w-[164px] h-[38px]"
          >
            Update Email
          </div>
        </div>
      </div>
      <MessageModal isOpen={openModal?.update_bank} modalHeight="auto" minWidth="320px">
        <UpdateBank handleCloseModal={handleCloseModal} />
      </MessageModal>
      <MessageModal isOpen={openModal?.update_address} modalHeight="auto" minWidth="320px">
        <UpdateAddress handleCloseModal={handleCloseModal} />
      </MessageModal>
      <MessageModal isOpen={openModal?.update_email} modalHeight="auto" minWidth="320px">
        <UpdateEmail handleCloseModal={handleCloseModal} />
      </MessageModal>
    </>
  );
}
