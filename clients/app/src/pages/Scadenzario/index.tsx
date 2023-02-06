import {
  Alert,
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { ErrorScreen, LoadingScreen } from "components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import list from "~/features/scadenzario/list";
import { isEmpty } from "lodash";
import { IconFile } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const Scadenzario: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    listing,
    listError,
    list: scadenzario,
  } = useAppSelector((state) => state.scadenzario);

  React.useEffect(() => {
    dispatch(list());
  }, []);

  if (listing) {
    return <LoadingScreen />;
  } else if (listError) {
    return <ErrorScreen message={listError} />;
  } else {
    return (
      <>
        <Box mb={3}>
          <Typography variant="h3">Scadenzario</Typography>
        </Box>

        {isEmpty(scadenzario) ? (
          <Alert severity="success">Non ci sono scadenze previste!</Alert>
        ) : (
          <Paper>
            <Box p={2}>
              <Table>
                <TableBody>
                  {scadenzario?.map((scad) => {
                    return (
                      <TableRow key={scad.id}>
                        <TableCell sx={{ width: 50 }} align="center">
                          <IconButton
                            color="info"
                            onClick={() =>
                              navigate(
                                `/app/docfisc/fatture/dettagli/${scad.fattura
                                  ?.id!}`
                              )
                            }
                          >
                            <IconFile />
                          </IconButton>
                        </TableCell>
                        <TableCell>{scad.data}</TableCell>
                        <TableCell align="right">{scad.importo} €</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
          </Paper>
        )}
      </>
    );
  }
};

export default Scadenzario;
