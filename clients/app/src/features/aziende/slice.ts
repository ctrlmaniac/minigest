import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Azienda, Negozio } from "~/types";

interface State {
  exists: boolean;
  selected?: Azienda;
}

const initialState: State = {
  exists: false,
  selected: undefined,
};

export const aziendeSlice = createSlice({
  name: "aziende",
  initialState,
  reducers: {
    setExists: (state, action: PayloadAction<boolean>) => {
      state.exists = action.payload;
    },
    setSelected: (state, action: PayloadAction<Azienda>) => {
      state.selected = action.payload;
    },
    addNegozio: (state, action: PayloadAction<Negozio>) => {
      state.selected!.negozi = [...state.selected!.negozi!, action.payload];
    },
  },
});

export const { setExists, setSelected, addNegozio } = aziendeSlice.actions;

export default aziendeSlice.reducer;
