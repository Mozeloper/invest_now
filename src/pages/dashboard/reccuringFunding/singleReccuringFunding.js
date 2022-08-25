import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import Text from "../../../components/Typography/Typography";
import gobackButton from "../../../assets/icons/gobackButton.svg";
import Button from "../../../components/Button";
import {
  handleDisableRecurringPayment,
  handleGetDetailsRecurringPayment,
} from "../../../store/slices/recurringPaymentSlice";
import Correct from "../../../assets/icons/correct.svg";
import MessageModal from "../../../components/modals/MessageModal";

export default function SingleReccuringFunding() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState({
    details: null,
    successModal: false,
    errorText: false,
    discontinueModal: false,
  });
  const recurringPaymentReducer = useSelector((state) => state.recurringPaymentReducer);
  const paymentDetails = recurringPaymentReducer?.detailsRecurringPaymentData?.payload?.data?.data;

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        dispatch(handleGetDetailsRecurringPayment(state));
      }
    })();
    return () => {
      mounted = false;
    };
  }, [dispatch, state]);

  const handleShowModals = (type) => {
    setShowModal((prev) => ({
      ...prev,
      [type]: true,
      details: state,
    }));
  };

  const handleHideModals = (type) => {
    setShowModal((prev) => ({
      ...prev,
      [type]: false,
      details: null,
    }));
  };

  const disableRecurringPayment = async () => {
    await dispatch(handleDisableRecurringPayment(state.id))
      .unwrap()
      .then((res) => {
        if (res?.data?.success) {
          setShowModal((prev) => ({
            ...prev,
            discontinueModal: false,
            successModal: true,
            details: res?.data?.message,
          }));
          setTimeout(() => {
            setShowModal((prev) => ({
              ...prev,
              successModal: false,
              details: null,
            }));
            navigate(-1);
          }, 2000);
        }
      })
      .catch((err) => {
        setShowModal((prev) => ({
          ...prev,
          successModal: true,
          errorText: true,
          details: err?.data?.message,
        }));
        setTimeout(() => {
          setShowModal((prev) => ({
            ...prev,
            successModal: false,
            errorText: false,
            details: null,
          }));
        }, 2000);
      });
  };

  return (
    <>
      <MessageModal bgColor={true} isOpen={showModal?.successModal} modalWidth="400px" modalHeight="auto">
        <div className="flex flex-col justify-center items-center w-full">
          {showModal?.errorText ? (
            <Text format="text-center mt-3" variant="h3" color="text-[#465174]" weight="bold">
              !Oops
            </Text>
          ) : (
            <img src={Correct} alt="check-img" />
          )}
          <Text format="text-center mt-3" variant="h3" color="text-[#465174]" weight="bold">
            {showModal?.details}
          </Text>
        </div>
      </MessageModal>
      <MessageModal bgColor={true} isOpen={showModal?.discontinueModal} modalWidth="400px" modalHeight="auto">
        <div className="flex flex-col justify-center items-center w-full">
          <Text format="text-center mt-3" variant="h3" color="text-[#465174]" weight="bold">
            You’re about to discontinue recurrent payment
          </Text>
          <Text format="text-center mt-3" variant="body" color="text-[#465174]" weight="normal">
            Click Proceed to continue or cancel to cancel this transaction
          </Text>
          <div className="mt-4 w-full flex gap-2">
            <Button
              title="Cancel"
              className="px-6 py-6 font-extrabold border border-[#626B89]"
              type="button"
              size="small"
              backgroundColor="none"
              textColor="#626B89"
              onClick={() => handleHideModals("discontinueModal")}
            />
            <Button
              isLoading={recurringPaymentReducer?.disabingRecurringPaymentIsLoading}
              title="Proceed"
              className="cursor-pointer w-full"
              type="button"
              onClick={() => disableRecurringPayment()}
            />
          </div>
        </div>
      </MessageModal>
      <div className="overflow-hidden" data-aos="fade-up" data-aos-duration="2000">
        <div className="flex gap-4">
          <img className="cursor-pointer" src={gobackButton} alt="gobackButton" onClick={() => navigate(-1)} />
          <Text variant="h1" weight="bold">
            Active Recurrent Payments
          </Text>
        </div>
        {recurringPaymentReducer?.detailsRecurringPaymentIsLoading && (
          <div className="w-full mt-10">
            <Skeleton sx={{ bgcolor: "grey.200" }} variant="rectangular" width="100%" height={500} />
          </div>
        )}
        {!!!recurringPaymentReducer?.detailsRecurringPaymentIsLoading &&
          recurringPaymentReducer?.detailsRecurringPaymentData?.type ===
            "recurring/detailsRecurringPayment/fulfilled" && (
            <div className="w-full bg-BACKGROUND_WHITE p-[2%] mt-10">
              <div className="w-full flex justify-center items-center flex-col gap-2">
                <Text variant="h3" weight="bold">
                  {paymentDetails?.description}
                </Text>
                <Text variant="h3" weight="normal">
                  {paymentDetails?.account_type}
                </Text>
              </div>
              <div className="w-full flex justify-center items-center flex-col gap-1 mt-2">
                <div className="flex gap-5">
                  <Text variant="h4" weight="normal">
                    Start Date
                  </Text>
                  <Text variant="h4" weight="normal">
                    End Date
                  </Text>
                </div>
                <div className="flex gap-5">
                  <Text variant="body" weight="normal">
                    {paymentDetails?.start_date}
                  </Text>
                  <Text variant="body" weight="normal">
                    {paymentDetails?.end_date}
                  </Text>
                </div>
              </div>
              <div className="p-6 flex lg:flex-row md:flex-col flex-col lg:justify-start md:justify-center justify-center lg:items-start md:items-center items-center gap-2">
                <div className="lg:basis-1/2 md:basis-full basis-full">
                  <Text variant="h4" weight="bold">
                    Paid transactions
                  </Text>
                  <div className="w-[458px] h-[230px] bg-[#E7E7E7] p-6">
                    <div className="w-full flex flex-col gap-8">
                      <div className="w-full flex justify-between">
                        <Text color="text-[#65666A]" variant="h4" weight="normal">
                          Amount
                        </Text>
                        <Text color="text-[#65666A]" variant="h4" weight="normal">
                          {paymentDetails?.amount}
                        </Text>
                      </div>
                      <div className="w-full flex justify-between">
                        <Text color="text-[#65666A]" variant="h4" weight="normal">
                          Date due
                        </Text>
                        <Text color="text-[#65666A]" variant="h4" weight="normal">
                          {paymentDetails?.next_due_date}
                        </Text>
                      </div>
                      <div className="w-full flex justify-between">
                        <Text color="text-[#65666A]" variant="h4" weight="normal">
                          Status
                        </Text>

                        <Text
                          format={`${
                            paymentDetails?.status ? "bg-[#00C48C]" : "bg-[#FEB700]"
                          }  text-center w-[20%] p-2 rounded-lg`}
                          color="text-white"
                          variant="h4"
                          weight="normal"
                        >
                          {paymentDetails?.status ? "Paid" : "Pending"}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2 md:basis-full basis-full">
                  <Text variant="h4" weight="bold">
                    Upcoming payment
                  </Text>
                  <div className="w-[458px] h-[230px] bg-[#E7E7E7] p-4">
                    <div className="w-full flex flex-col gap-8">
                      <div className="w-full flex justify-between">
                        <Text color="text-[#65666A]" variant="h4" weight="normal">
                          Amount
                        </Text>
                        <Text color="text-[#65666A]" variant="h4" weight="normal">
                          {paymentDetails?.upcoming_payment?.amount}
                        </Text>
                      </div>
                      <div className="w-full flex justify-between">
                        <Text color="text-[#65666A]" variant="h4" weight="normal">
                          Date due
                        </Text>
                        <Text color="text-[#65666A]" variant="h4" weight="normal">
                          {paymentDetails?.upcoming_payment?.date_due}
                        </Text>
                      </div>
                      <div className="w-full flex justify-between">
                        <Text color="text-[#65666A]" variant="h4" weight="normal">
                          Status
                        </Text>

                        <Text
                          format={`${
                            paymentDetails?.upcoming_payment?.paid ? "bg-[#00C48C]" : "bg-[#FEB700]"
                          }  text-center w-[20%] p-2 rounded-lg`}
                          color="text-white"
                          variant="h4"
                          weight="normal"
                        >
                          {paymentDetails?.upcoming_payment?.paid ? "Paid" : "Pending"}
                        </Text>
                      </div>
                    </div>
                    <div className="w-[40%]">
                      <Button
                        title="Discontinue"
                        className="font-extrabold border border-[#E32526]"
                        type="button"
                        size="small"
                        backgroundColor="none"
                        textColor="#E32526"
                        onClick={() => handleShowModals("discontinueModal")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    </>
  );
}
