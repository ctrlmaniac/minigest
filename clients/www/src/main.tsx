import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./context/theme";
import { LoadingScreen } from "./components";

const Welcome = React.lazy(() => import("./Welcome"));
const App = React.lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            path="/welcome"
            element={
              <React.Suspense fallback={<LoadingScreen />}>
                <Welcome />
              </React.Suspense>
            }
          />
          <Route
            path="/*"
            element={
              <React.Suspense fallback={<LoadingScreen />}>
                <App />
              </React.Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
