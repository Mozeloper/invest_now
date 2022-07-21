/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Text from "../../../components/Typography/Typography";
import ProfileImg from "../../../assets/icons/profile_img.svg";
import logout from "../../../assets/icons/logout.svg";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { resetInitialState } from "../../../store/slices/authSlices";

export default function Settings() {
  const userDetails = useSelector((state) => state?.authReducer.authedUser);
  const dashboardReducer = useSelector((state) => state?.dashboardReducer);
  const customerPic = dashboardReducer?.customerDetails?.payload?.data?.data?.profile_pic;
  const firstName = userDetails?.data?.customer?.firstname;
  const lastName = userDetails?.data?.customer?.lastname;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menuList = [
    {
      title: "Account",
      path: "accounts",
    },
    {
      title: "Security",
      path: "security",
    },
    {
      title: "Frequently Asked Questions",
      path: "faq",
    },
    {
      title: "Contact Us",
      path: "contact_us",
    },
  ];

  const handlelogout = () => {
    dispatch(resetInitialState());
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <Text variant="h1" weight="bold">
        Profile Settings
      </Text>
      <div className="md:w-[90%] w-full max-h-[100px] flex justify-between mt-3">
        <div className="flex gap-2 mb-5 p-3 rounded-md">
          <img
            src={customerPic !== null ? customerPic : ProfileImg}
            alt="logo"
            className="lg:h-[96px] lg:w-[96px] h-[80px] w-[80px] rounded-full"
          />
          <Text color="text-[#465174]" variant="h3" format="whitespace-nowrap mt-3 font-bold">
            {firstName} {lastName}
          </Text>
        </div>
        <div className="flex flex-col whitespace-nowrap justify-end">
          <div
            className="h-[40px] cursor-pointer px-4 py-2 flex gap-2 border border-[#E32526]"
            onClick={() => handlelogout()}
          >
            <img src={logout} alt="dashboard_icon" className="w-[18px] h-[20px]" />
            <Text variant="h4" weight="bold" color="text-[#E32526]">
              Log out
            </Text>
          </div>
        </div>
      </div>
      <div className="border-b border-[#BCBCBC] w-full m-4"></div>
      <div className="wrapper w-full">
        <div className="w-full flex gap-3 whitespace-nowrap overflow-x-auto overflow-hidden no-scrollbar my-4">
          {menuList.map((list, index) => {
            return (
              <NavLink
                key={index}
                to={list.path}
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary text-lg text-white px-4 py-2 rounded-lg"
                    : "bg-none text-[#65666A] px-4 py-2 text-lg"
                }
              >
                {list?.title}
              </NavLink>
            );
          })}
        </div>
        <div className="md:w-[90%] w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
