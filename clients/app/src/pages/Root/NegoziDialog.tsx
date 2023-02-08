import {
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItemButton,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import { isEmpty } from "lodash";
import { setSelected } from "~/features/negozi/slice";
import { useAppDispatch, useAppSelector } from "~/hooks";
import post from "~/features/negozi/post";
import get from "~/features/account/get";

interface Props {
  open: boolean;
  handleOpen: Function;
}

const NegoziDialog: React.FC<Props> = ({ open, handleOpen }) => {
  const dispatch = useAppDispatch();

  const { selected } = useAppSelector((state) => state.negozi);
  const { selected: azienda } = useAppSelector((state) => state.aziende);

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
      handleOpen(false);
    } else {
      alert("Errore!");
    }
  };

  let content = <Typography>Caricamento in corso...</Typography>;

  if (isEmpty(azienda)) {
    content = <Typography>Devi selezionare un'azienda!</Typography>;
  } else {
    if (isEmpty(azienda.negozi)) {
      content = (
        <>
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
        <List>
          {azienda.negozi?.map((negozio) => (
            <ListItemButton
              key={negozio.id}
              selected={isEmpty(selected) ? false : negozio.id === selected.id}
              onClick={() => {
                dispatch(setSelected(negozio));
                handleOpen(false);
              }}
            >
              {negozio.nome}
            </ListItemButton>
          ))}
        </List>
      );
    }
  }

  return (
    <Dialog open={open} onClose={() => handleOpen(false)}>
      <DialogTitle>Seleziona Negozio</DialogTitle>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
};

export default NegoziDialog;
