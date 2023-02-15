import { Children, lazy, Suspense } from "react";
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
const Negozi = lazy(() => import("~/pages/Negozi"));
const ChiusureFiscali = lazy(() => import("~/pages/ChiusureFiscali"));
const ChiusureFiscaliDettagli = lazy(
  () => import("~/pages/ChiusureFiscali/Dettagli")
);
const ChiusureFiscaliAggiungi = lazy(
  () => import("~/pages/ChiusureFiscali/Aggiungi")
);
const ChiusureFiscaliModifica = lazy(
  () => import("~/pages/ChiusureFiscali/Modifica")
);
const Fatture = lazy(() => import("~/pages/Fatture"));
const FattureDettagli = lazy(() => import("~/pages/Fatture/Dettagli"));
const FattureAggiungi = lazy(() => import("~/pages/Fatture/Aggiungi"));
const FattureModifica = lazy(() => import("~/pages/Fatture/Modifica"));
const Scadenzario = lazy(() => import("~/pages/Scadenzario"));
const RegistroCorrispettivi = lazy(
  () => import("~/pages/RegistroCorrispettivi")
);
const Bilancio = lazy(() => import("~/pages/Bilancio"));
const F24 = lazy(() => import("~/pages/F24"));
const F24Dettagli = lazy(() => import("~/pages/F24/Dettagli"));
const F24Aggiungi = lazy(() => import("~/pages/F24/Aggiungi"));
const F24Modifica = lazy(() => import("~/pages/F24/Modifica"));

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
        {
          path: "negozi",
          children: [
            {
              path: "",
              element: (
                <Suspense fallback={<LoadingScreen />}>
                  <Negozi />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "docfisc/chiusure-fiscali",
          children: [
            {
              path: "",
              element: (
                <Suspense fallback={<LoadingScreen />}>
                  <ChiusureFiscali />
                </Suspense>
              ),
            },
            {
              path: "aggiungi",
              element: (
                <Suspense fallback={<LoadingScreen />}>
                  <ChiusureFiscaliAggiungi />
                </Suspense>
              ),
            },
            {
              path: "dettagli/:id",
              element: (
                <Suspense fallback={<LoadingScreen />}>
                  <ChiusureFiscaliDettagli />
                </Suspense>
              ),
            },
            {
              path: "modifica/:id",
              element: (
                <Suspense fallback={<LoadingScreen />}>
                  <ChiusureFiscaliModifica />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "docfisc/fatture",
          children: [
            {
              path: "dettagli/:id",
              element: (
                <Suspense fallback={<LoadingScreen />}>
                  <FattureDettagli />
                </Suspense>
              ),
            },
            {
              path: "modifica/:id",
              element: (
                <Suspense fallback={<LoadingScreen />}>
                  <FattureModifica />
                </Suspense>
              ),
            },
            {
              path: "aggiungi",
              element: (
                <Suspense fallback={<LoadingScreen />}>
                  <FattureAggiungi />
                </Suspense>
              ),
            },
            {
              path: ":mode",
              element: (
                <Suspense fallback={<LoadingScreen />}>
                  <Fatture />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "docfisc/registro-corrispettivi",
          element: (
            <Suspense fallback={<LoadingScreen />}>
              <RegistroCorrispettivi />
            </Suspense>
          ),
        },
        {
          path: "fisco",
          children: [
            {
              path: "f24",
              children: [
                {
                  path: "",
                  element: (
                    <Suspense fallback={<LoadingScreen />}>
                      <F24 />
                    </Suspense>
                  ),
                },
                {
                  path: "aggiungi",
                  element: (
                    <Suspense fallback={<LoadingScreen />}>
                      <F24Aggiungi />
                    </Suspense>
                  ),
                },
                {
                  path: "dettagli/:id",
                  element: (
                    <Suspense fallback={<LoadingScreen />}>
                      <F24Dettagli />
                    </Suspense>
                  ),
                },
                {
                  path: "modifica/:id",
                  element: (
                    <Suspense fallback={<LoadingScreen />}>
                      <F24Modifica />
                    </Suspense>
                  ),
                },
              ],
            },
          ],
        },
        {
          path: "scadenzario",
          element: (
            <Suspense fallback={<LoadingScreen />}>
              <Scadenzario />
            </Suspense>
          ),
        },
        {
          path: "bilancio",
          element: (
            <Suspense fallback={<LoadingScreen />}>
              <Bilancio />
            </Suspense>
          ),
        },
      ],
    },
  ],
  {
    basename: "/app",
  }
);
