import React from "react";
import { Route, Routes } from "react-router-dom";
import ListaNegozi from "./Lista";
import NotFound from "~/NotFound";

const Negozi: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ListaNegozi />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Negozi;
