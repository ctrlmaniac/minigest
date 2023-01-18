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
import { isEmpty } from "lodash";
import React from "react";
import { LoadingScreen, Page } from "~/components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { default as listTDF } from "~/features/tipoDocFisc/list";

const TipoDocFisc: React.FC = () => {
  const dispatch = useAppDispatch();
  const { list, listError, listing } = useAppSelector(
    (state) => state.tipoDocFisc
  );

  React.useEffect(() => {
    dispatch(listTDF());
  }, []);

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
  }
};

export default TipoDocFisc;
