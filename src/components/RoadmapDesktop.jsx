import { React, useRef, useState } from "react";
import { Box, Grid, ThemeProvider, Typography } from "@mui/material";
import "../css/style.css";
import { createTheme } from "@mui/system";
import { useSpring, animated, config } from "@react-spring/web";

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

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.2,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function RoadmapDesktop() {
  // はみ出ている部分を隠す
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

  function defaultTitle() {
    setTitle(
      <Typography variant="h1">
        僕たちの夢は
        <br />
        日本一のDAO
      </Typography>
    );
  }

  // ホバーした時の透明度の変化
  const [opacity, setOpacity] = useState([1, 1, 1, 1]);

  function decreaseOpacity(event) {
    var id = event.target.id;
    var opacities = [0.5, 0.5, 0.5, 0.5];
    opacities[id] = "100%";
    setOpacity(opacities);
  }

  function resetOpacity() {
    setOpacity([1, 1, 1, 1]);
  }

  // アニメーション
  const configList = Object.keys(config);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const [xys1, set1] = useState([0, 0, 1]);
  const [xys2, set2] = useState([0, 0, 1]);
  const [xys3, set3] = useState([0, 0, 1]);
  const [xys4, set4] = useState([0, 0, 1]);

  const props1 = useSpring({ xys1, config: config[configList] });
  const props2 = useSpring({ xys2, config: config[configList] });
  const props3 = useSpring({ xys3, config: config[configList] });
  const props4 = useSpring({ xys4, config: config[configList] });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ marginTop: "3%" }}>
        <Grid container sx={{ marginTop: "3%", marginLeft: "20%" }}>
          <Grid item xs={2} ref={ref1} sx={{ opacity: opacity[0] }}>
            <animated.img
              id="0"
              width={"100%"}
              src="https://i.ibb.co/cgnD8xk/left.png"
              className={animate1}
              style={{ transform: props1.xys1.to(trans) }}
              onClick={(e) => {
                setAnimate1("");
                setTitle(<Typography variant="h1">SHOP</Typography>);
                decreaseOpacity(e);
              }}
              onMouseMove={(e) => {
                const rect1 = ref1.current.getBoundingClientRect();
                set1(calc(e.clientX, e.clientY, rect1));
              }}
            />
          </Grid>
          <Grid
            item
            xs={2}
            sx={{ marginTop: "5vw", opacity: opacity[1] }}
            ref={ref2}
          >
            <animated.img
              id="1"
              width={"130%"}
              src="https://i.ibb.co/f1NvJQw/left2.png"
              className={animate2}
              style={{
                transform: props2.xys2.to(trans),
              }}
              onClick={(e) => {
                setAnimate2("");
                setTitle(<Typography variant="h1">PARK</Typography>);
                decreaseOpacity(e);
              }}
              onMouseMove={(e) => {
                const rect2 = ref2.current.getBoundingClientRect();
                set2(calc(e.clientX, e.clientY, rect2));
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <img width={"50%"} src="https://i.ibb.co/ftHDKG9/center.png" />
          </Grid>
          <Grid
            item
            xs={2}
            sx={{ marginLeft: "-8%", marginTop: "8vw", opacity: opacity[2] }}
            ref={ref3}
          >
            <animated.img
              id="2"
              width={"130%"}
              src="https://i.ibb.co/Qd536qL/right2.png"
              className={animate3}
              style={{
                transform: props3.xys3.to(trans),
              }}
              onClick={(e) => {
                setAnimate3("");
                setTitle(<Typography variant="h1">GAME</Typography>);
                decreaseOpacity(e);
              }}
              onMouseMove={(e) => {
                const rect3 = ref3.current.getBoundingClientRect();
                set3(calc(e.clientX, e.clientY, rect3));
              }}
            />
          </Grid>
          <Grid
            item
            xs={2}
            sx={{ marginLeft: "8%", opacity: opacity[3] }}
            ref={ref4}
          >
            <animated.img
              id="3"
              width={"50%"}
              src="https://i.ibb.co/XS4qTQZ/right.png"
              className={animate4}
              style={{
                transform: props4.xys4.to(trans),
              }}
              onClick={(e) => {
                setTitle(<Typography variant="h1">BUSINESS</Typography>);
                setAnimate4("");
                decreaseOpacity(e);
              }}
              onMouseMove={(r) => {
                const rect4 = ref4.current.getBoundingClientRect();
                set4(calc(r.clientX, r.clientY, rect4));
              }}
            />
          </Grid>
        </Grid>
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
            {title}
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
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default RoadmapDesktop;
