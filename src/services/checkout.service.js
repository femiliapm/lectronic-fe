import fetchAPI from "../configs/api";

const ROOT_API = process.env.REACT_APP_API_LECTRONIC;

export const addTransactionAPI = async (data) => {
  const url = `${ROOT_API}/transaction/multiple`;
  const response = await fetchAPI({ url, method: "post", data });
  if (response.status === 201) {
    return response.data;
  } else {
    if (response.data.errors) {
      return response.data.errors;
    } else {
      return response;
    }
  }
};
