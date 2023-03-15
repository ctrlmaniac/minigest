import {
  Alert,
  Box,
  Button,
  Container,
  LinearProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Splash } from "~/components";
import accountExists from "~/features/auth/exists";
import issueToken from "~/features/auth/issueToken";
import { useAppDispatch, useAppSelector } from "~/hooks";

const PasswordForgot: React.FC = () => {
  const dispatch = useAppDispatch();
  const { exists, issuing, issueError, response } = useAppSelector(
    (state) => state.auth
  );

  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(true);

  // Controlla se l'email esiste
  React.useEffect(() => {
    dispatch(accountExists(email));
  }, [email]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setEmail(value);
    setError(value.toString().length < 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(issueToken({ email: email }));
  };

  return (
    <Splash>
      <Container maxWidth="xs">
        <Paper>
          <Box p={2}>
            <Typography variant="h6" gutterBottom>
              Resetta la tua password!
            </Typography>
            <Typography gutterBottom>
              Inserisci la tua email, ti verrà inviato un link al quale potrai
              reimpostare la tua password!
            </Typography>

            <form method="post" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="email"
                type="email"
                value={email}
                error={error}
                onChange={handleChange}
                required
                margin="normal"
                focused
              />
              {email.toString().length > 1 && (
                <Box my={1}>
                  <Alert
                    variant="outlined"
                    severity={exists ? "success" : "error"}
                  >
                    {exists ? "Utente esistente!" : "Utente non esistente!"}
                  </Alert>
                </Box>
              )}

              <Button
                fullWidth
                type="submit"
                onClick={handleSubmit}
                variant="contained"
                disabled={error || !exists}
              >
                Resetta password
              </Button>
            </form>
          </Box>
        </Paper>
        {issuing && <LinearProgress />}
        {issueError && (
          <Alert variant="outlined" severity="error">
            {issueError}
          </Alert>
        )}
        {response && (
          <Alert variant="outlined" severity="success">
            {response}
          </Alert>
        )}
      </Container>
    </Splash>
  );
};

export default PasswordForgot;
