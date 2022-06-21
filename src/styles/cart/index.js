import styled from "styled-components";

export const LabelCheckbox = styled.label`
  font-size: 2vw;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin-bottom: 6.5vw;
`;

export const MainCart = styled.div`
  display: flex;
  justify-content: space-between;

  .left {
    flex: 1;
    margin-right: 1rem;
  }

  .right {
    box-shadow: 0px 0px 60px rgba(45, 45, 45, 0.1);
    border-radius: 20px;
    padding: 3.5vw;
    height: fit-content;

    table {
      border-collapse: collapse;
    }

    h3 {
      font-weight: 700;
      font-size: 2vw;
      margin-bottom: 1vw;
    }

    .btn-checkout {
      text-align: center;
      margin-top: 0.5vw;
    }
  }
`;

export const TableRowTotal = styled.tr`
  .name,
  .bill {
    padding-right: 8.5vw;
  }

  .name {
    font-weight: 400;
    font-size: 1vw;
    color: #000000;
  }

  .bill,
  .bill-value {
    font-weight: 800;
    font-size: 1.5vw;
  }

  td .value {
    font-weight: 600;
    font-size: 0.8vw;
  }

  td {
    padding: 8px 0;

    &.discount {
      border-bottom: 1px solid #777777;
    }
  }
`;

export const CardCartItem = styled.div`
  box-shadow: 0px 0px 60px rgba(45, 45, 45, 0.1);
  border-radius: 20px;
  padding: 3.5vw;
  display: flex;
  margin-bottom: 1.5rem;

  .item-action {
    flex: 1;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    .center {
      display: flex;
      align-items: center;
    }
  }

  .detail {
    display: flex;
    align-items: center;

    .detail-item {
      margin-left: 2rem;

      .item-price {
        font-weight: 700;
        font-size: 22px;
      }

      .label {
        margin: 1rem 0;
      }

      .item-name {
        font-weight: 400;
        font-size: 22px;
      }
    }
  }
`;

export const InputCheckbox = styled.input`
  &[type="checkbox"] {
    ${(props) =>
      props.small
        ? `width: 1.5vw; height: 1.5vw; margin-right: 2.5vw;`
        : `width: 1.75vw; height: 1.75vw; margin-right: 2vw;`}
    border: 1px solid #0020b2;
    border-radius: 4px;
    cursor: pointer;
    transform: translateY(-0.075em);
    appearance: none;
    outline: none;

    &:checked {
      background-color: #0020b2;
      color: white;

      &::before {
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        ${(props) =>
          props.small
            ? `top: 0.16vw; left: 0.33vw; height: 8px; width: 4px;`
            : `top: 0.3vw; left: 8px; height: 10px; width: 5px;`}
        content: "";
      }
    }
  }
`;

export const LabelItem = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  padding: 6px 10px;
  background-color: rgba(0, 32, 178, 0.7);
  border-radius: 10px;
`;

export const InputIncrementWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 8vw;
  border-radius: 10px;
  margin: 11px;
  padding: 4px;

  button {
    margin: 0 4px;
    font-size: 18px;
  }
`;

export const InputNumber = styled.input`
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }

  width: 100%;
  text-align: center;
  margin: 0 1rem;
  font-size: 18px;
  font-weight: 600;
`;
