import axios from "axios";
import TokenService from "./token.service";
import { appUrls } from "./urls";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const apiResource = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Origin": BASE_URL,
      "Access-Control-Allow-Credentials": true,
    },
  });

  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access_token");
      // const urlArr = config.url.split("/")
      // console.log("apis", config.url);
      // const isLogin = config.url.includes("auth/app-login");
      // if (!token || isLogin) return config;
      config.headers.Authorization = token;
      config.headers.app_id = "com.ng.investnow.ios";
      config.headers.app_device_id = "123456789";
      return config;
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    async (error) => {
      if (error?.response?.status === 403) {
        TokenService.removeToken();
        window.location = "/login";
      } else if (error?.response?.status === 401) {
        const originalConfig = error.config;
        const isLogin = originalConfig.url === appUrls.loginURL;
        if (!isLogin) {
          window.location = "/login";
        }
        TokenService.removeToken();
      } else {
        return new Promise((resolve, reject) => {
          reject(error?.response);
        });
      }
      return Promise.reject(error?.response);
    }
  );
  return api;
};
export const api = apiResource();
