import React from "react";
import { Alert } from "@mui/material";

const App: React.FC = () => {
  return (
    <Alert severity="error">
      Devi essere registrato per poter accedere a questa sezione!
    </Alert>
  );
};

export default App;
