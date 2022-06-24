import React from "react";
import ButtonArrowBack from "../../components/atomics/ButtonArrowBack.comp";
import logo from "../../assets/svg/logo-app.svg";
import {
  LayoutHomeWrapper,
  HeaderItems,
  FooterItems,
} from "../../styles/layouts/home.style";

const LayoutHome = (props) => {
  const { children } = props;

  return (
    <LayoutHomeWrapper>
      <HeaderItems>
        <ButtonArrowBack to="/lectronic-shop" />
        <img src={logo} alt="logo" width={"40vw"} />
      </HeaderItems>
      {children}
      <FooterItems />
    </LayoutHomeWrapper>
  );
};

export default LayoutHome;
