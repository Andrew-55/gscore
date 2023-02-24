import { ProductType, ResponseLoginType } from "@/types";
import { ResponseBuyType, SubscriptionType, UserType } from "@/types";
import { CodeType } from "@/types/types";

import { ApiService } from "./api";

const apiService = new ApiService();

const baseURL = `https://internship.purrweb.site/api/`;

export const login = async (email: string, password: string) => {
  const { data } = await apiService.post<ResponseLoginType>(
    `${baseURL}users/sign-in`,
    {
      email,
      password,
    },
    { headers: { "Content-Type": "application/json" } }
  );
  return data;
};

export const createAccount = async (
  email: string,
  username: string,
  password: string
) => {
  const { data } = await apiService.post<ResponseLoginType>(
    `${baseURL}users/sign-up`,
    {
      email,
      username,
      password,
    },
    { headers: { "Content-Type": "application/json" } }
  );
  return data;
};

export const getUser = async (token: string) => {
  const { data } = await apiService.get<UserType>(`${baseURL}users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const updatePersonalData = async (
  token: string,
  email: string,
  username: string
) => {
  const { data } = await apiService.patch<UserType>(
    `${baseURL}users`,
    {
      email,
      username,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return data;
};

export const updatePassword = async (
  token: string,
  currentPassword: string,
  newPassword: string
) => {
  const { data } = await apiService.patch<UserType>(
    `${baseURL}users/update-password`,
    {
      currentPassword,
      newPassword,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return data;
};

export const getProducts = async (token: string) => {
  const { data } = await apiService.get<ProductType[]>(`${baseURL}products`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const getProduct = async (token: string, id: number) => {
  const products = await getProducts(token);
  const product = products.find((product) => product.id === id);
  return product;
};

export const getCodeSelf = async (token: string) => {
  const { data } = await apiService.get<CodeType[]>(`${baseURL}code/self`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const activateCode = async (
  token: string,
  code: string,
  origin: string
) => {
  const { data } = await apiService.post<CodeType>(
    `${baseURL}code/activate`,
    {
      code,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": `${origin}`,
        Origin: `${origin}`,
      },
    }
  );
  return data;
};

export const manageCode = async (
  token: string,
  codesIds: number[],
  subscribeId: number
) => {
  const { data } = await apiService.put(
    `${baseURL}code/manage`,
    {
      codesIds,
      subscribeId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

export const getSubscribeSelf = async (token: string) => {
  const { data } = await apiService.get<SubscriptionType[]>(
    `${baseURL}subscribe/self`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
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

export const buySubscribe = async (token: string, priceId: number) => {
  const { data } = await apiService.post<ResponseBuyType>(
    `${baseURL}payments/buy`,
    {
      priceId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return data;
};
