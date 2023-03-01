import { RootState } from "../store";

export const getUpgradeSubcriptionId = () => (state: RootState) => {
  return state.subscriptions.upgradeSubscriptionId;
};

export const getCurrentSubscriptionId = () => (state: RootState) => {
  return state.subscriptions.currentSubscriptionId;
};

export const getSubscriptions = () => (state: RootState) => {
  return state.subscriptions.subscriptions;
};
