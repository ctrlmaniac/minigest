import React from "react";
import { useDispatch } from "react-redux";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@material-ui/core";
import { Table } from "@minigest/ui";
import { action } from "src/state";
import { FormInfo } from "../Form";

export function Info({ user }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleSubmit = function (values) {
    dispatch(action.utente.put(values));
  };

  return (
    <React.Fragment>
      <FormInfo
        user={user}
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
      />

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Informazioni personali
          </Typography>

          <Table>
            <TableBody>
              <TableRow>
                <TableCell variant="head" style={{ width: 100 }}>
                  Nome
                </TableCell>
                <TableCell>{user.nome || "non fornito"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Cognome</TableCell>
                <TableCell>{user.cognome || "non fornito"}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
            modifica
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
