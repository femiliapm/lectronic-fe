import fetchAPI from "../configs/api";

const ROOT_API = process.env.REACT_APP_API_LECTRONIC;

export const addTransactionAPI = async (data) => {
  const url = `${ROOT_API}/transaction/multiple`;
  const response = await fetchAPI({ url, method: "post", data });
  return response;
};
