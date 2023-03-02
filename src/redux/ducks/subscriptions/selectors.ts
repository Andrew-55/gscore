import { RootState } from "@/redux/store";

export const getUpgradeSubcriptionId = () => (state: RootState) => {
  return state.subscriptions.upgradeSubscriptionId;
};

export const getProductIdUpgradeSubcription = (state: RootState) => {
  const id = state.subscriptions.upgradeSubscriptionId;
  const subscribe = Object.values(state.subscriptions.subscriptions).find(
    (subscribe) => subscribe.id === id
  );
  return subscribe?.productId;
};

export const getCurrentSubscriptionId = () => (state: RootState) => {
  return state.subscriptions.currentSubscriptionId;
};

export const getSubscriptions = () => (state: RootState) => {
  return state.subscriptions.subscriptions;
};
