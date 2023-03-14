import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  login: boolean;
  loginError: boolean;
  response?: string;
}

const initialState: State = {
  login: false,
  loginError: false,
  response: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
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
  },
});

export const { loginStart, loginSuccess, loginFail } = authSlice.actions;

export default authSlice.reducer;
