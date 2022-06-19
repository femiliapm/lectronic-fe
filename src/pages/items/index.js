import React from "react";
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

const ItemsPage = () => {
  return (
    <LayoutHome>
      <SearchGroup>
        <InputSearch className="left" />
        <div>
          <ButtonIconWrapper>
            <BsCart2 size={20} />
          </ButtonIconWrapper>
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
              <img src={item01} alt="Headphone" />
            </div>

            <div className="layer-btn-group">
              <Button text="Detail" />
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
              <img src={item01} alt="Headphone" />
            </div>

            <div className="layer-btn-group">
              <Button text="Detail" />
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
              <img src={item01} alt="Headphone" />
            </div>

            <div className="layer-btn-group">
              <Button text="Detail" />
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
              <img src={item01} alt="Headphone" />
            </div>

            <div className="layer-btn-group">
              <Button text="Detail" />
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
              <img src={item01} alt="Headphone" />
            </div>

            <div className="layer-btn-group">
              <Button text="Detail" />
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
              <img src={item01} alt="Headphone" />
            </div>

            <div className="layer-btn-group">
              <Button text="Detail" />
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
              <img src={item01} alt="Headphone" />
            </div>

            <div className="layer-btn-group">
              <Button text="Detail" />
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
              <img src={item01} alt="Headphone" />
            </div>

            <div className="layer-btn-group">
              <Button text="Detail" />
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
              <img src={item01} alt="Headphone" />
            </div>

            <div className="layer-btn-group">
              <Button text="Detail" />
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
              <img src={item01} alt="Headphone" />
            </div>

            <div className="layer-btn-group">
              <Button text="Detail" />
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
              <img src={item01} alt="Headphone" />
            </div>

            <div className="layer-btn-group">
              <Button text="Detail" />
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
              <img src={item01} alt="Headphone" />
            </div>

            <div className="layer-btn-group">
              <Button text="Detail" />
              <ButtonIconWrapper small>
                <BsCart2 size={20} className="stroke-primary" />
              </ButtonIconWrapper>
            </div>
          </CardItem>
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
