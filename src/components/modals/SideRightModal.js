/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom";
import Slide from "@mui/material/Slide";
import styled from "styled-components";

const portatRoot = document.getElementById("portal-root");

const SideRightModal = ({ children, isOpen, bgColor, minWidth, modalWidth = "600px", modalHeight = "100vh" }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <Background>
      <Slide in={isOpen ?? false} direction="left">
        <div
          className={`${bgColor ? "bg-pink" : "bg-white"} max-h-screen overflow-y-auto overflow-hidden`}
          style={{ minWidth: minWidth, width: modalWidth, height: modalHeight }}
        >
          {children}
        </div>
      </Slide>
    </Background>,
    portatRoot
  );
};

export default SideRightModal;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  z-index: 9999;
  justify-content: end;
`;
