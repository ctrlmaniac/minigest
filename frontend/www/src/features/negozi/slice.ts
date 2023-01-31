import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { findIndex } from "lodash";
import type { Negozio } from "~/types";

interface NegozioState {
  getting: boolean;
  getError?: string;
  posting: boolean;
  postError?: string;
  putting: boolean;
  putError?: string;
  removing: boolean;
  removeError?: string;
  dettagli?: Negozio;
  selected?: Negozio;
  listByAzienda?: Negozio[];
}

const initialState: NegozioState = {
  getting: true,
  getError: undefined,
  dettagli: undefined,
  posting: false,
  postError: undefined,
  putting: false,
  putError: undefined,
  removing: false,
  removeError: undefined,
  selected: undefined,
  listByAzienda: undefined,
};

export const negozioSlice = createSlice({
  name: "negozio",
  initialState,
  reducers: {
    getSuccess: (state, action: PayloadAction<Negozio>) => {
      state.dettagli = action.payload;
      state.getError = undefined;
      state.getting = false;
    },
    getFail: (state, action: PayloadAction<string>) => {
      state.getError = action.payload;
      state.getting = false;
    },
    getSelectedSuccess: (state, action: PayloadAction<Negozio>) => {
      state.selected = action.payload;
    },
    listByAziendaSuccess: (state, action: PayloadAction<Negozio[]>) => {
      state.listByAzienda = action.payload;
    },
    listByAziendaFail: (state) => {
      state.listByAzienda = undefined;
    },
    postSuccess: (state) => {
      state.postError = undefined;
      state.posting = false;
    },
    postFail: (state, action: PayloadAction<string>) => {
      state.postError = action.payload;
      state.posting = false;
    },
    putSuccess: (state) => {
      state.putError = undefined;
      state.putting = false;
    },
    putFail: (state, action: PayloadAction<string>) => {
      state.putError = action.payload;
      state.putting = false;
    },
    removeSuccess: (state) => {
      state.removeError = undefined;
      state.removing = false;
    },
    removeFail: (state, action: PayloadAction<string>) => {
      state.removeError = action.payload;
      state.removing = false;
    },
  },
});

export const {
  getSuccess,
  getFail,
  getSelectedSuccess,
  listByAziendaSuccess,
  listByAziendaFail,
  postSuccess,
  postFail,
  putSuccess,
  putFail,
  removeSuccess,
  removeFail,
} = negozioSlice.actions;

export default negozioSlice.reducer;
