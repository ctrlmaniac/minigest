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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    id: "app",
    path: "/app",
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />,
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
            element: <AziendeLista />,
          },
          {
            path: "aggiungi",
            element: <AziendeAggiungi />,
          },
          {
            path: "dettagli/:id",
            element: <AziendeDettagli />,
          },
          {
            path: "modifica/:id",
            element: <AziendeModifica />,
          },
        ],
      },
      {
        path: "negozi",
        children: [
          {
            path: "",
            element: <NegoziLista />,
          },
          {
            path: "aggiungi",
            element: <NegoziAggiungi />,
          },
          {
            path: "dettagli/:id",
            element: <NegoziDettagli />,
          },
          {
            path: "modifica/:id",
            element: <NegoziModifica />,
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
                element: <TipoDocFiscLista />,
              },
              {
                path: "aggiungi",
                element: <TipiDocFiscAggiungi />,
              },
              {
                path: "modifica/:id",
                element: <TipiDocFiscModifica />,
              },
            ],
          },
          {
            path: "chiusure-fiscali",
            children: [
              {
                path: "",
                element: <ChiusureFiscaliLista />,
              },
              {
                path: "aggiungi",
                element: <ChiusureFiscaliAggiungi />,
              },
              {
                path: "dettagli/:id",
                element: <ChiusureFiscaliDettagli />,
              },
              {
                path: "modifica/:id",
                element: <ChiusureFiscaliModifica />,
              },
            ],
          },
          {
            path: "fatture",
            children: [
              {
                path: "aggiungi",
                element: <FattureAggiungi />,
              },
              {
                path: "dettagli/:id",
                element: <FattureDettagli />,
              },
              {
                path: "modifica/:id",
                element: <FattureModifica />,
              },
              {
                path: "vendita",
                element: <FattureVenditaLista />,
              },
              {
                path: "acquisto",
                element: <FattureAcquistoLista />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
