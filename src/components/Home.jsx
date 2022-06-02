import React from "react";
import { Grid, styled, Link, SvgIcon, Typography, Paper } from "@mui/material";
import "../css/style.css";
import { Instagram, Twitter, Menu } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Box } from "@mui/system";
import Countdown from "react-countdown";

const classes = "backgroundImage responsiveMargin";

const StyledLink = styled(Link)(({ theme }) => ({
  borderRadius: 5,
  textDecoration: "none",
  color: "#2d2d2d",
}));

function Home() {
  document.body.style.overflow = "hidden";

  return (
    <Grid
      container
      sx={{
        backgroundSize: "cover",
        overflow: "hidden",
      }}
      component={motion.div}
      className={classes}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Grid className="md-None" item xs={12}>
        <img
          width="100%"
          align="center"
          src="https://s8.gifyu.com/images/home_desktop.gif"
        />
        <Paper
          sx={{
            position: "absolute",
            bottom: "64px",
            right: "5rem",
            backgroundColor: "#007DA6",
            width: "30rem",
            height: "5rem",
            borderRadius: ".5rem",
            display: "inline",
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              margin: 0,
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              width: "100%",
            }}
          >
            <Box sx={{ display: "inline-block" }}>
              <Typography
                sx={{
                  fontSize: ".5rem",
                  fontFamily: "Noto Sans JP",
                  paddingLeft: "20px",
                  display: "inline",
                }}
              >
                次のフレンズ登場まで
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontFamily: "Dela Gothic One",
                    paddingLeft: "20px",
                    paddingBottom: "10px",
                  }}
                >
                  <Countdown date={Date.now() + 86400000} />
                </Typography>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "inline",
                margin: 0,
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: "0",
              }}
            >
              <Box sx={{ marginRight: "3rem" }}>
                <Paper
                  sx={{
                    backgroundColor: "#FBCC45",
                    padding: ".5rem 1rem",
                    whiteSpace: "nowrap",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      display: "inline",
                      fontSize: "1rem",
                      lineHeight: "1rem",
                      paddingRight: ".5rem",
                    }}
                  >
                    Opensea
                  </Typography>
                  <SvgIcon sx={{ color: "white" }}>
                    <path
                      class="cls-1"
                      d="M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12Z"
                    />
                    <path
                      className="yellow"
                      d="M5.92,12.4l0-.08L9.09,7.44a.11.11,0,0,1,.19,0A6.67,6.67,0,0,1,10,11a5.32,5.32,0,0,1-.61,1.34l-.12.2a.11.11,0,0,1-.09.05H6A.11.11,0,0,1,5.92,12.4Z"
                    />
                    <path
                      className="yellow"
                      d="M19.83,13.31v.77a.09.09,0,0,1-.06.1,3.92,3.92,0,0,0-1.41,1c-.88,1.22-1.55,3-3,3H9.05a4,4,0,0,1-4-4V14a.11.11,0,0,1,.11-.11H8.63a.12.12,0,0,1,.12.13,1.12,1.12,0,0,0,.12.67,1.23,1.23,0,0,0,1.1.68H11.7V14.05H10a.11.11,0,0,1-.09-.18l.06-.09a9.85,9.85,0,0,0,.63-1c.15-.27.3-.56.43-.86l.06-.16c0-.09.07-.18.09-.27a1.87,1.87,0,0,0,.07-.22,4,4,0,0,0,.08-.79c0-.11,0-.22,0-.32s0-.24,0-.36,0-.2,0-.31a3.94,3.94,0,0,0-.1-.47V9c0-.1,0-.21-.09-.31-.1-.34-.21-.67-.33-1,0-.12-.09-.23-.14-.35s-.15-.34-.21-.49a1.86,1.86,0,0,1-.1-.2l-.1-.21-.07-.15-.21-.39s0-.12.07-.1l1.32.36h0l.18,0,.19,0,.07,0V5.49a.68.68,0,0,1,.68-.69.67.67,0,0,1,.67.69V6.65l.14,0h0l.14.12.17.13c.13.1.28.24.44.39l.13.12a9,9,0,0,1,.69.69c.06.07.12.15.19.22l.19.24a3.71,3.71,0,0,1,.23.32l.11.16a3.83,3.83,0,0,1,.25.44,1.36,1.36,0,0,1,.1.21,2.82,2.82,0,0,1,.2.6.31.31,0,0,1,0,.13h0a1.13,1.13,0,0,1,0,.18,1.85,1.85,0,0,1,0,.62,2.5,2.5,0,0,1-.07.26,2.6,2.6,0,0,1-.1.25,3.4,3.4,0,0,1-.26.5l-.12.18a1.4,1.4,0,0,1-.12.18c-.06.08-.11.16-.17.23l-.17.21-.24.27-.16.17-.16.17-.21.2-.13.12a.11.11,0,0,1-.08,0h-1v1.34h1.33a1.25,1.25,0,0,0,.8-.29,8.74,8.74,0,0,0,.82-.81l.05,0,3.65-1A.1.1,0,0,1,19.83,13.31Z"
                    />
                  </SvgIcon>
                </Paper>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Grid>
      <Grid className="md-block" item xs={12}>
        <div className="imageCenter">
          <img
            width="100%"
            align="center"
            src="https://s1.gifyu.com/images/mobile14aab97f1ac3fb26.gif"
            className="responsiveWidth"
          />
        </div>
        <Grid container className="iconMargin">
          <Grid item xs={3} align="center">
            <StyledLink sx={{ padding: "2px 10px" }} href="#">
              <Instagram sx={{ height: 24, paddingTop: "2px" }} />
            </StyledLink>
          </Grid>
          <Grid item xs={3} align="center">
            <StyledLink sx={{ padding: "2px 10px" }} href="#">
              <Twitter sx={{ height: 24, paddingTop: "2px" }} />
            </StyledLink>
          </Grid>
          <Grid item xs={3} align="center">
            <StyledLink sx={{ padding: "2px 10px" }} href="#">
              <SvgIcon sx={{ height: 24, paddingTop: "2px" }}>
                <svg
                  id="レイヤー_1"
                  data-name="レイヤー 1"
                  viewBox="0 0 24 18.29"
                >
                  <defs>
                    <clipPath id="clip-path" transform="translate(0 -2.84)">
                      <rect class="cls-1" y="2.7" width="24" height="18.59" />
                    </clipPath>
                  </defs>
                  <g class="cls-2">
                    <path
                      class="cls-3"
                      d="M20.32,4.36a20,20,0,0,0-4.89-1.52.09.09,0,0,0-.08,0c-.21.38-.44.87-.6,1.25a18.71,18.71,0,0,0-5.49,0c-.17-.39-.41-.87-.62-1.25a.09.09,0,0,0-.08,0A20.08,20.08,0,0,0,3.68,4.36l0,0A20.25,20.25,0,0,0,.1,18.05a.05.05,0,0,0,0,.05,19.67,19.67,0,0,0,6,3,.1.1,0,0,0,.09,0,14.06,14.06,0,0,0,1.22-2,.07.07,0,0,0,0-.1,12.86,12.86,0,0,1-1.87-.9.07.07,0,0,1,0-.12l.37-.3a.12.12,0,0,1,.08,0,14.14,14.14,0,0,0,12.06,0,.11.11,0,0,1,.08,0l.37.3a.07.07,0,0,1,0,.12,11.55,11.55,0,0,1-1.88.89.08.08,0,0,0,0,.11,16.11,16.11,0,0,0,1.23,2,.07.07,0,0,0,.08,0,19.76,19.76,0,0,0,6-3l0-.05A20.11,20.11,0,0,0,20.35,4.39ZM8,15.32A2.31,2.31,0,0,1,5.86,12.9,2.3,2.3,0,0,1,8,10.48a2.29,2.29,0,0,1,2.16,2.42A2.29,2.29,0,0,1,8,15.32Zm8,0a2.3,2.3,0,0,1-2.15-2.42A2.29,2.29,0,0,1,16,10.48a2.28,2.28,0,0,1,2.16,2.42A2.28,2.28,0,0,1,16,15.32Z"
                      transform="translate(0 -2.84)"
                    />
                  </g>
                </svg>
              </SvgIcon>
            </StyledLink>
          </Grid>
          <Grid item xs={3} align="center">
            <StyledLink sx={{ padding: "2px 10px" }} href="#">
              <SvgIcon sx={{ height: 24, paddingTop: "2px" }}>
                <path
                  class="cls-1"
                  d="M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12Z"
                />
                <path
                  className="svgIcon"
                  d="M5.92,12.4l0-.08L9.09,7.44a.11.11,0,0,1,.19,0A6.67,6.67,0,0,1,10,11a5.32,5.32,0,0,1-.61,1.34l-.12.2a.11.11,0,0,1-.09.05H6A.11.11,0,0,1,5.92,12.4Z"
                />
                <path
                  className="svgIcon"
                  d="M19.83,13.31v.77a.09.09,0,0,1-.06.1,3.92,3.92,0,0,0-1.41,1c-.88,1.22-1.55,3-3,3H9.05a4,4,0,0,1-4-4V14a.11.11,0,0,1,.11-.11H8.63a.12.12,0,0,1,.12.13,1.12,1.12,0,0,0,.12.67,1.23,1.23,0,0,0,1.1.68H11.7V14.05H10a.11.11,0,0,1-.09-.18l.06-.09a9.85,9.85,0,0,0,.63-1c.15-.27.3-.56.43-.86l.06-.16c0-.09.07-.18.09-.27a1.87,1.87,0,0,0,.07-.22,4,4,0,0,0,.08-.79c0-.11,0-.22,0-.32s0-.24,0-.36,0-.2,0-.31a3.94,3.94,0,0,0-.1-.47V9c0-.1,0-.21-.09-.31-.1-.34-.21-.67-.33-1,0-.12-.09-.23-.14-.35s-.15-.34-.21-.49a1.86,1.86,0,0,1-.1-.2l-.1-.21-.07-.15-.21-.39s0-.12.07-.1l1.32.36h0l.18,0,.19,0,.07,0V5.49a.68.68,0,0,1,.68-.69.67.67,0,0,1,.67.69V6.65l.14,0h0l.14.12.17.13c.13.1.28.24.44.39l.13.12a9,9,0,0,1,.69.69c.06.07.12.15.19.22l.19.24a3.71,3.71,0,0,1,.23.32l.11.16a3.83,3.83,0,0,1,.25.44,1.36,1.36,0,0,1,.1.21,2.82,2.82,0,0,1,.2.6.31.31,0,0,1,0,.13h0a1.13,1.13,0,0,1,0,.18,1.85,1.85,0,0,1,0,.62,2.5,2.5,0,0,1-.07.26,2.6,2.6,0,0,1-.1.25,3.4,3.4,0,0,1-.26.5l-.12.18a1.4,1.4,0,0,1-.12.18c-.06.08-.11.16-.17.23l-.17.21-.24.27-.16.17-.16.17-.21.2-.13.12a.11.11,0,0,1-.08,0h-1v1.34h1.33a1.25,1.25,0,0,0,.8-.29,8.74,8.74,0,0,0,.82-.81l.05,0,3.65-1A.1.1,0,0,1,19.83,13.31Z"
                />
              </SvgIcon>
            </StyledLink>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
