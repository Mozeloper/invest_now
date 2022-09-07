import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import Text from "../../../../../components/Typography/Typography";
import downArrow from "../../../../../assets/icons/down_arrow.svg";
import downArrowWhite from "../../../../../assets/icons/white_small_logo.svg";
import Input from "../../../../../components/formFields/inputs";
import Button from "../../../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { getBankList, verifyBankAccount } from "../../../../../store/slices/openAccountSlice";
import Loader from "../../../../../components/loader";
import checked from "../../../../../assets/icons/correct.svg";
import {
  handleExistingCashAccountDetails,
  setBankDetails,
  setReferralCode,
} from "../../../../../store/slices/buyProductSlice";
import { Box } from "@mui/system";
import { Skeleton } from "@mui/material";

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

export default function NewBankAccount() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  const openAccountReducer = useSelector((state) => state.openAccountReducer);
  const buyProductReducer = useSelector((state) => state.buyProductReducer);
  const bank_name = buyProductReducer?.existingAccountDataDetails?.payload?.data?.data?.bank?.name ?? "";
  const bank_id = buyProductReducer?.existingAccountDataDetails?.payload?.data?.data?.bank?.id ?? "";
  const bank_code = buyProductReducer?.existingAccountDataDetails?.payload?.data?.data?.bank?.code ?? "";
  const bank_account_number =
    buyProductReducer?.existingAccountDataDetails?.payload?.data?.data?.bank_account_number ?? "";
  const bank_account_name = buyProductReducer?.existingAccountDataDetails?.payload?.data?.data?.bank_account_name ?? "";
  const account_name = openAccountReducer?.verifiedBankAccount?.payload?.data?.data?.account_name ?? "";
  const failedVerifyAccount = openAccountReducer?.verifiedBankAccount?.payload?.data?.message ?? "";
  const [existingBankDetails] = useState([
    { name: "Paul Akilapa", number: " 31134567890", code: "FBN" },
    { name: "Paul Akilapa", number: " 31134567890", code: "FBN" },
  ]);
  const existingReferralCode = buyProductReducer?.referralCode ?? "";

  const bankList = [];
  const [isSelected, setIsSelected] = useState({
    new_bank_details: true,
    existing_bank_details: false,
  });
  const [referralStateCode, setReferralStateCode] = useState("");

  const [error, setError] = useState({
    bank: false,
    account_number: false,
    options_error: false,
    exceeded_account_number: false,
    verify_account: false,
    existing_account: false,
  });
  const [bankSelected, setBankSelected] = useState(bank_name);
  const [accountNumber, setAccountNumber] = useState(bank_account_number);
  const [selectedExistingBank, setIsSelectedExistingBank] = useState(null);

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted && isSelected?.new_bank_details) {
        dispatch(getBankList());
      }
      if (mounted && state !== null) {
        const data = {
          core_system: state?.Account?.CoreSystem,
          account_type: state?.TYPEID,
          customer_id: state?.Account?.CustomerId,
        };
        dispatch(handleExistingCashAccountDetails(data));
      }
    })();
    return () => {
      mounted = false;
    };
  }, [dispatch, isSelected?.new_bank_details, state]);

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted && bank_account_number !== "") {
        setAccountNumber(bank_account_number);
        setBankSelected(bank_name);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [bank_account_number, bank_name]);

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        setReferralStateCode(existingReferralCode);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [existingReferralCode]);

  if (openAccountReducer?.bankListData?.type === "openaccount/banklist/fulfilled") {
    openAccountReducer?.bankListData?.payload?.data?.data.map((list) => {
      return bankList.push({
        label: list.name,
        value: {
          code: list.code,
          id: list.id,
        },
      });
    });
  }

  const handleToggleAccordion = (type) => {
    setBankSelected("");
    setAccountNumber("");
    setError((prev) => ({
      ...prev,
      bank: false,
      account_number: false,
      options_error: false,
      exceeded_account_number: false,
      verify_account: false,
      existing_account: false,
    }));
    setIsSelected(false);
    setIsSelected((prev) => ({
      ...prev,
      [type]: true,
    }));
  };

  const handleToggleCloseAccordion = (type) => {
    setIsSelected((prev) => ({
      ...prev,
      [type]: false,
    }));
  };

  const handleVerifyAccount = async (bank_account_number) => {
    const data = {
      code: bankSelected.code,
      account_number: bank_account_number,
    };

    dispatch(verifyBankAccount(data))
      .unwrap()
      .then(() => {})
      .catch(() => {
        setError((prev) => ({
          ...prev,
          verify_account: true,
        }));
        setTimeout(() => {
          setError((prev) => ({
            ...prev,
            verify_account: false,
          }));
        }, 3000);
      });
  };

  const handleBankDetails = () => {
    if (isSelected?.new_bank_details) {
      if (bankSelected === "" || bankSelected === undefined) {
        setError((prev) => ({
          ...prev,
          bank: true,
        }));
      }
      if (accountNumber === "" || accountNumber === undefined) {
        setError((prev) => ({
          ...prev,
          account_number: true,
        }));
      }
      if (bankSelected !== "" && accountNumber !== "" && accountNumber.length === 10) {
        let existing_account_name;
        let selected_bank;
        if (account_name !== "") {
          existing_account_name = account_name;
          selected_bank = bankSelected;
        } else {
          existing_account_name = bank_account_name;
          selected_bank = {
            code: bank_code,
            id: bank_id,
          };
        }
        dispatch(setBankDetails({ accountNumber, selected_bank, existing_account_name }));
        dispatch(setReferralCode(referralStateCode));
        navigate("/products/next_of_kin");
      }
    } else if (isSelected?.existing_bank_details) {
      if (selectedExistingBank === null) {
        setError((prev) => ({
          ...prev,
          existing_account: true,
        }));
      } else {
        navigate("/products/next_of_kin");
      }
    } else {
      setError((prev) => ({
        ...prev,
        options_error: true,
      }));
    }
  };

  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="p-[4%]">
      <div className="flex flex-col gap-1 w-full">
        <Text color="text-black" weight="bold" variant="h2">
          Bank account details
        </Text>
        <Text color="text-black" weight="normal" variant="h3" format="tracking-wide">
          Which bank account would you want to use?
        </Text>
      </div>
      <div className="flex flex-col h-full justify-between mt-4">
        <div className="flex flex-col gap-3">
          <>
            <div
              style={{
                background: `${
                  isSelected?.new_bank_details ? "linear-gradient(to right, #2B2B2B, 70%, #606161)" : "#F8F8F8"
                }`,
              }}
              className="p-[2%] lg:w-[534px] md:w-full w-full rounded-lg cursor-pointer flex justify-between items-center"
              // onClick={() => {
              //   !!!isSelected?.new_bank_details
              //     ? handleToggleAccordion("new_bank_details")
              //     : handleToggleCloseAccordion("new_bank_details");
              // }}
            >
              <Text color={`${isSelected?.new_bank_details ? "text-white" : null}`} weight="bold" variant="h4">
                Provide new bank details
              </Text>
              <img
                src={isSelected?.new_bank_details ? downArrowWhite : downArrow}
                alt="down_arrow"
                loading="lazy"
                className="w-[15px] h-[15px]"
              />
            </div>
            {buyProductReducer?.isExistingCashAccountIsLoaing && (
              <div className="mt-2">
                <Box>
                  <Skeleton animation="wave" />
                  <Skeleton animation={false} />
                </Box>
              </div>
            )}
            {!!!buyProductReducer?.isExistingCashAccountIsLoaing && (
              <>
                {isSelected?.new_bank_details && (
                  <>
                    <div className="w-full">
                      <Select
                        className="lg:w-[534px] md:w-full w-full bg-[#f2f2f2] rounded-lg"
                        onChange={(e) => {
                          setBankSelected(e.value);
                          setError((prev) => ({
                            ...prev,
                            bank: false,
                          }));
                        }}
                        name="bank"
                        isLoading={openAccountReducer?.bankIsLoading}
                        placeholder="Choose Bank"
                        options={bankList}
                        defaultInputValue={bank_name}
                        styles={colourStyles}
                      />
                    </div>
                    {error.bank && (
                      <Text variant="sub" weight="normal" color="text-red">
                        Please select bank
                      </Text>
                    )}
                    <div className="lg:w-[534px] md:w-full w-full">
                      <Input
                        handleChange={(e) => {
                          setAccountNumber(e.target.value);
                          if (e.target.value.length === 10) {
                            setError((prev) => ({
                              ...prev,
                              exceeded_account_number: false,
                            }));
                            handleVerifyAccount(e.target.value);
                          }

                          if (e.target.value.length > 10 || e.target.value.length < 10) {
                            setError((prev) => ({
                              ...prev,
                              exceeded_account_number: true,
                            }));
                          }
                          setError((prev) => ({
                            ...prev,
                            account_number: false,
                          }));
                        }}
                        value={accountNumber}
                        // defaultValue={accountNumber}
                        placeholder="Account Number"
                        type="text"
                        name="amount"
                      />
                    </div>
                    {error.account_number && (
                      <Text variant="sub" weight="normal" color="text-red">
                        Please Account Number
                      </Text>
                    )}
                    {error.exceeded_account_number && (
                      <Text variant="sub" weight="normal" color="text-red">
                        Account Number Exceeded or Below length
                      </Text>
                    )}
                    {openAccountReducer?.verifyAccountIsLoading && (
                      <div className="w-[20%] mt-4">
                        <Loader />
                      </div>
                    )}
                    {!!!openAccountReducer?.verifyAccountIsLoading && bank_account_name !== "" && account_name === "" && (
                      <div className="flex gap-2 mt-2">
                        <Text variant="body" weight="bold" color="text-black" format="text-left tracking-wide">
                          {bank_account_name}
                        </Text>
                        <img src={checked} alt="correct" className="w-[10px] h-[10px] md:w-[20px] md:h-[20px]" />
                      </div>
                    )}
                    {!!!openAccountReducer?.verifyAccountIsLoading && account_name !== null && account_name !== "" && (
                      <div className="flex gap-2 mt-2">
                        <Text variant="body" weight="bold" color="text-black" format="text-left tracking-wide">
                          {account_name}
                        </Text>
                        <img src={checked} alt="correct" className="w-[10px] h-[10px] md:w-[20px] md:h-[20px]" />
                      </div>
                    )}
                    {!!!openAccountReducer?.verifyAccountIsLoading && error.verify_account && (
                      <>
                        <Text variant="body" weight="bold" color="text-red" format="w-full mt-4 tracking-wide">
                          {failedVerifyAccount}
                        </Text>
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </>
          <div className="mt-4 lg:w-[534px] md:w-full w-full">
            <label htmlFor="referral_code" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
              Referral Code
            </label>
            <Input
              placeholder="code"
              type="text"
              name="referral_code"
              value={referralStateCode}
              handleChange={(e) => setReferralStateCode(e.target.value)}
            />
          </div>
          {!!!isSelected?.new_bank_details && (
            <div className="flex flex-col gap3">
              <div
                style={{
                  background: `${
                    isSelected?.existing_bank_details ? "linear-gradient(to right, #2B2B2B, 70%, #606161)" : "#F8F8F8"
                  }`,
                }}
                className="p-[2%] lg:w-[534px] md:w-full w-full rounded-lg cursor-pointer flex justify-between items-center"
                onClick={() => {
                  !!!isSelected?.existing_bank_details
                    ? handleToggleAccordion("existing_bank_details")
                    : handleToggleCloseAccordion("existing_bank_details");
                }}
              >
                <Text color={`${isSelected?.existing_bank_details ? "text-white" : null}`} weight="bold" variant="h4">
                  Use existing bank details
                </Text>
                <img
                  src={isSelected?.existing_bank_details ? downArrowWhite : downArrow}
                  alt="down_arrow"
                  loading="lazy"
                  className="w-[15px] h-[15px]"
                />
              </div>
              {error?.existing_account && (
                <>
                  <Text variant="body" weight="bold" color="text-red" format="w-full mt-4 tracking-wide">
                    Please select an account
                  </Text>
                </>
              )}
              {isSelected?.existing_bank_details && (
                <div className="mt-4">
                  {existingBankDetails.map((list, index) => {
                    return (
                      <div
                        onClick={() => {
                          setIsSelectedExistingBank(list);
                          setError((prev) => ({
                            ...prev,
                            existing_account: false,
                          }));
                        }}
                        key={index}
                        className="bg-BACKGROUND_WHITE p-[2%] lg:w-[534px] md:w-full w-full rounded-lg cursor-pointer flex justify-between items-center mt-2"
                      >
                        <Text color="text-black" weight="bold" variant="h4">
                          {list?.number} - {list?.name} - {list?.code}
                        </Text>
                        <img src={checked} alt="correct" className="w-[10px] h-[10px] md:w-[20px] md:h-[20px]" />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
        <div className="mt-[20%] self-center w-[50%]">
          <Button
            title="Next"
            className="h-fit px-16 py-6 whitespace-nowrap font-extrabold"
            type="button"
            textColor="#fff"
            onClick={() => handleBankDetails()}
          />
        </div>
        {error.options_error && (
          <Text variant="body" weight="normal" color="text-red" format="w-full mt-4 text-center">
            Please Select Option Above
          </Text>
        )}
      </div>
    </div>
  );
}
