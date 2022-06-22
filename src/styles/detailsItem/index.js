import styled from "styled-components";

export const MainDetails = styled.div`
  display: flex;
  padding: 0 8%;
  justify-content: space-between;
  margin-bottom: 2rem;

  .left {
    margin-right: 2rem;
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const CardDetailImage = styled.div`
  border-radius: 20px;
  padding: 25vw 1.8vw 1.8vw;
  position: relative;
  width: 26vw;
  box-shadow: 0px 0px 60px rgba(45, 45, 45, 0.1);
  margin-bottom: 24px;

  .layer-bottom {
    display: flex;
    justify-content: space-between;

    .sub-img {
      box-shadow: 0px 0px 60px rgba(45, 45, 45, 0.1);
      border-radius: 20px;
      width: fit-content;
      padding: 8px;
    }
  }

  .layer-top {
    background-color: rgba(155, 192, 201, 0.1);
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 20px 20px 0 0;
    width: 100%;
    padding: 1.8vw 1.8vw 10vw;
  }

  .layer-img {
    position: absolute;
    top: 4.5vw;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const CardDetailProduct = styled.div`
  box-shadow: 0px 0px 60px rgba(45, 45, 45, 0.1);
  border-radius: 20px;
  padding: 24px;

  h3 {
    text-align: center;
    margin-bottom: 1rem;
    font-weight: 800;
    font-size: 24px;
  }

  .second-row,
  .third-row,
  .fourth-row,
  .fifth-row {
    display: flex;
  }

  .second-row,
  .fourth-row,
  .fifth-row {
    justify-content: space-between;
  }

  .second-row {
    align-items: center;
    margin-bottom: 1rem;

    .stock {
      font-weight: 800;
      font-size: 24px;
    }
  }

  .third-row {
    align-items: center;
    margin-bottom: 2rem;

    svg {
      margin-right: 1rem;
    }

    input {
      flex: 1;
      font-weight: 600;
      font-size: 14px;

      &::placeholder {
        color: #415fe7;
      }
    }
  }

  .fourth-row {
    align-items: end;
    margin-bottom: 1rem;

    p,
    .sub-total {
      font-weight: 700;
    }

    p {
      font-size: 12px;
    }

    .sub-total {
      font-size: 34px;
    }
  }

  .fifth-row {
    .left {
      flex: 1;
      margin-right: 1rem;
    }
  }
`;

export const ContentItem = styled.div`
  margin-bottom: 3rem;

  h1 {
    font-weight: 800;
    font-size: 54px;
    margin-bottom: 1rem;
  }

  .content-paragraph {
    p {
      margin-bottom: 1rem;
    }
  }

  .tab-content {
    padding: 1rem 0;
    border-top: 1px solid rgba(119, 119, 119, 0.8);
    border-bottom: 1px solid rgba(119, 119, 119, 0.8);
    margin-bottom: 1rem;

    .details {
      margin-right: 2rem;
    }
  }

  .sold {
    padding-bottom: 1rem;

    p {
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 18px;

      svg {
        margin-left: 6px;
      }

      span {
        margin: 0 6px;
      }
    }
  }
`;

export const TabContent = styled.button`
  font-weight: 700;
  font-size: 20px;
  color: ${(props) => props.active && `#0300AD`};
`;

export const CardSeller = styled.div`
  box-shadow: 0px 0px 60px rgba(45, 45, 45, 0.1);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  align-items: center;

  .third-column {
    flex: 1;
  }

  .second-column {
    margin-right: 1.5rem;

    .testimoni {
      p {
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 12px;

        .star {
          margin-right: 0.5rem;
        }

        .clock {
          margin: 0 0.5rem;
        }
      }
    }

    h3 {
      font-weight: 800;
      font-size: 24px;
    }

    p {
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 0.5rem;
    }
  }

  .img-seller {
    border-radius: 10px;
    margin-right: 1.5rem;
  }
`;
