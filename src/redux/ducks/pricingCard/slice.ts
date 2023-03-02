import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PricingCardStore, PricingCardType } from "./types";
import { logout } from "../user";

const initialState: PricingCardStore = {
  cards: [],
  currentCardId: undefined,
};

export const pricingCardsSlice = createSlice({
  name: "pricingCards",
  initialState,
  reducers: {
    setPricingCardsToStore(
      state,
      { payload }: PayloadAction<PricingCardType[]>
    ) {
      state.cards = { ...payload };
    },

    setCurrentCardId(state, { payload }: PayloadAction<number>) {
      state.currentCardId = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => {
      return initialState;
    });
  },
});

export const { setPricingCardsToStore, setCurrentCardId } =
  pricingCardsSlice.actions;
export default pricingCardsSlice.reducer;
