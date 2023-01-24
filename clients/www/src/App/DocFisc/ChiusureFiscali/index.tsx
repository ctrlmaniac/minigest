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
  Typography,
} from "@mui/material";
import { AddFab, ErrorScreen, LoadingScreen, Page } from "~/components";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { default as listCF } from "~/features/chiusureFiscali/list";
import { isEmpty } from "lodash";
import { IconFileDescription, IconPencil, IconTrash } from "@tabler/icons";
import remove from "~/features/chiusureFiscali/remove";
import { useNegozioContext } from "~/context/negozio";

const ChiusureFiscali: React.FC = () => {
  const { pathname: path } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { negozio } = useNegozioContext();
  const { listing, listError, list } = useAppSelector(
    (state) => state.chiusureFiscali
  );

  React.useEffect(() => {
    dispatch(listCF(negozio));
  }, [dispatch, negozio]);

  const handleRemove = (id: string) => {
    dispatch(remove(id));
  };

  if (listing) {
    return <LoadingScreen />;
  } else if (listError) {
    return <ErrorScreen messaggio="Chiusure Fiscali non trovate" />;
  } else {
    return (
      <>
        <Page title="Chiusure Fiscali">
          <Container>
            <Typography variant="h3" component="h1" gutterBottom>
              Chiusure Fiscali
            </Typography>

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
                    <TableCell sx={{ width: 50 }} align="center">
                      <IconPencil />
                    </TableCell>
                    <TableCell sx={{ width: 50 }} align="center">
                      <IconTrash />
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
                        <IconButton
                          color="primary"
                          onClick={() => navigate(`${path}/${cf.id}`)}
                        >
                          <IconFileDescription />
                        </IconButton>
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          color="warning"
                          onClick={() => navigate(`${path}/modifica/${cf.id}`)}
                        >
                          <IconPencil />
                        </IconButton>
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          color="error"
                          onClick={() => handleRemove(cf.id!)}
                        >
                          <IconTrash />
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
