import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Fattura } from "~/types";

interface FatturaState {
  listing: boolean;
  listError?: string;
  list?: Fattura[];
  posting: boolean;
  postError?: string;
}

const initialState: FatturaState = {
  listing: true,
  listError: undefined,
  list: undefined,
  posting: true,
  postError: undefined,
};

export const fattureSlice = createSlice({
  name: "fatture",
  initialState,
  reducers: {
    listSuccess: (state, action: PayloadAction<Fattura[]>) => {
      state.list = action.payload;
      state.listError = undefined;
      state.listing = false;
    },
    listFail: (state, action: PayloadAction<string>) => {
      state.list = undefined;
      state.listError = action.payload;
      state.listing = false;
    },
    postSuccess: (state) => {
      state.postError = undefined;
      state.posting = false;
    },
    postFail: (state, action: PayloadAction<string>) => {
      state.postError = action.payload;
      state.posting = false;
    },
  },
});

export const { listSuccess, listFail, postSuccess, postFail } =
  fattureSlice.actions;

export default fattureSlice.reducer;
