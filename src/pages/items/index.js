import React, { useEffect, useState } from "react";
import {
  ButtonIconWrapper,
  CardItem,
  MainContent,
  PaginationWrapper,
  SearchGroup,
  TabStyled,
} from "../../styles/items";
import InputSearch from "../../components/atomics/InputSearch.comp";
import { BsCart2, BsFunnel, BsStar } from "react-icons/bs";
import LayoutHome from "../../layouts/home";
import Button from "../../components/atomics/Button.comp";
import item01 from "../../assets/png/item01.png";
import ReactPaginate from "react-paginate";
import { getLandingPageAPI } from "../../services/landing.service";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import { getExistingUserId } from "../../configs/api";
import { addToCartAPI } from "../../services/order.service";

const ItemsPage = () => {
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const res = await getLandingPageAPI();
    setData(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

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
    <LayoutHome>
      <SearchGroup>
        <InputSearch className="left" />
        <div>
          <Link to={"/cart"}>
            <ButtonIconWrapper>
              <BsCart2 size={20} />
            </ButtonIconWrapper>
          </Link>
          <ButtonIconWrapper>
            <BsFunnel size={20} />
          </ButtonIconWrapper>
        </div>
      </SearchGroup>

      <MainContent>
        <div>
          <TabStyled active={false} product>
            Products
          </TabStyled>
          <TabStyled active={true}>Store</TabStyled>
        </div>

        <div className="card-group">
          {data && data.length > 0 ? (
            data.map((e) => {
              console.log(e);
              return (
                <CardItem key={e.productId}>
                  <div className="layer-top">
                    <div className="title">{e.productName}</div>
                    <div className="price-star">
                      <div className="price">
                        <NumberFormat
                          value={e.productPrice}
                          displayType={"text"}
                          prefix={"Rp "}
                          className="primary"
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
                    <img src={item01} alt="Headphone" />
                  </div>

                  <div className="layer-btn-group">
                    <Link to={`/detail/${e.productId}`}>
                      <Button width="fit-content" text="Detail" />
                    </Link>
                    <ButtonIconWrapper
                      small
                      onClick={(event) =>
                        handleOrder(event, e.productId, 1, e.productPrice, 0)
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

        <PaginationWrapper>
          <ReactPaginate
            nextLabel="|  >"
            previousLabel="<  |"
            pageCount={10}
            marginPagesDisplayed={10}
            containerClassName="pagination"
            activeClassName="pagination__link--active"
            disabledClassName="pagination__link--disabled"
          />
        </PaginationWrapper>
      </MainContent>
    </LayoutHome>
  );
};

export default ItemsPage;
