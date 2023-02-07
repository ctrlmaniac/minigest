import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoadingScreen } from "components";

// Pages
const Root = React.lazy(() => import("~/pages/Root"));
const Home = React.lazy(() => import("~/pages/Home"));
const Accedi = React.lazy(() => import("~/pages/Accedi"));
const Registrati = React.lazy(() => import("~/pages/Registrati"));
const PasswordReset = React.lazy(() => import("~/pages/PasswordReset"));
const NotFound = React.lazy(() => import("~/pages/NotFound"));

export default createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback={<LoadingScreen />}>
        <Root />
      </React.Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <React.Suspense fallback={<LoadingScreen />}>
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: "accedi",
        element: (
          <React.Suspense fallback={<LoadingScreen />}>
            <Accedi />
          </React.Suspense>
        ),
      },
      {
        path: "registrati",
        element: (
          <React.Suspense fallback={<LoadingScreen />}>
            <Registrati />
          </React.Suspense>
        ),
      },
      {
        path: "password-reset",
        element: (
          <React.Suspense fallback={<LoadingScreen />}>
            <PasswordReset />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <React.Suspense fallback={<LoadingScreen />}>
        <NotFound />
      </React.Suspense>
    ),
  },
]);
