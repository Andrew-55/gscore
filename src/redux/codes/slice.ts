import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CodeTypeStore, CodeType } from "./types";
import { logout } from "../user";

const initialState: CodeTypeStore = {
  codes: [],
};

export const codesSlice = createSlice({
  name: "codes",
  initialState,
  reducers: {
    setCodesToStore(state, { payload }: PayloadAction<CodeType[]>) {
      state.codes = { ...payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, (state) => {
      state.codes = [];
    });
  },
});

export const { setCodesToStore } = codesSlice.actions;
export default codesSlice.reducer;
