import React from "react";
import Text from "../../../../components/Typography/Typography";

export default function ContactUs() {
  return (
    <>
      <div className="w-full p-4 h-full bg-secondary">
        <Text weight="bold" variant="h3" color="text-headerColor" format="mb-4">
          CONTACT US
        </Text>
        <div className="w-full px-[2%] mb-5">
          <div className="flex items-center gap-2">
            <div className="w-[8px] h-[8px] rounded-full bg-headerColor"></div>
            <Text weight="normal" variant="h4" color="text-headerColor">
              Phone Number: 07000468378, 01461130, 01461131
            </Text>
          </div>
          <div className="border-b border-[#BCBCBC] w-full my-5"></div>
          <div className="flex items-center gap-2">
            <div className="w-[8px] h-[8px] rounded-full bg-headerColor"></div>
            <a
              className="font-normal text-headerColor text-base"
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/08168282396"
            >
              Whatsapp: 08168282396
            </a>
          </div>
          <div className="border-b border-[#BCBCBC] w-full my-5"></div>
          <div className="flex items-center gap-2">
            <div className="w-[8px] h-[8px] rounded-full bg-headerColor"></div>
            <a
              className="font-normal text-headerColor text-base"
              target="_blank"
              rel="noreferrer"
              href="mailto:UnitedCustomerService@unitedcapitalplcgroup.com?subject = Feedback&body = Message"
            >
              Email: CustomerService@unitedcapitalplcgroup.com
            </a>
          </div>
          <div className="border-b border-[#BCBCBC] w-full my-5"></div>
          <div className="flex items-center gap-2">
            <div className="w-[8px] h-[8px] rounded-full bg-headerColor"></div>
            <a
              className="font-normal text-headerColor text-base"
              href="https://www.instagram.com/unitedcapitalplc"
              target="_blank"
              rel="noreferrer"
            >
              Instagram: @unitedcapitalplc
            </a>
          </div>
          <div className="border-b border-[#BCBCBC] w-full my-5"></div>
          <div className="flex items-center gap-2">
            <div className="w-[8px] h-[8px] rounded-full bg-headerColor"></div>

            <a
              className="font-normal text-headerColor text-base"
              href="https://twitter.com/UnitedCap"
              target="_blank"
              rel="noreferrer"
            >
              Twitter: @UnitedCap
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
