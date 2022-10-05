/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom";
import Slide from "@mui/material/Slide";
import styled from "styled-components";
import close from "../../assets/icons/close_btn.svg";

const portatRoot = document.getElementById("portal-root");

const SideLeftModal = ({
  children,
  isOpen,
  bgColor,
  setsideBar,
  minWidth,
  modalWidth = "600px",
  modalHeight = "100vh",
}) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <Background>
      <Slide in={isOpen ?? false} direction="right">
        <div
          className={`${bgColor ? "bg-pink" : "bg-white"} lg:hidden block max-h-screen overflow-y-auto overflow-hidden`}
          style={{ minWidth: minWidth, width: modalWidth, height: modalHeight }}
        >
          {children}
        </div>
      </Slide>
      <img
        onClick={setsideBar}
        src={close}
        alt="close_btn"
        className="cursor-pointer w-[40px] h-[40px] lg:hidden block"
      />
    </Background>,
    portatRoot
  );
};

export default SideLeftModal;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  z-index: 9999;
  justify-content: start;
`;
