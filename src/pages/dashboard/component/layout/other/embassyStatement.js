import React from "react";
import closeBtn from "../../../../../assets/icons/close_btn.svg";
import Text from "../../../../../components/Typography/Typography";
import new_request_embassy from "../../../../../assets/images/new_request_embassy.svg";
import view_request_embassy from "../../../../../assets/images/view_request_embassy.svg";

export default function CustomerManager({ handleCloseModals, handleOpenModals }) {
  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseModals("embassy_statement")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <div className="w-full flex flex-col gap-2 mt-6">
        <Text variant="h2" weight="bold">
          Request Embassy Statement
        </Text>
        <Text variant="h4" weight="normal">
          All new Embassy statement request requires payment of processing fee
        </Text>
      </div>
      <div className="flex gap-3 mt-8">
        <img
          onClick={() => {
            handleCloseModals("embassy_statement");
            handleOpenModals("request_embassy_statement");
          }}
          src={new_request_embassy}
          alt="img"
          className="cursor-pointer w-[255px] h-[123px]"
        />
        <img
          onClick={() => {
            handleCloseModals("embassy_statement");
            handleOpenModals("view_embassy_statement");
          }}
          src={view_request_embassy}
          alt="img"
          className="cursor-pointer w-[255px] h-[123px]"
        />
      </div>
    </>
  );
}
