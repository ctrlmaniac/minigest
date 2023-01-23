import React from "react";
import { Route, Routes } from "react-router-dom";
import Dettagli from "./Dettagli";
import AziendeLista from "./Lista";
import NotFound from "~/NotFound";
import AggiungiAzienda from "./Aggiungi";
import ModificaAzienda from "./Modifica";

const Aziende: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AziendeLista />} />
      <Route path="/dettagli/:id" element={<Dettagli />} />
      <Route path="/modifica/:id" element={<ModificaAzienda />} />
      <Route path="/aggiungi" element={<AggiungiAzienda />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Aziende;
