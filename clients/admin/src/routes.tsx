import { LoadingScreen } from "components";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

//Pages
const Root = lazy(() => import("~/pages/Root"));
const Dashboard = lazy(() => import("~/pages/Dashboard"));
const Account = lazy(() => import("~/pages/Account"));
const AccountDettagli = lazy(() => import("~/pages/Account/Dettagli"));

export default createBrowserRouter(
  [
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
              <Dashboard />
            </Suspense>
          ),
        },
        {
          path: "account",
          children: [
            {
              path: "",
              element: (
                <Suspense fallback={<LoadingScreen />}>
                  <Account />
                </Suspense>
              ),
            },
            {
              path: "dettagli/:id",
              element: (
                <Suspense fallback={<LoadingScreen />}>
                  <AccountDettagli />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
  ],
  {
    basename: "/admin",
  }
);
