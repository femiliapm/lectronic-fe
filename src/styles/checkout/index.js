import styled from "styled-components";

export const MainCheckout = styled.div`
  padding: 0 8vw;
  margin: 3vw 0;

  h1 {
    font-size: 60px;
    font-weight: 800;
    margin-bottom: 2.5vw;
  }
`;

export const CardAddress = styled.div`
  box-shadow: 0px 0px 60px rgba(45, 45, 45, 0.1);
  border-radius: 20px;
  margin-bottom: 1.5rem;
  padding: 3.5vw;

  h3 {
    font-weight: 800;
    font-size: 24px;
  }

  textarea {
    resize: none;
    width: 100%;
    padding: 20px;
    border-radius: 20px;
    height: 150px;
    margin: 1rem 0;
  }
`;
