import { createSlice } from "@reduxjs/toolkit";

interface ChiusuraFiscaleState {
  deleting: boolean;
  deleteError: boolean;
}

const initialState: ChiusuraFiscaleState = {
  deleting: false,
  deleteError: false,
};

export const chiusureFiscaliRepartiSlice = createSlice({
  name: "chiusure-fiscali-reparti",
  initialState,
  reducers: {
    deleteSuccess: (state) => {
      state.deleteError = false;
      state.deleting = false;
    },
    deleteFail: (state) => {
      state.deleteError = true;
      state.deleting = false;
    },
  },
});

export const { deleteFail, deleteSuccess } =
  chiusureFiscaliRepartiSlice.actions;

export default chiusureFiscaliRepartiSlice.reducer;
