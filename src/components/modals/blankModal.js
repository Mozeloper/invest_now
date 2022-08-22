/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom";
import Slide from "@mui/material/Slide";
import styled from "styled-components";

const portatRoot = document.getElementById("portal-root");

const BlankModal = ({ children, isOpen }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <Background>
      <Slide in={isOpen ?? false}>
        <div>{children}</div>
      </Slide>
    </Background>,
    portatRoot
  );
};

export default BlankModal;

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
