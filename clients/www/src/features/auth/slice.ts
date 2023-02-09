import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  exists: boolean;
  login: boolean;
  loginError: boolean;
  loginResponse: string;
  isTokenValid: boolean;
  resetting: boolean;
  resetError?: string;
  resetResponse?: string;
  issuing: boolean;
  issueError?: string;
  issueRespose?: string;
}

const initialState: State = {
  exists: false,
  login: false,
  loginError: false,
  loginResponse: "",
  isTokenValid: false,
  resetting: false,
  resetError: undefined,
  resetResponse: undefined,
  issuing: false,
  issueError: undefined,
  issueRespose: undefined,
};

export const authSlice = createSlice({
  name: "auth",
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
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.loginResponse = action.payload;
      state.loginError = false;
      state.login = false;
    },
    loginFail: (state, action: PayloadAction<string>) => {
      state.loginResponse = action.payload;
      state.loginError = true;
      state.login = false;
    },
    setTokenValidity: (state, action: PayloadAction<boolean>) => {
      state.isTokenValid = action.payload;
    },
    resetStart: (state) => {
      state.resetError = undefined;
      state.resetting = true;
      state.resetResponse = undefined;
    },
    resetSuccess: (state, action: PayloadAction<string>) => {
      state.resetError = undefined;
      state.resetResponse = action.payload;
      state.resetting = false;
    },
    resetFail: (state, action: PayloadAction<string>) => {
      state.resetError = action.payload;
      state.resetResponse = undefined;
      state.resetting = false;
    },
    issueTokenStart: (state) => {
      state.issuing = true;
      state.issueError = undefined;
      state.issueRespose = undefined;
    },
    issueTokenSuccess: (state, action: PayloadAction<string>) => {
      state.issueError = undefined;
      state.issueRespose = action.payload;
      state.issuing = false;
    },
    issueTokenFail: (state, action: PayloadAction<string>) => {
      state.issueError = action.payload;
      state.issueRespose = undefined;
      state.issuing = false;
    },
  },
});

export const {
  setExists,
  loginStart,
  loginSuccess,
  loginFail,
  setTokenValidity,
  resetStart,
  resetSuccess,
  resetFail,
  issueTokenStart,
  issueTokenSuccess,
  issueTokenFail,
} = authSlice.actions;

export default authSlice.reducer;
