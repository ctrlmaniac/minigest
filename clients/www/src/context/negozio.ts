import { createContext, useContext } from "react";
import { negozioContent } from "~/types/NegozioContent";

export const NegozioContext = createContext<negozioContent>({
  negozio: "",
  setNegozio: () => {},
});

export const unseNegozioContext = () => useContext(NegozioContext);
