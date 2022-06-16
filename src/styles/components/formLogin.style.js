import styled from "styled-components";

export const FormLoginStyled = styled.div`
  width: 30vw;

  .title {
    font-weight: 700;
    font-size: 3vw;
  }

  .desc {
    font-weight: 600;
    font-size: 1.5vw;
    margin-bottom: 16px;
  }

  form {
    .register-group-btn {
      display: flex;
      flex-direction: row-reverse;
    }

    .login-group-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        font-weight: 600;
        font-size: 1.2vw;
      }
    }
  }
`;
