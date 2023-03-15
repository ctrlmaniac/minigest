import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { findIndex, remove } from "lodash";
import { Fattura } from "~/types";

interface State {
  response?: string;
  list?: Fattura[];
  dettagli?: Fattura;
  listing: boolean;
  listError: boolean;
  getting: boolean;
  getError: boolean;
  posting: boolean;
  postError: boolean;
  putting: boolean;
  putError: boolean;
  removing: boolean;
  removeError: boolean;
  uploading: boolean;
  uploadError: boolean;
}

const initialState: State = {
  response: undefined,
  list: undefined,
  dettagli: undefined,
  listing: false,
  listError: false,
  getting: false,
  getError: false,
  posting: false,
  postError: false,
  putting: false,
  putError: false,
  removing: false,
  removeError: false,
  uploading: false,
  uploadError: false,
};

export const fattureSlice = createSlice({
  name: "fatture",
  initialState,
  reducers: {
    unsetResponse: (state) => {
      state.response = undefined;
    },
    listStart: (state) => {
      state.listError = false;
      state.listing = true;
    },
    listSuccess: (state, action: PayloadAction<Fattura[]>) => {
      state.list = action.payload;
      state.listError = false;
      state.listing = false;
    },
    listFail: (state, action: PayloadAction<string>) => {
      state.listError = true;
      state.listing = false;
      state.response = action.payload;
    },
    getStart: (state) => {
      state.getting = true;
      state.dettagli = undefined;
      state.getError = false;
    },
    getSuccess: (state, action: PayloadAction<Fattura>) => {
      state.dettagli = action.payload;
      state.getError = false;
      state.getting = false;
    },
    getFail: (state, action: PayloadAction<string>) => {
      state.getError = true;
      state.getting = false;
      state.response = action.payload;
    },
    removeStart: (state) => {
      state.removing = true;
      state.response = undefined;
      state.removeError = false;
    },
    removeSuccess: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
      state.removeError = false;
      state.removing = false;
    },
    removeFail: (state, action: PayloadAction<string>) => {
      state.removeError = true;
      state.removing = false;
      state.response = action.payload;
    },
    removeFromList: (state, action: PayloadAction<string>) => {
      const chiusure = [...state.list!];

      remove(chiusure, (o) => o.id === action.payload);

      state.list = chiusure;
    },
    postStart: (state) => {
      state.posting = true;
      state.response = undefined;
      state.postError = false;
    },
    postSuccess: (state, action: PayloadAction<Fattura>) => {
      state.list = [...state.list!, action.payload];
      state.response = "fattura aggiunta";
      state.postError = false;
      state.posting = false;
    },
    postFail: (state, action: PayloadAction<string>) => {
      state.postError = true;
      state.posting = false;
      state.response = action.payload;
    },
    putStart: (state) => {
      state.putting = true;
      state.response = undefined;
      state.putError = false;
    },
    putSuccess: (state, action: PayloadAction<string>) => {
      state.response = "fattura modificata";
      state.putError = false;
      state.putting = false;
    },
    putFail: (state, action: PayloadAction<string>) => {
      state.putError = true;
      state.putting = false;
      state.response = action.payload;
    },
    uploadStart: (state) => {
      state.dettagli = undefined;
      state.response = undefined;
      state.uploadError = false;
      state.uploading = true;
    },
    uploadFail: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
      state.uploadError = true;
      state.uploading = false;
    },
    uploadSuccess: (state, action: PayloadAction<Fattura>) => {
      state.dettagli = action.payload;
      state.response = "File caricato con successo";
      state.uploadError = false;
      state.uploading = false;
    },
  },
});

export const {
  unsetResponse,
  listFail,
  listStart,
  listSuccess,
  getFail,
  getStart,
  getSuccess,
  removeFail,
  removeStart,
  removeSuccess,
  removeFromList,
  postFail,
  postStart,
  postSuccess,
  putFail,
  putStart,
  putSuccess,
  uploadFail,
  uploadStart,
  uploadSuccess,
} = fattureSlice.actions;

export default fattureSlice.reducer;
