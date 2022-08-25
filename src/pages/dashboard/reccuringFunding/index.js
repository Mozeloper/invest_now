import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Text from "../../../components/Typography/Typography";
import gobackButton from "../../../assets/icons/gobackButton.svg";
import Button from "../../../components/Button";
import {
  handleDisableRecurringPayment,
  handleGetAllRecurringPayments,
} from "../../../store/slices/recurringPaymentSlice";
import { Skeleton } from "@mui/material";
import Correct from "../../../assets/icons/correct.svg";
import MessageModal from "../../../components/modals/MessageModal";

export default function ReccuringFunding() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recurringPaymentReducer = useSelector((state) => state.recurringPaymentReducer);
  const activeRecurringPayment = recurringPaymentReducer?.allActiveRecurringPaymentData;
  const allPayments = activeRecurringPayment?.payload?.data?.data;
  const [showModal, setShowModal] = useState({
    details: null,
    successModal: false,
    errorText: false,
    discontinueModal: false,
  });

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        dispatch(handleGetAllRecurringPayments());
      }
    })();
    return () => {
      mounted = false;
    };
  }, [dispatch]);

  const handleShowModals = (data, type) => {
    setShowModal((prev) => ({
      ...prev,
      [type]: true,
      details: data,
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
    await dispatch(handleDisableRecurringPayment(showModal?.details?.id))
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
            dispatch(handleGetAllRecurringPayments());
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
        <div className="mt-10 flex flex-wrap md:justify-center justify-start gap-4">
          {recurringPaymentReducer?.allActiveRecurringPaymentIsLoading && (
            <div className="flex gap-4">
              <Skeleton sx={{ bgcolor: "grey.200" }} variant="rectangular" width="470px" height={461} />
              <Skeleton sx={{ bgcolor: "grey.200" }} variant="rectangular" width="470px" height={461} />
            </div>
          )}
          {allPayments?.length >= 1 &&
            activeRecurringPayment?.type === "recurring/recurringPayment/fulfilled" &&
            !!!recurringPaymentReducer?.allActiveRecurringPaymentIsLoading && (
              <>
                {allPayments.map((data) => {
                  return (
                    <div key={data?.id} className="bg-BACKGROUND_WHITE rounded-lg w-[470px] h-[461px] p-[2%]">
                      <Text variant="h3" weight="bold">
                        {data?.description}
                      </Text>
                      <div className="flex flex-col gap-2 mt-3">
                        <div className="w-full flex justify-between bg-[#F4F4F4] rounded-lg p-4">
                          <Text variant="h4" weight="normal">
                            Account
                          </Text>
                          <Text variant="h4" weight="normal">
                            {data?.account_type}
                          </Text>
                        </div>
                        <div className="w-full flex justify-between bg-[#F4F4F4] rounded-lg p-4">
                          <Text variant="h4" weight="normal">
                            Start Date
                          </Text>
                          <Text variant="h4" weight="normal">
                            {data?.start_date}
                          </Text>
                        </div>
                        <div className="w-full flex justify-between bg-[#F4F4F4] rounded-lg p-4">
                          <Text variant="h4" weight="normal">
                            End Date
                          </Text>
                          <Text variant="h4" weight="normal">
                            {data?.end_date}
                          </Text>
                        </div>
                        <div className="w-full flex justify-between bg-[#F4F4F4] rounded-lg p-4">
                          <Text variant="h4" weight="normal">
                            Next Due Date
                          </Text>
                          <Text variant="h4" weight="normal">
                            {data?.next_due_date}
                          </Text>
                        </div>
                        <div className="w-full flex justify-between bg-[#F4F4F4] rounded-lg p-4">
                          <Text variant="h4" weight="normal">
                            Amount
                          </Text>
                          <Text variant="h4" weight="normal">
                            {data?.amount}
                          </Text>
                        </div>
                        <div className="w-full flex gap-2 mt-3">
                          <Button
                            title="View more details"
                            className="px-6 py-6 font-extrabold"
                            type="button"
                            textColor="#fff"
                            size="small"
                            backgroundColor="#009A49"
                            onClick={() =>
                              navigate(`/active_reccurent_payments/${data?.id}/${data?.customer_id}`, { state: data })
                            }
                          />
                          <Button
                            title="Discontinue"
                            className="px-6 py-6 font-extrabold"
                            type="button"
                            textColor="#fff"
                            size="small"
                            backgroundColor="#E32526"
                            onClick={() => handleShowModals(data, "discontinueModal")}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          {allPayments?.length <= 0 && !!!recurringPaymentReducer?.allActiveRecurringPaymentIsLoading && (
            <div className="bg-BACKGROUND_WHITE rounded-lg w-[470px] h-[461px] flex justify-center items-center p-[2%]">
              <Text variant="h2" weight="bold">
                No Active Recurring Payments
              </Text>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
