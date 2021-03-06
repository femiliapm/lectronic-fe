import React, { useCallback, useEffect, useState } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";
import { addTransactionAPI } from "../../services/transaction.service";

const CheckoutPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [address, setAddress] = useState("");

  const getTotalPrice = useCallback(() => {
    let sum = 0;
    let disc = 0;
    if (state && state.length > 0) {
      for (let index = 0; index < state.length; index++) {
        const element = state[index];
        console.log(element);
        const { price, discount, quantity } = element.order;
        console.log(price);
        let temp = price * quantity;
        sum += temp;
        disc += discount;
      }
      console.log(sum);
      setTotalPrice(sum);
      setTotalDiscount(disc);
    }
  }, [state]);

  useEffect(() => {
    getTotalPrice();
    console.log(state);
  }, [getTotalPrice, state]);

  const handleTransaction = async (e) => {
    e.preventDefault();
    let dataArr = [];
    for (let index = 0; index < state.length; index++) {
      const element = await state[index];
      console.log(element);
      const { id } = element.order;
      const data = {
        orderId: id,
        address,
        totalPrice,
        totalDiscount,
      };
      dataArr[index] = data;
    }
    console.log(dataArr);
    const res = await addTransactionAPI(dataArr);
    console.log(res);
    if (res.status === 201) {
      alert(res.message);
      navigate(".", { state: [] });
      setAddress("");
      setTimeout(() => {
        navigate("/status", { state: res.data });
      }, 3000);
    } else {
      alert(res[0]);
    }
  };

  return (
    <LayoutHome to="/cart">
      <MainCheckout>
        <h1>Checkout</h1>

        <MainCart>
          <div className="left">
            <CardAddress>
              <h3>Delivery Address</h3>
              <textarea
                className="border-black-light"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
              <div>
                <Button text="Change Address" width="fit-content" outline />
              </div>
            </CardAddress>
            {state && state.length > 0 ? (
              state.map((el) => {
                console.log(el);
                const { product, price, quantity, id } = el.order;
                return (
                  <CardCartItem key={id}>
                    <div className="detail">
                      <InputCheckbox
                        type={"checkbox"}
                        small
                        checked
                        disabled
                        value={price}
                      />
                      <img src={item} alt="item" width={"50vw"} />
                      <div className="detail-item">
                        <p className="item-name">{product.name}</p>
                        <div className="label">
                          <LabelItem>{product.category}</LabelItem>
                        </div>
                        <div>
                          <NumberFormat
                            value={price}
                            displayType={"text"}
                            prefix={"Rp "}
                            thousandSeparator="."
                            decimalSeparator=","
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
                          <InputNumber
                            type={"number"}
                            max={4}
                            min={1}
                            value={quantity}
                            disabled
                          />
                          <button className="primary">+</button>
                        </InputIncrementWrapper>
                      </div>
                    </div>
                  </CardCartItem>
                );
              })
            ) : (
              <p>No Transaction</p>
            )}
          </div>

          <div className="right">
            <h3>Total</h3>
            <table>
              <tbody>
                <TableRowTotal>
                  <td className="name">Item Price</td>
                  <td>
                    <NumberFormat
                      value={totalPrice}
                      displayType={"text"}
                      prefix={"Rp "}
                      thousandSeparator="."
                      decimalSeparator=","
                      className="value black-light"
                    />
                  </td>
                </TableRowTotal>
                <TableRowTotal>
                  <td className="name discount">Discount</td>
                  <td className="discount">
                    <NumberFormat
                      value={0}
                      displayType={"text"}
                      prefix={"Rp "}
                      thousandSeparator="."
                      decimalSeparator=","
                      className="value black-light"
                    />
                  </td>
                </TableRowTotal>
                <TableRowTotal>
                  <td className="name bill">Bill</td>
                  <td>
                    <NumberFormat
                      value={totalPrice}
                      displayType={"text"}
                      prefix={"Rp "}
                      thousandSeparator="."
                      decimalSeparator=","
                      className="bill-value"
                    />
                  </td>
                </TableRowTotal>
              </tbody>
            </table>
            <div className="btn-checkout">
              <Button text="Pay Bills" onClick={handleTransaction} />
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
