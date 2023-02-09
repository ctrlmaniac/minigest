import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  exists: boolean;
}

const initialState: State = {
  exists: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setExists: (state, action: PayloadAction<boolean>) => {
      state.exists = action.payload;
    },
  },
});

export const { setExists } = authSlice.actions;

export default authSlice.reducer;
