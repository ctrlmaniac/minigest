import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoadingScreen } from "components";

// Pages
const Root = lazy(() => import("~/pages/Root"));
const NotFound = lazy(() => import("~/pages/NotFound"));
const Home = lazy(() => import("~/pages/Home"));
const Accedi = lazy(() => import("~/pages/Accedi"));

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
