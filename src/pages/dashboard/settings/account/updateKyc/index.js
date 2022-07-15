import React, { useState } from "react";
import closeBtn from "../../../../../assets/icons/close_btn.svg";
import UploadIcon from "../../../../../assets/icons/upload_icon.svg";
import Text from "../../../../../components/Typography/Typography";
import rightArrow from "../../../../../assets/icons/right_arrow.svg";
import MessageModal from "../../../../../components/modals/MessageModal";
import UploadUtilityBill from "./uploadUtilityBill";
import UploadValidId from "./uploadValidId";
import UpdateBioData from "./updateBioData";
import EmploymentDetails from "./employmentDetails";
import SelfCertification from "./selfCertification";

export default function UpdateKyc({ handleCloseItemRouting }) {
  const [openModal, setOpenMpdal] = useState({
    utility_bill: false,
    valid_id: false,
    bio_data: false,
    employment_details: false,
    self_certification: false,
  });

  const handleOpenModals = (type) => {
    switch (type) {
      case "utility_bill":
        setOpenMpdal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "valid_id":
        setOpenMpdal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "bio_data":
        setOpenMpdal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "employment_details":
        setOpenMpdal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "self_certification":
        setOpenMpdal((prev) => ({
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
      case "utility_bill":
        setOpenMpdal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "valid_id":
        setOpenMpdal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "bio_data":
        setOpenMpdal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "employment_details":
        setOpenMpdal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "self_certification":
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
          onClick={() => handleCloseItemRouting("update_kyc")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <div className="w-full flex flex-col gap-2 mb-3">
        <Text variant="h3" weight="bold">
          Update KYC
        </Text>
        <Text variant="h4" weight="normal">
          Select which of the following you will like to update
        </Text>
        <Text variant="body" weight="normal">
          This information helps us personalise and secure your InvestNow account
        </Text>
      </div>
      <div className="w-full flex flex-col gap-2">
        <Text variant="sub" weight="bold">
          Utility bill update
        </Text>
        <div
          onClick={() => {
            handleOpenModals("utility_bill");
          }}
          className="flex items-center justify-between w-full cursor-pointer px-4 py-2 bg-[#F8F8F8]"
        >
          <Text variant="sub" weight="normal">
            Upload your Utility bill
          </Text>
          <img src={UploadIcon} alt="upload_icon" />
        </div>
        <Text format="w-[70%]" variant="sub" weight="normal">
          Accepted file type are PDF , PNG or JPEG. File size must not be more than 5mb
        </Text>
      </div>
      <div className="w-full flex flex-col gap-2 my-3">
        <Text variant="sub" weight="bold">
          Valid ID update
        </Text>
        <div
          onClick={() => handleOpenModals("valid_id")}
          className="flex items-center justify-between w-full cursor-pointer px-4 py-2 bg-[#F8F8F8]"
        >
          <Text variant="sub" weight="normal">
            Upload your Valid ID
          </Text>
          <img src={UploadIcon} alt="upload_icon" />
        </div>
        <Text format="w-[70%]" variant="sub" weight="normal">
          Accepted file type are PDF , PNG or JPEG. File size must not be more than 5mb
        </Text>
      </div>
      <div className="flex flex-col gap-3">
        <div
          onClick={() => handleOpenModals("bio_data")}
          className="flex items-center justify-between w-full cursor-pointer p-3 bg-secondary"
        >
          <Text variant="body" weight="bold">
            Update biodata
          </Text>
          <img src={rightArrow} alt="right_arrow" />
        </div>
        <div
          onClick={() => handleOpenModals("employment_details")}
          className="flex items-center justify-between w-full cursor-pointer p-3 bg-secondary"
        >
          <Text variant="body" weight="bold">
            Employment details
          </Text>
          <img src={rightArrow} alt="right_arrow" />
        </div>
        <div
          onClick={() => handleOpenModals("self_certification")}
          className="flex items-center justify-between w-full cursor-pointer p-3 bg-secondary"
        >
          <Text variant="body" weight="bold">
            Fill self-certification form
          </Text>
          <img src={rightArrow} alt="right_arrow" />
        </div>
      </div>
      <MessageModal bgColor={true} modalHeight="625px" isOpen={openModal?.utility_bill}>
        <UploadUtilityBill handleCloseModals={handleCloseModals} />
      </MessageModal>
      <MessageModal bgColor={true} modalHeight="625px" isOpen={openModal?.valid_id}>
        <UploadValidId handleCloseModals={handleCloseModals} />
      </MessageModal>
      <MessageModal modalHeight="auto" isOpen={openModal?.bio_data}>
        <UpdateBioData handleCloseModals={handleCloseModals} />
      </MessageModal>
      <MessageModal modalHeight="700px" isOpen={openModal?.employment_details}>
        <EmploymentDetails handleCloseModals={handleCloseModals} />
      </MessageModal>
      <MessageModal modalHeight="auto" isOpen={openModal?.self_certification}>
        <SelfCertification handleCloseModals={handleCloseModals} />
      </MessageModal>
    </>
  );
}
