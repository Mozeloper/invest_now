import React from "react";
import { useNavigate } from "react-router-dom";
import checked from "../../../../../assets/icons/correct_two.svg";
import close from "../../../../../assets/icons/close_btn.svg";
import Text from "../../../../../components/Typography/Typography";
import Button from "../../../../../components/Button";
import { currencyFormat } from "../../../../../helper";

export default function FundingSuccess({ setIsFundingSuccess, amount }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-end">
        <img
          onClick={() => setIsFundingSuccess(false)}
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
          Funding Successful
        </Text>
        <Text weight="bold" variant="h4" color="text-[#465174]" format="tracking-wide">
          Your account has been successfully credited with NGN{currencyFormat(amount)}
        </Text>
      </div>
      <div className="mt-6 w-full flex justify-center">
        <div className="w-[70%]">
          <Button
            onClick={() => {
              setIsFundingSuccess(false);
              navigate("/portfolio");
            }}
            textColor="#fff"
            title="Continue"
            className="cursor-pointer font-bold"
            type="button"
          />
        </div>
      </div>
      <div className="mt-6 w-full flex justify-center">
        <Text
          //   onClick={() => handleOpenRating()}
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
