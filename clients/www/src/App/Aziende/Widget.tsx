import { Box, List, ListItem, Paper, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "~/hooks";

const WidgetAziende: React.FC = () => {
  const { dettagli } = useAppSelector((store) => store.account);

  if ("aziende" in dettagli) {
    return (
      <Paper>
        <Box p={2}>
          <Typography variant="h6" gutterBottom>
            Le tue Aziende
          </Typography>

          <List>
            {dettagli.aziende.map((azienda, i) => {
              return (
                <ListItem key={azienda.id}>{azienda.denominazione}</ListItem>
              );
            })}
          </List>
        </Box>
      </Paper>
    );
  } else {
    return null;
  }
};

export default WidgetAziende;
