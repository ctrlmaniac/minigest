import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Azienda } from "~/models";

interface AziendaState {
  getting: boolean;
  getError: boolean;
  listing: boolean;
  listError: boolean;
  posting: boolean;
  postError: boolean;
  putting: boolean;
  putError: boolean;
  removing: boolean;
  removeError: boolean;
  dettagli?: Azienda;
  selected?: Azienda;
  list?: Azienda[];
}

const initialState: AziendaState = {
  getting: true,
  getError: false,
  listing: false,
  listError: false,
  posting: false,
  postError: false,
  putting: false,
  putError: false,
  removing: false,
  removeError: false,
  dettagli: undefined,
  selected: undefined,
  list: undefined,
};

export const aziendaSlice = createSlice({
  name: "azienda",
  initialState,
  reducers: {
    getSuccess: (state, action: PayloadAction<Azienda>) => {
      state.dettagli = action.payload;
      state.getError = false;
      state.getting = false;
    },
    getFail: (state) => {
      state.getError = true;
      state.getting = false;
    },
    getSelectedSuccess: (state, action: PayloadAction<Azienda>) => {
      state.selected = action.payload;
    },
    listSuccess: (state, action: PayloadAction<Azienda[]>) => {
      state.list = action.payload;
      state.listError = false;
      state.listing = false;
    },
    listFail: (state) => {
      state.listError = true;
      state.listing = false;
    },
    postSuccess: (state, action: PayloadAction<Azienda[]>) => {
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
      state.putError = false;
      state.putting = false;
    },
    removeSuccess: (state) => {
      state.removeError = false;
      state.removing = false;
    },
    removeFail: (state) => {
      state.removeError = false;
      state.removing = false;
    },
  },
});

export const {
  getSuccess,
  getFail,
  getSelectedSuccess,
  listSuccess,
  listFail,
  postSuccess,
  postFail,
  putSuccess,
  putFail,
  removeSuccess,
  removeFail,
} = aziendaSlice.actions;

export default aziendaSlice.reducer;
