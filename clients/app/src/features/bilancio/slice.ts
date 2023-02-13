import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  getting: boolean;
  getError: boolean;
  response?: string;
  bilancio?: any;
}

const initialState: State = {
  getting: false,
  getError: false,
  bilancio: undefined,
  response: undefined,
};

export const bilancioSlice = createSlice({
  name: "bilancio",
  initialState,
  reducers: {
    unsetResponse: (state) => {
      state.response = undefined;
    },
    getStart: (state) => {
      state.getError = false;
      state.getting = true;
    },
    getSuccess: (state, action: PayloadAction<any>) => {
      state.bilancio = action.payload;
      state.getError = false;
      state.getting = false;
    },
    getFail: (state, action: PayloadAction<string>) => {
      state.getError = true;
      state.getting = false;
      state.response = action.payload;
    },
  },
});

export const { unsetResponse, getFail, getStart, getSuccess } =
  bilancioSlice.actions;

export default bilancioSlice.reducer;
