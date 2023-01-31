import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import App from "~/pages/App";
import NotFound from "~/pages/NotFound";
import Dashboard from "~/pages/Dashboard";
import ChiusureFiscali from "~/pages/ChiusureFiscali";
import Account from "~/pages/Account";
import AziendeDettagli from "~/pages/Aziende/Dettagli";
import AziendeModifica from "~/pages/Aziende/Modifica";

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
        path: "chiusure-fiscali",
        element: <ChiusureFiscali />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
