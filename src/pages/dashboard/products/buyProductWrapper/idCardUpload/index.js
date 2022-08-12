import React, { useState } from "react";
import Text from "../../../../../components/Typography/Typography";
import UploadIcon from "../../../../../assets/icons/upload_icon.svg";

import MessageModal from "../../../../../components/modals/MessageModal";
import IdType from "./component/idType";
import Uploader from "./component/uploader";

export default function IdCardUpload() {
  const [openModal, setOpenModal] = useState({
    open_valid_id_list: false,
    open_valid_id_upload: false,
  });

  const handleOpenModals = (type) => {
    switch (type) {
      case "open_valid_id_list":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "open_valid_id_upload":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      default:
        break;
    }
  };

  const handleCloseModals = (type) => {
    switch (type) {
      case "open_valid_id_list":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "open_valid_id_upload":
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
      <div data-aos="fade-up" data-aos-duration="2000" className="p-[2%]">
        <div className="flex flex-col gap-1 w-full">
          <Text color="text-black" weight="bold" variant="h3">
            Upload valid ID
          </Text>
          <Text color="text-black" weight="normal" variant="h4" format="tracking-wide">
            This information helps us personalise and secure your InvestNow account
          </Text>
        </div>
        <div className="w-[50%] flex flex-col gap-2 mt-6">
          <Text variant="h4" weight="bold">
            Your ID card
          </Text>
          <div
            onClick={() => handleOpenModals("open_valid_id_list")}
            className="flex items-center justify-between w-full cursor-pointer px-4 py-3 bg-[#f2f2f2]"
          >
            <Text variant="body" weight="normal">
              Upload your valid ID
            </Text>
            <img src={UploadIcon} alt="upload_icon" />
          </div>
          <Text format="w-[70%]" variant="sub" weight="normal">
            Accepted file type are PDF , PNG or JPEG. File size must not be more than 5mb
          </Text>
        </div>
      </div>
      <MessageModal modalHeight="90vh" minWidth="320px" bgColor={true} isOpen={openModal?.open_valid_id_list}>
        <IdType handleCloseModals={handleCloseModals} handleOpenModals={handleOpenModals} />
      </MessageModal>
      <MessageModal modalHeight="90vh" minWidth="320px" bgColor={true} isOpen={openModal?.open_valid_id_upload}>
        <Uploader handleCloseModals={handleCloseModals} />
      </MessageModal>
    </>
  );
}
