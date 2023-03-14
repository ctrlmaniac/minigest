import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoadingScreen } from "./components";

// Pages
const Root = lazy(() => import("~/pages/Root"));
const Accedi = lazy(() => import("~/pages/Accedi"));
const Home = lazy(() => import("~/pages/Home"));
const AccountDettagli = lazy(() => import("~/pages/Account/Dettagli"));

export default createBrowserRouter([
  {
    path: "/accedi",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Accedi />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Root />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/account/dettagli",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AccountDettagli />
          </Suspense>
        ),
      },
    ],
  },
]);
