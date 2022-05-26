import { React, useState, useEffect } from "react";
import { Grid, Container, Typography, Box } from "@mui/material";
import teams from "./teams.js";
import { motion } from "framer-motion";

function TeamsDesktop() {
  const [selectedNum, setSelectedNum] = useState(0);
  const [opacities, setOpacities] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);

  const variants = {
    selected: {
      opacity: 1,
    },
    unselected: {
      opacity: 0.5,
    },
  };

  function clickTeam(event) {
    setSelectedNum(event.currentTarget.id);
  }

  useEffect(() => {
    var prevOpacities = opacities;
    var newOpacities = [];
    prevOpacities.map((value, index) =>
      index == selectedNum ? newOpacities.push(true) : newOpacities.push(false)
    );
    console.log(newOpacities);
    setOpacities(newOpacities);
  }, [selectedNum]);

  return (
    <Container
      sx={{
        marginTop: "6rem",
        textAlign: "center",
        maxWidth: "1600px !important",
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <Box>
            <Box sx={{ marginBottom: "-4rem", paddingRight: "2rem" }}>
              <Box id="name">
                <Typography
                  fontSize="2.7rem"
                  lineHeight="2.7rem"
                  fontWeight="500"
                  sx={{ fontFamily: "Noto Sans JP" }}
                >
                  {teams[selectedNum]["name"][0]}
                </Typography>
                <Typography fontSize="1.5rem">
                  {teams[selectedNum]["name"][1]}
                </Typography>
              </Box>
              <Box id="role" sx={{ height: "3rem" }}>
                <Typography
                  sx={{ fontFamily: "Noto Sans JP", fontSize: "0.8rem" }}
                >
                  {teams[selectedNum]["role"][0]}
                  <br />
                  {teams[selectedNum]["role"][1]}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ marginLeft: "20px" }}>
              <motion.img
                className="inline"
                width="100%"
                src="https://i.ibb.co/X2Lzj1Z/image.png"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ marginTop: "7rem", padding: "0 3rem" }}>
          <Box className="inline">
            <img
              className="inline"
              width="60px"
              src="https://i.ibb.co/bF6VsWX/team.png"
            />
          </Box>
          <Box className="inline">
            <Typography
              fontSize="2.7rem"
              lineHeight="2.7rem"
              fontFamily={"Dela Gothic One"}
              className="inline"
            >
              カイハツシャ
            </Typography>
            <Typography
              sx={{
                letterSpacing: ".3rem",
                fontFamily: "Noto Sans JP",
                fontWeight: 300,
              }}
            >
              Development Team
            </Typography>
          </Box>
          <Grid
            container
            spacing={1}
            sx={{ marginTop: "3rem", padding: "2rem" }}
          >
            <Grid item xs={3}>
              <motion.img
                id="0"
                width="100%"
                variants={variants}
                animate={opacities[0] ? "selected" : "unselected"}
                onClick={clickTeam}
                src="https://i.ibb.co/99XwBsb/9.jpg"
              />
            </Grid>
            <Grid item xs={3}>
              <motion.img
                id="1"
                width="100%"
                variants={variants}
                animate={opacities[1] ? "selected" : "unselected"}
                onClick={clickTeam}
                src="https://i.ibb.co/bPpxgV7/25.jpg"
              />
            </Grid>
            <Grid item xs={3}>
              <motion.img
                id="2"
                width="100%"
                variants={variants}
                animate={opacities[2] ? "selected" : "unselected"}
                onClick={clickTeam}
                src="https://i.ibb.co/T09gxKR/7.jpg"
              />
            </Grid>
            <Grid item xs={3}>
              <motion.img
                id="3"
                width="100%"
                variants={variants}
                animate={opacities[3] ? "selected" : "unselected"}
                onClick={clickTeam}
                src=" https://i.ibb.co/3rCc1LG/4.jpg"
              />
            </Grid>
            <Grid item xs={3}>
              <motion.img
                id="4"
                width="100%"
                variants={variants}
                animate={opacities[4] ? "selected" : "unselected"}
                onClick={clickTeam}
                src=" https://i.ibb.co/NxCSW3K/20.jpg"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TeamsDesktop;
