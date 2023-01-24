import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { findIndex } from "lodash";
import type { Negozio } from "~/models";

interface NegozioState {
  getting: boolean;
  getError: boolean;
  dettagli?: Negozio;
  posting: boolean;
  postError: boolean;
  putting: boolean;
  putError: boolean;
  removing: boolean;
  removeError: boolean;
  selected?: Negozio;
  listByAzienda?: Negozio[];
}

const initialState: NegozioState = {
  getting: true,
  getError: false,
  dettagli: undefined,
  posting: false,
  postError: false,
  putting: false,
  putError: false,
  removing: false,
  removeError: false,
  selected: undefined,
  listByAzienda: undefined,
};

export const negozioSlice = createSlice({
  name: "negozio",
  initialState,
  reducers: {
    getSuccess: (state, action: PayloadAction<Negozio>) => {
      state.dettagli = action.payload;
      state.getError = false;
      state.getting = false;
    },
    getFail: (state) => {
      state.getError = true;
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
      state.postError = false;
      state.posting = false;
    },
    postFail: (state) => {
      state.postError = true;
      state.posting = false;
    },
    putSuccess: (state) => {
      state.putError = false;
      state.putting = false;
    },
    putFail: (state) => {
      state.putError = true;
      state.putting = false;
    },
    removeSuccess: (state, action: PayloadAction<string>) => {
      const list = [...state.listByAzienda!];

      const index = findIndex(list, (o) => o.id === action.payload);

      list.splice(index, 1);

      state.listByAzienda = list;
      state.removeError = false;
      state.removing = false;
    },
    removeFail: (state) => {
      state.removeError = true;
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
