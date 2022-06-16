import styled from "styled-components";

export const InputStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 17px 24px;
  border-radius: 15px;
  margin-bottom: 16px;

  input {
    flex: 1;
    margin-left: 10px;
    font-weight: 600;
    font-size: 16px;

    &::placeholder {
      color: #777777;
    }
  }
`;
