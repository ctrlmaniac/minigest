import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Azienda } from "~/types";

interface State {
  exists: boolean;
  response?: string;
  dettagli?: Azienda;
  list?: Azienda[];
  posting: boolean;
  postError: boolean;
  listing: boolean;
  listError: boolean;
  removing: boolean;
  removeError: boolean;
  putting: boolean;
  putError: boolean;
  getting: boolean;
  getError: boolean;
}

const initialState: State = {
  exists: false,
  response: undefined,
  dettagli: undefined,
  posting: false,
  postError: false,
  listing: false,
  listError: false,
  removing: false,
  removeError: false,
  putting: false,
  putError: false,
  getting: false,
  getError: false,
};

export const aziendaSlice = createSlice({
  name: "aziende",
  initialState,
  reducers: {
    unsetResponse: (state) => {
      state.response = undefined;
    },
    setExists: (state, action: PayloadAction<boolean>) => {
      state.exists = action.payload;
    },
    postStart: (state) => {
      state.posting = true;
      state.postError = false;
      state.dettagli = undefined;
      state.response = undefined;
    },
    postSuccess: (state, action: PayloadAction<Azienda>) => {
      state.dettagli = action.payload;
      state.postError = false;
      state.response = "Azienda aggiunta con successo";
      state.posting = false;
    },
    postFail: (state, action: PayloadAction<string>) => {
      state.dettagli = undefined;
      state.response = action.payload;
      state.postError = true;
      state.posting = false;
    },
    listStart: (state) => {
      state.listing = true;
      state.listError = false;
      state.list = undefined;
      state.response = undefined;
    },
    listSuccess: (state, action: PayloadAction<Azienda[]>) => {
      state.list = action.payload;
      state.listError = false;
      state.response = "Azienda aggiunta con successo";
      state.listing = false;
    },
    listFail: (state, action: PayloadAction<string>) => {
      state.list = undefined;
      state.response = action.payload;
      state.listError = true;
      state.listing = false;
    },
    removeStart: (state) => {
      state.removing = true;
      state.removeError = false;
      state.response = undefined;
    },
    removeSuccess: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
      state.removeError = false;
      state.removing = false;
    },
    removeFail: (state, action: PayloadAction<string>) => {
      state.removeError = true;
      state.response = action.payload;
      state.removing = false;
    },
    putStart: (state) => {
      state.putting = true;
      state.putError = false;
      state.response = undefined;
    },
    putSuccess: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
      state.putError = false;
      state.putting = false;
    },
    putFail: (state, action: PayloadAction<string>) => {
      state.putError = true;
      state.response = action.payload;
      state.putting = false;
    },
    getStart: (state) => {
      state.getting = true;
      state.getError = false;
      state.dettagli = undefined;
    },
    getSuccess: (state, action: PayloadAction<Azienda>) => {
      state.dettagli = action.payload;
      state.getError = false;
      state.getting = false;
    },
    getFail: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
      state.dettagli = undefined;
      state.getting = false;
      state.getError = true;
    },
  },
});

export const {
  unsetResponse,
  setExists,
  postFail,
  postStart,
  postSuccess,
  listFail,
  listStart,
  listSuccess,
  removeFail,
  removeStart,
  removeSuccess,
  putFail,
  putStart,
  putSuccess,
  getFail,
  getStart,
  getSuccess,
} = aziendaSlice.actions;

export default aziendaSlice.reducer;
