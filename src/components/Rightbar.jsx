import { Box, Typography } from "@mui/material";
import React from "react";

export const Rightbar = () => {
  return (
    <Box p={2} flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
      </Box>
    </Box>
  );
};