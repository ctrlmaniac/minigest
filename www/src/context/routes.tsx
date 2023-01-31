import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import App from "~/pages/App";
import NotFound from "~/pages/NotFound";
import Dashboard from "~/pages/Dashboard";
import ChiusureFiscaliLista from "~/pages/ChiusureFiscali/Lista";
import Account from "~/pages/Account";
import AziendeDettagli from "~/pages/Aziende/Dettagli";
import AziendeModifica from "~/pages/Aziende/Modifica";
import AziendeAggiungi from "~/pages/Aziende/Aggiungi";
import AziendeLista from "~/pages/Aziende/Lista";
import NegoziLista from "~/pages/Negozi/Lista";
import NegoziAggiungi from "~/pages/Negozi/Aggiungi";
import NegoziDettagli from "~/pages/Negozi/Dettagli";
import NegoziModifica from "~/pages/Negozi/Modifica";
import TipoDocFiscLista from "~/pages/TipoDocFisc/Lista";
import TipiDocFiscAggiungi from "~/pages/TipoDocFisc/Aggiungi";
import TipiDocFiscModifica from "~/pages/TipoDocFisc/Modifica";
import ChiusureFiscaliAggiungi from "~/pages/ChiusureFiscali/Aggiungi";

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
        element: <Account />,
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
