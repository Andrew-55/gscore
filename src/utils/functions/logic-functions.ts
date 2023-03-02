import { PriceType } from "@/redux/ducks";

export const getProductPrice = (prices: PriceType[]) => {
  return prices
    .reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue.price),
      0
    )
    .toString();
};
