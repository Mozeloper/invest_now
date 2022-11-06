import React from "react";
import closeBtn from "../../../../../assets/icons/close_btn.svg";
import Text from "../../../../../components/Typography/Typography";
import kemi_manager from "../../../../../assets/images/kemi_manager.svg";
import relationship_manager_phone from "../../../../../assets/images/relationship_manager_phone.svg";
import relationship_manager_mail from "../../../../../assets/images/relationship_manager_mail.svg";
import relationship_manager_chat from "../../../../../assets/images/relationship_manager_chat.svg";

export default function CustomerManager({ handleCloseModals }) {
  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseModals("relationship_manager")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <div className="w-full flex flex-col gap-2 mt-6">
        <Text variant="h2" weight="bold">
          Contact Relationship Manager
        </Text>
        <Text variant="h4" weight="normal">
          Your Relationship manager is:
        </Text>
      </div>
      <div className="w-full flex gap-2 mt-6">
        <img src={kemi_manager} alt="img" className="w-[70px] h-[70px] rounded-full" />
        <div className="flex flex-col gap-1">
          <Text variant="h3" weight="bold">
            Oluwakemi Adechi
          </Text>
          <Text variant="h4" weight="normal">
            Region: Lagos
          </Text>
        </div>
      </div>
      <div className="w-full flex gap-2 justify-between mt-8">
        <a href="https://www.instagram.com/unitedcapitalplc" target="_blank" rel="noreferrer">
          <img src={relationship_manager_phone} alt="img" className="w-[140px] cursor-pointer h-[80px]" />
        </a>
        <a
          href="mailto:UnitedCustomerService@unitedcapitalplcgroup.com?subject = Feedback&body = Message"
          target="_blank"
          rel="noreferrer"
        >
          <img src={relationship_manager_mail} alt="img" className="w-[140px] cursor-pointer h-[80px]" />
        </a>
        <a href="https://wa.me/08168282396" target="_blank" rel="noreferrer">
          <img src={relationship_manager_chat} alt="img" className="w-[140px] cursor-pointer h-[80px]" />
        </a>
      </div>
    </>
  );
}
