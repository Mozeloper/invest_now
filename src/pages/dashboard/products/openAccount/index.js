/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Text from "../../../../components/Typography/Typography";
import Logosmall from "../../../../assets/icons/logo.svg";
import checked from "../../../../assets/icons/correct.svg";
// import BvnDetails from "./bvnDetails";
import CscsDetails from "./cscsDetails";
import {
  handleCreateAccount,
  handleNextStep,
  handlePreviousStep,
  handleResetStep,
} from "../../../../store/slices/openAccountSlice";
// import DocsUpload from "./docsUpload";
import BankInfo from "./bankInfo";
import NextOfKin from "./nextOfKin";
// import PepStatus from "./pepStatus";
import BeneficiaryDetails from "./beneficiaryDetails";
import MessageModal from "../../../../components/modals/MessageModal";
import MultiStepSuccessModal from "./components/multiStepSuccessModal";
import RatingExperienceModal from "./components/ratingExperienceModal";
import PaymentMethodModal from "./paymentMethod";
import BankPayment from "./bankPayment";
import DepositSummary from "./depositSummary";
import FundingSuccess from "./fundingSuccess";
import CardPayment from "./cardPayment";
import { handleGetProductDetails } from "../../../../store/slices/productsSlice";
import { handleCustomerDetails } from "../../../../store/slices/dashboardSlice";

