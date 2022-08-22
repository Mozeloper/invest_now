import React from "react";
import { useSelector } from "react-redux";
import BeneficiaryDoc from "../components/beneficiaryDoc";
import ChnDetails from "../components/chnDetails";

export default function FurtherProductsUpload() {
  const buyProductReducer = useSelector((state) => state.buyProductReducer);

  return (
    <>
      {buyProductReducer?.step === 1 && <BeneficiaryDoc />}
      {buyProductReducer?.step === 2 && <ChnDetails />}
    </>
  );
}
