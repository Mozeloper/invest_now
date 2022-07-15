import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Text from "../../../components/Typography/Typography";

export default function Products() {
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
    <div data-aos="fade-up" data-aos-duration="2000">
      <Text variant="h1" weight="bold">
        Products
      </Text>
      <div className="md:w-[65%] w-full flex items-center overflow-x-auto no-scrollbar lg:gap-16 md:gap-10 gap-6 mt-4 px-[3%] bg-pink h-[68px]">
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
        <Outlet />
      </div>
    </div>
  );
}
