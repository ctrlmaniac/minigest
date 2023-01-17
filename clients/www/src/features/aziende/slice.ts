import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Azienda } from "~/models";

interface AziendaState {
  getting: boolean;
  getError: boolean;
  dettagli?: Azienda;
  selected?: Azienda;
}

const initialState: AziendaState = {
  getting: true,
  getError: false,
  dettagli: undefined,
  selected: undefined,
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
  },
});

export const { getSuccess, getFail, getSelectedSuccess } = aziendaSlice.actions;

export default aziendaSlice.reducer;
