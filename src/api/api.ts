import axios from "axios";

export class ApiService {
  get<T>(url: string, config?: any) {
    return axios.get<T>(url, config);
  }

  post<T>(url: string, config: any) {
    return axios.post<T>(url, config);
  }

  patch<T>(url: string, config: any) {
    return axios.patch<T>(url, config);
  }

  put<T>(url: string, config: any) {
    return axios.put<T>(url, config);
  }
}
