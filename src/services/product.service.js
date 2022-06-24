import fetchAPI from "../configs/api";

const ROOT_API = process.env.REACT_APP_API_LECTRONIC;

export const getProductByIdAPI = async (productId) => {
  const url = `${ROOT_API}/product/${productId}`;
  const response = await fetchAPI({ url, method: "get" });
  if (response.status === 302) {
    return response.data;
  } else {
    return response;
  }
};
