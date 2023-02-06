import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Dashboard from "./pages/Dashboard";
import Prova from "./pages/Prova";
import Accedi from "./pages/Accedi";

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "accedi",
        element: <Accedi />,
      },
      {
        path: "prova",
        element: <Prova />,
      },
    ],
  },
]);
