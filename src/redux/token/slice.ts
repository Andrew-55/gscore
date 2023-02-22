import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TokenState } from "@/redux/token";

const initialState: TokenState = {
  token: "",
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken(state, { payload }: PayloadAction<string>) {
      state.token = payload;
    },
  },
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;
