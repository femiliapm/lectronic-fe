import React from "react";
import { FormLoginStyled } from "../../styles/components/formLogin.style";

const FormLogin = (props) => {
  const { title, desc, children } = props;
  return (
    <FormLoginStyled>
      <div className="title">{title}</div>
      <div className="desc black-light">{desc}</div>
      {children}
    </FormLoginStyled>
  );
};

export default FormLogin;
