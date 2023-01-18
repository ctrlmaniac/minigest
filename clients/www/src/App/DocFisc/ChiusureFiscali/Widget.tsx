import {
  Alert,
  Box,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { isEmpty } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
import list from "~/features/chiusureFiscali/list";
import { useAppDispatch, useAppSelector } from "~/hooks";

const WidgetChiusureFiscali: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    listing,
    listError,
    list: chiusure,
  } = useAppSelector((state) => state.chiusureFiscali);

  React.useEffect(() => {
    dispatch(list());
  }, [dispatch]);

  if (listing) {
    return <Skeleton variant="rectangular" />;
  } else if (listError) {
    return <Alert severity="error">Impossibile caricare chiusure</Alert>;
  } else {
    return (
      <Paper sx={{ height: "100%" }}>
        <Box p={2}>
          <Typography variant="h6" gutterBottom>
            Ultime Chiusure Fiscali
          </Typography>

          {isEmpty(chiusure) && (
            <Typography>Non sono presenti chiusure fiscali</Typography>
          )}

          {!isEmpty(chiusure) && (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Data</TableCell>
                  <TableCell>Totale</TableCell>
                  <TableCell>N.D.F.</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {chiusure!.slice(0, 3).map((chiusura) => (
                  <TableRow
                    key={chiusura.id}
                    onClick={() =>
                      navigate("/app/docfisc/chiusure-fiscali/" + chiusura.id)
                    }
                  >
                    <TableCell>{chiusura.data}</TableCell>
                    <TableCell>€ {chiusura.totale}</TableCell>
                    <TableCell>{chiusura.numeroDocFisc}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </Box>
      </Paper>
    );
  }
};

export default WidgetChiusureFiscali;
