import { PricingCardType } from "@/types";

export interface PricingCardStore {
  cards: PricingCardType[];
  currentCardId: number | undefined;
}
