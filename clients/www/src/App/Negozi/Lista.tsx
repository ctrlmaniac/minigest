import React from "react";
import {
  Alert,
  Box,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { AddFab, LoadingScreen, Page } from "~/components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { unseNegozioContext } from "~/context/negozio";
import { useAziendaContext } from "~/context/azienda";
import { IconBuildingWarehouse, IconPencil, IconTrash } from "@tabler/icons";
import { isEmpty } from "lodash";
import listByAzienda from "~/features/negozi/listByAzienda";
import { useNavigate } from "react-router-dom";
import remove from "~/features/negozi/remove";

const ListaNegozi: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { azienda } = useAziendaContext();
  const { selected } = useAppSelector((state) => state.aziende);
  const { listByAzienda: list } = useAppSelector((state) => state.negozi);

  React.useEffect(() => {
    dispatch(listByAzienda(azienda));
  }, [azienda]);

  const handleDelete = (id: string) => {
    dispatch(remove(id));
  };

  if (!isEmpty(selected)) {
    return (
      <>
        <Page title="Negozi">
          <Container>
            <Box mb={3}>
              <Typography variant="h3" component="h1">
                Negozi
              </Typography>
              <Typography>
                Lista dei negozi appartenenti a{" "}
                <strong>{selected!.denominazione}</strong>, per cambiare azienda
                clicca sull'icona <IconBuildingWarehouse /> in alto a sinistra.
              </Typography>
            </Box>

            {isEmpty(list) ? (
              <Alert severity="warning">Non ci sono negozi disponibili!</Alert>
            ) : (
              <Paper>
                <Box p={2}>
                  <Table>
                    <TableBody>
                      {list?.map((n) => (
                        <TableRow key={n.id}>
                          <TableCell>{n.nome}</TableCell>
                          <TableCell sx={{ width: 50 }} align="center">
                            <IconButton
                              color="warning"
                              onClick={() =>
                                navigate(`/app/negozi/modifica/${n.id!}`)
                              }
                            >
                              <IconPencil />
                            </IconButton>
                          </TableCell>
                          <TableCell sx={{ width: 50 }} align="center">
                            <IconButton
                              color="error"
                              onClick={() => handleDelete(n.id!)}
                            >
                              <IconTrash />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Paper>
            )}
          </Container>
        </Page>
        <AddFab href="/app/negozi/aggiungi" />
      </>
    );
  } else {
    return <LoadingScreen />;
  }
};

export default ListaNegozi;
