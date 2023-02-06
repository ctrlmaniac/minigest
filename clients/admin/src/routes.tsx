import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Pages
const Root = React.lazy(() => import("~/pages/Root"));
const Dashboard = React.lazy(() => import("~/pages/Dashboard"));
const TipoDocFiscLista = React.lazy(() => import("~/pages/TipoDocFisc/Lista"));
const TipoDocFiscModifica = React.lazy(
  () => import("~/pages/TipoDocFisc/Modifica")
);
const TipoDocFiscAggiungi = React.lazy(
  () => import("~/pages/TipoDocFisc/Aggiungi")
);
const NotFound = React.lazy(() => import("~/pages/NotFound"));

export default createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Dashboard />,
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
                  path: "modifica/:id",
                  element: <TipoDocFiscModifica />,
                },
                {
                  path: "aggiungi",
                  element: <TipoDocFiscAggiungi />,
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
  ],
  { basename: "/admin" }
);
