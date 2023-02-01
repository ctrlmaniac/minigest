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
import getSelected from "~/features/negozi/getSelected";
import { useAppDispatch, useAppSelector } from "~/hooks";

interface Props {
  open: boolean;
  handleOpen: Function;
}

const NegoziDialog: React.FC<Props> = ({ open, handleOpen }) => {
  const dispatch = useAppDispatch();
  const { selected, listByAzienda } = useAppSelector((state) => state.negozi);

  const handleChangeNegozio = (id: string) => {
    window.localStorage.setItem("negozio", id);
    dispatch(getSelected(id));
    handleOpen(false);
  };

  let content = <Typography>Caricamento in corso...</Typography>;

  if (isEmpty(listByAzienda)) {
    content = <Typography>Devi aggiungere un negozio!</Typography>;
  } else {
    content = (
      <List>
        {listByAzienda?.map((negozio) => (
          <ListItemButton
            key={negozio.id}
            selected={negozio.id === selected?.id}
            onClick={() => handleChangeNegozio(negozio.id!)}
          >
            {negozio.nome}
          </ListItemButton>
        ))}
      </List>
    );
  }

  return (
    <Dialog open={open} onClose={() => handleOpen(false)}>
      <DialogTitle>Seleziona Negozio</DialogTitle>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
};

export default NegoziDialog;
