import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: `https://internship.purrweb.site/api/`,
  headers: {
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});

export class Api {
  async getUser() {
    const { data } = await instance.get(`users/me`);
    return data;
  }

  async login(email: string, password: string) {
    const { data } = await instance.post(`users/sign-in`, {
      email,
      password,
    });
    Cookies.set("token", data.token);
    return data;
  }

  async createAccount(email: string, username: string, password: string) {
    const { data } = await instance.post(`users/sign-up`, {
      email,
      username,
      password,
    });
    return data;
  }

  async updatePersonalData(email: string, username: string) {
    const { data } = await instance.patch(`users`, { email, username });
    return data;
  }

  async updatePassword(currentPassword: string, newPassword: string) {
    const { data } = await instance.patch(`update-password`, {
      currentPassword,
      newPassword,
    });
    return data;
  }

  async getProducts() {
    const { data } = await instance.patch(`products`);
    return data;
  }

  async getCodeSelf() {
    const { data } = await instance.get(`code/self`);
    return data;
  }

  async activateCode(code: string) {
    const { data } = await instance.post(`code/activate`, { code });
    return data;
  }

  async manageCode(codesIds: number[], subscribeId: number) {
    const { data } = await instance.put(`code/manage`, {
      codesIds,
      subscribeId,
    });
    return data;
  }

  async getSubscribeSelf() {
    const { data } = await instance.get(`subscribe/self`);
    return data;
  }

  async changeSubscribe(productId: number, subscribeId: number) {
    const { data } = await instance.post(`subscribe/change-product`, {
      productId,
      subscribeId,
    });
    return data;
  }

  async buySubscribe(priceId: number) {
    const { data } = await instance.post(`payments/buy`, { priceId });
    return data;
  }
}
