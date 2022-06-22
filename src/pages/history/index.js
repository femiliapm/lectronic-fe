import React from "react";
import { BsChatDots, BsFunnel } from "react-icons/bs";
import InputSearch from "../../components/atomics/InputSearch.comp";
import LayoutHome from "../../layouts/home";
import {
  CardHistory,
  LabelDate,
  MainHistory,
  SearchHistory,
} from "../../styles/history";
import { ButtonIconWrapper } from "../../styles/items";
import item from "../../assets/png/item01.png";
import { LabelItem } from "../../styles/cart";
import NumberFormat from "react-number-format";
import Button from "../../components/atomics/Button.comp";

const HistoryPage = () => {
  return (
    <LayoutHome>
      <SearchHistory>
        <InputSearch />
        <ButtonIconWrapper>
          <BsFunnel size={20} />
        </ButtonIconWrapper>
      </SearchHistory>

      <MainHistory>
        <h1>Shopping History</h1>
        <div>
          <LabelDate>February 9, 2015</LabelDate>
          <CardHistory>
            <div className="left">
              <div className="img-item">
                <img src={item} alt="item" width="60vw" />
              </div>
              <div className="detail-item">
                <LabelItem>Headphone</LabelItem>
                <p className="name">Sony MDR-5706</p>
                <p className="black-light">
                  1 item |{" "}
                  <NumberFormat
                    value={3000}
                    displayType={"text"}
                    prefix={"$"}
                    className="black-light"
                  />
                </p>
              </div>
            </div>
            <div className="right">
              <p className="black-light">
                Total{" "}
                <NumberFormat value={3000} displayType={"text"} prefix={"$"} />
              </p>
              <div className="btn-group">
                <Button outline text="Details" />
                <Button margin="0 8px 0" text="Review" />
                <ButtonIconWrapper small black>
                  <BsChatDots size={20} />
                </ButtonIconWrapper>
              </div>
            </div>
          </CardHistory>
          <CardHistory>
            <div className="left">
              <div className="img-item">
                <img src={item} alt="item" width="60vw" />
              </div>
              <div className="detail-item">
                <LabelItem>Headphone</LabelItem>
                <p className="name">Sony MDR-5706</p>
                <p className="black-light">
                  1 item |{" "}
                  <NumberFormat
                    value={3000}
                    displayType={"text"}
                    prefix={"$"}
                    className="black-light"
                  />
                </p>
              </div>
            </div>
            <div className="right">
              <p className="black-light">
                Total{" "}
                <NumberFormat value={3000} displayType={"text"} prefix={"$"} />
              </p>
              <div className="btn-group">
                <Button outline text="Details" />
                <Button margin="0 8px 0" text="Review" />
                <ButtonIconWrapper small black>
                  <BsChatDots size={20} />
                </ButtonIconWrapper>
              </div>
            </div>
          </CardHistory>
          <LabelDate>February 9, 2015</LabelDate>
          <CardHistory>
            <div className="left">
              <div className="img-item">
                <img src={item} alt="item" width="60vw" />
              </div>
              <div className="detail-item">
                <LabelItem>Headphone</LabelItem>
                <p className="name">Sony MDR-5706</p>
                <p className="black-light">
                  1 item |{" "}
                  <NumberFormat
                    value={3000}
                    displayType={"text"}
                    prefix={"$"}
                    className="black-light"
                  />
                </p>
              </div>
            </div>
            <div className="right">
              <p className="black-light">
                Total{" "}
                <NumberFormat value={3000} displayType={"text"} prefix={"$"} />
              </p>
              <div className="btn-group">
                <Button outline text="Details" />
                <Button margin="0 8px 0" text="Review" />
                <ButtonIconWrapper small black>
                  <BsChatDots size={20} />
                </ButtonIconWrapper>
              </div>
            </div>
          </CardHistory>
          <CardHistory>
            <div className="left">
              <div className="img-item">
                <img src={item} alt="item" width="60vw" />
              </div>
              <div className="detail-item">
                <LabelItem>Headphone</LabelItem>
                <p className="name">Sony MDR-5706</p>
                <p className="black-light">
                  1 item |{" "}
                  <NumberFormat
                    value={3000}
                    displayType={"text"}
                    prefix={"$"}
                    className="black-light"
                  />
                </p>
              </div>
            </div>
            <div className="right">
              <p className="black-light">
                Total{" "}
                <NumberFormat value={3000} displayType={"text"} prefix={"$"} />
              </p>
              <div className="btn-group">
                <Button outline text="Details" />
                <Button margin="0 8px 0" text="Review" />
                <ButtonIconWrapper small black>
                  <BsChatDots size={20} />
                </ButtonIconWrapper>
              </div>
            </div>
          </CardHistory>
        </div>
      </MainHistory>
    </LayoutHome>
  );
};

export default HistoryPage;
