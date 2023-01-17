import React from "react";
import { Route, Routes } from "react-router-dom";
import ChiusureFiscali from "./ChiusureFiscali";

const DocFisc: React.FC = () => {
  return (
    <Routes>
      <Route path="/chiusure-fiscali" element={<ChiusureFiscali />} />
    </Routes>
  );
};

export default DocFisc;
