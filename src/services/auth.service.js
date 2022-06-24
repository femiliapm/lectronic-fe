import fetchAPI from "../configs/api";

const ROOT_API = process.env.REACT_APP_API_LECTRONIC;

export const loginAPI = async (data) => {
  const url = `${ROOT_API}/user/login`;
  const response = await fetchAPI({ url, method: "post", data });
  if (response.status === 200) {
    return response.data;
  } else {
    return response;
  }
};

export const registerAPI = async (data) => {
  const url = `${ROOT_API}/user`;
  const response = await fetchAPI({ url, method: "post", data });
  if (response.status === 201) {
    return response.data;
  } else {
    return response;
  }
};
