/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import closeBtn from "../../../assets/icons/close_btn.svg";
import Text from "../../../components/Typography/Typography";
import Select from "react-select";
import { handleGetReferralCode, handleGetReferralProduct } from "../../../store/slices/dashboardSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/loader";

export default function Referral({ setIsReferralModalOpen }) {
  const dashboardReducer = useSelector((state) => state.dashboardReducer);
  const [referralLink, setReferralLink] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [productValue, setProductValue] = useState("");
  const [successCopy, setSuccessCopy] = useState({
    text: "",
    link: false,
    code: false,
  });
  const [originLocation, setOriginLocation] = useState("");

  const activeProduct = [];

  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        try {
          dispatch(handleGetReferralProduct());
        } catch (error) {
          console.log(error);
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (dashboardReducer?.referralProduct?.type === "dashboard/referralProduct/fulfilled") {
    dashboardReducer?.referralProduct?.payload?.data?.data.map((list) => {
      return activeProduct.push({
        label: list.product_code.name,
        value: list.product_code.code,
      });
    });
  }

  const handleGetProduct = async (e) => {
    setProductValue(e.value);
    await dispatch(handleGetReferralCode())
      .unwrap()
      .then((res) => {
        let origin;
        if (window.location.host === "localhost:3000") {
          origin = "http://localhost:3000";
        } else {
          origin = window.location.origin;
        }
        setOriginLocation(origin);
        const refId = res?.data?.data?.breakdown?.ref_id;
        const concatedResult = e.value.concat("-", refId);
        setReferralCode(refId);
        const encodedString = btoa(concatedResult);
        setReferralLink(encodedString);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const copyCodeToClipBoard = (data, type) => {
    navigator.clipboard.writeText(data).then(() => {
      setSuccessCopy((prev) => ({
        ...prev,
        text: "Copied to clipboard",
        [type]: true,
      }));
      setTimeout(() => {
        setSuccessCopy((prev) => ({
          ...prev,
          text: "",
          [type]: false,
        }));
      }, 2000);
    });
  };

  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => setIsReferralModalOpen(false)}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <Text variant="h2" weight="bold">
        Refer and Earn
      </Text>
      <Text variant="h4" weight="normal" format="my-2">
        Your Referral Code and link will bbe displayed once you select a product
      </Text>
      <Text variant="h4" weight="normal" format="mb-2">
        what product do u want to refer
      </Text>
      <Select
        className="w-full bg-secondary mb-6"
        isLoading={dashboardReducer?.activeProductReferralIsLoading}
        placeholder={dashboardReducer?.activeProductReferralIsLoading ? "" : "Select Product"}
        onChange={handleGetProduct}
        name="product"
        options={activeProduct}
      />
      {dashboardReducer?.referralCodeIsLoading && (
        <div className="w-full h-full flex justify-center">
          <Loader />
        </div>
      )}
      {!!!dashboardReducer?.referralCodeIsLoading && productValue !== "" && (
        <>
          <Text variant="h4" weight="normal" format="mb-2">
            Your Referral Code
          </Text>
          <div className="md:w-[70%] w-full bg-pink rounded-lg p-4 flex justify-between">
            <Text variant="h3" weight="bold" format="mb-2">
              {referralCode}
            </Text>
            <div
              onClick={() => copyCodeToClipBoard(referralCode, "code")}
              className="bg-[#FFD8D8] cursor-pointer p-1 flex items-center rounded-lg text-xs text-tertiary mb-2"
            >
              Click to Copy
            </div>
          </div>
          {successCopy.code && (
            <Text variant="body" weight="bold" format="mb-2" color="text-green-600">
              {successCopy?.text}
            </Text>
          )}
          <Text variant="h4" weight="normal" format="mb-2">
            Your Referral Link
          </Text>
          <div className="w-full bg-pink rounded-lg p-4 flex justify-between gap-4 flex-wrap overflow-hidden overflow-x-auto no-scrollbar">
            <Text variant="body" weight="bold" format="mb-2 flex flex-wrap">
              {`${originLocation}/products/open_account/${referralLink}`}
            </Text>
            <div
              onClick={() => copyCodeToClipBoard(`${originLocation}/products/open_account/${referralLink}`, "link")}
              className="bg-[#FFD8D8] whitespace-nowrap cursor-pointer p-1 flex items-center rounded-lg text-xs text-tertiary mb-2"
            >
              Click to Copy
            </div>
          </div>
          {successCopy.link && (
            <Text variant="body" weight="bold" format="mb-2" color="text-green-600">
              {successCopy?.text}
            </Text>
          )}
        </>
      )}
    </>
  );
}
