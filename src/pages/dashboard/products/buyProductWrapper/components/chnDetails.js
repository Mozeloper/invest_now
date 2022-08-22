import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getIdentityTypes } from "../../../../../store/slices/settingsUpdateKycSlice";
import Text from "../../../../../components/Typography/Typography";
import MyInput from "../../../../../components/formFields/inputs/MyInput";
import Button from "../../../../../components/Button";
import UploadIcon from "../../../../../assets/icons/upload_icon.svg";
import Input from "../../../../../components/formFields/inputs";
import { setCscsDetails } from "../../../../../store/slices/buyProductSlice";
import { handleCreateAccount } from "../../../../../store/slices/openAccountSlice";
import MessageModal from "../../../../../components/modals/MessageModal";
import SuccessAccountModal from "./successAccountModal";
import RatingModal from "./ratingModal";
import checked from "../../../../../assets/icons/correct.svg";
import CscsValidIdentity from "./cscsValidIdentity";
import FundAccount from "./FundAccount";

export default function ChnDetails() {
  const [isModalOpen, setIsModalOpen] = useState({
    error: false,
    success: false,
    showRating: false,
    showFundAccount: false,
    details: null,
    showValidId: false,
  });

  const dispatch = useDispatch();
  const buyProductReducer = useSelector((state) => state.buyProductReducer);
  const openAccountReducer = useSelector((state) => state.openAccountReducer);
  const dashboardReducer = useSelector((state) => state?.dashboardReducer);
  const productsReducer = useSelector((state) => state.productsReducer);
  const productData = productsReducer?.productDetailsData?.payload?.data?.data;
  const customerDetails = dashboardReducer?.customerDetails?.payload?.data?.data;

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        dispatch(getIdentityTypes());
      }
    })();
    return () => {
      mounted = false;
    };
  }, [dispatch]);

  const handleBuyProductAccount = async (values) => {
    const data = {
      title: customerDetails?.title ?? "",
      first_name: buyProductReducer?.dependentDetails?.firstName ?? customerDetails?.firstname ?? "",
      middle_name: buyProductReducer?.dependentDetails?.middleName ?? customerDetails?.middlename ?? "",
      last_name: buyProductReducer?.dependentDetails?.lastName ?? customerDetails?.lastname ?? "",
      mothers_maiden_name: customerDetails?.mothers_maiden_name ?? "",
      terms_and_conditions: 1,
      id_type:
        Number(buyProductReducer?.cscsValidIdentityType) ??
        Number(buyProductReducer?.identityTypeId) ??
        Number(customerDetails?.kycDetail[1]?.identity_type) ??
        "",
      passport: customerDetails?.kycDetail[0]?.location ?? "",
      id_card: buyProductReducer?.cscsValidIdentity ?? customerDetails?.kycDetail[1]?.location ?? "",
      signature_specimen: customerDetails?.kycDetail[2]?.location ?? "",
      utility_bill: customerDetails?.kycDetail[3]?.location ?? "",
      bank_id: buyProductReducer?.bankDetails?.bankSelected?.id ?? null,
      bank_acct_no: buyProductReducer?.bankDetails?.accountNumber ?? null,
      bank_acct_name: buyProductReducer?.bankDetails?.account_name ?? null,
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
      date_of_birth: buyProductReducer?.dependentDetails?.dateOfBirth ?? customerDetails?.dob ?? "",
      birth_certificate_base64: buyProductReducer?.bithCertificate ?? "",
      beneficiary_fullname: buyProductReducer?.beneficiaryDetails?.fullName ?? "",
      beneficiary_dob: buyProductReducer?.beneficiaryDetails?.date_of_birth ?? "",
      beneficiary_id_type: openAccountReducer?.validId ?? "",
      beneficiary_id: openAccountReducer?.mybeneficiaryId ?? "",
      beneficiary_passport: openAccountReducer?.mybeneficiaryPassport ?? "",
      chn_account_number: values?.cscsNumber ?? "",
      id_number: values?.id_number ?? "",
      id_expiration_date: values?.exp_date ?? "",
      referral: buyProductReducer?.referralCode,
      account_type: productData?.code ?? "",
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
      showValidId: false,
    }));
  };

  const chnDetailsSchema = Yup.object().shape({
    cscsNumber: Yup.string()
      .required("This field is Required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "cscs Number is not valid"
      ),
    id_number: Yup.string()
      .required("This field is Required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "cscs Number is not valid"
      ),
    id_type: Yup.string(),
  });
  return (
    <>
      <div className="flex flex-col gap-2 mt-6 w-[40%]">
        <Text weight="bold" variant="body" color="text-[#65666A]">
          CSCS (CHN) Account number
        </Text>
        <Text weight="bold" variant="h4" color="text-[#65666A]">
          This information helps us personalise and secure your InvestNow account
        </Text>
      </div>
      <div className="bg-[#65666A] p-[4%] w-[85%] mt-4 flex flex-col gap-3 h-auto">
        <Text color="text-white" variant="h4">
          What is CSCS?
        </Text>
        <Text color="text-white" variant="h4" format="w-[70%]">
          CSCS stands for Central Securities Clearing system. They are the market overseers on the NIgerian Stock
          Exchange. Your CSCS Number is a number assigned to you after you open a new brokerage account.
        </Text>
      </div>
      <div className="mt-6">
        <Formik
          initialValues={{
            cscsNumber: "",
            id_type: "",
            id_number: "",
            exp_date: "",
          }}
          validationSchema={chnDetailsSchema}
          enableReinitialize={true}
          onSubmit={async (values) => {
            dispatch(setCscsDetails(values));
            handleBuyProductAccount(values);
          }}
        >
          {({ handleSubmit, handleChange, setFieldValue, isSubmitting, values, touched, errors }) => (
            <Form onSubmit={handleSubmit} className="w-full h-full">
              <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
                <div className="w-[50%]">
                  <label htmlFor="cscsNumber" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                    CSCS (CHN) Account number
                  </label>
                  <Input placeholder="Enter 9 digit" type="text" name="cscsNumber" handleChange={handleChange} />
                  {errors.cscsNumber && touched.cscsNumber ? (
                    <Text variant="body" weight="normal" color="text-red">
                      {errors.cscsNumber}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="mt-4">
                <Text variant="h4" weight="bold" color="text-[#000000]">
                  Identity Information
                </Text>
              </div>
              <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
                <div className="w-full">
                  <div className="w-full flex flex-col gap-2">
                    <Text variant="body" weight="bold">
                      Id Type
                    </Text>
                    <div
                      onClick={() =>
                        setIsModalOpen((prev) => ({
                          ...prev,
                          showValidId: true,
                        }))
                      }
                      className="flex items-center justify-between w-full cursor-pointer p-4 bg-[#f2f2f2]"
                    >
                      <Text variant="sub" weight="normal">
                        Upload your valid ID
                      </Text>
                      {buyProductReducer?.cscsValidIdentity ? (
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
                <div className="w-full">
                  <MyInput
                    className="w-full"
                    placeholder="*Enter 9 digit"
                    label="ID Number"
                    name="id_number"
                    type="text"
                    handleChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
                <div className="w-[50%]">
                  <MyInput
                    className="w-full"
                    placeholder="*DD/MM/YYYY"
                    label="ID Exp Date"
                    name="exp_date"
                    type="date"
                    handleChange={handleChange}
                  />
                </div>
              </div>
              <div className="mt-10 w-full flex justify-center">
                <div className="w-[30%]">
                  <Button
                    title="Submit"
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
      <MessageModal bgColor={true} modalHeight="90vh" isOpen={isModalOpen?.showValidId}>
        <CscsValidIdentity handleCloseModal={handleCloseModal} setIsModalOpen={setIsModalOpen} />
      </MessageModal>
      <MessageModal modalHeight="90vh" bgColor={true} isOpen={isModalOpen?.showFundAccount}>
        <FundAccount handleCloseModal={handleCloseModal} setIsModalOpen={setIsModalOpen} />
      </MessageModal>
    </>
  );
}
