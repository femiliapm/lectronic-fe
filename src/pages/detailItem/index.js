import React from "react";
import LayoutHome2 from "../../layouts/home/home-v2.layout";
import {
  InputIncrementWrapper,
  InputNumber,
  LabelItem,
} from "../../styles/cart";
import {
  CardDetailImage,
  CardDetailProduct,
  CardSeller,
  ContentItem,
  MainDetails,
  TabContent,
} from "../../styles/detailsItem";
import item from "../../assets/png/item01.png";
import { BsCart2, BsClock, BsPencil, BsStar } from "react-icons/bs";
import NumberFormat from "react-number-format";
import Button from "../../components/atomics/Button.comp";
import { ButtonIconWrapper } from "../../styles/items";
import seller from "../../assets/png/seller.png";

const DetailItemPage = () => {
  return (
    <LayoutHome2>
      <MainDetails>
        <div className="left">
          <CardDetailImage>
            <div className="layer-top">
              <LabelItem>Headphone</LabelItem>
            </div>

            <div className="layer-img">
              <img src={item} alt="item" />
            </div>

            <div className="layer-bottom">
              <div className="sub-img">
                <img src={item} alt="item" width={50} />
              </div>
              <div className="sub-img">
                <img src={item} alt="item" width={50} />
              </div>
              <div className="sub-img">
                <img src={item} alt="item" width={50} />
              </div>
              <div className="sub-img">
                <img src={item} alt="item" width={50} />
              </div>
            </div>
          </CardDetailImage>

          <CardDetailProduct>
            <h3>Details</h3>
            <div className="second-row">
              <InputIncrementWrapper className="border-primary">
                <button className="primary">-</button>
                <InputNumber type={"number"} max={4} min={1} value={1} />
                <button className="primary">+</button>
              </InputIncrementWrapper>
              <div className="stock black-light">
                Stok <span>5</span>
              </div>
            </div>
            <div className="third-row">
              <BsPencil className="stroke-primary" />
              <input
                type={"text"}
                placeholder="Add notes"
                className="primary"
              />
            </div>
            <div className="fourth-row">
              <p className="black-light">Sub-Total</p>
              <div>
                <NumberFormat
                  value={3000}
                  displayType={"text"}
                  prefix={"$"}
                  className="sub-total"
                />
              </div>
            </div>
            <div className="fifth-row">
              <div className="left">
                <Button text="CheckOut" />
              </div>
              <ButtonIconWrapper small>
                <BsCart2 size={20} className="stroke-primary" />
              </ButtonIconWrapper>
            </div>
          </CardDetailProduct>
        </div>

        <div className="right">
          <ContentItem>
            <h1>Sony MDR-5607</h1>
            <div className="sold">
              <p className="black-light">
                Sold <span className="primary">6</span> |
                <BsStar className="stroke-primary" />
                <span className="primary">4.9</span>
              </p>
            </div>
            <div className="tab-content">
              <TabContent active className="details">
                Details
              </TabContent>
              <TabContent>Info</TabContent>
            </div>
            <div className="content-paragraph">
              <p>
                Open repair of infrarenal aortic aneurysm or dissection, plus
                repair of associated arterial trauma, following unsuccessful
                endovascular repair; tube prosthesis{" "}
              </p>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet. Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet. Amet minim mollit non deserunt
                ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. Exercitation veniam consequat
                sunt nostrud amet. Amet minim mollit non deserunt ullamco est
                sit aliqua dolor do amet sint. Velit officia consequat duis enim
                velit mollit. Exercitation veniam consequat sunt nostrud amet.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor{" "}
              </p>
            </div>
          </ContentItem>

          <CardSeller>
            <div className="img-seller">
              <img src={seller} alt="seller" width={150} />
            </div>
            <div className="second-column">
              <h3>GeekFun</h3>
              <p className="primary">Online</p>
              <div className="testimoni">
                <p className="black-light">
                  <BsStar className="star" /> 4.5 Testimonials |{" "}
                  <BsClock className="clock" /> 13 hours Orders Processed
                </p>
              </div>
            </div>
            <div className="third-column">
              <Button outline text="Follow" />
            </div>
          </CardSeller>
        </div>
      </MainDetails>
    </LayoutHome2>
  );
};

export default DetailItemPage;
