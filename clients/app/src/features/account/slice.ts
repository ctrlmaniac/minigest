import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { remove } from "lodash";
import { Account, Azienda } from "~/types";

interface State {
  getting: boolean;
  getError?: string;
  dettagli?: Account;
  updating: boolean;
  updateError?: string;
}

const initialState: State = {
  getting: false,
  getError: undefined,
  dettagli: undefined,
  updating: false,
  updateError: undefined,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    getStart: (state) => {
      state.getting = true;
    },
    getSuccess: (state, action: PayloadAction<Account>) => {
      state.dettagli = action.payload;
      state.getError = undefined;
      state.getting = false;
    },
    getFail: (state, action: PayloadAction<string>) => {
      state.dettagli = undefined;
      state.getError = action.payload;
      state.getting = false;
    },
    putStart: (state) => {
      state.updating = true;
      state.updateError = undefined;
    },
    putSuccess: (state, action: PayloadAction<Account>) => {
      state.updateError = undefined;
      state.dettagli = {
        ...state.dettagli,
        ...action.payload,
      };
      state.updating = false;
    },
    putFail: (state, action: PayloadAction<string>) => {
      state.updateError = action.payload;
      state.updating = false;
    },
    removeAzienda: (state, action: PayloadAction<string>) => {
      const aziende = [...state.dettagli?.aziende!];

      remove(aziende, (o) => o.id === action.payload);

      state.dettagli = {
        ...state.dettagli!,
        aziende: aziende,
      };
    },
  },
});

export const {
  getStart,
  getSuccess,
  getFail,
  putStart,
  putFail,
  putSuccess,
  removeAzienda,
} = accountSlice.actions;

export default accountSlice.reducer;
