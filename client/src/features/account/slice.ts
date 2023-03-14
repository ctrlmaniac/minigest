import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Account, Azienda } from "~/types";

interface State {
  response?: string;
  dettagli?: Account;
  principal?: Account;
  getting: boolean;
  getError: boolean;
}

const initialState: State = {
  response: undefined,
  dettagli: undefined,
  getting: false,
  getError: false,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    addAzienda: (state, action: PayloadAction<Azienda>) => {
      state.principal!.azienda = action.payload;
    },
    getStart: (state) => {
      state.getting = true;
      state.getError = false;
      state.response = undefined;
      state.principal = undefined;
    },
    getSuccess: (state, action: PayloadAction<Account>) => {
      state.principal = action.payload;
      state.getError = false;
      state.getting = false;
      state.response = undefined;
    },
    getFail: (state, action: PayloadAction<string>) => {
      state.principal = undefined;
      state.response = action.payload;
      state.getError = true;
      state.getting = false;
    },
  },
});

export const { getStart, getSuccess, getFail, addAzienda } =
  accountSlice.actions;

export default accountSlice.reducer;
