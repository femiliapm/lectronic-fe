import { Link } from "react-router-dom";
import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 140vh;
  justify-content: space-between;

  .layout-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 15px;

    .form-auth {
      display: flex;
      justify-content: center;
    }

    .create-link {
      text-align: center;
      font-weight: 600;
      font-size: 16px;
    }
  }

  .layout-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 15px;
    border-radius: 10px;
    background-image: url(${(props) => props.heroAuth});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;

    .logo-right {
      display: flex;
      flex-direction: row-reverse;
      margin: 16px;
    }

    .welcome {
      background: rgba(3, 0, 173, 0.2);
      backdrop-filter: blur(100px);
      border-radius: 15px;
      margin: 0 12vw 2vw;
      padding: 0 24px;

      .logo {
        padding-top: 16px;
      }

      .title {
        font-weight: 700;
        font-size: 34px;
        padding-top: 16px;
      }

      .desc {
        font-weight: 600;
        font-size: 14px;
        padding: 16px 0 20px;
      }
    }
  }
`;

export const ArrowBack = styled(Link)`
  padding: 14px 20px;
  background: rgba(3, 0, 173, 0.1);
  backdrop-filter: blur(100px);
  border-radius: 10px;
  width: fit-content;
`;
