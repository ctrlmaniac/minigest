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
  const [azienda, setAzienda] = React.useState<string>("");
  const [negozio, setNegozio] = React.useState<string>("");
  const { dettagli } = useAppSelector((state) => state.account);
  const { listByAzienda } = useAppSelector((state) => state.negozi);

  React.useEffect(() => {
    dispatch(getAccount());
  }, []);

  React.useEffect(() => {
    if ("aziende" in dettagli) {
      const azienda = dettagli.aziende[0].id!;
      setAzienda(azienda);
    }
  }, [dettagli]);

  React.useEffect(() => {
    if (!isEmpty(azienda)) {
      dispatch(getAzienda(azienda));
      dispatch(listNegozi(azienda));
    }
  }, [azienda]);

  React.useEffect(() => {
    if (!isEmpty(listByAzienda)) {
      setNegozio(listByAzienda![0].id!);
    }
  }, [listByAzienda]);

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
