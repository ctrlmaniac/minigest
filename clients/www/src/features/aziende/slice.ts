import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  exists: boolean;
}

const initialState: State = {
  exists: false,
};

export const aziendeSlice = createSlice({
  name: "aziende",
  initialState,
  reducers: {
    setExists: (state, action: PayloadAction<boolean>) => {
      state.exists = action.payload;
    },
  },
});

export const { setExists } = aziendeSlice.actions;

export default aziendeSlice.reducer;
