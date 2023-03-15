import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  response?: string;
  isTokenValid: boolean;
  exists: boolean;
  login: boolean;
  loginError: boolean;
  resetting: boolean;
  resetError: boolean;
  issuing: boolean;
  issueError: boolean;
}

const initialState: State = {
  response: undefined,
  isTokenValid: false,
  exists: false,
  login: false,
  loginError: false,
  resetting: false,
  resetError: false,
  issuing: false,
  issueError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    unsetResponse: (state) => {
      state.response = undefined;
    },
    setTokenValidity: (state, action: PayloadAction<boolean>) => {
      state.isTokenValid = action.payload;
    },
    setExists: (state, action: PayloadAction<boolean>) => {
      state.exists = action.payload;
    },
    loginStart: (state) => {
      state.login = true;
      state.response = undefined;
      state.loginError = false;
    },
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
      state.loginError = false;
      state.login = false;
    },
    loginFail: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
      state.loginError = true;
      state.login = false;
    },
    resetStart: (state) => {
      state.resetError = false;
      state.resetting = true;
      state.response = undefined;
    },
    resetSuccess: (state, action: PayloadAction<string>) => {
      state.resetError = false;
      state.response = action.payload;
      state.resetting = false;
    },
    resetFail: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
      state.resetError = true;
      state.resetting = false;
    },
    issueTokenStart: (state) => {
      state.issuing = true;
      state.issueError = false;
      state.response = undefined;
    },
    issueTokenSuccess: (state, action: PayloadAction<string>) => {
      state.issueError = false;
      state.response = action.payload;
      state.issuing = false;
    },
    issueTokenFail: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
      state.issueError = false;
      state.issuing = false;
    },
  },
});

export const {
  setTokenValidity,
  setExists,
  loginStart,
  loginSuccess,
  loginFail,
  resetFail,
  resetStart,
  resetSuccess,
  issueTokenFail,
  issueTokenStart,
  issueTokenSuccess,
} = authSlice.actions;

export default authSlice.reducer;
