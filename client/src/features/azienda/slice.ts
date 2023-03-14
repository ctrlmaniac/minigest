import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isEmpty } from "lodash";
import { Azienda } from "~/types";

interface State {
  exists: boolean;
  response?: string;
  dettagli?: Azienda;
  posting: boolean;
  postError: boolean;
}

const initialState: State = {
  exists: false,
  response: undefined,
  dettagli: undefined,
  posting: false,
  postError: false,
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
  },
});

export const { setExists, postFail, postStart, postSuccess } =
  aziendaSlice.actions;

export default aziendaSlice.reducer;
