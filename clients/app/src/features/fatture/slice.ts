import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { findIndex, remove } from "lodash";
import { Fattura } from "~/types";

interface State {
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
  response?: string;
  list?: Fattura[];
  dettagli?: Fattura;
}

const initialState: State = {
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
  response: undefined,
  list: undefined,
  dettagli: undefined,
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
    putSuccess: (state, action: PayloadAction<Fattura>) => {
      const list = [...state.list!];
      const index = findIndex(list, (o) => o.id === action.payload.id);

      if (index >= 0) {
        list[index] = action.payload;
        state.list = list;
      }

      state.response = "fattura modificata";
      state.putError = false;
      state.putting = false;
    },
    putFail: (state, action: PayloadAction<string>) => {
      state.putError = true;
      state.putting = false;
      state.response = action.payload;
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
} = fattureSlice.actions;

export default fattureSlice.reducer;
