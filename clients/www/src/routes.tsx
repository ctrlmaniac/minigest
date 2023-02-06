import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Accedi from "./pages/Accedi";
import Admin from "./pages/Admin";

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "accedi",
        element: <Accedi />,
      },
    ],
  },
]);
