import React from "react";
import ButtonArrowBack from "../../components/atomics/ButtonArrowBack.comp";
import {
  FooterItems,
  HeaderItems,
  LayoutHomeWrapper,
} from "../../styles/layouts/home.style";
import logo from "../../assets/svg/logo-app.svg";

const LayoutHome2 = (props) => {
  const { children } = props;

  return (
    <LayoutHomeWrapper>
      <HeaderItems v2>
        <ButtonArrowBack to="/lectronic-shop/explore" />
        <img src={logo} alt="logo" width={"40vw"} />
      </HeaderItems>
      {children}
      <FooterItems />
    </LayoutHomeWrapper>
  );
};

export default LayoutHome2;
