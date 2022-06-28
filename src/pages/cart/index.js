import React, { useEffect, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { deleteCartAPI, getCartListAPI } from "../../services/order.service";

const CartPage = () => {
  const [dataCart, setDataCart] = useState([]);
  const [priceSelected, setPriceSelected] = useState(0);
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const getCartList = async () => {
    const res = await getCartListAPI();
    console.log(res);
    setDataCart(res.data);
  };

  useEffect(() => {
    getCartList();
  }, []);

  const handleChecked = (e, order) => {
    const checked = e.target.checked;
    console.log(checked);
    if (checked) {
      let temp = Number(priceSelected);
      let value = Number(e.target.value * order.quantity);
      let total = Number(temp + value);
      setPriceSelected(total);
      setData([...data, { order }]);
    } else {
      let temp = Number(priceSelected);
      let value = Number(e.target.value * order.quantity);
      let total = Number(temp - value);
      setPriceSelected(total);
      setData(data.filter((item) => item.order.id !== order.id));
    }
  };

  const handleCheckout = (e) => {
    console.log(priceSelected);
    console.log(data, "data");
    e.preventDefault();
    navigate("/checkout", { state: data });
  };

  const deleteCart = async (e, id) => {
    e.preventDefault();
    const res = await deleteCartAPI(id);
    console.log(res);
    if (res.status === 200) {
      alert("Order deleted!");
      getCartList();
    }
  };

  return (
    <LayoutHome to="/lectronic-shop/explore">
      <SearchGroup>
        <InputSearch />
        <div>
          <ButtonIconWrapper>
            <BsPerson size={20} />
          </ButtonIconWrapper>
          <Link to={"/history"}>
            <ButtonIconWrapper>
              <BsBagCheck size={20} />
            </ButtonIconWrapper>
          </Link>
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
            {dataCart && dataCart.length > 0 ? (
              dataCart.map((el) => {
                console.log(el);
                return (
                  <CardCartItem key={el.id}>
                    <div className="detail">
                      <InputCheckbox
                        type={"checkbox"}
                        small
                        onChange={(e) => handleChecked(e, el)}
                        value={el.price}
                      />
                      <img src={item} alt="item" width={"50vw"} />
                      <div className="detail-item">
                        <p className="item-name">{el.product.name}</p>
                        <div className="label">
                          <LabelItem>{el.product.category}</LabelItem>
                        </div>
                        <div>
                          <NumberFormat
                            value={el.price}
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
                        <button onClick={(e) => deleteCart(e, el.id)}>
                          <BsTrash />
                        </button>
                        <InputIncrementWrapper className="border-primary">
                          <button className="primary">-</button>
                          <InputNumber
                            type={"number"}
                            max={4}
                            min={1}
                            value={el.quantity}
                          />
                          <button className="primary">+</button>
                        </InputIncrementWrapper>
                      </div>
                    </div>
                  </CardCartItem>
                );
              })
            ) : (
              <p>No data</p>
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
                      value={priceSelected}
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
                      value={priceSelected}
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
              <Button text="Check Out" onClick={handleCheckout} />
            </div>
          </div>
        </MainCart>
      </MainContent>
    </LayoutHome>
  );
};

export default CartPage;
