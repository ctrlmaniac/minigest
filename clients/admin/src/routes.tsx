import React, { Children } from "react";
import { LoadingScreen } from "components";
import { createBrowserRouter } from "react-router-dom";

// Pages
const Root = React.lazy(() => import("~/pages/Root"));
const Dashboard = React.lazy(() => import("~/pages/Dashboard"));
const TipoDocFiscLista = React.lazy(() => import("~/pages/TipoDocFisc/Lista"));
const TipoDocFiscModifica = React.lazy(
  () => import("~/pages/TipoDocFisc/Modifica")
);
const TipoDocFiscAggiungi = React.lazy(
  () => import("~/pages/TipoDocFisc/Aggiungi")
);
const NotFound = React.lazy(() => import("~/pages/NotFound"));
const AccountList = React.lazy(() => import("~/pages/Account"));
const AccountDettagli = React.lazy(() => import("~/pages/Account/Dettagli"));
const AccountModifica = React.lazy(() => import("~/pages/Account/Modifica"));

export default createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <React.Suspense fallback={<LoadingScreen />}>
          <Root />
        </React.Suspense>
      ),
      children: [
        {
          path: "",
          element: (
            <React.Suspense fallback={<LoadingScreen />}>
              <Dashboard />
            </React.Suspense>
          ),
        },
        {
          path: "docfisc",
          children: [
            {
              path: "tipi",
              children: [
                {
                  path: "",
                  element: (
                    <React.Suspense fallback={<LoadingScreen />}>
                      <TipoDocFiscLista />
                    </React.Suspense>
                  ),
                },
                {
                  path: "modifica/:id",
                  element: (
                    <React.Suspense fallback={<LoadingScreen />}>
                      <TipoDocFiscModifica />
                    </React.Suspense>
                  ),
                },
                {
                  path: "aggiungi",
                  element: (
                    <React.Suspense fallback={<LoadingScreen />}>
                      <TipoDocFiscAggiungi />
                    </React.Suspense>
                  ),
                },
              ],
            },
          ],
        },
        {
          path: "account",
          children: [
            {
              path: "",
              element: (
                <React.Suspense fallback={<LoadingScreen />}>
                  <AccountList />
                </React.Suspense>
              ),
            },
            {
              path: "dettagli/:id",
              element: (
                <React.Suspense fallback={<LoadingScreen />}>
                  <AccountDettagli />
                </React.Suspense>
              ),
            },
            {
              path: "modifica/:id",
              element: (
                <React.Suspense fallback={<LoadingScreen />}>
                  <AccountModifica />
                </React.Suspense>
              ),
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: (
        <React.Suspense fallback={<LoadingScreen />}>
          <NotFound />
        </React.Suspense>
      ),
    },
  ],
  { basename: "/admin" }
);
