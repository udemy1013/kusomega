import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const styledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  minHeight: "100vh",
});
const Main = () => {
  return (
    <styledBox>
      <Typography variant="h1">KusomeganeFriends</Typography>
    </styledBox>
  );
};

export default Main;
