import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { remove } from "lodash";
import { Account } from "~/types";

interface State {
  response?: string;
  dettagli?: Account;
  list?: Account[];
  getting: boolean;
  getError: boolean;
  listing: boolean;
  listError: boolean;
  updating: boolean;
  updateError: boolean;
}

const initialState: State = {
  response: undefined,
  dettagli: undefined,
  list: undefined,
  getting: false,
  getError: false,
  listing: false,
  listError: false,
  updating: false,
  updateError: false,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    unsetResponse: (state) => {
      state.response = undefined;
    },
    getStart: (state) => {
      state.getting = true;
      state.dettagli = undefined;
      state.getError = false;
    },
    getSuccess: (state, action: PayloadAction<Account>) => {
      state.dettagli = action.payload;
      state.getError = false;
      state.getting = false;
    },
    getFail: (state, action: PayloadAction<string>) => {
      state.dettagli = undefined;
      state.getError = false;
      state.getting = false;
      state.response = action.payload;
    },
    listStart: (state) => {
      state.listing = true;
      state.list = undefined;
      state.listError = false;
    },
    listSuccess: (state, action: PayloadAction<Account[]>) => {
      state.list = action.payload;
      state.listError = false;
      state.listing = false;
    },
    listFail: (state, action: PayloadAction<string>) => {
      state.list = undefined;
      state.listError = false;
      state.listing = false;
      state.response = action.payload;
    },
    putStart: (state) => {
      state.updating = true;
      state.updateError = false;
    },
    putSuccess: (state, action: PayloadAction<Account>) => {
      state.dettagli = action.payload;
      state.updateError = false;
      state.updating = false;
    },
    putFail: (state, action: PayloadAction<string>) => {
      state.updateError = false;
      state.updating = false;
      state.response = action.payload;
    },
  },
});

export const {
  unsetResponse,
  getStart,
  getSuccess,
  getFail,
  listSuccess,
  listFail,
  listStart,
  putFail,
  putStart,
  putSuccess,
} = accountSlice.actions;

export default accountSlice.reducer;
