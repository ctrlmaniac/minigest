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
import { isEmpty } from "lodash";
import React from "react";
import { AddFab, LoadingScreen, Page } from "~/components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { default as listTDF } from "~/features/tipoDocFisc/list";
import { IconPencil, IconTrash } from "@tabler/icons";
import remove from "~/features/tipoDocFisc/remove";
import { useNavigate } from "react-router-dom";

const TipoDocFisc: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { list, listError, listing } = useAppSelector(
    (state) => state.tipoDocFisc
  );

  React.useEffect(() => {
    dispatch(listTDF());
  }, []);

  const handleRemoveTipo = (id: string) => {
    dispatch(remove(id));
  };

  if (listing) {
    return <LoadingScreen />;
  } else if (listError) {
    return <Alert severity="error">C'è stato un errore!</Alert>;
  } else {
    return (
      <>
        <Page title="Tipi di Doc. Fisc.">
          <Container>
            <Typography variant="h3" component="h1" gutterBottom>
              Tipi Documenti Fiscali
            </Typography>
            {isEmpty(list) && (
              <Alert severity="warning">
                non ci sono tipi di documenti fiscali
              </Alert>
            )}
            {!isEmpty(list) && (
              <Paper>
                <Box p={2}>
                  <Table>
                    <TableBody>
                      {list?.map((tdf, i) => (
                        <TableRow key={i}>
                          <TableCell sx={{ width: 100 }}>
                            {tdf.codice}
                          </TableCell>
                          <TableCell>{tdf.descrizione}</TableCell>
                          <TableCell sx={{ width: 50 }} align="center">
                            <IconButton
                              color="warning"
                              onClick={() =>
                                navigate(
                                  `/app/docfisc/tipo/modifica/${tdf.id!}`
                                )
                              }
                            >
                              <IconPencil />
                            </IconButton>
                          </TableCell>
                          <TableCell sx={{ width: 50 }} align="center">
                            <IconButton
                              color="error"
                              onClick={() => handleRemoveTipo(tdf.id!)}
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

        <AddFab href="/app/docfisc/tipo/aggiungi" />
      </>
    );
  }
};

export default TipoDocFisc;
