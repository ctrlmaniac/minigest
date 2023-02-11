import { Box } from "@mui/material";
import Typography from "@mui/material/Typography/Typography";
import React from "react";

const Dashbaord: React.FC = () => {
  return (
    <>
      <Box mb={2}>
        <Typography variant="h3" gutterBottom>
          Benvenuto!
        </Typography>
        <Typography>Qui puoi gestire minigest!</Typography>
      </Box>
    </>
  );
};
export default Dashbaord;
