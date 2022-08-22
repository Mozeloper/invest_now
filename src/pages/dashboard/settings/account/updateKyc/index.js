import React, { useState } from "react";
import closeBtn from "../../../../../assets/icons/close_btn.svg";
import UploadIcon from "../../../../../assets/icons/upload_icon.svg";
import checked from "../../../../../assets/icons/correct.svg";
import Text from "../../../../../components/Typography/Typography";
import rightArrow from "../../../../../assets/icons/right_arrow.svg";
import MessageModal from "../../../../../components/modals/MessageModal";
import UploadUtilityBill from "./uploadUtilityBill";
import UploadValidId from "./uploadValidId";
import UpdateBioData from "./updateBioData";
import EmploymentDetails from "./employmentDetails";
import SelfCertification from "./selfCertification";
import SignatureSetup from "./signatureSetup";
import UploadPassport from "./uploadPassport";
import { useSelector } from "react-redux";

export default function UpdateKyc({ handleCloseItemRouting }) {
  const [openModal, setOpenModal] = useState({
    utility_bill: false,
    valid_id: false,
    signature_setup: false,
    upload_passport: false,
    bio_data: false,
    employment_details: false,
    self_certification: false,
  });
  const dashboardReducer = useSelector((state) => state.dashboardReducer);
  const completionStatus =
    dashboardReducer?.customerDetails?.payload?.data?.data?.profile_completion?.completion_status;
  const selfieKycStatus = completionStatus[0]?.is_completed;
  const signatureKycStatus = completionStatus[1]?.is_completed;
  const validIdKycStatus = completionStatus[2]?.is_completed;
  const utilityKycStatus = completionStatus[3]?.is_completed;
  const employmentKycStatus = completionStatus[4]?.is_completed;
  const selfCertificationKycStatus = completionStatus[5]?.is_completed;
  const updateBiodata =
    dashboardReducer?.customerDetails?.payload?.data?.data?.mothers_maiden_name !== "" &&
    dashboardReducer?.customerDetails?.payload?.data?.data?.mothers_maiden_name !== null
      ? dashboardReducer?.customerDetails?.payload?.data?.data?.mothers_maiden_name
      : false;

  const handleOpenModals = (type) => {
    switch (type) {
      case "utility_bill":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "valid_id":
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
      case "upload_passport":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "bio_data":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "employment_details":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "self_certification":
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
      case "utility_bill":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "valid_id":
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
      case "upload_passport":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "bio_data":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "employment_details":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "self_certification":
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
          Your Passport *
        </Text>
        <div
          onClick={() => (selfieKycStatus ? null : handleOpenModals("upload_passport"))}
          className="flex items-center justify-between w-full cursor-pointer px-4 py-3 bg-[#f2f2f2]"
        >
          <Text variant="sub" weight="normal">
            Upload your Passport photograph
          </Text>
          {selfieKycStatus && <img src={checked} alt="upload_icon" />}
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
          onClick={() => (signatureKycStatus ? null : handleOpenModals("signature_setup"))}
          className="flex items-center justify-between w-full cursor-pointer px-4 py-3 bg-[#f2f2f2]"
        >
          <Text variant="sub" weight="normal">
            Upload your signature
          </Text>
          {signatureKycStatus && <img src={checked} alt="upload_icon" />}
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
          onClick={() => (validIdKycStatus ? null : handleOpenModals("valid_id"))}
          className="flex items-center justify-between w-full cursor-pointer px-4 py-2 bg-[#F8F8F8]"
        >
          <Text variant="sub" weight="normal">
            Upload your Valid ID
          </Text>
          {validIdKycStatus ? <img src={checked} alt="upload_icon" /> : <img src={UploadIcon} alt="upload_icon" />}
        </div>
        <Text format="w-[70%]" variant="sub" weight="normal">
          Accepted file type are PDF , PNG or JPEG. File size must not be more than 5mb
        </Text>
      </div>
      <div className="w-full flex flex-col gap-2">
        <Text variant="sub" weight="bold">
          Utility bill update
        </Text>
        <div
          onClick={() => (utilityKycStatus ? null : handleOpenModals("utility_bill"))}
          className="flex items-center justify-between w-full cursor-pointer px-4 py-2 bg-[#F8F8F8]"
        >
          <Text variant="sub" weight="normal">
            Upload your Utility bill
          </Text>
          {utilityKycStatus ? <img src={checked} alt="upload_icon" /> : <img src={UploadIcon} alt="upload_icon" />}
        </div>
        <Text format="w-[70%]" variant="sub" weight="normal">
          Accepted file type are PDF , PNG or JPEG. File size must not be more than 5mb
        </Text>
      </div>

      <div className="flex flex-col gap-3">
        <div
          onClick={() => (employmentKycStatus ? null : handleOpenModals("employment_details"))}
          className="flex items-center justify-between w-full cursor-pointer p-3 bg-secondary"
        >
          <Text variant="body" weight="bold">
            Employment details
          </Text>
          {employmentKycStatus ? <img src={checked} alt="upload_icon" /> : <img src={rightArrow} alt="right_arrow" />}
        </div>
        <div
          onClick={() => (updateBiodata ? null : handleOpenModals("bio_data"))}
          className="flex items-center justify-between w-full cursor-pointer p-3 bg-secondary"
        >
          <Text variant="body" weight="bold">
            Update biodata
          </Text>
          {updateBiodata ? <img src={checked} alt="upload_icon" /> : <img src={rightArrow} alt="right_arrow" />}
        </div>
        <div
          onClick={() => (selfCertificationKycStatus ? null : handleOpenModals("self_certification"))}
          className="flex items-center justify-between w-full cursor-pointer p-3 bg-secondary"
        >
          <Text variant="body" weight="bold">
            Fill self-certification form
          </Text>
          {selfCertificationKycStatus ? (
            <img src={checked} alt="upload_icon" />
          ) : (
            <img src={rightArrow} alt="right_arrow" />
          )}
        </div>
      </div>
      <MessageModal bgColor={true} modalHeight="625px" isOpen={openModal?.utility_bill}>
        <UploadUtilityBill handleCloseModals={handleCloseModals} />
      </MessageModal>
      <MessageModal bgColor={true} modalHeight="625px" isOpen={openModal?.valid_id}>
        <UploadValidId handleCloseModals={handleCloseModals} />
      </MessageModal>
      <MessageModal bgColor={true} modalHeight="720px" isOpen={openModal?.signature_setup}>
        <SignatureSetup handleCloseModals={handleCloseModals} />
      </MessageModal>
      <MessageModal bgColor={true} modalHeight="720px" isOpen={openModal?.upload_passport}>
        <UploadPassport handleCloseModals={handleCloseModals} />
      </MessageModal>
      <MessageModal modalHeight="100vh" isOpen={openModal?.bio_data}>
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
