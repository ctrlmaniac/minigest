import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AddFab } from "~/components";
import { useAppSelector } from "~/hooks";

const NegoziLista: React.FC = () => {
  const navigate = useNavigate();
  const { listByAzienda: list } = useAppSelector((state) => state.negozi);
  const { selected } = useAppSelector((state) => state.aziende);

  let content = <Typography>Caricamento in corso...</Typography>;

  if (list) {
    content = (
      <List>
        {list.map((negozio) => (
          <ListItemButton
            key={negozio.id}
            onClick={() => navigate(`/app/negozi/dettagli/${negozio.id!}`)}
          >
            <ListItemText primary={negozio.nome} />
          </ListItemButton>
        ))}
      </List>
    );
  }

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3" gutterBottom>
          Lista Negozi
        </Typography>
        <Typography>
          Negozi dell'azienda selezionata: {selected?.denominazione}
        </Typography>
      </Box>

      <Box>
        <Paper>
          <Box p={2}>{content}</Box>
        </Paper>
      </Box>

      <AddFab href="/app/negozi/aggiungi" />
    </>
  );
};

export default NegoziLista;
