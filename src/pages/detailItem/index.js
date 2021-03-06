import React, { useCallback, useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { getProductByIdAPI } from "../../services/product.service";
import { getExistingUserId } from "../../configs/api";
import { addToCartAPI } from "../../services/order.service";

const DetailItemPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [store, setStore] = useState({});
  const [photos, setPhotos] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  const getProductById = useCallback(async () => {
    const res = await getProductByIdAPI(productId);
    console.log(res);
    setProduct(res.data.product);
    setStore(res.data.product.seller);
    setPhotos(res.data.photos);
  }, [productId]);

  useEffect(() => {
    getProductById();
  }, [getProductById]);

  const handleDecrement = (e) => {
    e.preventDefault();
    setQuantity(Math.max(quantity - 1, 0));
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    setQuantity(Math.min(quantity + 1, product.stock));
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    const res = await handleOrder(e);
    console.log(res);
    if (res.status === 201) {
      setTimeout(() => {
        navigate("/checkout", { state: [{ order: res.data }] });
      }, 3000);
    }
    // const userId = getExistingUserId();
    // const data = {
    //   productId: product.id,
    //   userId,
    //   quantity,
    //   price: product.price,
    //   discount: 0,
    // };
    // console.log(data);
    // const res = await addToCartAPI(data);
    // console.log(res);
    // setTimeout(() => {
    //   navigate("/checkout", { state: res.data });
    //   alert(res.message);
    // }, 3000);
  };

  const handleOrder = async (e) => {
    e.preventDefault();
    const userId = getExistingUserId();
    const data = {
      productId: product.id,
      userId,
      quantity,
      price: product.price,
      discount: 0,
    };
    console.log(data);
    const res = await addToCartAPI(data);
    console.log(res);
    alert(res.message);
    return res;
  };

  return (
    <LayoutHome2>
      <MainDetails>
        <div className="left">
          <CardDetailImage>
            <div className="layer-top">
              <LabelItem>{product.category}</LabelItem>
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
                <button className="primary" onClick={handleDecrement}>
                  -
                </button>
                <InputNumber
                  type={"number"}
                  max={4}
                  min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <button className="primary" onClick={handleIncrement}>
                  +
                </button>
              </InputIncrementWrapper>
              <div className="stock black-light">
                Stok <span>{product.stock}</span>
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
                  value={product.price}
                  displayType={"text"}
                  prefix={"Rp "}
                  thousandSeparator="."
                  decimalSeparator=","
                  className="sub-total"
                />
              </div>
            </div>
            <div className="fifth-row">
              <div className="left">
                <Button text="CheckOut" onClick={handleCheckout} />
              </div>
              <ButtonIconWrapper small onClick={handleOrder}>
                <BsCart2 size={20} className="stroke-primary" />
              </ButtonIconWrapper>
            </div>
          </CardDetailProduct>
        </div>

        <div className="right">
          <ContentItem>
            <h1>{product.name}</h1>
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
              <p>{product.description}</p>
            </div>
          </ContentItem>

          <CardSeller>
            <div className="img-seller">
              <img src={seller} alt="seller" width={150} />
            </div>
            <div className="second-column">
              <h3>{store.name}</h3>
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
