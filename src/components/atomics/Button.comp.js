import React from "react";
import { ButtonStyled } from "../../styles/components/button.style";

const Button = (props) => {
  const { text = "text" } = props;

  return <ButtonStyled className="bg-primary">{text}</ButtonStyled>;
};

export default Button;
