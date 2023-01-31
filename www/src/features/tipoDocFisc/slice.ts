import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filter } from "lodash";
import type { TipoDocFisc } from "~/types";

interface TipoDocFiscState {
  listing: boolean;
  listError?: string;
  posting: boolean;
  postError?: string;
  postSuccess: string | null;
  removing: boolean;
  removeError?: string;
  getting: boolean;
  getError?: string;
  putting: boolean;
  putError?: string;
  list?: TipoDocFisc[];
  dettagli?: TipoDocFisc;
}

const initialState: TipoDocFiscState = {
  listing: false,
  listError: undefined,
  posting: false,
  postError: undefined,
  postSuccess: null,
  removing: false,
  removeError: undefined,
  getting: true,
  getError: undefined,
  list: undefined,
  putting: false,
  putError: undefined,
  dettagli: undefined,
};

export const tipoDocFiscSlice = createSlice({
  name: "tipi-doc-fisc",
  initialState,
  reducers: {
    listSuccess: (state, action: PayloadAction<TipoDocFisc[]>) => {
      state.list = action.payload;
      state.listError = undefined;
    },
    listFail: (state, action: PayloadAction<string>) => {
      state.list = undefined;
      state.listError = action.payload;
      state.listing = false;
    },
    postSuccess: (state, action: PayloadAction<TipoDocFisc>) => {
      state.postSuccess = action.payload.id!;
      state.postError = undefined;
      state.posting = false;
    },
    postFail: (state, action: PayloadAction<string>) => {
      state.postError = action.payload;
      state.posting = false;
      state.postSuccess = null;
    },
    removeSuccess: (state, action: PayloadAction<string>) => {
      state.removeError = undefined;
      state.removing = false;

      state.list = filter(state.list, (tdf) => tdf.id !== action.payload);
    },
    removeFail: (state, action: PayloadAction<string>) => {
      state.removeError = action.payload;
      state.removing = false;
    },
    getSuccess: (state, action: PayloadAction<TipoDocFisc>) => {
      state.dettagli = action.payload;
      state.getError = undefined;
      state.getting = false;
    },
    getFail: (state, action: PayloadAction<string>) => {
      state.getError = action.payload;
      state.dettagli = undefined;
      state.getting = false;
    },
    putSuccess: (state, action: PayloadAction<TipoDocFisc>) => {
      const list = [...state.list!];

      for (const i in list) {
        if (list[i].id === action.payload.id) {
          list[i] = action.payload;
        }
      }

      state.putError = undefined;
      state.putting = false;
      state.list = list;
    },
    putFail: (state, action: PayloadAction<string>) => {
      state.putError = action.payload;
      state.putting = false;
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
  getSuccess,
  getFail,
  putSuccess,
  putFail,
} = tipoDocFiscSlice.actions;

export default tipoDocFiscSlice.reducer;
