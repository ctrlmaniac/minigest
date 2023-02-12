import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { findIndex, remove } from "lodash";
import { TipoDocFisc } from "~/types";

interface State {
  response?: string;
  list?: TipoDocFisc[];
  listing: boolean;
  listError: boolean;
  posting: boolean;
  postError: boolean;
  putting: boolean;
  putError: boolean;
  removing: boolean;
  removeError: boolean;
}

const initialState: State = {
  response: undefined,
  list: undefined,
  listing: false,
  listError: false,
  posting: false,
  postError: false,
  putting: false,
  putError: false,
  removing: false,
  removeError: false,
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
    postStart: (state) => {
      state.posting = true;
      state.postError = false;
      state.response = undefined;
    },
    postSuccess: (state, action: PayloadAction<TipoDocFisc>) => {
      state.response = "Tipo Doc. Fisc. aggiunto ";
      state.postError = false;
      state.posting = false;
      state.list = [...state.list!, action.payload];
    },
    postFail: (state, action: PayloadAction<string>) => {
      state.postError = true;
      state.response = action.payload;
      state.posting = false;
    },
    putStart: (state) => {
      state.putting = true;
      state.putError = false;
      state.response = undefined;
    },
    putSuccess: (state, action: PayloadAction<TipoDocFisc>) => {
      const index = findIndex(state.list!, (o) => o.id === action.payload.id);
      const list = [...state.list!];
      list[index] = action.payload;

      state.list = list;
      state.response = "Tipo Doc. Fisc. aggiornato";
      state.putError = false;
      state.putting = false;
    },
    putFail: (state, action: PayloadAction<string>) => {
      state.putError = true;
      state.response = action.payload;
      state.putting = false;
    },
    removeStart: (state) => {
      state.removing = true;
      state.removeError = false;
      state.response = undefined;
    },
    removeSuccess: (state, action: PayloadAction<string>) => {
      const list = [...state.list!];

      remove(list, (o) => o.id === action.payload);

      state.list = list;
      state.response = "Tipo Doc. Fisc. eliminato con successo";
      state.removeError = false;
      state.removing = false;
    },
    removeFail: (state, action: PayloadAction<string>) => {
      state.removeError = true;
      state.response = action.payload;
      state.removing = false;
    },
  },
});

export const {
  unsetResponse,
  listFail,
  listStart,
  listSuccess,
  postFail,
  postStart,
  postSuccess,
  putFail,
  putStart,
  putSuccess,
  removeFail,
  removeStart,
  removeSuccess,
} = tipiDocFiscSlice.actions;

export default tipiDocFiscSlice.reducer;
