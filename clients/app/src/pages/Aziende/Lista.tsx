import {
  Alert,
  Box,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { isEmpty } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AddFab, ErrorScreen, LoadingScreen } from "components";
import list from "~/features/aziende/list";
import { useAppDispatch, useAppSelector } from "~/hooks";

const AziendeLista: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    list: aziende,
    listing,
    listError,
  } = useAppSelector((state) => state.aziende);

  const [denominazione, setDenominazione] = React.useState("");

  React.useEffect(() => {
    dispatch(list(denominazione));
  }, [denominazione]);

  if (listing) {
    return <LoadingScreen />;
  } else if (listError) {
    return <ErrorScreen message={listError!} />;
  } else {
    return (
      <>
        <Box mb={3}>
          <Typography variant="h3" component="h1">
            Lista Aziende
          </Typography>
        </Box>

        <Box mb={3}>
          <Paper>
            <Box p={2}>
              <TextField
                fullWidth
                label="Cerca per denominazione"
                name="denominazione"
                value={denominazione}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDenominazione(e.target.value)
                }
              />
            </Box>
          </Paper>
        </Box>

        <Box>
          <Paper>
            <Box p={2}>
              {isEmpty(aziende) ? (
                <Alert severity="info">Non ci sono aziende!</Alert>
              ) : (
                <List>
                  {aziende?.map((azienda) => (
                    <ListItemButton
                      key={azienda.id}
                      onClick={() =>
                        navigate(`/aziende/dettagli/${azienda.id}`)
                      }
                    >
                      <ListItemText primary={azienda.denominazione} />
                    </ListItemButton>
                  ))}
                </List>
              )}
            </Box>
          </Paper>
        </Box>

        <AddFab href="/aziende/aggiungi" />
      </>
    );
  }
};

export default AziendeLista;
