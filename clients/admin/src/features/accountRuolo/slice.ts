import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccountRuolo } from "~/types";

interface State {
  response?: string;
  list?: AccountRuolo[];
  listing: boolean;
  listError: boolean;
}

const initialState: State = {
  response: undefined,
  list: undefined,
  listing: false,
  listError: false,
};

export const accountRuoloSlice = createSlice({
  name: "account-ruoli",
  initialState,
  reducers: {
    listStart: (state) => {
      state.listing = true;
      state.list = undefined;
      state.listError = false;
    },
    listSuccess: (state, action: PayloadAction<AccountRuolo[]>) => {
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
  },
});

export const { listSuccess, listFail, listStart } = accountRuoloSlice.actions;

export default accountRuoloSlice.reducer;
