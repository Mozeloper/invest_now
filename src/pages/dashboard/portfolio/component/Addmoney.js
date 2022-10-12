import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DateRange } from "react-date-range";
import Select from "react-select";
import close from "../../../../assets/icons/close_btn.svg";
import Input from "../../../../components/formFields/inputs";
import Text from "../../../../components/Typography/Typography";
import { handlePaymentFrequency } from "../../../../store/slices/openAccountSlice";
import { weekNumber, weekDays } from "../../../../helper";
import Button from "../../../../components/Button";
import moment from "moment";
import { usePaystackPayment } from "react-paystack";
import {
  handleInitializePayment,
  handleRecurrentPayment,
  handleVerifyPayment,
} from "../../../../store/slices/buyProductSlice";
import MessageModal from "../../../../components/modals/MessageModal";
import BlankModal from "../../../../components/modals/blankModal";
import {
  handleGetPortfolioPerfomance,
  handleGetPortfolioStatistics,
  handleGetPortfolioSummary,
  handleGetPortfolioTransaction,
} from "../../../../store/slices/portfolioSlice";

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#f2f5fa",
    minHeight: 56,
  }),
  option: (styles, { isDisabled, isFocused }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#FE0000" : "#FFF",
      color: isFocused ? "#FFF" : "#000",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
};

