export type UserType = {
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

export type CodeType = {
  id: number;
  code: string;
  origin: string | null;
  status: string;
  subscribeId: number;
  userId: number;
};

export type ResponseLoginType = {
  token: string;
  user: UserType;
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

export type ResponseBuyType = {
  id: number;
  userId: number;
  productId: number;
  currentPeriodStart: number;
  currentPeriodEnd: number;
  status: string;
};

export type SubscriptionType = {
  id: number;
  userId: number;
  productId: number;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  status: string;
  product: ProductType;
  codes: CodeType[];
};
