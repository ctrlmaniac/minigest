import React from "react";
import { Route, Routes } from "react-router-dom";
import Dettagli from "./Dettagli";
import AziendeLista from "./Lista";
import NotFound from "~/NotFound";

const Aziende: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AziendeLista />} />
      <Route path="/dettagli/:id" element={<Dettagli />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Aziende;
