import axios from "axios";
import { Platform } from "react-native";
import { useAuthStore } from "../store/auth-store";

const IOS_URL = "http://localhost:3333";
const ANDROID_URL = "http://10.0.2.2:3333";

export const api = axios.create({
  baseURL: Platform.OS === "android" ? ANDROID_URL : IOS_URL,
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (__DEV__) {
    console.log("REQUEST", {
      method: config.method,
      url: `${config.baseURL}${config.url}`,
      params: config.params,
      data: config.data,
    });
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    if (__DEV__) {
      console.log("RESPONSE", {
        url: response.config.url,
        status: response.status,
        data: response.data,
      });
    }
    return response;
  },
  (error) => {
    if (__DEV__) {
      console.log("API ERROR", {
        url: error?.config?.url,
        status: error?.response?.status,
        data: error?.response?.data,
        message: error?.message,
      });
    }
    return Promise.reject(error);
  },
);
