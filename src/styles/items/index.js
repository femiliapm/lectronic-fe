import styled from "styled-components";

export const SearchGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8%;
  position: absolute;
  width: 100%;
  top: 13vw;
`;

export const ButtonIconWrapper = styled.button`
  padding: ${(props) => (props.small ? `12px` : `30px`)};
  box-shadow: 0px 0px 60px rgba(45, 45, 45, 0.1);
  border-radius: ${(props) => (props.small ? `10px` : `20px`)};
  margin: ${(props) => (props.small ? `0` : `0 10px`)};
  background-color: white;
  border: ${(props) => props.small && `1px solid #0020B2`};
`;

export const MainContent = styled.main`
  margin: 8vw 8vw 0;
  position: relative;

  .cart-hero {
    font-size: 4vw;
    font-weight: 800;
    margin-bottom: 2.5vw;
  }

  .card-group {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 8vw;
  }
`;

export const TabStyled = styled.button`
  font-weight: 400;
  font-size: 18px;
  box-shadow: 0px 0px 60px rgba(45, 45, 45, 0.1);
  margin-bottom: 4vw;
  padding: ${(props) => (props.product ? `14px 16px` : `14px 20px`)};
  border-radius: ${(props) =>
    props.product ? `10px 0 0 10px` : `0 10px 10px 0`};

  ${(props) =>
    props.active &&
    `background: #0020B2; 
    color: white;`}
`;

export const CardItem = styled.div`
  width: 25%;
  box-shadow: 0px 0px 60px rgba(45, 45, 45, 0.1);
  border-radius: 20px;
  position: relative;
  padding-top: 27vw;
  margin: 0 15px 40px;

  .layer-img {
    position: absolute;
    top: 120px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .layer-btn-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px;
  }

  .layer-top {
    background-color: rgba(155, 192, 201, 0.1);
    border-radius: 20px 20px 0 0;
    padding: 25px 25px 8vw;
    position: absolute;
    top: 0;
    width: 100%;

    .title,
    .star {
      font-weight: 600;
      font-size: 18px;
    }

    .price-star {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .price {
        font-weight: 800;
        font-size: 26px;
      }

      .star {
        display: flex;
        align-items: center;

        p {
          margin-left: 5px;
        }
      }
    }
  }
`;

export const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -10vw;
`;
