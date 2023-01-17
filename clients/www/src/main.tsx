import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./context/theme";
import { LoadingScreen } from "./components";
import { Provider } from "react-redux";
import { store } from "./store";

const Welcome = React.lazy(() => import("./Welcome"));
const Login = React.lazy(() => import("./Login"));
const App = React.lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <React.Suspense fallback={<LoadingScreen />}>
                  <Welcome />
                </React.Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <React.Suspense fallback={<LoadingScreen />}>
                  <Login />
                </React.Suspense>
              }
            />
            <Route
              path="/app/*"
              element={
                <React.Suspense fallback={<LoadingScreen />}>
                  <App />
                </React.Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
