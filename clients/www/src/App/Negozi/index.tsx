import React from "react";
import { Route, Routes } from "react-router-dom";
import ListaNegozi from "./Lista";
import NotFound from "~/NotFound";
import AggiungiNegozio from "./Aggiungi";
import ModificaNegozio from "./Modifica";

const Negozi: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ListaNegozi />} />
      <Route path="/aggiungi" element={<AggiungiNegozio />} />
      <Route path="/modifica/:id" element={<ModificaNegozio />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Negozi;
