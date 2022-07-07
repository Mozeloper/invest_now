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
            <Text weight="normal" variant="h4" color="text-headerColor">
              Whatsapp: 08168282396
            </Text>
          </div>
          <div className="border-b border-[#BCBCBC] w-full my-5"></div>
          <div className="flex items-center gap-2">
            <div className="w-[8px] h-[8px] rounded-full bg-headerColor"></div>
            <Text weight="normal" variant="h4" color="text-headerColor">
              Email: CustomerService@unitedcapitalplcgroup.com
            </Text>
          </div>
          <div className="border-b border-[#BCBCBC] w-full my-5"></div>
          <div className="flex items-center gap-2">
            <div className="w-[8px] h-[8px] rounded-full bg-headerColor"></div>
            <Text weight="normal" variant="h4" color="text-headerColor">
              Instagram: @unitedcapitalplc
            </Text>
          </div>
          <div className="border-b border-[#BCBCBC] w-full my-5"></div>
          <div className="flex items-center gap-2">
            <div className="w-[8px] h-[8px] rounded-full bg-headerColor"></div>
            <Text weight="normal" variant="h4" color="text-headerColor">
              Twitter: @UnitedCap
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
