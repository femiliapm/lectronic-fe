import React from "react";
import { ButtonStyled } from "../../styles/components/button.style";

const Button = (props) => {
  const { text = "text", outline, width } = props;

  return (
    <ButtonStyled
      className={outline ? `border-primary primary` : `bg-primary`}
      style={{ width: width }}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
