import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Dashboard from "./pages/Dashboard";
import Prova from "./pages/Prova";

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
          path: "prova",
          element: <Prova />,
        },
      ],
    },
  ],
  { basename: "/app" }
);
