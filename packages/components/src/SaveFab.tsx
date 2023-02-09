import React from "react";
import { Box, CircularProgress, Container, Fab } from "@mui/material";
import { IconDeviceFloppy } from "@tabler/icons-react";
import { green } from "@mui/material/colors";

interface Props {
  onClick?: Function;
  disabled: boolean;
  loading?: boolean;
}

const SaveFab: React.FC<Props> = ({
  onClick = () => {},
  disabled,
  loading = false,
}) => {
  return (
    <Box sx={{ position: "fixed", bottom: 16, left: 0, right: 0 }}>
      <Container sx={{ textAlign: "right", position: "relative" }}>
        <Fab
          aria-label="salva"
          color="primary"
          onClick={() => onClick()}
          disabled={disabled}
        >
          <IconDeviceFloppy />
        </Fab>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: "absolute",
              top: -6,
              right: 18,
              zIndex: 1,
            }}
          />
        )}
      </Container>
    </Box>
  );
};

export default SaveFab;
