import styled from "styled-components";

export const CardStatus = styled.div`
  margin: 0 8vw;
  padding: 4vw 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 60px rgba(45, 45, 45, 0.1);
  border-radius: 20px;
  position: relative;
  top: -40px;
  background: white;

  .title {
    margin: 1rem 0;
    font-weight: 700;
    font-size: 36px;
  }

  p {
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: 18px;
    width: 24vw;
    text-align: center;
  }
`;

export const SectionRecommendation = styled.section`
  padding: 0 8vw;

  .card-group {
    display: flex;
    justify-content: space-between;
  }

  .title {
    margin: 1rem 0;
    font-weight: 700;
    font-size: 36px;
  }
`;
