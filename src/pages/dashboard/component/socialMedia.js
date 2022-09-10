import React from "react";
import closeBtn from "../../../assets/icons/close_btn.svg";

export default function SocialMedia({ setIsSocialMediaModalOpen }) {
  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => setIsSocialMediaModalOpen(false)}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
    </>
  );
}
