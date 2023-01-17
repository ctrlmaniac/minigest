import React from "react";
import { Route, Routes } from "react-router-dom";
import { TitleContext } from "~/context/title";
import { Layout } from "~/components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { default as getAccount } from "~/features/account/get";
import Dashboard from "./Dashboard";
import { AziendaContext } from "~/context/azienda";

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

  return (
    <AziendaContext.Provider value={{ azienda, setAzienda }}>
      <TitleContext.Provider value={{ title, setTitle }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Layout>
      </TitleContext.Provider>
    </AziendaContext.Provider>
  );
};

export default App;
