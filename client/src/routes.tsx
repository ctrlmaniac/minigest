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
const FattureLista = lazy(() => import("~/pages/Fatture/ListAll"));
const FattureAggiungi = lazy(() => import("~/pages/Fatture/Aggiungi"));
const FattureCarica = lazy(() => import("~/pages/Fatture/Upload"));
const FattureMode = lazy(() => import("~/pages/Fatture"));
const FattureDettagli = lazy(() => import("~/pages/Fatture/Dettagli"));
const FattureModifica = lazy(() => import("~/pages/Fatture/Modifica"));
const F24 = lazy(() => import("~/pages/F24"));
const F24Aggiungi = lazy(() => import("~/pages/F24/Aggiungi"));
const F24Modifica = lazy(() => import("~/pages/F24/Modifica"));
const F24Dettagli = lazy(() => import("~/pages/F24/Dettagli"));
const Scadenzario = lazy(() => import("~/pages/Scadenzario"));
const RegCorrispettivi = lazy(() => import("~/pages/RegistroCorrispettivi"));

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
      {
        path: "/docfisc/fatture",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <FattureLista />
          </Suspense>
        ),
      },
      {
        path: "/docfisc/fatture/aggiungi",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <FattureAggiungi />
          </Suspense>
        ),
      },
      {
        path: "/docfisc/fatture/carica",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <FattureCarica />
          </Suspense>
        ),
      },
      {
        path: "/docfisc/fatture/:mode",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <FattureMode />
          </Suspense>
        ),
      },
      {
        path: "/docfisc/fatture/dettagli/:id",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <FattureDettagli />
          </Suspense>
        ),
      },
      {
        path: "/docfisc/fatture/modifica/:id",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <FattureModifica />
          </Suspense>
        ),
      },
      {
        path: "/fisco/f24",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <F24 />
          </Suspense>
        ),
      },
      {
        path: "/fisco/f24/aggiungi",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <F24Aggiungi />
          </Suspense>
        ),
      },
      {
        path: "/fisco/f24/modifica/:id",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <F24Modifica />
          </Suspense>
        ),
      },
      {
        path: "/fisco/f24/dettagli/:id",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <F24Dettagli />
          </Suspense>
        ),
      },
      {
        path: "/registro-corrispettivi",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <RegCorrispettivi />
          </Suspense>
        ),
      },
      {
        path: "/scadenzario",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Scadenzario />
          </Suspense>
        ),
      },
    ],
  },
]);
