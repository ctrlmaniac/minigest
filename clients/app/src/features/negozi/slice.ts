import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Negozio } from "~/types";

interface State {
  selected?: Negozio;
  posting: boolean;
  postError?: string;
}

const initialState: State = {
  selected: undefined,
  posting: false,
  postError: undefined,
};

export const negoziSlice = createSlice({
  name: "negozi",
  initialState,
  reducers: {
    setSelected: (state, action: PayloadAction<Negozio | undefined>) => {
      state.selected = action.payload;
    },
    postStart: (state) => {
      state.postError = undefined;
      state.posting = true;
    },
    postSuccess: (state, action: PayloadAction<Negozio>) => {
      state.postError = undefined;
      state.posting = false;
    },
    postFail: (state, action: PayloadAction<string>) => {
      state.postError = action.payload;
      state.posting = false;
    },
  },
});

export const { setSelected, postStart, postSuccess, postFail } =
  negoziSlice.actions;

export default negoziSlice.reducer;
