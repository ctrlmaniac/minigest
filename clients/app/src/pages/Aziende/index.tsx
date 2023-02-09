import React from "react";
import { AddFab } from "components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { isEmpty } from "lodash";
import {
  Alert,
  Box,
  CircularProgress,
  LinearProgress,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import list from "~/features/aziende/list";
import { useNavigate } from "react-router-dom";

const Aziende = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    list: aziende,
    listing,
    listError,
  } = useAppSelector((state) => state.aziende);
  const [denominazione, setDenominazione] = React.useState("");

  React.useEffect(() => {
    dispatch(list(denominazione));
  }, [denominazione]);

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3">Aziende</Typography>
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={2}>
            <Typography variant="h6" gutterBottom>
              Ricerca per denominazione
            </Typography>
            <TextField
              label="denominazione"
              value={denominazione}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDenominazione(e.target.value)
              }
              fullWidth
            />
          </Box>
        </Paper>
        {listing && <LinearProgress />}
      </Box>

      {!isEmpty(listError) && (
        <Alert severity="error">{listError || "errore di caricamento"}</Alert>
      )}

      {isEmpty(aziende) ? (
        <Alert severity="info">Non ci sono aziende</Alert>
      ) : (
        <Paper>
          <Box p={2}>
            <List>
              {aziende?.map((azienda) => (
                <ListItemButton
                  key={azienda.id}
                  onClick={() => navigate("dettagli/" + azienda.id)}
                >
                  <ListItemText primary={azienda.denominazione} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Paper>
      )}

      <AddFab href={"aziende/aggiungi"} />
    </>
  );
};

export default Aziende;
