import React from "react";
import { Route, Routes } from "react-router-dom";
import Dettagli from "./Dettagli";

const Aziende: React.FC = () => {
  return (
    <Routes>
      <Route path="/dettagli/:id" element={<Dettagli />} />
    </Routes>
  );
};

export default Aziende;
