import React, { useState } from "react";
import Text from "../../../../../components/Typography/Typography";
import UploadIcon from "../../../../../assets/icons/upload_icon.svg";
import MessageModal from "../../../../../components/modals/MessageModal";
import BirthCertUpload from "./component/birthCertUpload";

export default function BirthCertificateUpload() {
  const [openModal, setOpenModal] = useState({
    open_birthCertificate_Uploader: false,
  });

  const handleOpenModals = (type) => {
    switch (type) {
      case "open_birthCertificate_Uploader":
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
      case "open_birthCertificate_Uploader":
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
            Upload birth certificate
          </Text>
          <Text color="text-black" weight="normal" variant="h4" format="tracking-wide">
            This information helps us personalise and secure your InvestNow account
          </Text>
        </div>
        <div className="w-[50%] flex flex-col gap-2 mt-6">
          <Text variant="h4" weight="bold">
            Your birth certificate *
          </Text>
          <div
            onClick={() => handleOpenModals("open_birthCertificate_Uploader")}
            className="flex items-center justify-between w-full cursor-pointer px-4 py-3 bg-[#f2f2f2]"
          >
            <Text variant="body" weight="normal">
              Upload birth certificate
            </Text>
            <img src={UploadIcon} alt="upload_icon" />
          </div>
          <Text format="w-[70%]" variant="sub" weight="normal">
            Accepted file type are PDF , PNG or JPEG. File size must not be more than 5mb
          </Text>
        </div>
      </div>
      <MessageModal
        modalHeight="90vh"
        minWidth="320px"
        bgColor={true}
        isOpen={openModal?.open_birthCertificate_Uploader}
      >
        <BirthCertUpload handleCloseModals={handleCloseModals} />
      </MessageModal>
    </>
  );
}
