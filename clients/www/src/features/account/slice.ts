import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
  exists: boolean;
}

const initialState: AccountState = {
  exists: false,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setExists: (state, action: PayloadAction<boolean>) => {
      state.exists = action.payload;
    },
  },
});

export const { setExists } = accountSlice.actions;

export default accountSlice.reducer;
