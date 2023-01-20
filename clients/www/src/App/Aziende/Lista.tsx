import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { default as listAziende } from "~/features/aziende/list";
import { AddFab, ErrorScreen, LoadingScreen, Page } from "~/components";
import {
  Box,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { IconFileDescription } from "@tabler/icons";

const AziendeLista: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { listing, listError, list } = useAppSelector((state) => state.aziende);

  React.useEffect(() => {
    dispatch(listAziende());
  }, [dispatch]);

  if (listing) {
    return <LoadingScreen />;
  } else if (listError) {
    return <ErrorScreen messaggio="C'è stato un problema..." />;
  } else {
    return (
      <>
        <Page title="Aziende">
          <Container>
            <Typography variant="h3" component="h1" gutterBottom>
              Aziende
            </Typography>

            <Paper>
              <Box p={2}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell variant="head">
                        Denominazione/Nome/Cognome
                      </TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconFileDescription />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {list?.map((azienda) => (
                      <TableRow key={azienda.id}>
                        <TableCell>
                          {azienda.denominazione}
                          {azienda.nome}
                          {azienda.cognome}
                        </TableCell>
                        <TableCell sx={{ width: 50 }} align="center">
                          <IconButton
                            color="primary"
                            onClick={() =>
                              navigate(`/app/aziende/dettagli/${azienda.id}`)
                            }
                          >
                            <IconFileDescription />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Paper>
          </Container>
        </Page>
        <AddFab href="/app/aziende/aggiungi" />
      </>
    );
  }
};

export default AziendeLista;
