import {
  Box,
  CircularProgress,
  Container,
  SpeedDial,
  SpeedDialAction,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { IconPencil, IconSettings, IconTrash } from "@tabler/icons-react";
import React from "react";

interface Props {
  handleEdit: Function;
  handleDelete: Function;
  loading?: boolean;
}

const DialActions: React.FC<Props> = ({
  handleEdit,
  handleDelete,
  loading = false,
}) => {
  return (
    <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
      <Container sx={{ textAlign: "right", position: "relative" }}>
        <SpeedDial ariaLabel="azioni" icon={<IconSettings />}>
          <SpeedDialAction
            icon={<IconPencil />}
            tooltipTitle="modifica"
            onClick={() => handleEdit()}
          />
          <SpeedDialAction
            icon={<IconTrash />}
            tooltipTitle="elimina"
            onClick={() => handleDelete()}
          />
        </SpeedDial>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: "absolute",
              bottom: -6,
              right: 18,
              zIndex: 1,
            }}
          />
        )}
      </Container>
    </Box>
  );
};

export default DialActions;
