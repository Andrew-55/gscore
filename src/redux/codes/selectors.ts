import { RootState } from "../store";

export const getCodes = () => (state: RootState) => {
  return Object.values(state.codes.codes);
};

export const getCodesByIdSubscribe = (id: number) => (state: RootState) => {
  return Object.values(state.codes.codes).filter(
    (codes) => codes.subscribeId === id
  );
};
