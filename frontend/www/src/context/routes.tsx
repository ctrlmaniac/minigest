import { createBrowserRouter } from "react-router-dom";
import getAccount from "~/features/account/get";

// pages
import App from "~/pages/App";
import ChiusureFiscali from "~/pages/ChiusureFiscali";
import Dashboard from "~/pages/Dashboard";
import ErrorPage from "~/pages/ErrorPage";
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import NotFound from "~/pages/NotFound";

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
