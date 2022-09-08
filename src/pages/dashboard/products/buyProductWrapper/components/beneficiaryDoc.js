import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import checked from "../../../../../assets/icons/correct.svg";
import Text from "../../../../../components/Typography/Typography";
import Button from "../../../../../components/Button";
import UploadIcon from "../../../../../assets/icons/upload_icon.svg";
import MyInput from "../../../../../components/formFields/inputs/MyInput";
import MessageModal from "../../../../../components/modals/MessageModal";
import BeneficiaryId from "../../openAccount/beneficiaryDetails/components/beneficiaryId";
import BeneficiaryPassport from "../../openAccount/beneficiaryDetails/components/beneficiaryPassport";
import { useDispatch, useSelector } from "react-redux";
import { setBeneficiaryDetails, setNextStep } from "../../../../../store/slices/buyProductSlice";
import { handleCreateAccount } from "../../../../../store/slices/openAccountSlice";
import SuccessAccountModal from "./successAccountModal";
import RatingModal from "./ratingModal";
import FundAccount from "./FundAccount";

export default function BeneficiaryDoc() {
  const [isModalOpen, setIsModalOpen] = useState({
    error: false,
    success: false,
    showRating: false,
    showFundAccount: false,
    details: null,
  });
  const buyProductReducer = useSelector((state) => state.buyProductReducer);
  const openAccountReducer = useSelector((state) => state.openAccountReducer);
  const dashboardReducer = useSelector((state) => state?.dashboardReducer);
  const customerDetails = dashboardReducer?.customerDetails?.payload?.data?.data;
  const productsReducer = useSelector((state) => state.productsReducer);
  const productData = productsReducer?.productDetailsData?.payload?.data?.data;
  const isBothTrue = productData?.category?.hasBeneficiary && productData?.category?.hasChnNumber;

  const dispatch = useDispatch();
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

  const handleBuyProductAccount = async (values) => {
    const data = {
      title: customerDetails?.title ?? "",
      first_name: customerDetails?.firstname ?? "",
      middle_name: customerDetails?.middlename ?? "",
      last_name: customerDetails?.lastname ?? "",
      mothers_maiden_name: customerDetails?.mothers_maiden_name ?? "",
      terms_and_conditions: 1,
      id_type: Number(buyProductReducer?.identityTypeId) ?? Number(customerDetails?.kycDetail[1]?.identity_type) ?? "",
      passport: customerDetails?.kycDetail[0]?.location ?? "",
      id_card: customerDetails?.kycDetail[1]?.location ?? "",
      signature_specimen: customerDetails?.kycDetail[2]?.location ?? "",
      utility_bill: customerDetails?.kycDetail[3]?.location ?? "",
      bank_id: buyProductReducer?.bankDetails?.selected_bank?.id ?? null,
      bank_acct_no: buyProductReducer?.bankDetails?.accountNumber ?? null,
      bank_acct_name: buyProductReducer?.bankDetails?.existing_account_name ?? null,
      is_pep: customerDetails?.pep_status ?? false,
      is_minor: buyProductReducer?.accountType === "DEPENDENT_MINOR" ? true : false,
      owner: buyProductReducer?.accountType === "MY_SELF" ? "MY_SELF" : "",
      nok_first_name: buyProductReducer?.nextOfKin?.firstName ?? "",
      nok_middle_name: buyProductReducer?.nextOfKin?.middleName ?? "",
      nok_last_name: buyProductReducer?.nextOfKin?.lastName ?? "",
      nok_gender: buyProductReducer?.nextOfKin?.gender ?? "",
      nok_relationship: buyProductReducer?.nextOfKin?.relationship ?? "",
      nok_address: buyProductReducer?.nextOfKin?.address ?? "",
      nok_phone: buyProductReducer?.nextOfKin?.phone_number ?? "",
      nok_email: buyProductReducer?.nextOfKin?.email ?? "",
      date_of_birth: customerDetails?.dob ?? "",
      birth_certificate_base64: buyProductReducer?.bithCertificate ?? "",
      beneficiary_fullname: values?.fullName ?? "",
      beneficiary_dob: values?.date_of_birth ?? "",
      beneficiary_id_type: openAccountReducer?.mybeneficiaryIdType ?? "",
      beneficiary_id: openAccountReducer?.mybeneficiaryId ?? "",
      beneficiary_passport: openAccountReducer?.mybeneficiaryPassport ?? "",
      account_type: productData?.code ?? "",
      referral: buyProductReducer?.referralCode,
    };
    await dispatch(handleCreateAccount(data))
      .unwrap()
      .then((res) => {
        if (res?.data?.success) {
          setIsModalOpen((prev) => ({
            ...prev,
            success: true,
            details: res?.data?.message,
          }));
        }
      })
      .catch((error) => {
        setIsModalOpen((prev) => ({
          ...prev,
          error: true,
          details: error?.data?.message,
        }));
      });
  };

  const handleCloseModal = () => {
    setIsModalOpen((prev) => ({
      ...prev,
      error: false,
      success: false,
      showRating: false,
      showFundAccount: false,
      details: null,
    }));
  };

  const beneficiarySchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is Required"),
    date_of_birth: Yup.string().required("Date Of Birth is Required"),
  });
  return (
    <>
      <div className="flex flex-col gap-2 mt-6 w-[80%]">
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
            dispatch(setBeneficiaryDetails(values));
            if (isBothTrue) {
              dispatch(setNextStep(2));
            } else {
              handleBuyProductAccount(values);
            }
          }}
        >
          {({ handleSubmit, handleChange }) => (
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
                    {openAccountReducer?.mybeneficiaryId ? (
                      <img src={checked} alt="upload_icon" />
                    ) : (
                      <img src={UploadIcon} alt="upload_icon" />
                    )}
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
                    {openAccountReducer?.mybeneficiaryPassport ? (
                      <img src={checked} alt="upload_icon" />
                    ) : (
                      <img src={UploadIcon} alt="upload_icon" />
                    )}
                  </div>
                  <Text format="w-[70%]" variant="sub" weight="normal">
                    Accepted file type are PDF , PNG or JPEG. File size must not be more than 5mb
                  </Text>
                </div>
              </div>
              <div className="mt-6 w-full flex justify-center">
                <div className="w-[30%]">
                  <Button
                    title="Next"
                    className="cursor-pointer"
                    type="submit"
                    isLoading={openAccountReducer?.createAccountIsLoading}
                  />
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
      <MessageModal bgColor={true} isOpen={isModalOpen?.error} modalWidth="300px" modalHeight="auto">
        <div className="flex flex-col justify-center items-center w-full">
          <Text format="text-center mt-3" variant="h3" color="text-black" weight="bold">
            Oops!
          </Text>
          <Text format="text-center mt-3" variant="h4" color="text-[#465174]" weight="bold">
            {isModalOpen?.details}
          </Text>
          <div className="mt-4 w-full">
            <Button onClick={() => handleCloseModal()} title="Close" className="cursor-pointer w-full" type="button" />
          </div>
        </div>
      </MessageModal>
      <MessageModal bgColor={true} isOpen={isModalOpen?.success}>
        <SuccessAccountModal handleCloseModal={handleCloseModal} setIsModalOpen={setIsModalOpen} />
      </MessageModal>
      <MessageModal modalHeight="auto" bgColor={true} isOpen={isModalOpen?.showRating}>
        <RatingModal handleCloseModal={handleCloseModal} setIsModalOpen={setIsModalOpen} />
      </MessageModal>
      <MessageModal modalHeight="90vh" bgColor={true} isOpen={isModalOpen?.showFundAccount}>
        <FundAccount handleCloseModal={handleCloseModal} setIsModalOpen={setIsModalOpen} />
      </MessageModal>
    </>
  );
}
