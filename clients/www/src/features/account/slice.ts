import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
  exists: boolean;
  login: boolean;
  loginError: boolean;
  loginResponse: String;
}

const initialState: AccountState = {
  exists: false,
  login: false,
  loginError: false,
  loginResponse: "",
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setExists: (state, action: PayloadAction<boolean>) => {
      state.exists = action.payload;
    },
    loginStart: (state) => {
      state.login = true;
      state.loginResponse = "";
      state.loginError = false;
    },
    loginSuccess: (state, action: PayloadAction<String>) => {
      state.loginResponse = action.payload;
      state.loginError = false;
      state.login = false;
    },
    loginFail: (state, action: PayloadAction<String>) => {
      state.loginResponse = action.payload;
      state.loginError = true;
      state.login = false;
    },
  },
});

export const { setExists, loginStart, loginSuccess, loginFail } =
  accountSlice.actions;

export default accountSlice.reducer;
