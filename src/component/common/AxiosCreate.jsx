import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASEURL;
const http = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token) => {
  if (token) {
    http.defaults.headers.common["Authorization"] = token;
  } else {
    delete http.defaults.headers.common["Authorization"];
  }
};

export const get = (url) => {
  return http.get(url);
};

export const post = (url, data) => {
  return http.post(url, data);
};

export const put = (url, data) => {
  return http.put(url, data);
};

export const del = (url) => {
  return http.delete(url);
};
