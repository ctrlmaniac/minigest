import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    mode: "dark",
  },
});

export const logoTheme = createTheme({
  typography: {
    fontFamily: ["Righteous", "cursive"].join(","),
  },
});
