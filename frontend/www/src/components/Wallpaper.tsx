import { Box } from "@mui/material";
import React from "react";

interface Props {
  src: string;
  alt: string;
}

const Wallpaper: React.FC<Props> = ({ src, alt }) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <img alt={alt} src={src} width="100%" height="100%" loading="lazy" />
    </Box>
  );
};

export default Wallpaper;
