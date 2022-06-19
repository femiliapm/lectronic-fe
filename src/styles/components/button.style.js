import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 11px 50px;
  border-radius: 15px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;

  &:hover,
  &:active {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;
