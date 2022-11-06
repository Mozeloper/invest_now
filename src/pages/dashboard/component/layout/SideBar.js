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
import Statement from "../../../../assets/icons/reports.svg";
import Settings from "../../../../assets/icons/settings.svg";
import embassy from "../../../../assets/icons/embassy_statement.svg";
import contact from "../../../../assets/icons/contact.svg";
import logout from "../../../../assets/icons/logout.svg";
import Text from "../../../../components/Typography/Typography";
import { resetInitialState } from "../../../../store/slices/authSlices";
import MessageModal from "../../../../components/modals/MessageModal";
import ProfilePicSetup from "./other/profilePicSetup";
import { handleCustomerDetails, handleDeleteProfilePicture } from "../../../../store/slices/dashboardSlice";
import { reintializeState } from "../../../../store/slices/buyProductSlice";
import Button from "../../../../components/Button";
import CustomerManager from "./other/customerManager";
import EmbassyStatement from "./other/embassyStatement";
import ViewEmbassy from "./other/viewEmbassy";
import RequestEmbassy from "./other/requestEmbassy";

export default function SideBar() {
  const userDetails = useSelector((state) => state?.authReducer.authedUser);
  const dashboardReducer = useSelector((state) => state.dashboardReducer);
  const firstName = userDetails?.data?.customer?.firstname;
  const lastName = userDetails?.data?.customer?.lastname;
  const customerPic = dashboardReducer?.customerDetails?.payload?.data?.data?.profile_pic ?? "";
  const tierStatus = dashboardReducer?.customerDetails?.payload?.data?.data?.tier_status;
  const deleteProfilePicIsLoading = dashboardReducer?.deleteProfilePicIsLoading;
  const customerIsLoading = dashboardReducer?.customerIsLoading;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState({
    upload_profile_pic: false,
    delete_profile_pic: false,
    relationship_manager: false,
    embassy_statement: false,
    view_embassy_statement: false,
    request_embassy_statement: false,
    message: null,
  });

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        dispatch(handleCustomerDetails());
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
      case "relationship_manager":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "embassy_statement":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "view_embassy_statement":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "request_embassy_statement":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "delete_profile_pic":
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
      case "relationship_manager":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "embassy_statement":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "view_embassy_statement":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "request_embassy_statement":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "delete_profile_pic":
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
      title: "Statements",
      img: Statement,
      path: "/statements",
    },
    {
      title: "Settings",
      img: Settings,
      path: "/settings/accounts",
    },
  ];

  const handlelogout = () => {
    dispatch(resetInitialState());
    dispatch(reintializeState());
    localStorage.clear();
    navigate("/login");
  };

  const handleDeleteProfilePic = async () => {
    await dispatch(handleDeleteProfilePicture())
      .unwrap()
      .then((res) => {
        if (res?.data?.success) {
          setOpenModal((prev) => ({
            ...prev,
            message: res?.data?.message,
          }));
          setTimeout(() => {
            setOpenModal((prev) => ({
              ...prev,
              message: null,
            }));
            handleCloseModals("delete_profile_pic");
            dispatch(handleCustomerDetails());
          }, 2000);
        }
      });
  };

  return (
    <>
      <div className="w-full overflow-y-auto overflow-hidden h-screen p-3 bg-BACKGROUND_WHITE">
        <div className="flex justify-center my-4">
          <img loading="lazy" src={Logosmall} alt="logo" className="min-w-[100px] max-w-[150px]" />
        </div>
        <div className="flex gap-2 bg-[#F7F7F8] mb-5 p-3 rounded-md">
          {customerIsLoading && (
            <div className="flex justify-center items-center">
              <Text variant="body" format="font-bold cursor-pointer">
                Loading...
              </Text>
            </div>
          )}
          {!!!customerIsLoading && (
            <>
              <div className="flex flex-col gap-2 items-center">
                <img
                  onClick={() => handleOpenModals("upload_profile_pic")}
                  src={customerPic !== "" ? customerPic : ProfileImg}
                  alt="logo"
                  loading="lazy"
                  className="lg:h-[52px] lg:w-[52px] h-[40px] w-[40px] rounded-full cursor-pointer"
                />
                {customerPic !== "" && (
                  <Text
                    onClick={() => handleOpenModals("delete_profile_pic")}
                    color="text-primary"
                    variant="body"
                    format="font-bold cursor-pointer"
                  >
                    Delete
                  </Text>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <Text color="text-[#465174]" variant="h4" format="font-bold">
                  {firstName} {lastName}
                </Text>
                <Text color="text-red" variant="body" format="whitespace-nowrap font-bold">
                  {tierStatus?.replace("_", " ")}
                </Text>
              </div>
            </>
          )}
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
                  <img loading="lazy" src={list.img} alt="dashboard_icon" />
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
            <div
              onClick={() => handleOpenModals("embassy_statement")}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                display: "flex",
                gap: "1rem",
                cursor: "pointer",
              }}
            >
              <img loading="lazy" src={embassy} alt="dashboard_icon" />
              <Text variant="body">Request embassy Statement</Text>
            </div>
            <div
              onClick={() => handleOpenModals("relationship_manager")}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "7px",
                borderRadius: "8px",
                display: "flex",
                gap: "1rem",
                cursor: "pointer",
              }}
            >
              <img src={contact} alt="dashboard_icon" />
              <Text variant="body"> Contact Relationship manager</Text>
            </div>
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
            <img loading="lazy" src={logout} alt="dashboard_icon" />
            <Text variant="h4" color="text-[#E32526]">
              Log out
            </Text>
          </div>
        </div>
      </div>
      <MessageModal bgColor={true} modalHeight="450px" isOpen={openModal?.upload_profile_pic}>
        <ProfilePicSetup handleCloseModals={handleCloseModals} />
      </MessageModal>
      <MessageModal modalHeight="450px" isOpen={openModal?.relationship_manager}>
        <CustomerManager handleCloseModals={handleCloseModals} />
      </MessageModal>
      <MessageModal modalWidth="600px" modalHeight="450px" isOpen={openModal?.embassy_statement}>
        <EmbassyStatement handleCloseModals={handleCloseModals} handleOpenModals={handleOpenModals} />
      </MessageModal>
      <MessageModal modalHeight="95vh" isOpen={openModal?.view_embassy_statement}>
        <ViewEmbassy handleCloseModals={handleCloseModals} handleOpenModals={handleOpenModals} />
      </MessageModal>
      <MessageModal modalHeight="100vh" isOpen={openModal?.request_embassy_statement}>
        <RequestEmbassy handleCloseModals={handleCloseModals} handleOpenModals={handleOpenModals} />
      </MessageModal>
      <MessageModal bgColor={true} modalHeight="200px" modalWidth="300px" isOpen={openModal?.delete_profile_pic}>
        <div className="flex flex-col justify-center items-center w-full">
          <Text format="text-center mt-3" variant="h4" color="text-[#465174]" weight="bold">
            Delete Profile Picture
          </Text>
          <div className="flex gap-3 mt-6 w-full">
            <Button
              onClick={() => handleDeleteProfilePic()}
              title="Delete"
              className="cursor-pointer w-full"
              type="button"
              isLoading={deleteProfilePicIsLoading}
            />
            <Button
              onClick={() => handleCloseModals("delete_profile_pic")}
              title="Close"
              className="cursor-pointer w-full border border-primary"
              type="button"
              backgroundColor="none"
              textColor="#E32526"
            />
          </div>
          {openModal?.message !== null && (
            <div className="w-full text-center mt-2">
              <Text variant="h4" color="text-green-600">
                {openModal?.message}
              </Text>
            </div>
          )}
        </div>
      </MessageModal>
    </>
  );
}
