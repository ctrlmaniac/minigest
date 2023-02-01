import {
  Alert,
  Box,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { isEmpty } from "lodash";
import React from "react";
import { useAppSelector } from "~/hooks";

const NegoziWidget: React.FC = () => {
  const { listByAzienda: list, selected } = useAppSelector(
    (state) => state.negozi
  );

  let content = <Typography>Caricamento in corso...</Typography>;

  if (isEmpty(list)) {
    content = <Alert severity="warning">Non hai negozi, creane uno!</Alert>;
  } else {
    content = (
      <List>
        {list?.map((negozio) => (
          <ListItemButton
            key={negozio.id}
            selected={selected?.id! === negozio.id!}
          >
            <ListItemText primary={negozio.nome} />
          </ListItemButton>
        ))}
      </List>
    );
  }

  return (
    <Paper>
      <Box p={2}>
        <Typography gutterBottom>I tuoi negozi:</Typography>

        {content}
      </Box>
    </Paper>
  );
};

export default NegoziWidget;
