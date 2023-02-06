import React from "react";
import { isEmpty } from "lodash";
import { useAppSelector } from "~/hooks";
import { Box, List, ListItemButton, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AziendeWidget: React.FC = () => {
  const navigate = useNavigate();
  const { dettagli: account } = useAppSelector((state) => state.account);
  const { selected } = useAppSelector((state) => state.aziende);

  // Content
  let content = <Typography>Caricamento in corso...</Typography>;

  if (isEmpty(account?.aziende)) {
    content = <Typography>Devi crearti un'azienda!</Typography>;
  } else {
    content = (
      <List>
        {account?.aziende?.map((azienda) => (
          <ListItemButton
            key={azienda.id}
            selected={selected?.id === azienda.id}
            onClick={() => navigate(`/aziende/dettagli/${azienda.id}`)}
          >
            {azienda.denominazione}
          </ListItemButton>
        ))}
      </List>
    );
  }

  return (
    <Paper>
      <Box p={2}>
        <Typography gutterBottom>Le tue aziende:</Typography>
        {content}
      </Box>
    </Paper>
  );
};

export default AziendeWidget;
