import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoadingScreen } from "components";

// Pages
const Root = React.lazy(() => import("~/pages/Root"));
const Home = React.lazy(() => import("~/pages/Home"));
const Accedi = React.lazy(() => import("~/pages/Accedi"));
const Admin = React.lazy(() => import("~/pages/Admin"));
const App = React.lazy(() => import("~/pages/App"));
const Registrati = React.lazy(() => import("~/pages/Registrati"));
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
        path: "admin",
        element: (
          <React.Suspense fallback={<LoadingScreen />}>
            <Admin />
          </React.Suspense>
        ),
      },
      {
        path: "app",
        element: (
          <React.Suspense fallback={<LoadingScreen />}>
            <App />
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
