import React from "react";
import { ArrowBack } from "../../styles/layouts/auth.styles";
import { IoIosArrowBack } from "react-icons/io";

const ButtonArrowBack = (props) => {
  const { to } = props;

  return (
    <ArrowBack to={to}>
      <IoIosArrowBack className="stroke-primary" />
    </ArrowBack>
  );
};

export default ButtonArrowBack;
