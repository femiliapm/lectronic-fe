import fetchAPI from "../configs/api";

const ROOT_API = process.env.REACT_APP_API_LECTRONIC;

export const getLandingPageAPI = async () => {
  const url = `${ROOT_API}/product?landing=true`;
  const response = await fetchAPI({ url, method: "get" });
  if (response.status === 200) {
    return response.data;
  } else {
    return response;
  }
};
