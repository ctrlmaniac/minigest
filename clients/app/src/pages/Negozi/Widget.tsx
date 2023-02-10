import {
  Alert,
  AlertTitle,
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { IconBuildingStore, IconBuildingWarehouse } from "@tabler/icons-react";
import { isEmpty } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
import post from "~/features/negozi/post";
import { useAppDispatch, useAppSelector } from "~/hooks";

const WidgetNegozi: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { selected: azienda } = useAppSelector((state) => state.aziende);
  const { selected } = useAppSelector((state) => state.negozi);

  const [nome, setNome] = React.useState("");
  const [error, setError] = React.useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setNome(value);
    setError(value.toString().length < 1);
  };

  const handleSubmit = () => {
    if (!isEmpty(azienda)) {
      const payload = {
        nome: nome,
        azienda: azienda!,
      };

      dispatch(post(payload));
    } else {
      alert("Errore!");
    }
  };

  let content = <Typography>Caricamento in corso...</Typography>;

  if (isEmpty(azienda)) {
    content = (
      <Alert severity="info" variant="outlined">
        <AlertTitle>Devi prima selezionare un'azienda!</AlertTitle>
        Clicca su <IconBuildingWarehouse /> per selezionarne una!
      </Alert>
    );
  } else {
    if (isEmpty(azienda.negozi)) {
      content = (
        <>
          <Typography>Devi aggiungere almeno un negozio!</Typography>
          <Typography>
            Il negozio verrà aggiunto a {azienda.denominazione}
          </Typography>
          <TextField
            label="Nome negozio"
            fullWidth
            value={nome}
            error={error}
            required
            margin="normal"
            onChange={handleChange}
          />

          <Button
            fullWidth
            variant="contained"
            disabled={error}
            onClick={handleSubmit}
          >
            Salva
          </Button>
        </>
      );
    } else {
      content = (
        <>
          {isEmpty(selected) && (
            <Alert severity="info" variant="outlined">
              <AlertTitle>Devi selezionare un negozio!</AlertTitle>
              Clicca su <IconBuildingStore /> per selezionarne uno!
            </Alert>
          )}
          <List>
            {azienda.negozi!.map((negozio) => (
              <ListItemButton
                key={negozio.id}
                selected={!isEmpty(selected) && negozio.id === selected.id}
                onClick={() => navigate(`/negozi`)}
              >
                <ListItemText primary={negozio.nome} />
              </ListItemButton>
            ))}
          </List>
        </>
      );
    }
  }

  return (
    <Paper sx={{ height: "100%" }}>
      <Box p={2}>
        <Typography variant="h6" gutterBottom>
          I tuoi negozi
        </Typography>
        {content}
      </Box>
    </Paper>
  );
};

export default WidgetNegozi;
