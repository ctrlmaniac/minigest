import React from "react";
import { isEmpty } from "lodash";
import { Route, Routes } from "react-router-dom";
import { TitleContext } from "~/context/title";
import { Layout } from "~/components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { AziendaContext } from "~/context/azienda";
import { default as getAccount } from "~/features/account/get";
import { default as getAzienda } from "~/features/aziende/getSelected";

// App Content
import Dashboard from "./Dashboard";
import Aziende from "./Aziende";
import DocFisc from "./DocFisc";
import { default as listNegozi } from "~/features/negozi/listByAzienda";
import { NegozioContext } from "~/context/negozio";
import NotFound from "~/NotFound";
import Negozi from "./Negozi";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = React.useState<string>("minigest");
  const [azienda, setAzienda] = React.useState<string | null>(
    window.localStorage.getItem("azienda")
  );
  const [negozio, setNegozio] = React.useState<string | null>(
    window.localStorage.getItem("negozio")
  );
  const { dettagli: account } = useAppSelector((state) => state.account);
  const { listByAzienda: negozi } = useAppSelector((state) => state.negozi);

  React.useEffect(() => {
    dispatch(getAccount());
  }, []);

  React.useEffect(() => {
    if (account) {
      if (account.hasOwnProperty("aziende") && !isEmpty(account.aziende!)) {
        const azienda = account.aziende![0].id!;
        dispatch(getAzienda(azienda));
        setAzienda(azienda);
      }
    }
  }, [account]);

  React.useEffect(() => {
    if (azienda) {
      dispatch(listNegozi(azienda));
    }
  }, [azienda]);

  React.useEffect(() => {
    if (negozi) {
      setNegozio(negozi[0].id!);
    }
  }, [negozi]);

  return (
    <AziendaContext.Provider value={{ azienda, setAzienda }}>
      <NegozioContext.Provider value={{ negozio, setNegozio }}>
        <TitleContext.Provider value={{ title, setTitle }}>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/aziende/*" element={<Aziende />} />
              <Route path="/docfisc/*" element={<DocFisc />} />
              <Route path="/negozi/*" element={<Negozi />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </TitleContext.Provider>
      </NegozioContext.Provider>
    </AziendaContext.Provider>
  );
};

export default App;
