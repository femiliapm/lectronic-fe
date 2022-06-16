import React from "react";
import { InputStyled } from "../../styles/components/input.style";

const Input = (props) => {
  const { icon, type, placeholder } = props;

  return (
    <InputStyled className="border-black-light">
      {icon}
      <input type={type} placeholder={placeholder} />
    </InputStyled>
  );
};

export default Input;
