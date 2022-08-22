/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Logosmall from "../../../../assets/icons/logo.svg";
import ProfileImg from "../../../../assets/icons/profile_img.svg";
import Dashboard from "../../../../assets/icons/dashboard.svg";
import Portfolio from "../../../../assets/icons/portfolio.svg";
import Products from "../../../../assets/icons/products.svg";
import Transactions from "../../../../assets/icons/transactions.svg";
import Loans from "../../../../assets/icons/loans.svg";
import Trading from "../../../../assets/icons/live_trading.svg";
import Reports from "../../../../assets/icons/reports.svg";
import Settings from "../../../../assets/icons/settings.svg";
import embassy from "../../../../assets/icons/embassy_statement.svg";
import contact from "../../../../assets/icons/contact.svg";
import logout from "../../../../assets/icons/logout.svg";
import Text from "../../../../components/Typography/Typography";
import { resetInitialState } from "../../../../store/slices/authSlices";
import MessageModal from "../../../../components/modals/MessageModal";
import ProfilePicSetup from "./other/profilePicSetup";
import { handleCustomerDetails } from "../../../../store/slices/dashboardSlice";

export default function SideBar() {
  const userDetails = useSelector((state) => state?.authReducer.authedUser);
  const dashboardReducer = useSelector((state) => state.dashboardReducer);
  const firstName = userDetails?.data?.customer?.firstname;
  const lastName = userDetails?.data?.customer?.lastname;
  const customerPic = dashboardReducer?.customerDetails?.payload?.data?.data?.profile_pic;
  const tierStatus = dashboardReducer?.customerDetails?.payload?.data?.data?.tier_status;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState({
    upload_profile_pic: false,
  });

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        try {
          dispatch(handleCustomerDetails());
        } catch (error) {
          console.log(error);
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, [dispatch]);

  const handleOpenModals = (type) => {
    switch (type) {
      case "upload_profile_pic":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      default:
        break;
    }
  };

  const handleCloseModals = (type) => {
    switch (type) {
      case "upload_profile_pic":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      default:
        break;
    }
  };

  const SideBarList = [
    {
      title: "Dashboard",
      img: Dashboard,
      path: "/dashboard",
    },
    {
      title: "Portfolio",
      img: Portfolio,
      path: "/portfolio",
    },
    {
      title: "Products",
      img: Products,
      path: "/products/all",
    },
    {
      title: "Transactions",
      img: Transactions,
      path: "/transactions",
    },
    {
      title: "Loans",
      img: Loans,
      path: "/loans",
    },
    {
      title: "Reports",
      img: Reports,
      path: "/reports",
    },
    {
      title: "Settings",
      img: Settings,
      path: "/settings/accounts",
    },
  ];

  const handlelogout = () => {
    dispatch(resetInitialState());
    localStorage.removeItem("access_token");
    navigate("/login");
  };
  return (
    <>
      <div className="w-full overflow-y-auto overflow-hidden no-scrollbar h-screen p-3 bg-BACKGROUND_WHITE">
        <div className="flex justify-center my-4">
          <img src={Logosmall} alt="logo" className="min-w-[100px] max-w-[150px]" />
        </div>
        <div
          onClick={() => handleOpenModals("upload_profile_pic")}
          className="flex gap-2 cursor-pointer bg-[#F7F7F8] mb-5 p-3 rounded-md"
        >
          <img
            src={customerPic !== null ? customerPic : ProfileImg}
            alt="logo"
            className="lg:h-[52px] lg:w-[52px] h-[40px] w-[40px] rounded-full"
          />
          <div className="flex flex-col gap-1">
            <Text color="text-[#465174]" variant="h4" format="whitespace-nowrap font-bold">
              {firstName} {lastName}
            </Text>
            <Text color="text-red" variant="body" format="whitespace-nowrap font-bold">
              {tierStatus?.replace("_", " ")}
            </Text>
          </div>
        </div>
        <div className="w-full">
          <div className="border-b border-[#BCBCBC] w-full">
            <Text variant="h4">Menu</Text>
          </div>
          <div className="w-full mt-4">
            {SideBarList.map((list, index) => {
              return (
                <NavLink
                  key={index}
                  to={list.path}
                  className={({ isActive }) => (isActive ? "bg-[#FFE5E5]" : "")}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "7px",
                    borderRadius: "8px",
                    display: "flex",
                    gap: "1rem",
                    fontSize: "",
                  }}
                >
                  <img src={list.img} alt="dashboard_icon" />
                  <Text variant="body">{list.title}</Text>
                </NavLink>
              );
            })}
            <div className="w-full mb-6 mt-[10px]">
              <a
                href="https://trade.investnow.ng"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <img src={Trading} alt="dashboard_icon" />
                <Text format="whitespace-nowrap" variant="body">
                  Live Trading
                </Text>
              </a>
            </div>
          </div>
          <div className="border-b border-[#BCBCBC] w-full m-4"></div>
          <div className="w-full">
            <NavLink
              to="/request_embassy_statement"
              className={({ isActive }) => (isActive ? "bg-[#FFE5E5]" : "")}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                display: "flex",
                gap: "1rem",
                fontSize: "",
              }}
            >
              <img src={embassy} alt="dashboard_icon" />
              <Text format="whitespace-nowrap" variant="body">
                {""}
                Request embassy Statement
              </Text>
            </NavLink>
            <NavLink
              to="/contact_relationship_manager"
              className={({ isActive }) => (isActive ? "bg-[#FFE5E5]" : "")}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "7px",
                borderRadius: "8px",
                display: "flex",
                gap: "1rem",
              }}
            >
              <img src={contact} alt="dashboard_icon" />
              <Text variant="body"> Contact Relationship manager</Text>
            </NavLink>
          </div>
          <div
            onClick={() => handlelogout()}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "8px",
              borderRadius: "8px",
              display: "flex",
              cursor: "pointer",
              gap: "1rem",
              fontSize: "",
            }}
          >
            <img src={logout} alt="dashboard_icon" />
            <Text variant="h4" color="text-[#E32526]">
              Log out
            </Text>
          </div>
        </div>
      </div>
      <MessageModal bgColor={true} modalHeight="625px" isOpen={openModal?.upload_profile_pic}>
        <ProfilePicSetup handleCloseModals={handleCloseModals} />
      </MessageModal>
    </>
  );
}
