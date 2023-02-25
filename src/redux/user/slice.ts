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
  },
});

export const { setUserState } = userSlice.actions;
export default userSlice.reducer;
