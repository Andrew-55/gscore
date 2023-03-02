import { CodeType, PriceType, SubscriptionType } from "@/redux/ducks";

export const getProductPrice = (prices: PriceType[]) => {
  return prices
    .reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue.price),
      0
    )
    .toString();
};

export const getArraySortById = <T extends { id: number }>(array: T[]): T[] => {
  const copyArray = [...array];
  return copyArray.sort((a, b) => (a.id > b.id ? 1 : -1));
};
