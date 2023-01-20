import React from "react";
import { Route, Routes } from "react-router-dom";

// Routes
import ChiusureFiscali from "./ChiusureFiscali";
import AggiungiCF from "./ChiusureFiscali/Aggiungi";
import DettagliCF from "./ChiusureFiscali/Dettagli";
import ModificaCF from "./ChiusureFiscali/Modifica";
import TipoDocFisc from "./Tipo";
import AggiungiTipo from "./Tipo/AggiungiTipo";
import ModificaTDF from "./Tipo/Modifica";
import NotFound from "~/NotFound";

const DocFisc: React.FC = () => {
  return (
    <Routes>
      <Route path="/chiusure-fiscali" element={<ChiusureFiscali />} />
      <Route path="/chiusure-fiscali/aggiungi" element={<AggiungiCF />} />
      <Route path="/chiusure-fiscali/dettagli/:id" element={<DettagliCF />} />
      <Route path="/chiusure-fiscali/modifica/:id" element={<ModificaCF />} />

      <Route path="/tipo" element={<TipoDocFisc />} />
      <Route path="/tipo/aggiungi" element={<AggiungiTipo />} />
      <Route path="/tipo/modifica/:id" element={<ModificaTDF />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default DocFisc;
