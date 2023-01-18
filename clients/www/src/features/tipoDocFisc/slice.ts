import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { TipoDocFisc } from "~/models";

interface TipoDocFiscState {
  listing: boolean;
  listError: boolean;
  list?: TipoDocFisc[];
}

const initialState: TipoDocFiscState = {
  listing: false,
  listError: false,
  list: undefined,
};

export const tipoDocFiscSlice = createSlice({
  name: "tipi-doc-fisc",
  initialState,
  reducers: {
    listSuccess: (state, action: PayloadAction<TipoDocFisc[]>) => {
      state.list = action.payload;
      state.listError = false;
    },
    listFail: (state) => {
      state.list = undefined;
      state.listError = true;
      state.listing = false;
    },
  },
});

export const { listSuccess, listFail } = tipoDocFiscSlice.actions;

export default tipoDocFiscSlice.reducer;
