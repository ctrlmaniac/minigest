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
const PasswordForgot = lazy(() => import("~/pages/Account/Password/Forgot"));
const PasswordReset = lazy(() => import("~/pages/Account/Password/Reset"));
const AziendaList = lazy(() => import("~/pages/Azienda"));
const AziendaDettagli = lazy(() => import("~/pages/Azienda/Dettagli"));
const AziendaModifica = lazy(() => import("~/pages/Azienda/Modifica"));
const AziendaAggiungi = lazy(() => import("~/pages/Azienda/Aggiungi"));
const Negozi = lazy(() => import("~/pages/Negozio"));
const ChiusureFiscali = lazy(() => import("~/pages/ChiusureFiscali"));
const ChiusureFiscaliAggiungi = lazy(
  () => import("~/pages/ChiusureFiscali/Aggiungi")
);
const ChiusureFiscaliDettagli = lazy(
  () => import("~/pages/ChiusureFiscali/Dettagli")
);
const ChiusureFiscaliModifica = lazy(
  () => import("~/pages/ChiusureFiscali/Modifica")
);

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
    path: "/account/password/forgot",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <PasswordForgot />
      </Suspense>
    ),
  },
  {
    path: "/account/password/reset",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <PasswordReset />
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
      {
        path: "/aziende",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AziendaList />
          </Suspense>
        ),
      },
      {
        path: "/aziende/aggiungi",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AziendaAggiungi />
          </Suspense>
        ),
      },
      {
        path: "/aziende/dettagli/:id",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AziendaDettagli />
          </Suspense>
        ),
      },
      {
        path: "/aziende/modifica/:id",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <AziendaModifica />
          </Suspense>
        ),
      },
      {
        path: "/negozi",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Negozi />
          </Suspense>
        ),
      },
      {
        path: "/docfisc/chiusure-fiscali",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ChiusureFiscali />
          </Suspense>
        ),
      },
      {
        path: "/docfisc/chiusure-fiscali/aggiungi",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ChiusureFiscaliAggiungi />
          </Suspense>
        ),
      },
      {
        path: "/docfisc/chiusure-fiscali/dettagli/:id",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ChiusureFiscaliDettagli />
          </Suspense>
        ),
      },
      {
        path: "/docfisc/chiusure-fiscali/modifica/:id",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ChiusureFiscaliModifica />
          </Suspense>
        ),
      },
    ],
  },
]);
