import React from "react";
import {
  Alert,
  Box,
  List,
  ListItemButton,
  Paper,
  Typography,
} from "@mui/material";
import { useAppSelector } from "~/hooks";
import { isEmpty } from "lodash";
import { useNegozioContext } from "~/context/negozio";

const WidgetNegozi: React.FC = () => {
  const { listByAzienda } = useAppSelector((store) => store.negozi);
  const { negozio: selectedNegozio } = useNegozioContext();

  return (
    <Paper sx={{ height: "100%" }}>
      <Box p={2}>
        <Typography variant="h6" gutterBottom>
          I tuoi negozi
        </Typography>

        {isEmpty(listByAzienda) ? (
          <Alert severity="warning">Non hai aggiunto nessun negozio</Alert>
        ) : (
          <List>
            {listByAzienda!.map((negozio, i) => {
              return (
                <ListItemButton
                  key={i}
                  selected={negozio.id! === selectedNegozio}
                >
                  {negozio.nome}
                </ListItemButton>
              );
            })}
          </List>
        )}
      </Box>
    </Paper>
  );
};

export default WidgetNegozi;
