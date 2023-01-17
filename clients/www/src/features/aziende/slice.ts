import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Azienda } from "~/models";

interface AziendaState {
  getting: boolean;
  getError: boolean;
  dettagli: Azienda | {};
}

const initialState: AziendaState = {
  getting: true,
  getError: false,
  dettagli: {},
};

export const aziendaSlice = createSlice({
  name: "azienda",
  initialState,
  reducers: {
    getSuccess: (state, action: PayloadAction<{}>) => {
      state.dettagli = action.payload;
      state.getError = false;
      state.getting = false;
    },
    getFail: (state) => {
      state.getError = true;
      state.dettagli = {};
      state.getting = false;
    },
  },
});

export const { getSuccess, getFail } = aziendaSlice.actions;

export default aziendaSlice.reducer;
