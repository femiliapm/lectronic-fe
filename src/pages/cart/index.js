import React from "react";
import { BsBagCheck, BsPerson, BsTrash } from "react-icons/bs";
import NumberFormat from "react-number-format";
import Button from "../../components/atomics/Button.comp";
import InputSearch from "../../components/atomics/InputSearch.comp";
import LayoutHome from "../../layouts/home";
import {
  CardCartItem,
  InputCheckbox,
  InputIncrementWrapper,
  InputNumber,
  LabelCheckbox,
  LabelItem,
  MainCart,
  TableRowTotal,
} from "../../styles/cart";
import {
  ButtonIconWrapper,
  MainContent,
  SearchGroup,
} from "../../styles/items";
import item from "../../assets/png/item01.png";

const CartPage = () => {
  return (
    <LayoutHome>
      <SearchGroup>
        <InputSearch />
        <div>
          <ButtonIconWrapper>
            <BsPerson size={20} />
          </ButtonIconWrapper>
          <ButtonIconWrapper>
            <BsBagCheck size={20} />
          </ButtonIconWrapper>
        </div>
      </SearchGroup>

      <MainContent>
        <h1 className="cart-hero">Cart</h1>
        <LabelCheckbox>
          <InputCheckbox type={"checkbox"} />
          Select All
        </LabelCheckbox>

        <MainCart>
          <div className="left">
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
          </div>
        </MainCart>
      </MainContent>
    </LayoutHome>
  );
};

export default CartPage;
