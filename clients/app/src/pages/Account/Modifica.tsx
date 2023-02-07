import React from "react";
import { isEmpty } from "lodash";
import { useAppDispatch, useAppSelector } from "~/hooks";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import generateToken from "~/features/account/generateToken";
import update from "~/features/account/update";

const AccountModifica: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    dettagli: account,
    reqPwResetMessage,
    reqUpdateMessage,
  } = useAppSelector((state) => state.account);

  const [values, setValues] = React.useState({
    fname: account?.fname,
    lname: account?.lname,
    email: account?.email,
  });

  const [errors, setErrors] = React.useState({
    fname: false,
    lname: false,
    email: false,
  });

  const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: value.toString().length < 1,
    });
  };

  const reqPasswordReset = () => {
    dispatch(generateToken(account?.email!));
  };

  const reqUpdate = () => {
    dispatch(
      update({
        fname: values.fname!,
        lname: values.lname!,
        email: values.email!,
      })
    );
  };

  if (isEmpty(account)) {
    return <Typography>caricamento in corso...</Typography>;
  } else {
    return (
      <>
        <Container maxWidth="xs">
          <Box mb={3}>
            <Paper>
              <Box p={2}>
                <Typography variant="h6" gutterBottom>
                  Dati Personali
                </Typography>

                <TextField
                  fullWidth
                  label="nome"
                  name="fname"
                  value={values.fname}
                  error={errors.fname}
                  onChange={handleAccountChange}
                  required
                  margin="normal"
                />

                <TextField
                  fullWidth
                  label="Cognome"
                  name="lname"
                  value={values.lname}
                  error={errors.lname}
                  onChange={handleAccountChange}
                  required
                  margin="normal"
                />

                <TextField
                  fullWidth
                  label="email"
                  name="email"
                  value={values.email}
                  error={errors.email}
                  onChange={handleAccountChange}
                  required
                  margin="normal"
                  type="email"
                />

                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => reqUpdate()}
                >
                  Aggiorna dati
                </Button>
                <Box mt={2}>
                  <Button onClick={() => reqPasswordReset()} fullWidth>
                    resetta password
                  </Button>

                  {!isEmpty(reqPwResetMessage) && (
                    <Typography align="center">{reqPwResetMessage}</Typography>
                  )}
                  {!isEmpty(reqUpdateMessage) && (
                    <Typography align="center">{reqUpdateMessage}</Typography>
                  )}
                </Box>
              </Box>
            </Paper>
          </Box>
        </Container>
      </>
    );
  }
};

export default AccountModifica;