export default function Addmoney({ handleCloseModal }) {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [howFrequentState, setHowFrequentState] = useState("");
  const userDetails = useSelector((state) => state?.authReducer.authedUser);
  const emailAddress = userDetails?.data?.customer?.email;
  const openAccountReducer = useSelector((state) => state.openAccountReducer);
  const buyProductReducer = useSelector((state) => state.buyProductReducer);
  const portfolioReducer = useSelector((state) => state.portfolioReducer);
  const portfolioDetails = portfolioReducer?.portfolioDetailsData?.payload?.data?.data;
  const attemptId = useRef(null);
  const refNumber = useRef(null);

  const [error, setError] = useState({
    amount: false,
    frequent: false,
  });

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [dayOfWeek, setDayOfWeek] = useState(null);
  const [showErrorModals, setShowErrorModals] = useState({
    verifyPayment: false,
    initializePaymentError: false,
    initializePaymentSuccess: false,
    details: null,
  });

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        dispatch(handlePaymentFrequency());
      }
    })();
    return () => {
      mounted = false;
    };
  }, [dispatch]);

  const howFrequent = [];

  if (openAccountReducer?.paymentFrequencyData?.type === "openaccount/paymentFrequency/fulfilled") {
    openAccountReducer?.paymentFrequencyData?.payload?.data?.data.map((list) => {
      return howFrequent.push({
        label: list.name,
        value: list.code,
      });
    });
  }

  const config = {
    reference: refNumber.current,
    email: emailAddress,
    amount: Number(amount * 100),
    metadata: portfolioDetails?.deposit_account?.paystack_custom_data,
    publicKey: process.env.REACT_APP_PAYSTACK_KEY,
  };

  const onSuccess = () => {
    const data = {
      payment_attempt_id: attemptId.current,
    };
    dispatch(handleVerifyPayment(data))
      .unwrap()
      .then((res) => {
        if (res?.data?.success) {
          handleCloseModal("add_money");
          dispatch(handleGetPortfolioPerfomance());
          dispatch(handleGetPortfolioSummary());
          dispatch(handleGetPortfolioStatistics());
          dispatch(handleGetPortfolioTransaction());
        }
      })
      .catch((err) => {
        setShowErrorModals((prev) => ({
          ...prev,
          verifyPayment: true,
          details: err?.data?.message,
        }));
      });
  };

  const onClose = () => {
    console.log("closed");
  };

  const handlePaymentMethod = () => {
    if (amount === "") {
      setError((prev) => ({
        ...prev,
        amount: true,
      }));
    }
    if (howFrequentState === "") {
      setError((prev) => ({
        ...prev,
        frequent: true,
      }));
    }
    if (amount !== "" && howFrequentState !== "") {
      if (howFrequentState === "S") {
        initializePayment();
      } else {
        recurrentPayment();
      }
    }
  };
  const initializePaymentsToPaystack = usePaystackPayment(config);
  const initializePayment = async () => {
    const data = {
      customer_id: portfolioDetails?.deposit_account?.payment_options?.customer_id,
      core_system: portfolioDetails?.deposit_account?.payment_options?.core_system,
      core_system_options: portfolioDetails?.deposit_account?.payment_options?.core_system_options,
      sub_account: portfolioDetails?.deposit_account?.paystack_sub_account,
      product_code: portfolioDetails?.deposit_account?.product_code,
      gateway_metadata: portfolioDetails?.deposit_account?.paystack_custom_data,
      payment_authorization_id: null,
      items: [
        {
          name: `One Off payment for ${portfolioDetails?.deposit_account?.display}`,
          description: `One Off payment for ${portfolioDetails?.deposit_account?.display}`,
          value: parseFloat(amount).toFixed(2),
        },
      ],
      save_authorization: true,
      no_vat: true,
      description: `One Off payment for ${portfolioDetails?.deposit_account?.display}`,
    };

    await dispatch(handleInitializePayment(data))
      .unwrap()
      .then((res) => {
        if (res?.data?.success) {
          attemptId.current = res?.data?.data?.id;
          refNumber.current = res?.data?.data?.ref_number;
          setShowErrorModals((prev) => ({
            ...prev,
            initializePaymentSuccess: true,
            details: res?.data?.message,
          }));
        }
      })
      .catch((err) => {
        setShowErrorModals((prev) => ({
          ...prev,
          initializePaymentError: true,
          details: err?.data?.message,
        }));
      });
  };

  const recurrentPayment = async () => {
    let frequentOption = [];
    frequentOption.push(dayOfWeek);
    const data = {
      customer_id: portfolioDetails?.deposit_account?.payment_options?.customer_id,
      core_system: portfolioDetails?.deposit_account?.payment_options?.core_system,
      core_system_options: portfolioDetails?.deposit_account?.payment_options?.core_system_options,
      sub_account: portfolioDetails?.deposit_account?.paystack_sub_account,
      product_code: portfolioDetails?.deposit_account?.product_code,
      gateway_metadata: portfolioDetails?.deposit_account?.paystack_custom_data,
      payment_authorization_id: null,
      recurrent_options: {
        start_date: moment(dateRange[0]?.startDate.toISOString()).format()?.split("T")[0],
        end_date: moment(dateRange[0].endDate.toISOString()).format()?.split("T")[0],
        frequency_code: howFrequentState,
        frequency_options: howFrequentState === "D" ? [] : frequentOption,
        amount: parseFloat(amount).toFixed(2),
      },
      amount: parseFloat(amount).toFixed(2),
    };
    await dispatch(handleRecurrentPayment(data))
      .unwrap()
      .then((res) => {
        if (res?.data?.success) {
          attemptId.current = res?.data?.data?.id;
          refNumber.current = res?.data?.data?.ref_number;
          setShowErrorModals((prev) => ({
            ...prev,
            initializePaymentSuccess: true,
            details: res?.data?.message,
          }));
        }
      })
      .catch((err) => {
        setShowErrorModals((prev) => ({
          ...prev,
          initializePaymentError: true,
          details: err?.data?.message,
        }));
      });
  };

  return (
    <div className="p-[4%]">
      <div className="flex justify-end mb-3">
        <img
          className="cursor-pointer h-[50px] w-[50px]"
          src={close}
          alt="close_btn"
          onClick={() => handleCloseModal("add_money")}
        />
      </div>
      <div className="mt-6 w-[80%]">
        <Text variant="h3" color="text-[#000000]">
          How much do you want to fund your account with ?
        </Text>
      </div>
      <div className="md:w-[70%] w-full mt-6">
        <Input
          handleChange={(e) => {
            setAmount(e.target.value);
            setError((prev) => ({
              ...prev,
              amount: false,
            }));
          }}
          placeholder="Enter Amount"
          type="text"
          name="amount"
        />
      </div>
      {error.amount && (
        <Text variant="body" weight="normal" color="text-red">
          Please Enter Amount
        </Text>
      )}
      <div className="mt-6 w-[80%]">
        <Text variant="h3" color="text-[#000000]">
          How frequently do you want to top up your fund?
        </Text>
      </div>

      <div className="md:w-[70%] w-full mt-6">
        <Select
          className="w-full bg-[#f2f2f2]"
          onChange={(e) => {
            setHowFrequentState(e.value);
            setError((prev) => ({
              ...prev,
              frequent: false,
            }));
          }}
          name="frequent"
          options={howFrequent}
          styles={colourStyles}
          isLoading={openAccountReducer?.paymentFrequencyIsLoading}
        />
      </div>
      {error.frequent && (
        <Text variant="body" weight="normal" color="text-red">
          please tell us how frequent
        </Text>
      )}
      {howFrequentState !== "S" && howFrequentState !== "" && (
        <div className="mt-2 w-[80%] flex justify-center">
          <Text variant="body" weight="normal" color="text-black">
            10.00 NGN will be debited from your Account and Credited into your portfolio account to validate your Debit
            Card
          </Text>
        </div>
      )}
      {howFrequentState !== "S" && howFrequentState !== "" && (
        <>
          {howFrequentState !== "S" && howFrequentState !== "D" && howFrequentState !== "" && (
            <div className="w-[70%] mt-4">
              <Select
                className="w-full bg-[#f2f2f2]"
                onChange={(e) => {
                  const data =
                    howFrequentState === "W" ? { field_id: 5, value: e.value } : { field_id: 6, value: e.value };
                  setDayOfWeek(data);
                  setError((prev) => ({
                    ...prev,
                    weekDays: false,
                  }));
                }}
                name="frequent"
                options={howFrequentState === "W" ? weekDays : weekNumber}
                styles={colourStyles}
                isLoading={false}
              />
            </div>
          )}
          <div className="w-full mt-4">
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDateRange([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dateRange}
            />
          </div>
        </>
      )}

      <div className="mt-10 w-full flex justify-center">
        <div className="w-[70%]">
          <Button
            title="Continue"
            className="cursor-pointer"
            type="button"
            onClick={() => handlePaymentMethod()}
            isLoading={buyProductReducer?.isInitializePaymentLoading}
          />
        </div>
      </div>

      <BlankModal isOpen={buyProductReducer?.isVerifyPaymentLoading}>
        <div className="ldss-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </BlankModal>
      <MessageModal isOpen={showErrorModals?.verifyPayment} modalWidth="300px" modalHeight="auto">
        <div className="flex flex-col justify-center items-center w-full">
          <Text format="text-center mt-3 whitespace-nowrap" variant="h3" color="text-[#465174]" weight="bold">
            Oops!
          </Text>
          <Text format="text-center mt-3" variant="body" color="text-[#465174]" weight="bold">
            {showErrorModals?.details}
          </Text>
          <div className="mt-4 w-full">
            <Button
              onClick={() =>
                setShowErrorModals((prev) => ({
                  ...prev,
                  verifyPayment: false,
                  details: null,
                }))
              }
              title="Close"
              className="cursor-pointer w-full"
              type="button"
            />
          </div>
        </div>
      </MessageModal>
      <MessageModal isOpen={showErrorModals?.initializePaymentError} modalWidth="300px" modalHeight="auto">
        <div className="flex flex-col justify-center items-center w-full">
          <Text format="text-center mt-3 whitespace-nowrap" variant="h3" color="text-[#465174]" weight="bold">
            Oops!
          </Text>
          <Text format="text-center mt-3" variant="body" color="text-[#465174]" weight="bold">
            {showErrorModals?.details}
          </Text>
          <div className="mt-4 w-full">
            <Button
              onClick={() =>
                setShowErrorModals((prev) => ({
                  ...prev,
                  initializePaymentError: false,
                  details: null,
                }))
              }
              title="Close"
              className="cursor-pointer w-full"
              type="button"
            />
          </div>
        </div>
      </MessageModal>
      <MessageModal
        bgColor={true}
        isOpen={showErrorModals?.initializePaymentSuccess}
        modalWidth="450px"
        modalHeight="auto"
      >
        <div className="flex justify-end">
          <img
            className="cursor-pointer h-[50px] w-[50px]"
            src={close}
            alt="close_btn"
            onClick={() => {
              setShowErrorModals((prev) => ({
                ...prev,
                initializePaymentSuccess: false,
                details: null,
              }));
            }}
          />
        </div>
        <div className="flex flex-col w-full">
          <Text variant="h2" color="text-[#465174]" weight="bold">
            You’re about to deposit NGN{amount}
          </Text>
          <Text format="mt-3" variant="h4" color="text-[#465174]">
            NGN{amount} would be debited from your bank account
          </Text>
          <div className="mt-4 w-[50%]">
            <Button
              onClick={() => {
                setShowErrorModals((prev) => ({
                  ...prev,
                  initializePaymentSuccess: false,
                  details: null,
                }));
                initializePaymentsToPaystack(onSuccess, onClose);
              }}
              title="continue"
              className="cursor-pointer w-full"
              type="button"
            />
          </div>
        </div>
      </MessageModal>
    </div>
  );
}
