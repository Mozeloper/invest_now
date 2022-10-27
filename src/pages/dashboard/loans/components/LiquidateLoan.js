import React from "react";
import Button from "../../../../components/Button";
import Text from "../../../../components/Typography/Typography";

export default function LiquidateLoan({ setShowModal }) {
  return (
    <>
      <div className="w-full">
        <Text variant="h3" weight="normal" format="text-center mb-2">
          You're about to liquidate your loan
        </Text>
        <Text variant="h3" weight="normal" format="text-center mb-1">
          Total Amount payable
        </Text>
        <Text variant="h3" weight="bold" format="text-center mb-6">
          NGN 2,000,000
        </Text>
        <Text variant="h4" weight="normal" format="text-center">
          Click Proceed to Continue or Click Cancel to cancel Transaction
        </Text>
      </div>
      <div className="w-full flex justify-center gap-3">
        <div className="mt-8 w-[50%]">
          <Button
            title="Cancel"
            className="font-extrabold border border-[#65666A]"
            type="button"
            textColor="#65666A"
            backgroundColor="none"
            onClick={() =>
              setShowModal((prev) => ({
                ...prev,
                liquidateLoan: false,
              }))
            }
          />
        </div>
        <div className="mt-8 w-[50%]">
          <Button
            title="Proceed"
            className="cursor-pointer w-full outline-none"
            type="button"
            //   onClick={() => setShowModal(true)}
          />
        </div>
      </div>
    </>
  );
}
