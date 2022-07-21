import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import UploadIcon from "../../../../../assets/icons/upload_icon.svg";
import arrowLeft from "../../../../../assets/icons/arrow-left.svg";
import Button from "../../../../../components/Button";
import MyInput from "../../../../../components/formFields/inputs/MyInput";
import Text from "../../../../../components/Typography/Typography";
import MessageModal from "../../../../../components/modals/MessageModal";
import BeneficiaryId from "./components/beneficiaryId";
import BeneficiaryPassport from "./components/beneficiaryPassport";

export default function BeneficiaryDetails({
  handleDispatchNextStep,
  handleDispatchPreviousStep,
  isBothTrue,
  isBothFalse,
  isbeneficiaryTrue,
  isCHNTrue,
}) {
  const [openModal, setOpenModal] = useState({
    valid_id: false,
    passport_photography: false,
  });

  const handleOpenModals = (type) => {
    switch (type) {
      case "valid_id":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "passport_photography":
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
      case "valid_id":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "passport_photography":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      default:
        break;
    }
  };

  const beneficiarySchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is Required"),
    date_of_birth: Yup.string().required("Date Of Birth is Required"),
  });

  return (
    <div className="w-full">
      <div className="w-full">
        <img
          onClick={() => {
            if (isBothTrue) {
              handleDispatchPreviousStep(2, "beneficiary");
            } else if (isbeneficiaryTrue) {
              handleDispatchPreviousStep(1, "beneficiary");
            }
          }}
          src={arrowLeft}
          alt="arrow-left"
          className="w-[24px] h-[24px] cursor-pointer"
        />
      </div>
      <div className="flex flex-col mt-2">
        <Text weight="bold" variant="body" color="text-red">
          Step {isBothTrue ? "3" : isbeneficiaryTrue ? "2" : ""}
        </Text>
        <Text weight="bold" variant="h4" color="text-red">
          Beneficiary details
        </Text>
      </div>
      <div className="flex flex-col gap-2 mt-6 w-[40%]">
        <Text weight="bold" variant="h2" color="text-[#65666A]">
          Beneficiary details
        </Text>
        <Text weight="bold" variant="h4" color="text-[#65666A]">
          This information helps us personalise and secure your InvestNow account
        </Text>
      </div>
      <div className="mt-10">
        <Formik
          initialValues={{
            fullName: "",
            date_of_birth: "",
          }}
          validationSchema={beneficiarySchema}
          enableReinitialize={true}
          onSubmit={async (values) => {
            console.log(values);
            handleDispatchNextStep(null, values, 4, "beneficiary");
          }}
        >
          {({ handleSubmit, handleChange, isSubmitting }) => (
            <Form onSubmit={handleSubmit} className="w-[80%] h-full">
              <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
                <div className="w-full">
                  <MyInput
                    className="w-full"
                    placeholder="Enter Name"
                    label="Full Name"
                    name="fullName"
                    type="text"
                    handleChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <MyInput
                    className="w-full"
                    placeholder="dd/mm/yyyy"
                    label="Date of birth"
                    name="date_of_birth"
                    type="date"
                    handleChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-3 w-full mt-6">
                <div className="w-full flex flex-col gap-2">
                  <Text variant="sub" weight="bold">
                    Valid means of identification
                  </Text>
                  <div
                    onClick={() => handleOpenModals("valid_id")}
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
                    Passport photograph
                  </Text>
                  <div
                    onClick={() => handleOpenModals("passport_photography")}
                    className="flex items-center justify-between w-full cursor-pointer px-4 py-3 bg-[#f2f2f2]"
                  >
                    <Text variant="sub" weight="normal">
                      Upload your Passport Photograph
                    </Text>
                    <img src={UploadIcon} alt="upload_icon" />
                  </div>
                  <Text format="w-[70%]" variant="sub" weight="normal">
                    Accepted file type are PDF , PNG or JPEG. File size must not be more than 5mb
                  </Text>
                </div>
              </div>
              <div className="mt-6 w-full flex justify-center">
                <div className="w-[30%]">
                  <Button title="Next" className="cursor-pointer" type="submit" isLoading={isSubmitting} />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <MessageModal bgColor={true} modalHeight="90vh" isOpen={openModal?.valid_id}>
        <BeneficiaryId handleCloseModals={handleCloseModals} />
      </MessageModal>
      <MessageModal bgColor={true} modalHeight="auto" isOpen={openModal?.passport_photography}>
        <BeneficiaryPassport handleCloseModals={handleCloseModals} />
      </MessageModal>
    </div>
  );
}
