import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { accountSlice } from "./features/account/slice";
import { aziendeSlice } from "./features/aziende/slice";
import { negoziSlice } from "./features/negozi/slice";

export const store = configureStore({
  reducer: {
    account: accountSlice.reducer,
    aziende: aziendeSlice.reducer,
    negozi: negoziSlice.reducer,
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
