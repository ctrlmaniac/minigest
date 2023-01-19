import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filter } from "lodash";
import type { TipoDocFisc } from "~/models";

interface TipoDocFiscState {
  listing: boolean;
  listError: boolean;
  posting: boolean;
  postError: boolean;
  postSuccess: string | null;
  removing: boolean;
  removeError: boolean;
  list?: TipoDocFisc[];
}

const initialState: TipoDocFiscState = {
  listing: false,
  listError: false,
  posting: false,
  postError: false,
  postSuccess: null,
  removing: false,
  removeError: false,
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
    postSuccess: (state, action: PayloadAction<TipoDocFisc>) => {
      state.postSuccess = action.payload.id!;
      state.postError = false;
      state.posting = false;
    },
    postFail: (state) => {
      state.postError = true;
      state.posting = false;
      state.postSuccess = null;
    },
    removeSuccess: (state, action: PayloadAction<string>) => {
      state.removeError = false;
      state.removing = false;

      state.list = filter(state.list, (tdf) => tdf.id !== action.payload);
    },
    removeFail: (state) => {
      state.removeError = true;
      state.removing = false;
    },
  },
});

export const {
  listSuccess,
  listFail,
  postSuccess,
  postFail,
  removeSuccess,
  removeFail,
} = tipoDocFiscSlice.actions;

export default tipoDocFiscSlice.reducer;
