import React from "react";
import NumberFormat from "react-number-format";
import Button from "../../components/atomics/Button.comp";
import LayoutHome from "../../layouts/home";
import {
  CardCartItem,
  InputCheckbox,
  InputIncrementWrapper,
  InputNumber,
  LabelItem,
  MainCart,
  TableRowTotal,
} from "../../styles/cart";
import { CardAddress, MainCheckout } from "../../styles/checkout";
import item from "../../assets/png/item01.png";
import { BsTrash } from "react-icons/bs";

const CheckoutPage = () => {
  return (
    <LayoutHome>
      <MainCheckout>
        <h1>Checkout</h1>

        <MainCart>
          <div className="left">
            <CardAddress>
              <h3>Delivery Address</h3>
              <textarea className="border-black-light" />
              <div>
                <Button text="Change Address" width="fit-content" outline />
              </div>
            </CardAddress>
            <CardCartItem>
              <div className="detail">
                <InputCheckbox type={"checkbox"} small />
                <img src={item} alt="item" width={"50vw"} />
                <div className="detail-item">
                  <p className="item-name">Sony MDR-5706</p>
                  <div className="label">
                    <LabelItem>Headphone</LabelItem>
                  </div>
                  <div>
                    <NumberFormat
                      value={3000}
                      displayType={"text"}
                      prefix={"$"}
                      className="primary item-price"
                    />
                  </div>
                </div>
              </div>
              <div className="item-action">
                <div className="center">
                  <BsTrash />
                  <InputIncrementWrapper className="border-primary">
                    <button className="primary">-</button>
                    <InputNumber type={"number"} max={4} min={1} value={1} />
                    <button className="primary">+</button>
                  </InputIncrementWrapper>
                </div>
              </div>
            </CardCartItem>
            <CardCartItem>
              <div className="detail">
                <InputCheckbox type={"checkbox"} small />
                <img src={item} alt="item" width={"50vw"} />
                <div className="detail-item">
                  <p className="item-name">Sony MDR-5706</p>
                  <div className="label">
                    <LabelItem>Headphone</LabelItem>
                  </div>
                  <div>
                    <NumberFormat
                      value={3000}
                      displayType={"text"}
                      prefix={"$"}
                      className="primary item-price"
                    />
                  </div>
                </div>
              </div>
              <div className="item-action">
                <div className="center">
                  <BsTrash />
                  <InputIncrementWrapper className="border-primary">
                    <button className="primary">-</button>
                    <InputNumber type={"number"} max={4} min={1} value={1} />
                    <button className="primary">+</button>
                  </InputIncrementWrapper>
                </div>
              </div>
            </CardCartItem>
          </div>

          <div className="right">
            <h3>Total</h3>
            <table>
              <tbody>
                <TableRowTotal>
                  <td className="name">Item Price</td>
                  <td>
                    <NumberFormat
                      value={0}
                      displayType={"text"}
                      prefix={"$"}
                      className="value black-light"
                    />
                  </td>
                </TableRowTotal>
                <TableRowTotal>
                  <td className="name discount">Discount</td>
                  <td className="discount">
                    <NumberFormat
                      value={6000}
                      displayType={"text"}
                      prefix={"$"}
                      className="value black-light"
                    />
                  </td>
                </TableRowTotal>
                <TableRowTotal>
                  <td className="name bill">Bill</td>
                  <td>
                    <NumberFormat
                      value={6000}
                      displayType={"text"}
                      prefix={"$"}
                      className="bill-value"
                    />
                  </td>
                </TableRowTotal>
              </tbody>
            </table>
            <div className="btn-checkout">
              <Button text="Check Out" />
            </div>
            <div className="btn-checkout">
              <Button outline text="Choose Payment Method" />
            </div>
          </div>
        </MainCart>
      </MainCheckout>
    </LayoutHome>
  );
};

export default CheckoutPage;
