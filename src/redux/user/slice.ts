import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserState } from "@/types";

const initialState: UserState = {
  user: {
    id: "",
    username: "",
    email: "",
  },
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserState(state, { payload }: PayloadAction<UserState>) {
      state.user = payload.user;
      state.token = payload.token;
    },
    logout(state) {
      state.user = { id: "", username: "", email: "" };
      state.token = "";
    },
  },
});

export const { setUserState, logout } = userSlice.actions;
export default userSlice.reducer;
