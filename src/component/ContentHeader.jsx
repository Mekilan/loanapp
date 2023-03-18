import React from "react";
import { Typography } from "@mui/material";

const ContentHeader = ({ txtheader }) => {
  return (
    <Typography
      component="h3"
      sx={{ my: 1, fontSize: "16px", fontWeight: 600, color: "#555" }}
    >
      {txtheader}
    </Typography>
  );
};

export default ContentHeader;
