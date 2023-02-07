import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
  registering: boolean;
  registerError?: string;
  pwResetTokenMessage: string;
  isPwResetTokenValid: boolean;
  pwReset: string;
  isPwReset: boolean;
  reqPwResetMessage?: String;
  exists: boolean;
}

const initialState: AccountState = {
  registering: false,
  registerError: undefined,
  pwResetTokenMessage: "Token non trovato",
  isPwResetTokenValid: false,
  pwReset: "Password non ancora cambiata",
  isPwReset: false,
  reqPwResetMessage: undefined,
  exists: false,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    registerStart: (state) => {
      state.registering = true;
      state.registerError = undefined;
    },
    registerSuccess: (state) => {
      state.registerError = undefined;
      state.registering = false;
    },
    registerFail: (state, action: PayloadAction<string>) => {
      state.registerError = action.payload;
      state.registering = false;
    },
    pwTokenFail: (state, action: PayloadAction<string>) => {
      state.pwResetTokenMessage = action.payload;
      state.isPwResetTokenValid = false;
    },
    pwTokenSuccess: (state, action: PayloadAction<string>) => {
      state.pwResetTokenMessage = action.payload;
      state.isPwResetTokenValid = true;
    },
    pwResetSuccess: (state, action: PayloadAction<string>) => {
      state.pwReset = action.payload;
      state.isPwReset = true;
    },
    pwResetFail: (state, action: PayloadAction<string>) => {
      state.pwReset = action.payload;
      state.isPwReset = false;
    },
    setReqPwMessage: (state, action: PayloadAction<string>) => {
      state.reqPwResetMessage = action.payload;
    },
    setExists: (state, action: PayloadAction<boolean>) => {
      state.exists = action.payload;
    },
  },
});

export const {
  registerStart,
  registerSuccess,
  registerFail,
  pwTokenFail,
  pwTokenSuccess,
  pwResetSuccess,
  pwResetFail,
  setReqPwMessage,
  setExists,
} = accountSlice.actions;

export default accountSlice.reducer;
