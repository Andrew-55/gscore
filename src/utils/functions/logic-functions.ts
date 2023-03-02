import subscriptions from "@/pages/subscriptions";
import { CodeType, PriceType, SubscriptionType } from "@/redux/ducks";

export const getProductPrice = (prices: PriceType[]) => {
  return prices
    .reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue.price),
      0
    )
    .toString();
};

export const getCodesSortById = (codes: CodeType[]) => {
  const copyCodes = [...codes];
  return copyCodes.sort((a, b) => (a.id > b.id ? 1 : -1));
};

export const getSubscriptionsSortById = (subscriptions: SubscriptionType[]) => {
  const copySubscriptions = [...subscriptions];
  return copySubscriptions.sort((a, b) => (a.id > b.id ? 1 : -1));
};
