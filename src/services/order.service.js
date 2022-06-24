import fetchAPI from "../configs/api";

const ROOT_API = process.env.REACT_APP_API_LECTRONIC;

export const addToCartAPI = async (data) => {
  const url = `${ROOT_API}/order`;
  const response = await fetchAPI({ url, method: "post", data });
  if (response.status === 201) {
    return response.data;
  } else {
    return response;
  }
};