export default function OpenAccount() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLastStepSuccess, setIsLastStepSuccess] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [howFrequentState, setHowFrequentState] = useState("");
  const [isbankModalOpen, setIsBankModalOpen] = useState(false);
  const [bankSelected, setBankSelected] = useState("");
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [cardSelected, setCardSelected] = useState("");
  const [isDepositSummaryOpen, setIsDepositSummaryOpen] = useState(false);
  const [isFundingSuccess, setIsFundingSuccess] = useState(false);
  const openAccountReducer = useSelector((state) => state.openAccountReducer);
  const productsReducer = useSelector((state) => state.productsReducer);
  const dashboardReducer = useSelector((state) => state?.dashboardReducer);
  const customerDetails = dashboardReducer?.customerDetails?.payload?.data?.data;
  const productData = productsReducer?.productDetailsData?.payload?.data?.data;
  const isBothTrue = productData?.category?.hasBeneficiary && productData?.category?.hasChnNumber;
  const isBothFalse = !productData?.category?.hasBeneficiary && !productData?.category?.hasChnNumber;
  const isbeneficiaryTrue = productData?.category?.hasBeneficiary && !productData?.category?.hasChnNumber;
  const isCHNTrue = productData?.category?.hasChnNumber && !productData?.category?.hasBeneficiary;

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        if (location?.state !== null) {
          dispatch(handleGetProductDetails(location?.state));
          dispatch(handleResetStep());
          dispatch(handleCustomerDetails());
        } else {
          const myString = location?.pathname.replace("/products/open_account/", "");
          const decodedString = atob(myString);
          const splitted = decodedString.split("-");
          dispatch(handleGetProductDetails(splitted[0]));
          dispatch(handleResetStep());
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, [location?.pathname]);

  useLayoutEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        dispatch(handleResetStep());
      }
    })();
    return () => {
      mounted = false;
    };
  }, [location?.pathname]);

  const handleCreatingaccount = async (values) => {
    // console.log(openAccountReducer, values, productData, customerDetails);
    const data = {
      title: customerDetails?.title ?? "",
      mothers_maiden_name: customerDetails?.mothers_maiden_name ?? "",
      terms_and_conditions: 1,
      id_type: Number(customerDetails?.kycDetail[1]?.identity_type) ?? "",
      passport: customerDetails?.kycDetail[0]?.location ?? "",
      id_card: customerDetails?.kycDetail[1]?.location ?? "",
      signature_specimen: customerDetails?.kycDetail[2]?.location ?? "",
      utility_bill: customerDetails?.kycDetail[3]?.location ?? "",
      bank_id: openAccountReducer?.mybankDetails?.bank?.id ?? "",
      bank_acct_no: openAccountReducer?.mybankDetails?.accountNumber ?? "",
      bank_acct_name: openAccountReducer?.mybankDetails?.accountName ?? "",
      is_pep: customerDetails?.pep_status ?? false,
      nok_name: values?.fullName ?? "",
      nok_gender: values?.gender ?? "",
      nok_relationship: values?.relationship ?? "",
      nok_address: values?.address ?? "",
      nok_phone: values?.phone_number ?? "",
      nok_email: values?.email ?? "",
      beneficiary_fullname: openAccountReducer?.mybeneficiaryDetails?.fullName ?? "",
      beneficiary_dob: openAccountReducer?.mybeneficiaryDetails?.date_of_birth ?? "",
      beneficiary_id: openAccountReducer?.mybeneficiaryId ?? "",
      beneficiary_passport: openAccountReducer?.mybeneficiaryPassport ?? "",
      chn_account_number: openAccountReducer?.mychnDetails?.cscsNumber ?? "",
      account_type: productData?.code ?? "",
    };
    await dispatch(handleCreateAccount(data))
      .unwrap()
      .then((res) => {
        if (res?.data?.success) {
          setIsLastStepSuccess(true);
        }
      })
      .catch((error) => {
        setTimeout(() => {
          setErrorMessage("");
        }, 2000);
        setErrorMessage(error?.data?.message);
      });
  };

  const handleDispatchNextStep = (lastStep, values, nextPhase, type) => {
    if (lastStep === "last_step" && lastStep !== null) {
      dispatch(handleNextStep({ values, nextPhase, type }));
    } else {
      dispatch(handleNextStep({ values, nextPhase, type }));
    }
  };

  const handleDispatchPreviousStep = (previouPhase, type) => {
    dispatch(handlePreviousStep({ previouPhase, type }));
  };

  const handlePreviousRoute = () => {
    navigate("/products/all");
  };

  const handleOpenRating = () => {
    setIsLastStepSuccess(false);
    setIsRatingOpen(true);
  };

  return (
    <>
      {productsReducer?.productDetailIsLoading && (
        <div className="bg-white h-screen w-full flex flex-col gap-2 items-center justify-center">
          <img src={Logosmall} alt="logo" className="min-w-[100px] max-w-[200px] animate-bounce" />
          <Text variant="h2" weight="extrabold" format="animate-bounce">
            Fetching Account Category Data
          </Text>
        </div>
      )}
      {!!!productsReducer?.productDetailIsLoading &&
        productsReducer?.productDetailsData?.type === "products/productDetail/fulfilled" && (
          <div className="w-full h-full flex md:flex-row flex-col gap-2">
            <div className="w-full md:w-[25%] md:h-screen h-auto z-50 fixed overflow-y-auto overflow-x-auto overflow-hidden no-scrollbar p-[3%] bg-pink">
              <img src={Logosmall} alt="logo" className="min-w-[100px] max-w-[200px]" />
              <div className="my-4">
                <Text weight="extrabold" variant="h2" color="text-[#65666A]">
                  {productData?.category?.name}
                </Text>
                <Text weight="normal" variant="h4" color="text-[#65666A]">
                  Account opening
                </Text>
              </div>
              <Text weight="extrabold" variant="h4" color="text-[#65666A]">
                In a few steps your money market fund account would be opened
              </Text>
              <div className="flex md:flex-col flex-row gap-4 md:gap-3 overflow-x-auto overflow-hidden no-scrollbar mt-5 w-full">
                <div className="flex justify-between items-center border-b pb-2 border-[red]">
                  <div>
                    <Text weight="bold" variant="body" color="text-red">
                      Step 1
                    </Text>
                    <Text weight="bold" variant="h4" color="text-red">
                      Validate Bank Account
                    </Text>
                  </div>
                  {openAccountReducer?.step > 1 && (
                    <img src={checked} alt="correct" className="w-[10px] h-[10px] md:w-[20px] md:h-[20px]" />
                  )}
                </div>
                {productData && productData?.category?.hasChnNumber && (
                  <div className="flex justify-between items-center border-b pb-2 border-[red]">
                    <div>
                      <Text weight="bold" variant="body" color="text-red">
                        Step 2
                      </Text>
                      <Text weight="bold" variant="h4" color="text-red">
                        Input CSCS Detail
                      </Text>
                    </div>
                    {openAccountReducer?.step > 2 && (
                      <img src={checked} alt="correct" className="w-[10px] h-[10px] md:w-[20px] md:h-[20px]" />
                    )}
                  </div>
                )}
                {productData && productData?.category?.hasBeneficiary && (
                  <div className="flex justify-between items-center border-b pb-2 border-[red]">
                    <div>
                      <Text weight="bold" variant="body" color="text-red">
                        Step {isBothTrue ? "3" : isBothFalse ? "" : "2"}
                      </Text>
                      <Text weight="bold" variant="h4" color="text-red">
                        Beneficiary Details
                      </Text>
                    </div>
                    {openAccountReducer?.step > 3 && (
                      <img src={checked} alt="correct" className="w-[10px] h-[10px] md:w-[20px] md:h-[20px]" />
                    )}
                  </div>
                )}
                <div className="flex justify-between items-center border-b pb-2 border-[red]">
                  <div>
                    <Text weight="bold" variant="body" color="text-red">
                      Step {isBothTrue ? "4" : isBothFalse ? "2" : "3"}
                    </Text>
                    <Text weight="bold" variant="h4" color="text-red">
                      Next of Kin
                    </Text>
                  </div>
                  {openAccountReducer?.step >= 5 && (
                    <img src={checked} alt="correct" className="w-[10px] h-[10px] md:w-[20px] md:h-[20px]" />
                  )}
                </div>

                {/* <div className="flex justify-between items-center border-b pb-2 border-[red]">
              <div>
                <Text weight="bold" variant="body" color="text-red">
                  Step 4
                </Text>
                <Text weight="bold" variant="h4" color="text-red">
                  Valid Documents Upload
                </Text>
              </div>
              {openAccountReducer?.step > 4 && <img src={checked} alt="correct" className="w-[20px] h-[20px]" />}
            </div> */}
                {/* <div className="flex justify-between items-center border-b pb-2 border-[red]">
              <div>
                <Text weight="bold" variant="body" color="text-red">
                  Step 1
                </Text>
                <Text weight="bold" variant="h4" color="text-red">
                  Input Bvn Details
                </Text>
              </div>
              {openAccountReducer?.step > 1 && <img src={checked} alt="correct" className="w-[20px] h-[20px]" />}
            </div> */}
                {/* <div className="flex justify-between items-center border-b pb-2 border-[red]">
              <div>
                <Text weight="bold" variant="body" color="text-red">
                  Step 5
                </Text>
                <Text weight="bold" variant="h4" color="text-red">
                  PEP STATUS
                </Text>
              </div>
              {openAccountReducer?.step > 5 && <img src={checked} alt="correct" className="w-[20px] h-[20px]" />}
            </div> */}
              </div>
            </div>
            <div className="md:ml-[25%] md:mt-0 mt-[276px] md:w-[70%] w-full p-[2%] h-full">
              {openAccountReducer?.step === 1 && (
                <BankInfo
                  isBothTrue={isBothTrue}
                  isBothFalse={isBothFalse}
                  isbeneficiaryTrue={isbeneficiaryTrue}
                  isCHNTrue={isCHNTrue}
                  handleDispatchNextStep={handleDispatchNextStep}
                  handleDispatchPreviousStep={handlePreviousRoute}
                />
              )}
              {openAccountReducer?.step === 2 && (
                <CscsDetails
                  isBothTrue={isBothTrue}
                  isBothFalse={isBothFalse}
                  isbeneficiaryTrue={isbeneficiaryTrue}
                  isCHNTrue={isCHNTrue}
                  handleDispatchNextStep={handleDispatchNextStep}
                  handleDispatchPreviousStep={handleDispatchPreviousStep}
                />
              )}
              {openAccountReducer?.step === 3 && (
                <BeneficiaryDetails
                  isBothTrue={isBothTrue}
                  isBothFalse={isBothFalse}
                  isbeneficiaryTrue={isbeneficiaryTrue}
                  isCHNTrue={isCHNTrue}
                  handleDispatchNextStep={handleDispatchNextStep}
                  handleDispatchPreviousStep={handleDispatchPreviousStep}
                />
              )}

              {openAccountReducer?.step >= 4 && (
                <NextOfKin
                  errorMessage={errorMessage}
                  isBothTrue={isBothTrue}
                  isBothFalse={isBothFalse}
                  isbeneficiaryTrue={isbeneficiaryTrue}
                  isCHNTrue={isCHNTrue}
                  handleCreatingaccount={handleCreatingaccount}
                  handleDispatchNextStep={handleDispatchNextStep}
                  handleDispatchPreviousStep={handleDispatchPreviousStep}
                />
              )}
              {/* {openAccountReducer?.step === 4 && (
            <DocsUpload
              handleDispatchNextStep={handleDispatchNextStep}
              handleDispatchPreviousStep={handleDispatchPreviousStep}
            />
          )} */}
              {/* {openAccountReducer?.step === 5 && (
            <PepStatus
              handleDispatchNextStep={handleDispatchNextStep}
              handleDispatchPreviousStep={handleDispatchPreviousStep}
            />
          )} */}
              {/* {openAccountReducer?.step === 1 && (
            <BvnDetails
              handleDispatchNextStep={handleDispatchNextStep}
              handleDispatchPreviousStep={handlePreviousRoute}
            />
          )} */}
            </div>
          </div>
        )}
      <MessageModal bgColor={true} isOpen={isLastStepSuccess}>
        <MultiStepSuccessModal
          setIsPaymentModalOpen={setIsPaymentModalOpen}
          setIsLastStepSuccess={setIsLastStepSuccess}
          handleOpenRating={handleOpenRating}
        />
      </MessageModal>
      <MessageModal modalHeight="auto" bgColor={true} isOpen={isRatingOpen}>
        <RatingExperienceModal setIsPaymentModalOpen={setIsPaymentModalOpen} setIsRatingOpen={setIsRatingOpen} />
      </MessageModal>
      <MessageModal modalHeight="90vh" isOpen={isPaymentModalOpen}>
        <PaymentMethodModal
          amount={amount}
          howFrequentState={howFrequentState}
          setAmount={setAmount}
          setHowFrequentState={setHowFrequentState}
          setIsBankModalOpen={setIsBankModalOpen}
          setIsCardModalOpen={setIsCardModalOpen}
          setIsPaymentModalOpen={setIsPaymentModalOpen}
        />
      </MessageModal>
      <MessageModal bgColor={true} modalHeight="90vh" isOpen={isbankModalOpen}>
        <BankPayment
          bankSelected={bankSelected}
          setBankSelected={setBankSelected}
          setIsBankModalOpen={setIsBankModalOpen}
          setIsPaymentModalOpen={setIsPaymentModalOpen}
          setIsDepositSummaryOpen={setIsDepositSummaryOpen}
        />
      </MessageModal>
      <MessageModal bgColor={true} modalHeight="100vh" isOpen={isCardModalOpen}>
        <CardPayment
          setCardSelected={setCardSelected}
          cardSelected={cardSelected}
          setIsCardModalOpen={setIsCardModalOpen}
          setIsPaymentModalOpen={setIsPaymentModalOpen}
          setIsDepositSummaryOpen={setIsDepositSummaryOpen}
        />
      </MessageModal>
      <MessageModal bgColor={true} modalHeight="auto" isOpen={isDepositSummaryOpen}>
        <DepositSummary
          setIsFundingSuccess={setIsFundingSuccess}
          setIsDepositSummaryOpen={setIsDepositSummaryOpen}
          amount={amount}
        />
      </MessageModal>
      <MessageModal bgColor={true} modalHeight="auto" isOpen={isFundingSuccess}>
        <FundingSuccess setIsFundingSuccess={setIsFundingSuccess} amount={amount} />
      </MessageModal>
    </>
  );
}
