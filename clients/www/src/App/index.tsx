import React from "react";
import { isEmpty } from "lodash";
import { Route, Routes } from "react-router-dom";
import { TitleContext } from "~/context/title";
import { Layout } from "~/components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { AziendaContext } from "~/context/azienda";
import { default as getAccount } from "~/features/account/get";
import { default as getAzienda } from "~/features/aziende/get";

// App Content
import Dashboard from "./Dashboard";
import Aziende from "./Aziende";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = React.useState<string>("minigest");
  const [azienda, setAzienda] = React.useState<string>("");
  const { dettagli } = useAppSelector((state) => state.account);

  React.useEffect(() => {
    dispatch(getAccount());
  }, []);

  React.useEffect(() => {
    if ("aziende" in dettagli) {
      setAzienda(dettagli.aziende[0].id);
    }
  }, [dettagli]);

  React.useEffect(() => {
    if (!isEmpty(azienda)) {
      dispatch(getAzienda(azienda));
    }
  }, [azienda]);

  return (
    <AziendaContext.Provider value={{ azienda, setAzienda }}>
      <TitleContext.Provider value={{ title, setTitle }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/aziende/*" element={<Aziende />} />
          </Routes>
        </Layout>
      </TitleContext.Provider>
    </AziendaContext.Provider>
  );
};

export default App;
