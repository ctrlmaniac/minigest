import React from "react";
import { Box, List, ListItemButton, Paper, Typography } from "@mui/material";
import { useAziendaContext } from "~/context/azienda";
import { useAppSelector } from "~/hooks";

const WidgetAziende: React.FC = () => {
  const { dettagli } = useAppSelector((store) => store.account);
  const { azienda, setAzienda } = useAziendaContext();

  if ("aziende" in dettagli) {
    return (
      <Paper>
        <Box p={2}>
          <Typography variant="h6" gutterBottom>
            Le tue Aziende
          </Typography>

          <List>
            {dettagli.aziende.map((business, i) => {
              return (
                <ListItemButton
                  selected={business.id === azienda}
                  key={business.id}
                  onClick={() => setAzienda(business.id)}
                >
                  {business.denominazione}
                </ListItemButton>
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
