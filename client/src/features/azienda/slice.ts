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
}

const initialState: State = {
  exists: false,
  response: undefined,
  dettagli: undefined,
  posting: false,
  postError: false,
  listing: false,
  listError: false,
};

export const aziendaSlice = createSlice({
  name: "aziende",
  initialState,
  reducers: {
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
  },
});

export const {
  setExists,
  postFail,
  postStart,
  postSuccess,
  listFail,
  listStart,
  listSuccess,
} = aziendaSlice.actions;

export default aziendaSlice.reducer;
