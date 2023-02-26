import { RootState } from "../store";

export const getCurrentCartId = () => (state: RootState) => {
  return state.pricingCards.currentCardId;
};

export const getPricingCards = () => (state: RootState) => {
  return Object.values(state.pricingCards.cards);
};

export const getPricingCardById = (id: number) => (state: RootState) => {
  return Object.values(state.pricingCards.cards).find((card) => card.id === id);
};

export const getPricingCurrentCard = () => (state: RootState) => {
  return Object.values(state.pricingCards.cards).find(
    (card) => card.id === state.pricingCards.currentCardId
  );
};
