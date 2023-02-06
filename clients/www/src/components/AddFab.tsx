import React from "react";
import { Box, Container, Fab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IconPlus } from "@tabler/icons-react";

interface Props {
  href: string;
}

const AddFab: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ position: "fixed", bottom: 16, left: 0, right: 0 }}>
      <Container sx={{ textAlign: "right" }}>
        <Fab
          color="primary"
          aria-label="aggiungi"
          onClick={() => navigate(props.href)}
        >
          <IconPlus />
        </Fab>
      </Container>
    </Box>
  );
};

export default AddFab;
