import React from "react";
import {
  Alert,
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { LoadingScreen, Page } from "~/components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { unseNegozioContext } from "~/context/negozio";
import { useAziendaContext } from "~/context/azienda";
import { IconBuildingWarehouse } from "@tabler/icons";
import { isEmpty } from "lodash";
import listByAzienda from "~/features/negozi/listByAzienda";

const ListaNegozi: React.FC = () => {
  const dispatch = useAppDispatch();
  const { azienda } = useAziendaContext();
  const { selected } = useAppSelector((state) => state.aziende);
  const { listByAzienda: list } = useAppSelector((state) => state.negozi);

  React.useEffect(() => {
    dispatch(listByAzienda(azienda));
  }, [azienda]);

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
                      {list?.map((a) => (
                        <TableRow key={a.id}>
                          <TableCell>{a.nome}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Paper>
            )}
          </Container>
        </Page>
      </>
    );
  } else {
    return <LoadingScreen />;
  }
};

export default ListaNegozi;
