import { RootState } from "@/redux/store";

export const getCodes = () => (state: RootState) => {
  return Object.values(state.codes.codes);
};

export const getCodesByIdSubscribe =
  (id: number | undefined) => (state: RootState) => {
    if (id) {
      return Object.values(state.codes.codes).filter(
        (codes) => codes.subscribeId === id
      );
    }
    return [];
  };
