/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom";
import Slide from "@mui/material/Slide";
import styled from "styled-components";

const portatRoot = document.getElementById("portal-root");

const MessageModal = ({ children, isOpen, bgColor, minWidth, modalWidth = "500px", modalHeight = "450px" }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <Background>
      <Slide in={isOpen ?? false}>
        <div
          className={`${bgColor ? "bg-pink" : "bg-white"} p-10 max-h-screen overflow-y-auto overflow-hidden`}
          style={{ minWidth: minWidth, borderRadius: 10, width: modalWidth, height: modalHeight }}
        >
          {children}
        </div>
      </Slide>
    </Background>,
    portatRoot
  );
};

export default MessageModal;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  z-index: 9999;
  justify-content: center;
  align-items: center;
`;
