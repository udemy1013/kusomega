import { React, useRef, useState, useCallback } from "react";
import { Box, Grid, ThemeProvider, Typography } from "@mui/material";
import "../css/style.css";
import { createTheme } from "@mui/system";
import { animated } from "@react-spring/web";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "backgorund.paper",
  boxshadow: 24,
  p: 4,
};

export const Modal = ({ src, alt, caption, onClose }) => {
  return (
    <div className="modal">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <img className="modal-content" src={src} alt={alt} />
      {caption.length > 0 && <div className="caption">{caption}</div>}
    </div>
  );
};

const breakpoints = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1282,
      xl: 1536,
    },
  },
});

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1282,
      xl: 1536,
    },
  },
  typography: {
    h1: {
      fontSize: "48px",
      fontFamily: "Dela Gothic One",
      fontWeight: 500,
      lineHeight: "48px",
      color: "white",
    },
    h2: {
      fontSize: "18px",
      fontFamily: "Noto Sans JP",
      fontWeight: 300,
      lineHeight: "27px",
      color: "white",
      "@media(min-width:1282px)": {},
    },
  },
});

function RoadmapDesktop() {
  const [isOpen, setIsopen] = useState(false);
  const [image, setImage] = useState();
  const [isUnclickable, setUnclickable] = useState();

  function setModalImage(imageUrl) {
    setImage(imageUrl);
  }

  const handleOpen = () => {
    setIsopen(true);
    setUnclickable("unclickable");
  };
  function handleClose() {
    setIsopen(false);
    setUnclickable();
    console.log("hello");
  }

  document.body.style.overflow = "hidden";

  const [animate1, setAnimate1] = useState("float");
  const [animate2, setAnimate2] = useState("float");
  const [animate3, setAnimate3] = useState("float");
  const [animate4, setAnimate4] = useState("float");

  const [title, setTitle] = useState(
    <Typography variant="h1">
      僕たちの夢は
      <br />
      日本一のDAO
    </Typography>
  );

  const [subtitle, setSubTitle] = useState();

  const [discription, setDiscription] = useState(
    <Typography variant="h2" sx={{ marginTop: "50px" }}>
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
  );

  // アニメーション
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ marginTop: "3%" }}>
        <Grid
          className="islandsDesktop"
          container
          sx={{ marginTop: "3%", marginLeft: "20%" }}
        >
          <Grid onClick={handleOpen} item xs={2} ref={ref1}>
            <animated.img
              id="0"
              width={"100%"}
              src="https://i.ibb.co/Jc5fp59/shop-junbi.png"
              className={animate1}
              onClick={(e) => {
                setAnimate1("");
                setTitle(<Typography variant="h1">SHOP</Typography>);
                setSubTitle(
                  <Typography
                    fontFamily="Noto Sans JP"
                    fontSize="1rem"
                    lineHeight="1rem"
                    marginTop="1rem"
                    fontWeight="500"
                    sx={{ whiteSpace: "nowrap", overflow: " hidden" }}
                  >
                    ここでしか手に入らないもの
                  </Typography>
                );
                setModalImage("https://i.ibb.co/zhTxWHy/shop-Sketch.jpg");
              }}
            />
          </Grid>
          <Grid
            item
            xs={2}
            onClick={(e) => {
              handleOpen();
              setModalImage("https://i.ibb.co/7vSP6D9/world-Sketch.jpg");
            }}
            sx={{ marginTop: "5vw" }}
            ref={ref2}
          >
            <animated.img
              id="1"
              width={"130%"}
              src="https://i.ibb.co/prNqzB1/park-junbi.png"
              className={animate2}
              onClick={(e) => {
                setAnimate2("");
                setTitle(<Typography variant="h1">???</Typography>);
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <img width={"50%"} src="https://i.ibb.co/ftHDKG9/center.png" />
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              marginLeft: "-8%",
              marginTop: "8vw",
              position: "relative",
            }}
            ref={ref3}
            onClick={(e) => {
              handleOpen();
              setModalImage("https://i.ibb.co/GM1fgZr/gamesketch.jpg");
            }}
          >
            <animated.img
              id="2"
              width={"130%"}
              src="https://i.ibb.co/xgGdL32/asobi-junbi.png"
              className={animate3}
              onClick={(e) => {
                setAnimate3("");
                setTitle(<Typography variant="h1">GAME</Typography>);
              }}
            />
          </Grid>
          <Grid
            item
            xs={2}
            sx={{ marginLeft: "6%", position: "relative" }}
            ref={ref4}
            onClick={(e) => {
              handleOpen();
              setModalImage("https://i.ibb.co/23Zsdzc/promotion-Sketch.jpg");
            }}
          >
            <animated.img
              id="3"
              width={"80%"}
              src="https://i.ibb.co/drGL7Dv/bussi-junbi.png"
              className={animate4}
              onClick={(e) => {
                setTitle(<Typography variant="h1">BUSINESS</Typography>);
                setAnimate4("");
                setModalImage("https://i.ibb.co/23Zsdzc/promotion-Sketch.jpg");
              }}
            />
          </Grid>
        </Grid>
        {isOpen && (
          <Modal src={image} alt="snow" caption="" onClose={handleClose} />
        )}
        <Grid container sx={{ position: "fixed", bottom: 0, width: "100%" }}>
          <Grid sx={{ width: "700px" }}>
            <Box
              sx={{
                position: "fixed",
                left: "0",
                bottom: "-5px",
                pointerEvents: "none",
              }}
            >
              <img
                className="desktopMain"
                src="https://i.ibb.co/XLMGBd1/main.png"
              />
            </Box>
          </Grid>
          <Grid sx={{ marginLeft: "50px", marginBottom: "50px" }}>
            <Box>
              {title}
              {subtitle}
              {discription}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default RoadmapDesktop;
