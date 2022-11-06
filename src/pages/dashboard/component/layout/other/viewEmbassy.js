import React from "react";
import closeBtn from "../../../../../assets/icons/close_btn.svg";
import Button from "../../../../../components/Button";
import Text from "../../../../../components/Typography/Typography";

export default function ViewEmbassy({ handleCloseModals, handleOpenModals }) {
  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseModals("view_embassy_statement")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <div className="w-full flex flex-col gap-2 mt-3">
        <Text variant="h2" weight="bold">
          Embassy Statement History
        </Text>
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="w-full bg-[#FFF0F0] p-6 rounded-lg mt-4 flex flex-col gap-6 justify-between">
          <div className="flex justify-between items-center">
            <Text variant="h4" weight="normal">
              Peruvian Embassy
            </Text>
            <Text variant="body" weight="normal">
              2nd Mar, 2022, 05:15pm
            </Text>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <Text variant="h4" weight="normal">
              Portfolio account
            </Text>
            <Text variant="h4" weight="bold">
              00345678904, Paul Akilapa
            </Text>
            <Text variant="h3" weight="normal">
              Mutual funds
            </Text>
          </div>
          <div className="flex justify-between gap-1 w-full">
            <div className="flex flex-col gap-1">
              <Text variant="h4" weight="normal">
                Delivery mode
              </Text>
              <Text variant="h4" weight="bold">
                Electronic Mail
              </Text>
            </div>
            <div className="rounded-3xl bg-[#00C48C] text-white text-sm flex justify-center items-center w-[111.21px] h-[52px]">
              Delivered
            </div>
          </div>
        </div>
        <div className="w-full bg-[#FFF0F0] p-6 rounded-lg mt-4 flex flex-col gap-6 justify-between">
          <div className="flex justify-between items-center">
            <Text variant="h4" weight="normal">
              Cambodian Embassy
            </Text>
            <Text variant="body" weight="normal">
              2nd Mar, 2022, 05:15pm
            </Text>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <Text variant="h4" weight="normal">
              Portfolio account
            </Text>
            <Text variant="h4" weight="bold">
              00345678904, Paul Akilapa
            </Text>
            <Text variant="h3" weight="normal">
              Mutual funds
            </Text>
          </div>
          <div className="flex justify-between gap-1 w-full">
            <div className="flex flex-col gap-1">
              <Text variant="h4" weight="normal">
                Delivery mode
              </Text>
              <Text variant="h4" weight="bold">
                Electronic Mail
              </Text>
            </div>
            <div className="rounded-3xl bg-[#FFCF5C] text-white text-sm flex justify-center items-center w-[111.21px] h-[52px]">
              Processing
            </div>
          </div>
        </div>
        <div className="w-[50%] mt-4">
          <Button
            title="New Request"
            className="h-fit px-12 py-6 whitespace-nowrap font-extrabold"
            type="button"
            textColor="#fff"
            onClick={() => {
              handleCloseModals("view_embassy_statement");
              handleOpenModals("request_embassy_statement");
            }}
          />
        </div>
      </div>
    </>
  );
}
