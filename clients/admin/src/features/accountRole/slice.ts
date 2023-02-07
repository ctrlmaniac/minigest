import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AccountRole, TipoDocFisc } from "~/types";

interface State {
  listing: boolean;
  listError?: string;
  list?: AccountRole[];
}

const initialState: State = {
  listing: false,
  listError: undefined,
  list: undefined,
};

export const accountRoleSlice = createSlice({
  name: "account-ruoli",
  initialState,
  reducers: {
    listSuccess: (state, action: PayloadAction<AccountRole[]>) => {
      state.list = action.payload;
      state.listError = undefined;
      state.listing = false;
    },
    listFail: (state, action: PayloadAction<string>) => {
      state.list = undefined;
      state.listError = action.payload;
      state.listing = false;
    },
  },
});

export const { listSuccess, listFail } = accountRoleSlice.actions;

export default accountRoleSlice.reducer;
