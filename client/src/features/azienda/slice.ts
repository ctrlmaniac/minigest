import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { findIndex, remove } from "lodash";
import { Azienda, Negozio } from "~/types";

interface State {
  exists: boolean;
}

const initialState: State = {
  exists: false,
};

export const aziendaSlice = createSlice({
  name: "aziende",
  initialState,
  reducers: {
    setExists: (state, action: PayloadAction<boolean>) => {
      state.exists = action.payload;
    },
  },
});

export const { setExists } = aziendaSlice.actions;

export default aziendaSlice.reducer;
