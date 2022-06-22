import React from "react";
import { BsBagCheck, BsCart2, BsStar } from "react-icons/bs";
import Button from "../../components/atomics/Button.comp";
import LayoutHome from "../../layouts/home";
import { ButtonIconWrapper, CardItem } from "../../styles/items";
import { CardStatus, SectionRecommendation } from "../../styles/status";
import item from "../../assets/png/item01.png";

const TransactionStatusPage = () => {
  return (
    <LayoutHome>
      <CardStatus>
        <BsBagCheck className="stroke-primary" size={90} />
        <h1 className="title">Transaction Success</h1>
        <p className="black-light">
          Transaction was successful, do you want to shop again?
        </p>
        <Button width="fit-content" text="Shop again" />
      </CardStatus>

      <SectionRecommendation>
        <h1 className="title">Recommendation for You</h1>
        <div className="card-group">
          <CardItem>
            <div className="layer-top">
              <div className="title">Sennheiser HD-25</div>
              <div className="price-star">
                <div className="price primary">$3000</div>
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
              <Button text="Detail" width="fit-content" />
              <ButtonIconWrapper small>
                <BsCart2 size={20} className="stroke-primary" />
              </ButtonIconWrapper>
            </div>
          </CardItem>
          <CardItem>
            <div className="layer-top">
              <div className="title">Sennheiser HD-25</div>
              <div className="price-star">
                <div className="price primary">$3000</div>
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
              <Button text="Detail" width="fit-content" />
              <ButtonIconWrapper small>
                <BsCart2 size={20} className="stroke-primary" />
              </ButtonIconWrapper>
            </div>
          </CardItem>
          <CardItem>
            <div className="layer-top">
              <div className="title">Sennheiser HD-25</div>
              <div className="price-star">
                <div className="price primary">$3000</div>
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
              <Button text="Detail" width="fit-content" />
              <ButtonIconWrapper small>
                <BsCart2 size={20} className="stroke-primary" />
              </ButtonIconWrapper>
            </div>
          </CardItem>
        </div>
      </SectionRecommendation>
    </LayoutHome>
  );
};

export default TransactionStatusPage;
