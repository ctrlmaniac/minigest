import {
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import { isEmpty } from "lodash";
import React from "react";
import { setSelected } from "~/features/aziende/slice";
import { setSelected as setSelectedNegozio } from "~/features/negozi/slice";
import { useAppDispatch, useAppSelector } from "~/hooks";

interface Props {
  open: boolean;
  handleOpen: Function;
}

const AziendeDialog: React.FC<Props> = ({ open, handleOpen }) => {
  const dispatch = useAppDispatch();

  const { dettagli } = useAppSelector((state) => state.account);
  const { selected } = useAppSelector((state) => state.aziende);

  let content = <Typography>Caricamento in corso...</Typography>;

  if (isEmpty(dettagli?.aziende)) {
    content = <Typography>Devi aggiungere un'azienda!</Typography>;
  } else {
    content = (
      <List>
        {dettagli?.aziende?.map((azienda) => (
          <ListItemButton
            key={azienda.id}
            onClick={() => {
              dispatch(setSelected(azienda));
              dispatch(setSelectedNegozio(undefined));
              handleOpen(false);
            }}
            selected={isEmpty(selected) ? false : azienda.id === selected.id}
          >
            {azienda.denominazione}
          </ListItemButton>
        ))}
      </List>
    );
  }

  return (
    <Dialog open={open} onClose={() => handleOpen(false)}>
      <DialogTitle>Seleziona Azienda</DialogTitle>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
};

export default AziendeDialog;
