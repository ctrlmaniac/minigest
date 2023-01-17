import { createContext, useContext } from "react";
import { AziendaContent } from "~/types/AziendaContent";

export const AziendaContext = createContext<AziendaContent>({
  azienda: "",
  setAzienda: () => {},
});

export const useAziendaContext = () => useContext(AziendaContext);
