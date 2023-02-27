import { UserState } from "@/redux/user";
import { ResponseBuyType, SubscriptionType, UserType } from "@/types";
import { ProductType } from "@/types";
import { CodeType } from "@/types/types";

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
  const { data } = await apiService.post<UserType>(PATH.createAccount, {
    email,
    username,
    password,
  });
  return data;
};

export const getUser = async (token: string) => {
  const user = await apiService.get<UserType>(PATH.getUsersMe, token);
  return user;
};

export const updatePersonalData = async (
  token: string,
  email: string,
  username: string
) => {
  const { data } = await apiService.patch<UserType>(
    PATH.updatePersonalData,
    {
      email,
      username,
    },
    token
  );
  return data;
};

export const updatePassword = async (
  token: string,
  currentPassword: string,
  newPassword: string
) => {
  const { data } = await apiService.patch<UserType>(
    PATH.updatePassword,
    {
      currentPassword,
      newPassword,
    },
    token
  );
  return data;
};

export const getProducts = async (token: string) => {
  const { data } = await apiService.get<ProductType[]>(PATH.products, token);
  return data;
};

export const getCodeSelf = async (token: string) => {
  const { data } = await apiService.get<CodeType[]>(PATH.getCodeSelf, token);
  return data;
};

export const activateCode = async (
  token: string,
  code: string,
  domain: string
) => {
  const { data } = await apiService.post<CodeType>(
    PATH.activateCode,
    { code },
    token
  );
  return data;
};

export const manageCode = async (
  codesIds: number[],
  subscribeId: number,
  token: string
) => {
  const { data } = await apiService.put<CodeType[]>(
    PATH.manageCode,
    {
      codesIds,
      subscribeId,
    },
    token
  );
  return data;
};

export const getSubscribeSelf = async (token: string) => {
  const { data } = await apiService.get<SubscriptionType[]>(
    PATH.getSubscribeSelf,
    token
  );
  return data;
};

export const changeSubscribe = async (
  productId: number,
  subscribeId: number,
  token: string
) => {
  const { data } = await apiService.post(
    PATH.changeSubscribe,
    {
      productId,
      subscribeId,
    },
    token
  );
  return data;
};

export const buySubscribe = async (priceId: number, token: string) => {
  const { data } = await apiService.post<ResponseBuyType>(
    PATH.buySubscribe,
    { priceId },
    token
  );
  return data;
};
