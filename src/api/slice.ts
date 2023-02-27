import { UserState } from "@/redux/user";
import { ProductType } from "@/types";
import { User } from "@/types/types";

import { ApiService } from "./api";
import { PATH } from "./constants";

const apiService = new ApiService();

export const login = async (email: string, password: string) => {
  const { data } = await apiService.post<UserState>(PATH.login, {
    email,
    password,
  });
  return data;
};

export const createAccount = async (
  email: string,
  username: string,
  password: string
) => {
  const { data } = await apiService.post(PATH.createAccount, {
    email,
    username,
    password,
  });
  return data;
};

export const getUser = async () => {
  const user = await apiService.get<User>(PATH.getUsersMe);
  return user;
};

export const updatePersonalData = async (email: string, username: string) => {
  const { data } = await apiService.patch(PATH.updatePersonalData, {
    email,
    username,
  });
  return data;
};

export const updatePassword = async (
  currentPassword: string,
  newPassword: string
) => {
  const { data } = await apiService.patch(PATH.updatePassword, {
    currentPassword,
    newPassword,
  });
  return data;
};

export const getProducts = async () => {
  const { data } = await apiService.get<ProductType[]>(PATH.products);
  return data;
};

export const getCodeSelf = async () => {
  const { data } = await apiService.get(PATH.getCodeSelf);
  return data;
};

export const activateCode = async (code: string) => {
  const { data } = await apiService.post(PATH.activateCode, { code });
  return data;
};

export const manageCode = async (codesIds: number[], subscribeId: number) => {
  const { data } = await apiService.put(PATH.manageCode, {
    codesIds,
    subscribeId,
  });
  return data;
};

export const getSubscribeSelf = async () => {
  const { data } = await apiService.get(PATH.getSubscribeSelf);
  return data;
};

export const changeSubscribe = async (
  productId: number,
  subscribeId: number
) => {
  const { data } = await apiService.post(PATH.changeSubscribe, {
    productId,
    subscribeId,
  });
  return data;
};

export const buySubscribe = async (priceId: number) => {
  const { data } = await apiService.post(PATH.buySubscribe, { priceId });
  return data;
};
