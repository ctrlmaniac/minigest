import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filter, find } from "lodash";
import type { TipoDocFisc } from "~/models";

interface TipoDocFiscState {
  listing: boolean;
  listError: boolean;
  posting: boolean;
  postError: boolean;
  postSuccess: string | null;
  removing: boolean;
  removeError: boolean;
  getting: boolean;
  getError: boolean;
  putting: boolean;
  putError: boolean;
  list?: TipoDocFisc[];
  dettagli?: TipoDocFisc;
}

const initialState: TipoDocFiscState = {
  listing: false,
  listError: false,
  posting: false,
  postError: false,
  postSuccess: null,
  removing: false,
  removeError: false,
  getting: true,
  getError: false,
  list: undefined,
  putting: false,
  putError: false,
  dettagli: undefined,
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
    getSuccess: (state, action: PayloadAction<TipoDocFisc>) => {
      state.dettagli = action.payload;
      state.getError = false;
      state.getting = false;
    },
    getFail: (state) => {
      state.getError = true;
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

      state.putError = false;
      state.putting = false;
      state.list = list;
    },
    putFail: (state) => {
      state.putError = true;
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
