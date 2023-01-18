import React from "react";
import {
  Alert,
  Container,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { AddFab, ErrorScreen, LoadingScreen, Page } from "~/components";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { default as listCF } from "~/features/chiusureFiscali/list";
import { isEmpty } from "lodash";
import { IconFileDescription } from "@tabler/icons";

const ChiusureFiscali: React.FC = () => {
  const { pathname: path } = useLocation();
  const dispatch = useAppDispatch();
  const { listing, listError, list } = useAppSelector(
    (state) => state.chiusureFiscali
  );

  React.useEffect(() => {
    dispatch(listCF());
  }, [dispatch]);

  if (listing) {
    return <LoadingScreen />;
  } else if (listError) {
    return <ErrorScreen messaggio="Chiusure Fiscali non trovate" />;
  } else {
    return (
      <>
        <Page title="Chiusure Fiscali">
          <Container>
            <h1>Chiusure Fiscali</h1>
            {isEmpty(list) && (
              <Alert severity="warning">
                Non sono state trovate Chiusure Fiscali
              </Alert>
            )}
            {!isEmpty(list) && (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Data</TableCell>
                    <TableCell>Totale</TableCell>
                    <TableCell>D.F.</TableCell>
                    <TableCell sx={{ width: 50 }} align="center">
                      <IconFileDescription />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {list!.map((cf) => (
                    <TableRow key={cf.id}>
                      <TableCell>{cf.data}</TableCell>
                      <TableCell>€ {cf.totale}</TableCell>
                      <TableCell>{cf.numeroDocFisc}</TableCell>
                      <TableCell align="center">
                        <IconButton color="primary" href={`${path}/${cf.id}`}>
                          <IconFileDescription />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </Container>
        </Page>
        <AddFab href={`${path}/aggiungi`} />
      </>
    );
  }
};

export default ChiusureFiscali;
