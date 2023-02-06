import React from "react";
import { Box, Container, Fab } from "@mui/material";
import { IconDeviceFloppy } from "@tabler/icons-react";

interface Props {
  handleClick: Function;
  disabled: boolean;
}

const SaveFab: React.FC<Props> = ({ handleClick, disabled }) => {
  return (
    <Box sx={{ position: "fixed", bottom: 16, left: 0, right: 0 }}>
      <Container sx={{ textAlign: "right" }}>
        <Fab
          aria-label="salva"
          color="primary"
          onClick={() => handleClick()}
          disabled={disabled}
        >
          <IconDeviceFloppy />
        </Fab>
      </Container>
    </Box>
  );
};

export default SaveFab;
