import React from "react";
import { Route, Routes } from "react-router-dom";
import { TitleContext } from "~/context/title";
import { Layout } from "~/components";
import { useAppDispatch } from "~/hooks";
import { default as getAccount } from "~/features/account/get";
import Dashboard from "./Dashboard";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = React.useState<string>("minigest");

  React.useEffect(() => {
    dispatch(getAccount());
  }, []);

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Layout>
    </TitleContext.Provider>
  );
};

export default App;
