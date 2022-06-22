import styled from "styled-components";
import bgHeader from "../../assets/svg/bg-header.svg";

export const LayoutHomeWrapper = styled.div`
  position: relative;
`;

export const HeaderItems = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    props.v2
      ? `padding: 37px 48px 3vw;`
      : `
    padding: 37px 48px 10vw;
    background-image: url(${bgHeader});
`}
`;

export const FooterItems = styled.footer`
  padding: 37px 48px 10vw;
  background-image: url(${bgHeader});
`;
