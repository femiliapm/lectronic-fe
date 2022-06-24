import React from "react";
import { ButtonStyled } from "../../styles/components/button.style";

const Button = (props) => {
  const { text = "text", outline, width, margin, onClick } = props;

  return (
    <ButtonStyled
      className={outline ? `border-primary primary` : `bg-primary`}
      style={{ width: width, margin: margin }}
      onClick={onClick}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
