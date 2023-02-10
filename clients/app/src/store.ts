import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { accountSlice } from "./features/account/slice";
import { aziendeSlice } from "./features/aziende/slice";
import { negoziSlice } from "./features/negozi/slice";
import { authSlice } from "./features/auth/slice";
import { chiusureFiscaliSlice } from "./features/chiusureFiscali/slice";
import { fattureSlice } from "./features/fatture/slice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    account: accountSlice.reducer,
    aziende: aziendeSlice.reducer,
    negozi: negoziSlice.reducer,
    chiusureFiscali: chiusureFiscaliSlice.reducer,
    fatture: fattureSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
