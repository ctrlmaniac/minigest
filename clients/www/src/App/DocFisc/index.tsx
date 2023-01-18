import React from "react";
import { Route, Routes } from "react-router-dom";
import ChiusureFiscali from "./ChiusureFiscali";
import AggiungiCF from "./ChiusureFiscali/Aggiungi";
import DettagliCF from "./ChiusureFiscali/Dettagli";
import ModificaCF from "./ChiusureFiscali/Modifica";

const DocFisc: React.FC = () => {
  return (
    <Routes>
      <Route path="/chiusure-fiscali" element={<ChiusureFiscali />} />
      <Route path="/chiusure-fiscali/aggiungi" element={<AggiungiCF />} />
      <Route path="/chiusure-fiscali/:id" element={<DettagliCF />} />
      <Route path="/chiusure-fiscali/modifica/:id" element={<ModificaCF />} />
    </Routes>
  );
};

export default DocFisc;
