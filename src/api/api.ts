import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { getStoredState } from "redux-persist";

import { persistConfig, RootState } from "@/redux/store";

export type ErrorApi = AxiosError;

export class ApiService {
  constructor() {
    this.token = "";
    this.instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    });
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (!!this.token) {
          config.headers.Authorization = `Bearer ${this.token}`;
        }
        return config;
      }
    );

    const getTokenFromStote = async () => {
      const storePersist = await getStoredState(persistConfig);
      if (storePersist) {
        const store = storePersist as RootState;
        const token = store.user.token;
        return token;
      }
      return "";
    };
    getTokenFromStote().then((res) => (this.token = res));
  }

  token;
  instance;

  get<T>(url: string) {
    return this.instance.get<T>(url);
  }
  post<T>(url: string, config: any) {
    return this.instance.post<T>(url, config);
  }

  patch<T>(url: string, config: any) {
    return this.instance.patch<T>(url, config);
  }

  put<T>(url: string, config: any) {
    return this.instance.put<T>(url, config);
  }
}
