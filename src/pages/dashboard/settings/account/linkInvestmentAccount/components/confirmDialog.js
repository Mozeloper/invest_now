import React from "react";
import closeBtn from "../../../../../../assets/icons/close_btn.svg";
import Button from "../../../../../../components/Button";
import Text from "../../../../../../components/Typography/Typography";

export default function ConfirmDialog({
  handleOpenCardModal,
  handleCloseCardModal,
  linkUnlink,
}) {
  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseCardModal("confirm_dialog")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <Text variant="h3" weight="bold">
          Confirm Action
        </Text>
        <Text variant="body" weight="normal">
          {`You're about to ${linkUnlink} this account ${
            linkUnlink === "link" ? "to" : "from"
          } your user profile, Please
          Confirm this.`}
        </Text>
      </div>
      <div className="w-full flex justify-end mt-4">
        <div className="w-[50%] flex gap-2">
          <Button
            title="Yes"
            className="cursor-pointer"
            type="button"
            backgroundColor="#00C48C"
            textColor="#fff"
            size="small"
            onClick={() => {
              if (linkUnlink === "link") {
                handleOpenCardModal("confirm_otp");
                handleCloseCardModal("confirm_dialog");
              } else {
                console.log("call api linking account...");
              }
            }}
          />
          <Button
            title="No"
            className="cursor-pointer"
            type="button"
            backgroundColor="#E32526"
            textColor="#fff"
            size="small"
            onClick={() => handleCloseCardModal("confirm_dialog")}
          />
        </div>
      </div>
    </>
  );
}
