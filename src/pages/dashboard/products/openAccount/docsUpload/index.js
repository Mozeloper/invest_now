import React, { useState } from "react";
import arrowLeft from "../../../../../assets/icons/arrow-left.svg";
import Button from "../../../../../components/Button";
import UploadIcon from "../../../../../assets/icons/upload_icon.svg";
import Text from "../../../../../components/Typography/Typography";
import SideRightModal from "../../../../../components/modals/SideRightModal";
import PictureSetup from "./components/PictureSetup";
import SignatureSetup from "./components/signatureSetup";

export default function DocsUpload({ handleDispatchNextStep, handleDispatchPreviousStep }) {
  const [openModal, setOpenModal] = useState({
    profile_setup: false,
    signature_setup: false,
    idCard_setup: false,
    utility_bill: false,
  });

  const handleOpenModals = (type) => {
    switch (type) {
      case "profile_setup":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "signature_setup":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "idCard_setup":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "utility_bill":
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
      case "profile_setup":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "signature_setup":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "idCard_setup":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "utility_bill":
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
      <div className="w-full">
        <div className="w-full">
          <img
            onClick={() => handleDispatchPreviousStep()}
            src={arrowLeft}
            alt="arrow-left"
            className="w-[24px] h-[24px] cursor-pointer"
          />
        </div>
        <div className="flex flex-col mt-2">
          <Text weight="bold" variant="body" color="text-red">
            Step 3
          </Text>
          <Text weight="bold" variant="h4" color="text-red">
            Upload Documents
          </Text>
        </div>
        <div className="flex flex-col gap-2 mt-6 w-[40%]">
          <Text weight="bold" variant="h3" color="text-[#65666A]">
            Documents
          </Text>
          <Text weight="bold" variant="h4" color="text-[#65666A]">
            This information helps us personalise and secure your InvestNow account
          </Text>
        </div>

        <div className="mt-[5%] w-[70%]">
          <div className="flex gap-3">
            <div className="w-full flex flex-col gap-2">
              <Text variant="sub" weight="bold">
                Your picture *
              </Text>
              <div
                onClick={() => handleOpenModals("profile_setup")}
                className="flex items-center justify-between w-full cursor-pointer px-4 py-3 bg-[#f2f2f2]"
              >
                <Text variant="sub" weight="normal">
                  Upload image*
                </Text>
              </div>
              <Text format="w-[70%]" variant="sub" weight="normal">
                Accepted file type are PDF , PNG or JPEG. File size must not be more than 5mb
              </Text>
            </div>
            <div className="w-full flex flex-col gap-2">
              <Text variant="sub" weight="bold">
                Your Signature *
              </Text>
              <div
                onClick={() => handleOpenModals("signature_setup")}
                className="flex items-center justify-between w-full cursor-pointer px-4 py-3 bg-[#f2f2f2]"
              >
                <Text variant="sub" weight="normal">
                  Upload your signature
                </Text>
              </div>
              <Text format="w-[70%]" variant="sub" weight="normal">
                Accepted file type are PDF , PNG or JPEG. File size must not be more than 5mb
              </Text>
            </div>
          </div>
          <div className="flex gap-3 mt-8">
            <div className="w-full flex flex-col gap-2">
              <Text variant="sub" weight="bold">
                Your ID card
              </Text>
              <div
                onClick={() => handleOpenModals("idCard_setup")}
                className="flex items-center justify-between w-full cursor-pointer px-4 py-3 bg-[#f2f2f2]"
              >
                <Text variant="sub" weight="normal">
                  Upload your valid ID
                </Text>
                <img src={UploadIcon} alt="upload_icon" />
              </div>
              <Text format="w-[70%]" variant="sub" weight="normal">
                Accepted file type are PDF , PNG or JPEG. File size must not be more than 5mb
              </Text>
            </div>
            <div className="w-full flex flex-col gap-2">
              <Text variant="sub" weight="bold">
                Your Utility bill
              </Text>
              <div
                onClick={() => handleOpenModals("utility_bill")}
                className="flex items-center justify-between w-full cursor-pointer px-4 py-2 bg-[#f2f2f2]"
              >
                <Text variant="sub" weight="normal">
                  Upload your valid ID
                </Text>
                <img src={UploadIcon} alt="upload_icon" />
              </div>
              <Text format="w-[70%]" variant="sub" weight="normal">
                Accepted file type are PDF , PNG or JPEG. File size must not be more than 5mb
              </Text>
            </div>
          </div>
          <div className="mt-6">
            <Text format="w-[80%]" variant="h4" weight="normal">
              You are required to upload a selfie and signature to complete your account opening. Valid ID and Utility
              bill can be uploaded later
            </Text>
          </div>
          <div className="mt-10 w-full flex justify-center">
            <div className="w-[50%]">
              <Button onClick={() => handleDispatchNextStep()} title="Next" className="cursor-pointer" type="submit" />
            </div>
          </div>
        </div>
      </div>
      <SideRightModal modalWidth="500px" bgColor={true} isOpen={openModal?.profile_setup}>
        <PictureSetup handleCloseModals={handleCloseModals} />
      </SideRightModal>
      <SideRightModal modalWidth="500px" bgColor={true} isOpen={openModal?.signature_setup}>
        <SignatureSetup handleCloseModals={handleCloseModals} />
      </SideRightModal>
    </>
  );
}
