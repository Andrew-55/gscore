import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SubscriptionStoreType, SubscriptionType } from "./types";
import { logout } from "../user";

const initialState: SubscriptionStoreType = {
  subscriptions: [],
  upgradeSubscriptionId: undefined,
  currentSubscriptionId: undefined,
};

export const subscriptionsSlice = createSlice({
  name: "subscriptions",
  initialState,
  reducers: {
    setSubscriptions(state, { payload }: PayloadAction<SubscriptionType[]>) {
      state.subscriptions = { ...payload };
      state.currentSubscriptionId = payload[0].id;
    },

    setUpgradeSubscriptionId(state, { payload }: PayloadAction<number>) {
      state.upgradeSubscriptionId = payload;
    },

    setCurrentSubscriptionId(state, { payload }: PayloadAction<number>) {
      state.currentSubscriptionId = payload;
    },

    removeUpgradeSubscriptionId(state) {
      state.upgradeSubscriptionId = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => {
      return initialState;
    });
  },
});

export const {
  setUpgradeSubscriptionId,
  removeUpgradeSubscriptionId,
  setSubscriptions,
  setCurrentSubscriptionId,
} = subscriptionsSlice.actions;
export default subscriptionsSlice.reducer;
