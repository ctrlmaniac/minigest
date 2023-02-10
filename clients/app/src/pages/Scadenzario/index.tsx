import React from "react";
import { ErrorScreen, LoadingScreen } from "components";
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
      return <ErrorScreen message={response || "Errore caricamento"} />;
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
                                `/docfisc/fatture/dettagli/${scadenza.fattura!
                                  .id!}`
                              )
                            }
                          >
                            <IconFile />
                          </IconButton>
                        </TableCell>
                        <TableCell>{scadenza.data}</TableCell>
                        <TableCell align="right">
                          € {scadenza.importo}
                        </TableCell>
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
