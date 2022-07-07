import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Logosmall from "../../../../assets/icons/logo.svg";
import ProfileImg from "../../../../assets/icons/profile_img.svg";
import dashboard from "../../../../assets/icons/dashboard.svg";
import portfolio from "../../../../assets/icons/portfolio.svg";
import products from "../../../../assets/icons/products.svg";
import transactions from "../../../../assets/icons/transactions.svg";
import loans from "../../../../assets/icons/loans.svg";
import trading from "../../../../assets/icons/live_trading.svg";
import reports from "../../../../assets/icons/reports.svg";
import Settings from "../../../../assets/icons/settings.svg";
import embassy from "../../../../assets/icons/embassy_statement.svg";
import contact from "../../../../assets/icons/contact.svg";
import logout from "../../../../assets/icons/logout.svg";
import Text from "../../../../components/Typography/Typography";
import { resetInitialState } from "../../../../store/slices/authSlices";

export default function SideBar() {
  const userDetails = useSelector((state) => state?.authReducer.authedUser);
  const firstName = userDetails?.data?.customer?.firstname;
  const lastName = userDetails?.data?.customer?.lastname;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SideBarList = [
    {
      title: "Dashboard",
      img: dashboard,
      path: "/dashboard",
    },
    {
      title: "Portfolio",
      img: portfolio,
      path: "/portfolio",
    },
    {
      title: "Products",
      img: products,
      path: "/products",
    },
    {
      title: "Transactions",
      img: transactions,
      path: "/transactions",
    },
    {
      title: "Loans",
      img: loans,
      path: "/loans",
    },
    {
      title: "Live Trading",
      img: trading,
      path: "/live_trading",
    },
    {
      title: "Reports",
      img: reports,
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
    <div className="w-full overflow-y-auto overflow-hidden no-scrollbar h-screen p-3 bg-BACKGROUND_WHITE">
      <div className="flex justify-center my-4">
        <img src={Logosmall} alt="logo" className="min-w-[100px] max-w-[150px]" />
      </div>
      <div
        onClick={() => navigate("/settings/accounts")}
        className="flex gap-2 cursor-pointer bg-[#F7F7F8] mb-5 p-3 rounded-md"
      >
        <img src={ProfileImg} alt="logo" className="lg:h-[52px] lg:w-[52px] h-[40px] w-[40px]" />
        <Text color="text-[#465174]" variant="h4" format="whitespace-nowrap mt-3 font-bold">
          {firstName} {lastName}
        </Text>
      </div>
      <div className="w-full">
        <div className="border-b border-[#BCBCBC] w-full">
          <Text variant="h4">Menu</Text>
        </div>
        <div className="w-full mt-4 mb-6">
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
            to="/contact"
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
  );
}
