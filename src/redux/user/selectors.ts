import { RootState } from "../store";

export const getUser = (state: RootState) => state.user.user;
export const getToken = (state: RootState) => state.user.token;
