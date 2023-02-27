import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserType, UserState } from "./types";

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
    updateUser(state, { payload }: PayloadAction<UserType>) {
      const { id, username, email } = payload;
      state.user.id = id;
      state.user.username = username;
      state.user.email = email;
    },
    setUserState(state, { payload }: PayloadAction<UserState>) {
      state.user = payload.user;
      state.token = payload.token;
    },
    logout() {
      return initialState;
    },
  },
});

export const { setUserState, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;
