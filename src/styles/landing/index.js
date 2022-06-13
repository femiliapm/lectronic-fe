import styled from "styled-components";
import { Link } from "react-router-dom";

export const LayoutLanding = styled.div`
  width: 100%;

  .first {
    background-color: rgba(0, 32, 178, 0.05);
  }

  .first,
  .second {
    padding: 0 8%;
  }
`;

export const NavBarLanding = styled.nav`
  padding: 35px 0;
  display: flex;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 22px;
    font-weight: 800;
    margin-left: 10px;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

export const ButtonLanding = styled(Link)`
  div {
    border-radius: 10px;
    padding: 13px 37px;
  }

  .sign-up,
  .shop-now {
    box-shadow: 5px 4px 50px rgba(3, 0, 173, 0.2);
  }

  .sign-up {
    font-weight: 700;
    margin-left: 164px;
  }

  .shop-now,
  .seller {
    font-weight: 600;
    margin-right: 18px;

    svg {
      margin-right: 8px;
    }
  }

  .sign-up,
  .shop-now,
  .seller {
    font-size: 16px;

    &:hover,
    &:active {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const MenuItemWrapper = styled.div`
  a {
    font-weight: 600;
    font-size: 18px;
    margin-left: 80px;
  }
`;

export const HeroWrapper = styled.div`
  padding: 140px 0;
  display: flex;
  justify-content: space-between;

  .left {
    width: 34%;
    margin-right: 2%;

    .title {
      font-weight: 800;
      font-size: 60px;
      margin-bottom: 24px;
    }

    .sub-title {
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 24px;
    }

    .cta-landing {
      display: flex;
    }
  }

  .right {
    flex: 1;
    position: relative;

    .img-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;

      .blur {
        position: absolute;
        top: -135px;
        right: 10px;
      }
    }

    .ballon {
      width: 181px;
      height: 63px;
      position: absolute;
      box-shadow: 6px 7px 60px rgba(153, 153, 153, 0.15);
      border-radius: 10px;
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 14px;
    }

    .one {
      top: 0;
      left: 130px;
      padding-left: 10px;
    }

    .two {
      top: 20px;
      right: 90px;
      padding-left: 18px;
    }

    .three {
      bottom: 125px;
      right: 50px;
      padding-left: 31px;
    }
  }
`;

export const SectionWrapper = styled.section`
  padding-top: 160px !important;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      padding: 11px 14px;
      border-radius: 20px;
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 24px;
      background-color: rgba(0, 32, 178, 0.05);
    }

    h1 {
      font-weight: 800;
      font-size: 60px;
      text-align: center;
      margin-bottom: 60px;
    }
  }
`;

export const CardGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 27%;
  background-color: rgba(255, 255, 255, 1);
  padding: 48px 33px;
  border-radius: 20px;

  .icon {
    width: fit-content;
    height: fit-content;
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 100%;
    background-color: rgba(0, 32, 178, 0.05);

    svg {
      width: 1.7rem;
      height: 1.4rem;
    }
  }

  .title {
    margin-bottom: 24px;
    font-weight: 800;
    font-size: 24px;
  }

  .description {
    font-weight: 600;
    font-size: 18px;
  }

  &:hover {
    background: #0020b2;
    box-shadow: 5px 4px 50px rgba(3, 0, 173, 0.2);

    .title,
    .description {
      color: white;
    }

    .icon {
      background-color: white;

      svg {
        stroke: #0020b2;
        stroke-width: 0.5px;
      }
    }
  }
`;

export const NavItem = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;

  .tab {
    button {
      font-weight: 600;
      font-size: 18px;
      margin-right: 67px;
    }
  }

  .search-bar {
    border-radius: 10px;

    input {
      border: none;
      font-weight: 600;
      font-size: 18px;
      padding: 16px 18px;

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: #415fe7;
      }
    }

    button {
      margin-right: 18px;
    }
  }
`;

export const CardItemGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CardItem = styled.div`
  width: 25%;
  background-color: yellow;
  margin: 0 25px 70px;
  box-shadow: 0px 0px 60px rgba(45, 45, 45, 0.1);
  border-radius: 20px;
`;
