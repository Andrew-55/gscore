export type PricingCardType = {
  id: number;
  name: string;
  sitesCount: number;
  price: string;
};

export interface PricingCardStore {
  cards: PricingCardType[];
  currentCardId: number | undefined;
}

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

export type ProductBuyType = {
  id: number;
  userId: number;
  productId: number;
  currentPeriodStart: number;
  currentPeriodEnd: number;
  status: string;
};
