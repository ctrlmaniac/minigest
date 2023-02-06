import React from "react";
import { Alert } from "@mui/material";

const Admin: React.FC = () => {
  return (
    <Alert severity="error">
      Devi essere ADMIN per poter accedere a questa sezione!
    </Alert>
  );
};

export default Admin;
