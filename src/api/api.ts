import axios from "axios";

export class ApiService {
  get<T>(url: string, config?: any) {
    return axios.get<T>(url, config);
  }

  post<T>(url: string, data?: any, config?: any) {
    return axios.post<T>(url, data, config);
  }

  patch<T>(url: string, data?: any, config?: any) {
    return axios.patch<T>(url, data, config);
  }

  put<T>(url: string, data?: any, config?: any) {
    return axios.put<T>(url, data, config);
  }
}
