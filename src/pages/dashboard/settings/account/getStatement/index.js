import React from "react";
import closeBtn from "../../../../../assets/icons/close_btn.svg";

export default function GetStatement({ handleCloseItemRouting }) {
  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseItemRouting("get_statement")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
    </>
  );
}
