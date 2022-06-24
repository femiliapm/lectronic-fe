import { default as axios } from "axios";

const fetchAPI = async ({ url, method, data, headers }) => {
  const responseAxios = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);

  return responseAxios;
};

export default fetchAPI;

export const getToken = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    return token;
  }
  return null;
};

export const getExistingUserId = () => {
  const userId = JSON.parse(localStorage.getItem("userId"));
  if (userId) {
    return userId;
  }
  return null;
};
