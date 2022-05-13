import { React, useRef, useState } from "react";
import { Box, Container, Grid, ThemeProvider, Typography } from "@mui/material";
import "../css/style.css";
import { createTheme } from "@mui/system";
import { useSpring, animated, config } from "@react-spring/web";
import Island from "./Island";

function RoadmapMobile() {
  const [islands, setIsland] = useState([
    "https://i.ibb.co/cgnD8xk/left.png",
    "https://i.ibb.co/XS4qTQZ/right.png",
    "https://i.ibb.co/f1NvJQw/left2.png",
    "https://i.ibb.co/Qd536qL/right2.png",
  ]);

  function islandTap(e) {
    setIsland(islands[e.currentTarget.key]);
  }

  return (
    <Container sx={{ marginTop: "100px" }}>
      <Container>
        <Typography
          fontFamily="Dela Gothic One"
          fontSize="48px"
          lineHeight="48px"
          textAlign="left"
        >
          我々の夢は
          <br />
          日本一のDAO。
        </Typography>
        <Typography
          fontFamily="Noto Sans JP"
          textAlign="left"
          letterSpacing=".1rem"
          fontSize=".8rem"
          sx={{ marginTop: "20px" }}
        >
          これからの資産は「個性」
          <br />
          その人にしか生み出せないものがきっとある。
          <br />
          <br />
          自分だけでは見えない世界があっても
          <br />
          きっと大丈夫。我々と共に探しに行こう。
          <br />
          僕らはフレンズなんだから。
        </Typography>
        <Grid container className="islands">
          {islands.map((island) => {
            return <Island island={island} onClick={islandTap} />;
          })}
        </Grid>
      </Container>
      <Grid
        item
        sx={{
          position: "fixed",
          left: "0",
          bottom: "-5px",
        }}
      >
        <img src="https://i.ibb.co/XLMGBd1/main.png" className="mainImg" />
      </Grid>
    </Container>
  );
}

export default RoadmapMobile;
