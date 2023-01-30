import { createBrowserRouter } from "react-router-dom";
import getAccount from "~/features/account/get";

// pages
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import App from "~/pages/App";
import NotFound from "~/pages/NotFound";
import ErrorPage from "~/pages/ErrorPage";
import Dashboard from "~/pages/Dashboard";
import ChiusureFiscali from "~/pages/ChiusureFiscali";

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
    errorElement: <ErrorPage />,
    loader: getAccount,
    children: [
      {
        path: "",
        element: <Dashboard />,
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
