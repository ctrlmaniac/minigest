import { createContext, useContext } from "react";
import { TitleContent } from "~/types/TitleContent";

export const TitleContext = createContext<TitleContent>({
  title: "minigest",
  setTitle: () => {},
});

export const useTitleContext = () => useContext(TitleContext);
