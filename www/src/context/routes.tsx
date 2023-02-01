import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoadingScreen } from "~/components";

// pages
const Home = React.lazy(() => import("~/pages/Home"));
const Login = React.lazy(() => import("~/pages/Login"));
const App = React.lazy(() => import("~/pages/App"));
const NotFound = React.lazy(() => import("~/pages/NotFound"));
const Dashboard = React.lazy(() => import("~/pages/Dashboard"));
const ChiusureFiscaliLista = React.lazy(
  () => import("~/pages/ChiusureFiscali/Lista")
);
const Account = React.lazy(() => import("~/pages/Account"));
const AziendeDettagli = React.lazy(() => import("~/pages/Aziende/Dettagli"));
const AziendeModifica = React.lazy(() => import("~/pages/Aziende/Modifica"));
const AziendeAggiungi = React.lazy(() => import("~/pages/Aziende/Aggiungi"));
const AziendeLista = React.lazy(() => import("~/pages/Aziende/Lista"));
const NegoziLista = React.lazy(() => import("~/pages/Negozi/Lista"));
const NegoziAggiungi = React.lazy(() => import("~/pages/Negozi/Aggiungi"));
const NegoziDettagli = React.lazy(() => import("~/pages/Negozi/Dettagli"));
const NegoziModifica = React.lazy(() => import("~/pages/Negozi/Modifica"));
const TipoDocFiscLista = React.lazy(() => import("~/pages/TipoDocFisc/Lista"));
const TipiDocFiscAggiungi = React.lazy(
  () => import("~/pages/TipoDocFisc/Aggiungi")
);
const TipiDocFiscModifica = React.lazy(
  () => import("~/pages/TipoDocFisc/Modifica")
);
const ChiusureFiscaliAggiungi = React.lazy(
  () => import("~/pages/ChiusureFiscali/Aggiungi")
);
const ChiusureFiscaliDettagli = React.lazy(
  () => import("~/pages/ChiusureFiscali/Dettagli")
);
const ChiusureFiscaliModifica = React.lazy(
  () => import("~/pages/ChiusureFiscali/Modifica")
);
const FattureVenditaLista = React.lazy(
  () => import("~/pages/Fatture/Vendita/Lista")
);
const FattureAggiungi = React.lazy(() => import("~/pages/Fatture/Aggiungi"));
const FattureDettagli = React.lazy(() => import("~/pages/Fatture/Dettagli"));
const FattureModifica = React.lazy(() => import("~/pages/Fatture/Modifica"));
const FattureAcquistoLista = React.lazy(
  () => import("~/pages/Fatture/Acquisto/Lista")
);

// ROUTER
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback={<LoadingScreen />}>
        <Home />
      </React.Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <React.Suspense fallback={<LoadingScreen />}>
        <Login />
      </React.Suspense>
    ),
  },
  {
    id: "app",
    path: "/app",
    element: (
      <React.Suspense fallback={<LoadingScreen />}>
        <App />
      </React.Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <React.Suspense fallback={<LoadingScreen />}>
            <Dashboard />
          </React.Suspense>
        ),
      },
      {
        path: "account",
        element: (
          <React.Suspense fallback={<LoadingScreen />}>
            <Account />
          </React.Suspense>
        ),
      },
      {
        path: "aziende",
        children: [
          {
            path: "",
            element: (
              <React.Suspense fallback={<LoadingScreen />}>
                <AziendeLista />
              </React.Suspense>
            ),
          },
          {
            path: "aggiungi",
            element: (
              <React.Suspense fallback={<LoadingScreen />}>
                <AziendeAggiungi />
              </React.Suspense>
            ),
          },
          {
            path: "dettagli/:id",
            element: (
              <React.Suspense fallback={<LoadingScreen />}>
                <AziendeDettagli />
              </React.Suspense>
            ),
          },
          {
            path: "modifica/:id",
            element: (
              <React.Suspense fallback={<LoadingScreen />}>
                <AziendeModifica />
              </React.Suspense>
            ),
          },
        ],
      },
      {
        path: "negozi",
        children: [
          {
            path: "",
            element: (
              <React.Suspense fallback={<LoadingScreen />}>
                <NegoziLista />
              </React.Suspense>
            ),
          },
          {
            path: "aggiungi",
            element: (
              <React.Suspense fallback={<LoadingScreen />}>
                <NegoziAggiungi />
              </React.Suspense>
            ),
          },
          {
            path: "dettagli/:id",
            element: (
              <React.Suspense fallback={<LoadingScreen />}>
                <NegoziDettagli />
              </React.Suspense>
            ),
          },
          {
            path: "modifica/:id",
            element: (
              <React.Suspense fallback={<LoadingScreen />}>
                <NegoziModifica />
              </React.Suspense>
            ),
          },
        ],
      },
      {
        path: "docfisc",
        children: [
          {
            path: "tipi",
            children: [
              {
                path: "",
                element: (
                  <React.Suspense fallback={<LoadingScreen />}>
                    <TipoDocFiscLista />
                  </React.Suspense>
                ),
              },
              {
                path: "aggiungi",
                element: (
                  <React.Suspense fallback={<LoadingScreen />}>
                    <TipiDocFiscAggiungi />
                  </React.Suspense>
                ),
              },
              {
                path: "modifica/:id",
                element: (
                  <React.Suspense fallback={<LoadingScreen />}>
                    <TipiDocFiscModifica />
                  </React.Suspense>
                ),
              },
            ],
          },
          {
            path: "chiusure-fiscali",
            children: [
              {
                path: "",
                element: (
                  <React.Suspense fallback={<LoadingScreen />}>
                    <ChiusureFiscaliLista />
                  </React.Suspense>
                ),
              },
              {
                path: "aggiungi",
                element: (
                  <React.Suspense fallback={<LoadingScreen />}>
                    <ChiusureFiscaliAggiungi />
                  </React.Suspense>
                ),
              },
              {
                path: "dettagli/:id",
                element: (
                  <React.Suspense fallback={<LoadingScreen />}>
                    <ChiusureFiscaliDettagli />
                  </React.Suspense>
                ),
              },
              {
                path: "modifica/:id",
                element: (
                  <React.Suspense fallback={<LoadingScreen />}>
                    <ChiusureFiscaliModifica />
                  </React.Suspense>
                ),
              },
            ],
          },
          {
            path: "fatture",
            children: [
              {
                path: "aggiungi",
                element: (
                  <React.Suspense fallback={<LoadingScreen />}>
                    <FattureAggiungi />
                  </React.Suspense>
                ),
              },
              {
                path: "dettagli/:id",
                element: (
                  <React.Suspense fallback={<LoadingScreen />}>
                    <FattureDettagli />
                  </React.Suspense>
                ),
              },
              {
                path: "modifica/:id",
                element: (
                  <React.Suspense fallback={<LoadingScreen />}>
                    <FattureModifica />
                  </React.Suspense>
                ),
              },
              {
                path: "vendita",
                element: (
                  <React.Suspense fallback={<LoadingScreen />}>
                    <FattureVenditaLista />
                  </React.Suspense>
                ),
              },
              {
                path: "acquisto",
                element: (
                  <React.Suspense fallback={<LoadingScreen />}>
                    <FattureAcquistoLista />
                  </React.Suspense>
                ),
              },
            ],
          },
        ],
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

export default router;
