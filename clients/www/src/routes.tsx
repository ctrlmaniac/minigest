import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoadingScreen } from "components";

// Pages
const Root = lazy(() => import("~/pages/Root"));
const NotFound = lazy(() => import("~/pages/NotFound"));
const Home = lazy(() => import("~/pages/Home"));
const Accedi = lazy(() => import("~/pages/Accedi"));
const Registrati = lazy(() => import("~/pages/Registrati"));
const Forbidden = lazy(() => import("~/pages/Forbidden"));

export default createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Root />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/accedi",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Accedi />
          </Suspense>
        ),
      },
      {
        path: "/registrati",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Registrati />
          </Suspense>
        ),
      },
      {
        path: "/app",
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <Forbidden />
              </Suspense>
            ),
          },
          {
            path: "*",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <Forbidden />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/admin",
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <Forbidden />
              </Suspense>
            ),
          },
          {
            path: "*",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <Forbidden />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <NotFound />
      </Suspense>
    ),
  },
]);
