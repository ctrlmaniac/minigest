import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { authSlice } from "./features/auth/slice";
import { accountSlice } from "./features/account/slice";
import { aziendaSlice } from "./features/azienda/slice";
import { accountRuoloSlice } from "./features/accountRuolo/slice";
import { negoziSlice } from "./features/negozio/slice";
import { chiusureFiscaliSlice } from "./features/chiusureFiscali/slice";
import { fattureSlice } from "./features/fatture/slice";
import { f24Slice } from "./features/f24/slice";
import { tipiDocFiscSlice } from "./features/tipiDocFisc/slice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    account: accountSlice.reducer,
    accountRuolo: accountRuoloSlice.reducer,
    azienda: aziendaSlice.reducer,
    negozio: negoziSlice.reducer,
    chiusureFiscali: chiusureFiscaliSlice.reducer,
    fatture: fattureSlice.reducer,
    f24: f24Slice.reducer,
    tipiDocFisc: tipiDocFiscSlice.reducer,
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
