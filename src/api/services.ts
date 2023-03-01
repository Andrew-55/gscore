import { CodeType } from "@/redux/codes";
import { ProductBuyType, ProductType } from "@/redux/pricingCard";
import { SubscriptionType } from "@/redux/subscriptions";
import { UserState, UserType } from "@/redux/user";

import { ApiService } from "./api";
import { ENDPOINTS } from "./constants";

const apiService = new ApiService();

export const login = async (email: string, password: string) => {
  const { data } = await apiService.post<UserState>(ENDPOINTS.login, {
    email,
    password,
  });
  return data;
};

export const createAccount = async (
  username: string,
  email: string,
  password: string
) => {
  const { data } = await apiService.post<UserState>(ENDPOINTS.createAccount, {
    email,
    username,
    password,
  });
  return data;
};

export const getUser = async () => {
  const user = await apiService.get<UserType>(ENDPOINTS.getUsersMe);
  return user;
};

export const updatePersonalData = async (email: string, username: string) => {
  const { data } = await apiService.patch<UserType>(
    ENDPOINTS.updatePersonalData,
    {
      email,
      username,
    }
  );
  return data;
};

export const updatePassword = async (
  currentPassword: string,
  newPassword: string
) => {
  const { data } = await apiService.patch<UserType>(ENDPOINTS.updatePassword, {
    currentPassword,
    newPassword,
  });
  return data;
};

export const getProducts = async () => {
  const { data } = await apiService.get<ProductType[]>(ENDPOINTS.products);
  return data;
};

export const getCodeSelf = async () => {
  const { data } = await apiService.get<CodeType[]>(ENDPOINTS.getCodeSelf);
  return data;
};

export const activateCode = async (code: string, domain?: string) => {
  const { data } = await apiService.post<CodeType>(ENDPOINTS.activateCode, {
    code,
  });
  return data;
};

export const manageCode = async (codesIds: number[], subscribeId: number) => {
  const { data } = await apiService.put<CodeType[]>(ENDPOINTS.manageCode, {
    codesIds,
    subscribeId,
  });
  return data;
};

export const getSubscribeSelf = async () => {
  const { data } = await apiService.get<SubscriptionType[]>(
    ENDPOINTS.getSubscribeSelf
  );
  return data;
};

export const changeSubscribe = async (
  productId: number,
  subscribeId: number
) => {
  const { data } = await apiService.post<ProductBuyType>(
    ENDPOINTS.changeSubscribe,
    {
      productId,
      subscribeId,
    }
  );
  return data;
};

export const buySubscribe = async (priceId: number) => {
  const { data } = await apiService.post<ProductBuyType>(
    ENDPOINTS.buySubscribe,
    { priceId }
  );
  return data;
};
