import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Azienda } from "~/models";

interface AziendaState {
  getting: boolean;
  getError: boolean;
  listing: boolean;
  listError: boolean;
  dettagli?: Azienda;
  selected?: Azienda;
  list?: Azienda[];
}

const initialState: AziendaState = {
  getting: true,
  getError: false,
  listing: false,
  listError: false,
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
  },
});

export const {
  getSuccess,
  getFail,
  getSelectedSuccess,
  listSuccess,
  listFail,
} = aziendaSlice.actions;

export default aziendaSlice.reducer;
