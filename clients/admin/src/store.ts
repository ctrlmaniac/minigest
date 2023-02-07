import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import logger from "redux-logger";

// reducers
import { tipoDocFiscSlice } from "./features/tipoDocFisc/slice";
import { accountRoleSlice } from "./features/accountRole/slice";

export const store = configureStore({
  reducer: {
    tipiDocFisc: tipoDocFiscSlice.reducer,
    accountRuoli: accountRoleSlice.reducer,
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
