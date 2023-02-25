import axios, { AxiosError } from "axios";

export type ErrorApi = AxiosError;

export class ApiService {
  instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  });

  get<T>(url: string, token?: string) {
    if (token) {
      this.instance.defaults.headers.get["Authorization"] = `Bearer ${token}`;
    }
    return this.instance.get<T>(url);
  }

  post<T>(url: string, config: any, token?: string) {
    if (token) {
      this.instance.defaults.headers.post["Authorization"] = `Bearer ${token}`;
    }
    return this.instance.post<T>(url, config);
  }

  patch<T>(url: string, config: any, token?: string) {
    if (token) {
      this.instance.defaults.headers.patch["Authorization"] = `Bearer ${token}`;
    }
    return this.instance.patch<T>(url, config);
  }

  put<T>(url: string, config: any, token?: string) {
    if (token) {
      this.instance.defaults.headers.put["Authorization"] = `Bearer ${token}`;
    }
    return this.instance.put<T>(url, config);
  }
}
