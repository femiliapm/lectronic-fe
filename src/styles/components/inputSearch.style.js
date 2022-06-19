import styled from "styled-components";

export const InputSearchStyled = styled.div`
  // padding: 20px;
  box-shadow: 0px 0px 60px rgba(45, 45, 45, 0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin: 0 10px;
  background-color: white;

  input {
    width: 40vw;
    padding: 26px;
    font-weight: 400;
    font-size: 20px;

    &::placeholder {
      color: rgba(119, 119, 119, 0.6);
    }
  }

  button {
    padding: 32px 34px;
    border-radius: 0 20px 20px 0;
  }
`;
