/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Text from "../../../../components/Typography/Typography";
import Logosmall from "../../../../assets/icons/logo.svg";
import checked from "../../../../assets/icons/correct.svg";
import BvnDetails from "./bvnDetails";
import CscsDetails from "./cscsDetails";
import { handleNextStep, handlePreviousStep, handleResetStep } from "../../../../store/slices/openAccountSlice";
import DocsUpload from "./docsUpload";
import BankInfo from "./bankInfo";
import NextOfKin from "./nextOfKin";
import PepStatus from "./pepStatus";
import BeneficiaryDetails from "./beneficiaryDetails";
import MessageModal from "../../../../components/modals/MessageModal";
import MultiStepSuccessModal from "./components/multiStepSuccessModal";
import RatingExperienceModal from "./components/ratingExperienceModal";
import PaymentMethodModal from "./paymentMethod";
import BankPayment from "./bankPayment";
import DepositSummary from "./depositSummary";
import FundingSuccess from "./fundingSuccess";
import CardPayment from "./cardPayment";

export default function OpenAccount() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        if (location?.state !== null) {
          console.log("coming from product page");
          dispatch(handleResetStep());
        } else {
          const myString = location?.pathname.replace("/products/open_account/", "");
          const decodedString = atob(myString);
          const splitted = decodedString.split("-");
          console.log(splitted[0]);
          dispatch(handleResetStep());
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, [location?.pathname, dispatch]);

  const handleDispatchNextStep = (lastStep) => {
    if (lastStep === "last_step" && lastStep !== "") {
      setIsLastStepSuccess(true);
      dispatch(handleNextStep());
    } else {
      dispatch(handleNextStep());
    }
  };

  const handleDispatchPreviousStep = () => {
    dispatch(handlePreviousStep());
  };

  const handlePreviousRoute = () => {
    navigate(-1);
  };

  const handleOpenRating = () => {
    setIsLastStepSuccess(false);
    setIsRatingOpen(true);
  };

  return (
    <>
      <div className="w-full h-full flex gap-2">
        <div className="w-[25%] h-screen fixed overflow-y-auto overflow-hidden no-scrollbar p-[3%] bg-pink">
          <img src={Logosmall} alt="logo" className="min-w-[100px] max-w-[200px]" />
          <div className="my-6">
            <Text weight="extrabold" variant="h2" color="text-[#65666A]">
              Stock Trading
            </Text>
            <Text weight="normal" variant="h4" color="text-[#65666A]">
              Account opening
            </Text>
          </div>
          <Text weight="extrabold" variant="h4" color="text-[#65666A]">
            In a few steps your money market fund account would be opened
          </Text>
          <div className="flex flex-col gap-3 mt-5 w-full">
            <div className="flex justify-between items-center border-b pb-2 border-[red]">
              <div>
                <Text weight="bold" variant="body" color="text-red">
                  Step 1
                </Text>
                <Text weight="bold" variant="h4" color="text-red">
                  Input Bvn Details
                </Text>
              </div>
              {openAccountReducer?.step > 1 && <img src={checked} alt="correct" className="w-[20px] h-[20px]" />}
            </div>
            <div className="flex justify-between items-center border-b pb-2 border-[red]">
              <div>
                <Text weight="bold" variant="body" color="text-red">
                  Step 2
                </Text>
                <Text weight="bold" variant="h4" color="text-red">
                  Input CSCS Detail
                </Text>
              </div>
              {openAccountReducer?.step > 2 && <img src={checked} alt="correct" className="w-[20px] h-[20px]" />}
            </div>
            <div className="flex justify-between items-center border-b pb-2 border-[red]">
              <div>
                <Text weight="bold" variant="body" color="text-red">
                  Step 3
                </Text>
                <Text weight="bold" variant="h4" color="text-red">
                  Valid Documents Upload
                </Text>
              </div>
              {openAccountReducer?.step > 3 && <img src={checked} alt="correct" className="w-[20px] h-[20px]" />}
            </div>
            <div className="flex justify-between items-center border-b pb-2 border-[red]">
              <div>
                <Text weight="bold" variant="body" color="text-red">
                  Step 4
                </Text>
                <Text weight="bold" variant="h4" color="text-red">
                  Validate Bank Account
                </Text>
              </div>
              {openAccountReducer?.step > 4 && <img src={checked} alt="correct" className="w-[20px] h-[20px]" />}
            </div>

            <div className="flex justify-between items-center border-b pb-2 border-[red]">
              <div>
                <Text weight="bold" variant="body" color="text-red">
                  Step 5
                </Text>
                <Text weight="bold" variant="h4" color="text-red">
                  PEP STATUS
                </Text>
              </div>
              {openAccountReducer?.step > 5 && <img src={checked} alt="correct" className="w-[20px] h-[20px]" />}
            </div>
            <div className="flex justify-between items-center border-b pb-2 border-[red]">
              <div>
                <Text weight="bold" variant="body" color="text-red">
                  Step 6
                </Text>
                <Text weight="bold" variant="h4" color="text-red">
                  Beneficiary Details
                </Text>
              </div>
              {openAccountReducer?.step > 6 && <img src={checked} alt="correct" className="w-[20px] h-[20px]" />}
            </div>
            <div className="flex justify-between items-center border-b pb-2 border-[red]">
              <div>
                <Text weight="bold" variant="body" color="text-red">
                  Step 7
                </Text>
                <Text weight="bold" variant="h4" color="text-red">
                  Next of Kin
                </Text>
              </div>
              {openAccountReducer?.step >= 8 && <img src={checked} alt="correct" className="w-[20px] h-[20px]" />}
            </div>
          </div>
        </div>
        <div className="ml-[25%] w-[70%] p-[2%]">
          {openAccountReducer?.step === 1 && (
            <BvnDetails
              handleDispatchNextStep={handleDispatchNextStep}
              handleDispatchPreviousStep={handlePreviousRoute}
            />
          )}
          {openAccountReducer?.step === 2 && (
            <CscsDetails
              handleDispatchNextStep={handleDispatchNextStep}
              handleDispatchPreviousStep={handleDispatchPreviousStep}
            />
          )}
          {openAccountReducer?.step === 3 && (
            <DocsUpload
              handleDispatchNextStep={handleDispatchNextStep}
              handleDispatchPreviousStep={handleDispatchPreviousStep}
            />
          )}
          {openAccountReducer?.step === 4 && (
            <BankInfo
              handleDispatchNextStep={handleDispatchNextStep}
              handleDispatchPreviousStep={handleDispatchPreviousStep}
            />
          )}
          {openAccountReducer?.step === 5 && (
            <PepStatus
              handleDispatchNextStep={handleDispatchNextStep}
              handleDispatchPreviousStep={handleDispatchPreviousStep}
            />
          )}
          {openAccountReducer?.step === 6 && (
            <BeneficiaryDetails
              handleDispatchNextStep={handleDispatchNextStep}
              handleDispatchPreviousStep={handleDispatchPreviousStep}
            />
          )}
          {openAccountReducer?.step >= 7 && (
            <NextOfKin
              handleDispatchNextStep={handleDispatchNextStep}
              handleDispatchPreviousStep={handleDispatchPreviousStep}
            />
          )}
        </div>
      </div>
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
