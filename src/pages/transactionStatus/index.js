import React, { useCallback, useEffect, useState } from "react";
import { BsBagCheck, BsCart2, BsStar } from "react-icons/bs";
import Button from "../../components/atomics/Button.comp";
import LayoutHome from "../../layouts/home";
import { ButtonIconWrapper, CardItem } from "../../styles/items";
import { CardStatus, SectionRecommendation } from "../../styles/status";
import item from "../../assets/png/item01.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateTransactionAPI } from "../../services/transaction.service";
import { getProductLimitAPI } from "../../services/product.service";
import NumberFormat from "react-number-format";
import { getExistingUserId } from "../../configs/api";
import { addToCartAPI } from "../../services/order.service";

const TransactionStatusPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [dataCard, setDataCard] = useState([]);

  const updateTransaction = useCallback(async () => {
    if (state.length > 0) {
      const res = await updateTransactionAPI(state);
      console.log(res, "update");
      if (res.status === 200) {
        navigate(".", { state: [] });
      }
    }
  }, [navigate, state]);

  const getProductLimit = async () => {
    const response = await getProductLimitAPI();
    console.log(response);
    if (response.status === 200) {
      setDataCard(response.data);
    }
  };

  useEffect(() => {
    updateTransaction();
    getProductLimit();
  }, [updateTransaction]);

  const handleShopAgain = (e) => {
    e.preventDefault();
    navigate("/lectronic-shop/explore");
  };

  const handleOrder = async (e, productId, quantity, price, discount) => {
    e.preventDefault();
    const userId = getExistingUserId();
    const data = {
      productId,
      userId,
      quantity,
      price,
      discount,
    };
    console.log(data);
    const res = await addToCartAPI(data);
    console.log(res);
    alert(res.message);
  };

  return (
    <LayoutHome to="/lectronic-shop/explore">
      <CardStatus>
        <BsBagCheck className="stroke-primary" size={90} />
        <h1 className="title">Transaction Success</h1>
        <p className="black-light">
          Transaction was successful, do you want to shop again?
        </p>
        <Button
          width="fit-content"
          text="Shop again"
          onClick={handleShopAgain}
        />
      </CardStatus>

      <SectionRecommendation>
        <h1 className="title">Recommendation for You</h1>
        <div className="card-group">
          {dataCard && dataCard.length > 0 ? (
            dataCard.map((el) => {
              return (
                <CardItem>
                  <div className="layer-top">
                    <div className="title">{el.productName}</div>
                    <div className="price-star">
                      <div className="price primary">
                        <NumberFormat
                          value={el.productPrice}
                          displayType={"text"}
                          prefix={"Rp "}
                          thousandSeparator="."
                          decimalSeparator=","
                        />
                      </div>
                      <div className="star">
                        <BsStar className="stroke-primary" />
                        <p className="primary">4.9</p>
                      </div>
                    </div>
                  </div>

                  <div className="layer-img">
                    <img src={item} alt="Headphone" />
                  </div>

                  <div className="layer-btn-group">
                    <Link to={`/detail/${el.productId}`}>
                      <Button text="Detail" width="fit-content" />
                    </Link>
                    <ButtonIconWrapper
                      small
                      onClick={(event) =>
                        handleOrder(event, el.productId, 1, el.productPrice, 0)
                      }
                    >
                      <BsCart2 size={20} className="stroke-primary" />
                    </ButtonIconWrapper>
                  </div>
                </CardItem>
              );
            })
          ) : (
            <p>No data</p>
          )}
        </div>
      </SectionRecommendation>
    </LayoutHome>
  );
};

export default TransactionStatusPage;
