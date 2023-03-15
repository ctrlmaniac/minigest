import React from "react";
import { ErrorScreen, LoadingScreen } from "~/components";
import list from "~/features/scadenzario/list";
import { useAppDispatch, useAppSelector } from "~/hooks";
import {
  Alert,
  Box,
  IconButton,
  List,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import { IconFile } from "@tabler/icons-react";

const Scadenzario: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    listing,
    listError,
    list: scadenze,
    response,
  } = useAppSelector((state) => state.scadenzario);

  React.useEffect(() => {
    dispatch(list());
  }, []);

  if (listing) {
    return <LoadingScreen />;
  } else {
    if (listError) {
      return <ErrorScreen>{response || "Errore caricamento"}</ErrorScreen>;
    }

    return (
      <>
        <Box mb={3}>
          <Typography variant="h3">Scadenzario</Typography>
        </Box>

        {isEmpty(scadenze) ? (
          <Alert severity="info" variant="outlined">
            Non ci sono scadenze!
          </Alert>
        ) : (
          <Box>
            <Paper>
              <Box p={2}>
                <Table>
                  <TableBody>
                    {scadenze!.map((scadenza) => (
                      <TableRow key={scadenza.id}>
                        <TableCell sx={{ width: 50 }} align="center">
                          <IconButton
                            color="primary"
                            onClick={() =>
                              navigate(
                                `/${
                                  scadenza.tipo === "fattura"
                                    ? "docfisc/fatture/"
                                    : "fisco/f24/"
                                }dettagli/${scadenza.id}`
                              )
                            }
                          >
                            <IconFile />
                          </IconButton>
                        </TableCell>
                        <TableCell sx={{ width: 100 }}>
                          {scadenza.tipo}
                        </TableCell>
                        <TableCell>{scadenza.dataScadenza}</TableCell>
                        <TableCell align="right">€ {scadenza.totale}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Paper>
          </Box>
        )}
      </>
    );
  }
};

export default Scadenzario;
