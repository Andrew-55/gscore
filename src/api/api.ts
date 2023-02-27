import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";

import { store } from "@/redux/store";

export type ErrorApi = AxiosError;

export class ApiService {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    });
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = store.getState().user.token;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      }
    );
  }

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
