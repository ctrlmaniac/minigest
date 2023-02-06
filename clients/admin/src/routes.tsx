import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Dashboard from "./pages/Dashboard";
import TipoDocFiscLista from "./pages/TipoDocFisc/Lista";
import TipiDocFiscModifica from "./pages/TipoDocFisc/Modifica";
import TipiDocFiscAggiungi from "./pages/TipoDocFisc/Aggiungi";

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
                  element: <TipiDocFiscModifica />,
                },
                {
                  path: "aggiungi",
                  element: <TipiDocFiscAggiungi />,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  { basename: "/admin" }
);
