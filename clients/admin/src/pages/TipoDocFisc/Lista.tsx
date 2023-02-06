import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AddFab, ErrorScreen, LoadingScreen } from "components";
import list from "~/features/tipoDocFisc/list";
import remove from "~/features/tipoDocFisc/remove";
import { useAppDispatch, useAppSelector } from "~/hooks";

const TipoDocFiscLista: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    list: tdfs,
    listing,
    listError,
  } = useAppSelector((state) => state.tipiDocFisc);

  React.useEffect(() => {
    dispatch(list());
  }, []);

  const handleRemove = (id: string) => {
    dispatch(remove(id));
  };

  if (listing) {
    return <LoadingScreen />;
  } else if (listError) {
    return <ErrorScreen message={listError} />;
  } else {
    return (
      <>
        <Box mb={3}>
          <Typography variant="h3">Tipi di Documenti Fiscali</Typography>
        </Box>

        <Box>
          <Paper>
            <Box p={2}>
              <Table>
                <TableBody>
                  {tdfs?.map((tdf) => (
                    <TableRow key={tdf.id}>
                      <TableCell>{tdf.codice}</TableCell>
                      <TableCell>{tdf.descrizione}</TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconButton
                          color="warning"
                          onClick={() =>
                            navigate("/docfisc/tipi/modifica/" + tdf.id!)
                          }
                        >
                          <IconEdit />
                        </IconButton>
                      </TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconButton
                          color="error"
                          onClick={() => handleRemove(tdf.id!)}
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
        </Box>

        <AddFab href="tipi/aggiungi" />
      </>
    );
  }
};

export default TipoDocFiscLista;
