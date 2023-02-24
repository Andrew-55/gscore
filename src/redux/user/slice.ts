import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserType } from "@/types";

const initialState: UserType = {
  id: "",
  username: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<UserType>) {
      const { id, username, email } = payload;
      state.id = id;
      state.username = username;
      state.email = email;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
