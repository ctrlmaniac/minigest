import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoadingScreen } from "components";

// Pages
const Root = lazy(() => import("~/pages/Root"));
const Home = lazy(() => import("~/pages/Home"));
const NotFound = lazy(() => import("~/pages/NotFound"));

export default createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Root />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <NotFound />
      </Suspense>
    ),
  },
]);
