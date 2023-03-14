import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoadingScreen } from "./components";

// Pages
const Root = lazy(() => import("~/pages/Root"));
const Accedi = lazy(() => import("~/pages/Accedi"));
const Home = lazy(() => import("~/pages/Home"));
const AccountLista = lazy(() => import("~/pages/Account/Lista"));
const AccountDettagli = lazy(() => import("~/pages/Account/Dettagli"));
const AccountModifica = lazy(() => import("~/pages/Account/Modifica"));
const AccountAggiungi = lazy(() => import("~/pages/Account/Aggiungi"));

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
        path: "/account",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AccountLista />
          </Suspense>
        ),
      },
      {
        path: "/account/aggiungi",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AccountAggiungi />
          </Suspense>
        ),
      },
      {
        path: "/account/dettagli/:id",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AccountDettagli />
          </Suspense>
        ),
      },
      {
        path: "/account/modifica/:id",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AccountModifica />
          </Suspense>
        ),
      },
    ],
  },
]);
