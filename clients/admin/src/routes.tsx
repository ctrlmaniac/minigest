import { LoadingScreen } from "components";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

//Pages
const Root = lazy(() => import("~/pages/Root"));
const Dashboard = lazy(() => import("~/pages/Dashboard"));
const Account = lazy(() => import("~/pages/Account"));
const AccountDettagli = lazy(() => import("~/pages/Account/Dettagli"));
const Aziende = lazy(() => import("~/pages/Aziende"));
const AziendaDettagli = lazy(() => import("~/pages/Aziende/Dettagli"));
const AziendaAggiungi = lazy(() => import("~/pages/Aziende/Aggiungi"));
const AziendaModifica = lazy(() => import("~/pages/Aziende/Modifica"));
const TipiDocFisc = lazy(() => import("~/pages/TipiDocFisc"));

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
        {
          path: "docfisc/tipo",
          element: (
            <Suspense fallback={<LoadingScreen />}>
              <TipiDocFisc />
            </Suspense>
          ),
        },
      ],
    },
  ],
  {
    basename: "/admin",
  }
);
