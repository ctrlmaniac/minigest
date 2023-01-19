import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Negozio } from "~/models";

interface NegozioState {
  getting: boolean;
  getError: boolean;
  dettagli?: Negozio;
  selected?: Negozio;
  listByAzienda?: Negozio[];
}

const initialState: NegozioState = {
  getting: true,
  getError: false,
  dettagli: undefined,
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
  },
});

export const {
  getSuccess,
  getFail,
  getSelectedSuccess,
  listByAziendaSuccess,
  listByAziendaFail,
} = negozioSlice.actions;

export default negozioSlice.reducer;
