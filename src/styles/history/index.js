import styled from "styled-components";

export const SearchHistory = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: -40px;
`;

export const MainHistory = styled.div`
  padding: 0 8vw;
  margin: 3vw 0 4vw;
  position: relative;

  h1 {
    font-weight: 800;
    font-size: 54px;
  }
`;

export const LabelDate = styled.p`
  margin: 3vw 0 1vw;
`;

export const CardHistory = styled.div`
  box-shadow: 0px 0px 60px rgba(45, 45, 45, 0.1);
  border-radius: 20px;
  padding: 3vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  .right {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: flex-end;

    p {
      font-weight: 600;
      font-size: 18px;
      margin: 0 2rem 1rem;

      span {
        font-weight: 700;
        font-size: 36px;
      }
    }

    .btn-group {
      display: flex;
    }
  }

  .left {
    display: flex;
    align-items: center;

    .detail-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      .name {
        margin: 1rem 0 0.5rem;
        font-weight: 700;
        font-size: 18px;
      }
    }

    .img-item {
      padding: 1vw;
      background: #f5f9fa;
      border-radius: 10px;
      margin-right: 1rem;
    }
  }
`;
