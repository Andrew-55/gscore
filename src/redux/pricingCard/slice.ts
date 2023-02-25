import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PricingCardType } from "@/types";

import { PricingCardStore } from "./types";

const initialState: PricingCardStore = {
  cards: [],
};

export const pricingCardsSlice = createSlice({
  name: "pricingCards",
  initialState,
  reducers: {
    setPricingCardsStore(state, { payload }: PayloadAction<PricingCardType[]>) {
      state.cards = { ...payload };
    },
  },
});

export const { setPricingCardsStore } = pricingCardsSlice.actions;
export default pricingCardsSlice.reducer;
