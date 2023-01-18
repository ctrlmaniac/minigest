import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import logger from "redux-logger";

// reducers
import { accountSlice } from "./features/account/slice";
import { aziendaSlice } from "./features/aziende/slice";
import { chiusureFiscaliSlice } from "./features/chiusureFiscali/slice";
import { chiusureFiscaliRepartiSlice } from "./features/chiusureFiscaliReparti/slice";

export const store = configureStore({
  reducer: {
    account: accountSlice.reducer,
    aziende: aziendaSlice.reducer,
    chiusureFiscali: chiusureFiscaliSlice.reducer,
    chiusureFiscaliReparti: chiusureFiscaliRepartiSlice.reducer,
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
