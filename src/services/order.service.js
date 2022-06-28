import fetchAPI from "../configs/api";

const ROOT_API = process.env.REACT_APP_API_LECTRONIC;

export const addToCartAPI = async (data) => {
  const url = `${ROOT_API}/order/cart`;
  const response = await fetchAPI({ url, method: "post", data });
  if (response.status === 201) {
    return response.data;
  } else {
    return response;
  }
};

export const getCartListAPI = async () => {
  const url = `${ROOT_API}/order?status=0`;
  const response = await fetchAPI({ url, method: "get" });
  if (response.status === 200) {
    return response.data;
  } else {
    return response;
  }
};

export const deleteCartAPI = async (orderId) => {
  const url = `${ROOT_API}/order/${orderId}`;
  const response = await fetchAPI({ url, method: "delete" });
  if (response.status === 200) {
    return response.data;
  } else {
    return response;
  }
};
