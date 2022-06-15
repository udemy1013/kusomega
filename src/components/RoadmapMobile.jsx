import { React, useRef, useState } from "react";
import { Box, Container, Grid, ThemeProvider, Typography } from "@mui/material";
import "../css/style.css";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function RoadmapMobile() {
  const islands = [
    "https://i.ibb.co/Jc5fp59/shop-junbi.png",
    "https://i.ibb.co/drGL7Dv/bussi-junbi.png",
    "https://i.ibb.co/prNqzB1/park-junbi.png",
    "https://i.ibb.co/xgGdL32/asobi-junbi.png",
  ];

  const urls = [
    "/roadmap/shop",
    "/roadmap/media",
    "/roadmap/world",
    "/roadmap/game",
  ];

  return (
    <Container sx={{ marginTop: "100px" }}>
      <Container
        component={motion.div}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ y: "-100vh" }}
        transition={{ duration: 1 }}
        sx={{ padding: 0 }}
      >
        <Container>
          <Typography
            fontFamily="Dela Gothic One"
            fontSize="1.5rem"
            lineHeight="1.5rem"
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
            fontSize=".75rem"
            fontWeight="500"
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
        </Container>
        <div align="right" style={{ width: "70%" }}>
          <img
            width="70px"
            src="https://i.ibb.co/ftHDKG9/center.png"
            className="daoIsland"
            style={{ paddingTop: "50px", marginBottom: "-10vh" }}
          />
        </div>
        <Grid container className="islands" sx={{ marginTop: "10vh" }}>
          <AnimatePresence>
            {islands.map((island, index) => {
              return (
                <Grid item xs={3} key={index}>
                  <Link to={urls[index]}>
                    <img src={island} className="float" />
                  </Link>
                </Grid>
              );
            })}
          </AnimatePresence>
        </Grid>
      </Container>
      <Container>
        <Grid
          item
          sx={{
            position: "fixed",
            left: "0",
            bottom: "-5px",
          }}
          layout
        >
          <motion.img
            initial={{ opacity: 0, x: "-100vh" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100vh" }}
            transition={{ duration: 1 }}
            src="https://i.ibb.co/NmS2btf/main.png"
            className="mainImg"
          />
        </Grid>
      </Container>
    </Container>
  );
}

export default RoadmapMobile;
