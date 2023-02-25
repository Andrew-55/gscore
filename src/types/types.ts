export type User = {
  id: string;
  username: string;
  email: string;
};

export type PriceType = {
  id: number;
  isActive: boolean;
  productId: number;
  price: string;
};

export type ProductType = {
  id: number;
  sitesCount: number;
  name: string;
  prices: PriceType[];
};

export type PricingCardType = {
  id: number;
  name: string;
  sitesCount: number;
  price: string;
};

export type CheckoutItemType = {
  id: number;
  name: string;
  price: string;
};
