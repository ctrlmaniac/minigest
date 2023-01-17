import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Account } from "~/models";

interface AccountState {
  getting: boolean;
  getError: boolean;
  dettagli: Account | {};
}

const initialState: AccountState = {
  getting: true,
  getError: false,
  dettagli: {},
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    getSuccess: (state, action: PayloadAction<{}>) => {
      state.dettagli = action.payload;
      state.getError = false;
      state.getting = false;
    },
    getFail: (state) => {
      state.getError = true;
      state.dettagli = {};
      state.getting = false;
    },
  },
});

export const { getSuccess, getFail } = accountSlice.actions;

export default accountSlice.reducer;
