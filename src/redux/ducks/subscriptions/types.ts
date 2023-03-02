import { CodeType } from "../codes";
import { ProductType } from "../pricingCard";

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

export type SubscriptionStoreType = {
  subscriptions: SubscriptionType[];
  upgradeSubscriptionId: number | undefined;
  currentSubscriptionId: number | undefined;
};
