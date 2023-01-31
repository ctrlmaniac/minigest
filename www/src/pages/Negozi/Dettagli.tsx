import {
  Box,
  Container,
  Paper,
  SpeedDial,
  SpeedDialAction,
  Typography,
} from "@mui/material";
import { IconPencil, IconSettings, IconTrash } from "@tabler/icons-react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorScreen, LoadingScreen } from "~/components";
import get from "~/features/negozi/get";
import remove from "~/features/negozi/remove";
import { useAppDispatch, useAppSelector } from "~/hooks";

const NegoziDettagli: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { dettagli, getting, getError } = useAppSelector(
    (state) => state.negozi
  );

  React.useEffect(() => {
    if (id) {
      dispatch(get(id!));
    }
  }, [id]);

  if (getting) {
    return <LoadingScreen />;
  } else if (getError) {
    return <ErrorScreen message={getError} />;
  } else {
    return (
      <>
        <Box mb={3}>
          <Typography variant="h3">Dettagli Negozio</Typography>
        </Box>

        <Box>
          <Paper>
            <Box p={2}>
              <Typography>
                <strong>Nome:</strong> {dettagli?.nome}
              </Typography>
            </Box>
          </Paper>
        </Box>

        <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
          <Container sx={{ textAlign: "right" }}>
            <SpeedDial ariaLabel="azioni su negozi" icon={<IconSettings />}>
              <SpeedDialAction
                icon={<IconPencil />}
                tooltipTitle="modifica"
                onClick={() => navigate(`/app/negozi/modifica/${id}`)}
              />
              <SpeedDialAction
                icon={<IconTrash />}
                tooltipTitle="elimina"
                onClick={() => dispatch(remove(id!))}
              />
            </SpeedDial>
          </Container>
        </Box>
      </>
    );
  }
};

export default NegoziDettagli;
