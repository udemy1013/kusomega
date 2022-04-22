import { Box } from "@mui/material";
import React from "react";

export const Rightbar = () => {
  return (
    <Box
      bgcolor={"lightcoral"}
      p={2}
      flex={1}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
};
