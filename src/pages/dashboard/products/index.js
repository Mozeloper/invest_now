import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import MessageModal from "../../../components/modals/MessageModal";
import Text from "../../../components/Typography/Typography";

export default function Products() {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const productsLink = [
    {
      id: 1,
      name: "All",
      path: "/products/all",
    },
    {
      id: 2,
      name: "Mutual Funds",
      path: "/products/mutual_funds",
    },
    {
      id: 3,
      name: "Trust",
      path: "/products/trust",
    },
    {
      id: 4,
      name: "Securities",
      path: "/products/securities",
    },
  ];

  return (
    <>
      <MessageModal modalHeight="300px" modalWidth="350px" isOpen={showModal} bgColor={true}>
        <div className="flex flex-col justify-center h-full items-center">
          <Text variant="h2" weight="bold">
            Kyc Not Completed
          </Text>
          <div className="flex gap-2 w-full my-6">
            <Button
              onClick={() => navigate("/settings/accounts")}
              title="Update KYC"
              textColor="#fff"
              className="px-3 font-bold outline-none self-start"
            />
            <Button
              onClick={() => setShowModal(!showModal)}
              title="Cancel"
              textColor="#E32526"
              style={{ border: "1px solid #E32526" }}
              backgroundColor="none"
              className="px-3 font-bold outline-none self-start"
            />
          </div>
        </div>
      </MessageModal>
      <div data-aos="fade-up" data-aos-duration="2000">
        <Text variant="h1" weight="bold">
          Products
        </Text>
        <div className="lg:w-[65%] md:w-full w-full flex items-center overflow-x-auto no-scrollbar lg:gap-16 md:gap-10 gap-6 mt-4 px-[3%] bg-[#FFF8F8] h-[68px]">
          {productsLink.map((list) => {
            return (
              <NavLink
                key={list.id}
                to={list.path}
                className={({ isActive }) =>
                  isActive
                    ? "bg-BACKGROUND_RED px-4 py-2 rounded-lg text-base whitespace-nowrap text-white font-medium"
                    : "p-4 text-[#000000] font-medium text-base whitespace-nowrap"
                }
              >
                {list.name}
              </NavLink>
            );
          })}
        </div>
        <div className="mt-4">
          <Outlet context={{ setShowModal }} />
        </div>
      </div>
    </>
  );
}
