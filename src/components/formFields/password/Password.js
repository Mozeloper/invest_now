import React from "react";
import Input from "../inputs";
import { ShowPasswordButton, Wrapper } from "./style";
import { LeftLabel, RightLabel } from "../elements";
import eye from "../../../assets/icons/eye-password-show.svg";
import eyeStroke from "../../../assets/icons/eye-stroke.svg";

const PasswordInput = ({ type, onShowPasswordClick, rightlabel, leftlabel, placeholder, name, ...props }) => {
  return (
    <Wrapper>
      <Input type={type} name={name} placeholder={placeholder} {...props} />
      <ShowPasswordButton onClick={onShowPasswordClick}>
        {type === "password" ? <img src={eye} alt="icon" /> : <img src={eyeStroke} alt="stroke-eye" />}
      </ShowPasswordButton>
      {rightlabel && <RightLabel>{rightlabel}</RightLabel>}
      {leftlabel && <LeftLabel>{leftlabel}</LeftLabel>}
    </Wrapper>
  );
};

export default PasswordInput;
