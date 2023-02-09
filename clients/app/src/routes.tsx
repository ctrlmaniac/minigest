import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoadingScreen } from "components";

// Pages
const Root = lazy(() => import("~/pages/Root"));
const Error = lazy(() => import("~/pages/Error"));
const Dashboard = lazy(() => import("~/pages/Dashboard"));
const Account = lazy(() => import("~/pages/Account"));
const AccountModifica = lazy(() => import("~/pages/Account/Modifica"));
const Aziende = lazy(() => import("~/pages/Aziende"));
const AziendaDettagli = lazy(() => import("~/pages/Aziende/Dettagli"));
const AziendaAggiungi = lazy(() => import("~/pages/Aziende/Aggiungi"));
const AziendaModifica = lazy(() => import("~/pages/Aziende/Modifica"));

export default createBrowserRouter(
  [
    {
      path: "",
      element: (
        <Suspense fallback={<LoadingScreen />}>
          <Root />
        </Suspense>
      ),
      errorElement: (
        <Suspense fallback={<LoadingScreen />}>
          <Error />
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
              path: "modifica",
              element: (
                <Suspense fallback={<LoadingScreen />}>
                  <AccountModifica />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "aziende",
          children: [
            {
              path: "",
              element: (
                <Suspense fallback={<LoadingScreen />}>
                  <Aziende />
                </Suspense>
              ),
            },
            {
              path: "aggiungi",
              element: (
                <Suspense fallback={<LoadingScreen />}>
                  <AziendaAggiungi />
                </Suspense>
              ),
            },
            {
              path: "dettagli/:id",
              element: (
                <Suspense fallback={<LoadingScreen />}>
                  <AziendaDettagli />
                </Suspense>
              ),
            },
            {
              path: "modifica/:id",
              element: (
                <Suspense fallback={<LoadingScreen />}>
                  <AziendaModifica />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
  ],
  {
    basename: "/app",
  }
);
