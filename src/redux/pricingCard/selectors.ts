import { RootState } from "../store";

export const getPricingCardById = (id: number) => (state: RootState) => {
  return Object.values(state.pricingCards.cards).find((card) => card.id === id);
};
