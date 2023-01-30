import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import App from "~/pages/App";
import NotFound from "~/pages/NotFound";
import Dashboard from "~/pages/Dashboard";
import ChiusureFiscali from "~/pages/ChiusureFiscali";
import Account from "~/pages/Account";

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
