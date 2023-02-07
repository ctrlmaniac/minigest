import React from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { isEmpty } from "lodash";
import { useAppDispatch, useAppSelector } from "~/hooks";
import generateToken from "~/features/account/generateToken";

const Accedi: React.FC = () => {
  const dispatch = useAppDispatch();
  const { reqPwResetMessage } = useAppSelector((state) => state.account);

  const [values, setValues] = React.useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value.trim(),
    });
  };

  const handleResetPassword = () => {
    if (!isEmpty(values.username)) {
      dispatch(generateToken(values.username));
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper>
        <Box p={2}>
          <form action="" method="post">
            <TextField
              fullWidth
              label="email"
              name="username"
              type="email"
              margin="normal"
              value={values.username}
              onChange={handleChange}
              error={values.username.length < 1}
              required
            />
            <TextField
              fullWidth
              name="password"
              label="password"
              type="password"
              margin="normal"
              value={values.password}
              onChange={handleChange}
              error={values.password.length < 1}
              required
            />
            <Button fullWidth variant="contained" type="submit">
              accedi
            </Button>
          </form>
          <Box mt={2}>
            <Button fullWidth onClick={() => handleResetPassword()}>
              resetta password
            </Button>
            {!isEmpty(reqPwResetMessage) && (
              <Typography>{reqPwResetMessage}</Typography>
            )}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Accedi;
