import React, { useCallback, useEffect, useState } from "react";
import { BsChatDots, BsFunnel } from "react-icons/bs";
import InputSearch from "../../components/atomics/InputSearch.comp";
import LayoutHome from "../../layouts/home";
import {
  CardHistory,
  LabelDate,
  MainHistory,
  SearchHistory,
} from "../../styles/history";
import { ButtonIconWrapper, PaginationWrapper } from "../../styles/items";
import item from "../../assets/png/item01.png";
import { LabelItem } from "../../styles/cart";
import NumberFormat from "react-number-format";
import Button from "../../components/atomics/Button.comp";
import ReactPaginate from "react-paginate";
import { getTransactionAPI } from "../../services/transaction.service";
import moment from "moment";

const HistoryPage = () => {
  const [dataHistory, setDataHistory] = useState([]);
  const [data, setData] = useState([]);

  const getHistory = async () => {
    const res = await getTransactionAPI();
    if (res.status === 200) {
      setDataHistory(res.data);
    }
  };

  const groupByDate = dataHistory.reduce((group, element) => {
    const { createdOn } = element;
    const d = new Date(createdOn);
    let m = moment(d).format("MMMM D, YYYY");
    group[m] = group[m] ?? [];
    group[m].push(element);
    return group;
  }, {});

  const setObject = useCallback(() => {
    const keys = Object.keys(groupByDate);
    const values = Object.values(groupByDate);
    let dataArr = [];
    for (let index = 0; index < keys.length; index++) {
      dataArr[index] = {
        date: keys[index],
        transaction: values[index],
      };
    }
    setData(dataArr);
  }, [groupByDate]);

  useEffect(() => {
    getHistory();
    return setObject;
  }, [setObject]);

  // useEffect(() => {
  //   setObject();
  // }, [setObject]);

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
          {data && data.length > 0 ? (
            data.map((el) => {
              const { transaction } = el;
              return (
                <>
                  <LabelDate>{el.date}</LabelDate>
                  {transaction.map((trans) => {
                    return (
                      <CardHistory>
                        <div className="left">
                          <div className="img-item">
                            <img src={item} alt="item" width="60vw" />
                          </div>
                          <div className="detail-item">
                            <LabelItem>
                              {trans.order.product.category}
                            </LabelItem>
                            <p className="name">{trans.order.product.name}</p>
                            <p className="black-light">
                              {trans.order.quantity} item |{" "}
                              <NumberFormat
                                value={trans.order.product.price}
                                displayType={"text"}
                                prefix={"Rp "}
                                thousandSeparator="."
                                decimalSeparator=","
                                className="black-light"
                              />
                            </p>
                          </div>
                        </div>
                        <div className="right">
                          <p className="black-light">
                            Total{" "}
                            <NumberFormat
                              value={trans.totalPrice}
                              displayType={"text"}
                              prefix={"Rp "}
                              thousandSeparator="."
                              decimalSeparator=","
                            />
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
                    );
                  })}
                </>
              );
            })
          ) : (
            <p>No Transactios</p>
          )}
        </div>
        <PaginationWrapper history>
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
      </MainHistory>
    </LayoutHome>
  );
};

export default HistoryPage;
