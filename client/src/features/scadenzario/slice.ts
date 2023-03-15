import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Scadenzario } from "~/types";

interface State {
  listing: boolean;
  listError: boolean;
  list?: Scadenzario[];
  response?: string;
}

const initialState: State = {
  listing: false,
  listError: false,
  response: undefined,
  list: undefined,
};

export const scadenzarioSlice = createSlice({
  name: "scadenzario",
  initialState,
  reducers: {
    unsetResponse: (state) => {
      state.response = undefined;
    },
    listStart: (state) => {
      state.listError = false;
      state.listing = true;
    },
    listSuccess: (state, action: PayloadAction<Scadenzario[]>) => {
      state.list = action.payload;
      state.listError = false;
      state.listing = false;
    },
    listFail: (state, action: PayloadAction<string>) => {
      state.listError = true;
      state.listing = false;
      state.response = action.payload;
    },
  },
});

export const { unsetResponse, listFail, listStart, listSuccess } =
  scadenzarioSlice.actions;

export default scadenzarioSlice.reducer;
