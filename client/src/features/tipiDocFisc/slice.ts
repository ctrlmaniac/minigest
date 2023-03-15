import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { findIndex, remove } from "lodash";
import { Fattura, TipoDocFisc } from "~/types";

interface State {
  listing: boolean;
  listError: boolean;
  response?: string;
  list?: TipoDocFisc[];
}

const initialState: State = {
  listing: false,
  listError: false,
  response: undefined,
  list: undefined,
};

export const tipiDocFiscSlice = createSlice({
  name: "tipiDocFisc",
  initialState,
  reducers: {
    unsetResponse: (state) => {
      state.response = undefined;
    },
    listStart: (state) => {
      state.listError = false;
      state.listing = true;
    },
    listSuccess: (state, action: PayloadAction<TipoDocFisc[]>) => {
      state.list = action.payload;
      state.listError = false;
      state.listing = false;
    },
    listFail: (state, action: PayloadAction<string>) => {
      state.listError = true;
      state.listing = false;
      state.response = action.payload;
    },
  },
});

export const { unsetResponse, listFail, listStart, listSuccess } =
  tipiDocFiscSlice.actions;

export default tipiDocFiscSlice.reducer;
