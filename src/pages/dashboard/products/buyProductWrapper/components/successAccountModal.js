import React from "react";
import checked from "../../../../../assets/icons/correct_two.svg";
import close from "../../../../../assets/icons/close_btn.svg";
import Text from "../../../../../components/Typography/Typography";
import Button from "../../../../../components/Button";

export default function SuccessAccountModal({ handleCloseModal, setIsModalOpen }) {
  return (
    <>
      <div className="w-full flex justify-end">
        <img
          onClick={() => handleCloseModal()}
          src={close}
          alt="correct"
          className="w-[40px] h-[40px] cursor-pointer"
        />
      </div>
      <div className="w-full flex justify-center">
        <img src={checked} alt="correct" className="w-[60px] h-[60px]" />
      </div>
      <div className="w-full flex flex-col gap-2 items-center justify-center mt-3">
        <Text weight="bold" variant="h2" color="text-[#465174]" format="tracking-wide">
          Congratulations!
        </Text>
        <Text weight="normal" variant="body" color="text-[#465174]" format="tracking-wide text-center">
          Account Created Successfully
        </Text>
      </div>
      <div className="mt-6 w-full flex justify-center">
        <div className="w-[70%]">
          <Button
            onClick={() => {
              setIsModalOpen((prev) => ({
                ...prev,
                error: false,
                success: false,
                showFundAccount: true,
                details: null,
              }));
            }}
            textColor="#fff"
            title="Continue to payment"
            className="cursor-pointer font-bold"
            type="button"
          />
        </div>
      </div>
      <div className="mt-6 w-full flex justify-center">
        <Text
          onClick={() =>
            setIsModalOpen((prev) => ({
              ...prev,
              error: false,
              success: false,
              showRating: true,
              details: null,
            }))
          }
          weight="bold"
          variant="h4"
          color="text-[#465174]"
          format="tracking-wide cursor-pointer"
        >
          Rate your experience
        </Text>
      </div>
    </>
  );
}
