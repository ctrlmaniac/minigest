import { Alert, Box, Container, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";
import { Splash } from "~/components";

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <Splash>
      <Container maxWidth="xs">
        <Box mb={3}>
          <Typography variant="h3" component="h3" gutterBottom>
            Oops!
          </Typography>
          <Typography gutterBottom>Qualcosa non va!</Typography>
        </Box>
        <Alert severity="error">{error.statusText || error.message}</Alert>
      </Container>
    </Splash>
  );
}
