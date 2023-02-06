import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
  registering: boolean;
  registerError?: string;
}

const initialState: AccountState = {
  registering: false,
  registerError: undefined,
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
  },
});

export const { registerStart, registerSuccess, registerFail } =
  accountSlice.actions;

export default accountSlice.reducer;
