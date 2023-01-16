import React from "react";
import { Route, Routes } from "react-router-dom";
import { TitleContext } from "~/context/title";
import { Layout } from "~/components";
import Dashboard from "./Dashboard";

const App: React.FC = () => {
  const [title, setTitle] = React.useState<string>("minigest");

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
