import { ProductType, ResponseLoginType } from "@/types";

import { ApiService } from "./api";

const apiService = new ApiService();

const baseURL = `https://internship.purrweb.site/api/`;

export const login = async (email: string, password: string) => {
  const { data } = await apiService.post<ResponseLoginType>(
    `${baseURL}users/sign-in`,
    {
      email,
      password,
    }
  );
  return data;
};

export const createAccount = async (
  email: string,
  username: string,
  password: string
) => {
  const { data } = await apiService.post(`${baseURL}users/sign-up`, {
    email,
    username,
    password,
  });
  return data;
};

export const getUser = async () => {
  const { data } = await apiService.get(`${baseURL}users/me`);
  return data;
};

export const updatePersonalData = async (email: string, username: string) => {
  const { data } = await apiService.patch(`${baseURL}users`, {
    email,
    username,
  });
  return data;
};

export const updatePassword = async (
  currentPassword: string,
  newPassword: string
) => {
  const { data } = await apiService.patch(`${baseURL}update-password`, {
    currentPassword,
    newPassword,
  });
  return data;
};

export const getProducts = async (token: string) => {
  const { data } = await apiService.get<ProductType[]>(`${baseURL}products`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const getProduct = async (token: string, id: number) => {
  const products = await getProducts(token);
  const product = products.find((product) => product.id === id);
  return product;
};

export const getCodeSelf = async () => {
  const { data } = await apiService.get(`${baseURL}code/self`);
  return data;
};

export const activateCode = async (code: string) => {
  const { data } = await apiService.post(`${baseURL}code/activate`, { code });
  return data;
};

export const manageCode = async (codesIds: number[], subscribeId: number) => {
  const { data } = await apiService.put(`${baseURL}code/manage`, {
    codesIds,
    subscribeId,
  });
  return data;
};

export const getSubscribeSelf = async (token: string) => {
  const { data } = await apiService.get(`${baseURL}subscribe/self`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const changeSubscribe = async (
  productId: number,
  subscribeId: number
) => {
  const { data } = await apiService.post(`${baseURL}subscribe/change-product`, {
    productId,
    subscribeId,
  });
  return data;
};

export const buySubscribe = async (priceId: number) => {
  const { data } = await apiService.post(`${baseURL}payments/buy`, { priceId });
  return data;
};
