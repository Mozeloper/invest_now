import React, { useState } from "react";
import Text from "../../../components/Typography/Typography";
import Button from "../../../components/Button";
import RedIcon from "../../../assets/icons/bg_red.svg";
import GreenIcon from "../../../assets/icons/bg_green.svg";
import PurpleIcon from "../../../assets/icons/bg_purple.svg";
import redFrame from "../../../assets/icons/red_frame.svg";
import purpleFrame from "../../../assets/icons/purple_frame.svg";
import greenFrame from "../../../assets/icons/green_frame.svg";
import EmptyState from "./components/emptyState";
import MessageModal from "../../../components/modals/MessageModal";
import LiquidateLoan from "./components/LiquidateLoan";

export default function Loans() {
  const [showModal, setShowModal] = useState({
    liquidateLoan: false,
  });

  const isEmptyState = () => {
    return <EmptyState />;
  };

  return (
    <>
      <MessageModal bgColor={true} isOpen={showModal?.liquidateLoan} modalWidth="450px" modalHeight="350px">
        <LiquidateLoan setShowModal={setShowModal} />
      </MessageModal>
      <div data-aos="fade-up" data-aos-duration="2000" className="w-full">
        <div className="flex justify-between md:flex-row flex-col">
          <Text variant="h1" weight="bold">
            Loans
          </Text>
          <div className="flex md:flex-row flex-col gap-2">
            <Button
              title="Make a payment"
              className="h-fit p-6 whitespace-nowrap font-extrabold border border-[#65666A]"
              type="button"
              textColor="#65666A"
              backgroundColor="none"
            />
            <Button
              title="Liquidate loan"
              className="h-fit p-6 whitespace-nowrap font-extrabold border border-[#65666A]"
              type="button"
              textColor="#E32526"
              backgroundColor="none"
              onClick={() =>
                setShowModal((prev) => ({
                  ...prev,
                  liquidateLoan: true,
                }))
              }
            />
          </div>
        </div>
        <div className="flex justify-between items-center w-full my-4">
          <Text variant="h3" weight="bold">
            Loan overview
          </Text>
          <div className="flex gap-4">
            <Text variant="h2" weight="normal" color="text-[#C8CBD5]">
              Next payment
            </Text>
            <Text variant="h2" weight="bold">
              30 Mar,2022
            </Text>
          </div>
        </div>
        <div className="w-full flex gap-2 no-scrollbar overflow-hidden overflow-x-auto">
          <div
            style={{ backgroundImage: `url(${redFrame})` }}
            className="p-4 flex items-center gap-4 min-w-[345px] h-[148px]"
          >
            <img src={RedIcon} alt="icon" className="w-[64px] h-[64px]" />
            <div className="flex flex-col justify-center">
              <Text variant="body" color="text-white">
                Total Portfolio Amount
              </Text>
              <Text weight="bold" variant="h2" color="text-white">
                &#8358; 0.00
              </Text>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${greenFrame})` }}
            className="p-4 flex items-center gap-4 min-w-[345px] h-[148px]"
          >
            <img src={GreenIcon} alt="icon" className="w-[64px] h-[64px]" />
            <div className="flex flex-col justify-center">
              <Text color="text-[#65666A]" variant="body">
                Cash value
              </Text>
              <Text weight="bold" variant="h2" color="text-[#65666A]">
                &#8358; 0.00
              </Text>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${purpleFrame})` }}
            className="p-4 flex items-center gap-4 min-w-[345px] h-[148px]"
          >
            <img src={PurpleIcon} alt="icon" className="w-[64px] h-[64px]" />
            <div className="flex flex-col justify-center">
              <Text color="text-[#65666A]" variant="body">
                Loans
              </Text>
              <Text weight="bold" variant="h2" color="text-[#65666A]">
                &#8358; 0.00
              </Text>
            </div>
          </div>
        </div>
        {isEmptyState()}
      </div>
    </>
  );
}
