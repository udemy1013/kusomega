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
      fontSize: "3.5vw",
      fontFamily: "Dela Gothic One",
      fontWeight: 500,
      lineHeight: "3.5vw",
      [breakpoints.breakpoints.down("lg")]: {
        fontSize: 52,
        lineHeight: "52px",
      },
    },
    h2: {
      fontSize: 18,
      fontFamily: "Noto Sans JP",
      fontWeight: 400,
      lineHeight: "27px",
      color: "#333333",
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
      我々の夢は
      <br />
      日本一のDAO
    </Typography>
  );

  function defaultTitle() {
    setTitle(
      <Typography variant="h1">
        我々の夢は
        <br />
        日本一のDAO
      </Typography>
    );
  }

  const [discription, setDiscription] = useState("これからの資産は「個性」");

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
          <Grid item xs={2} ref={ref1}>
            <animated.img
              width={"100%"}
              src="https://i.ibb.co/cgnD8xk/left.png"
              className={animate1}
              style={{ transform: props1.xys1.to(trans) }}
              onMouseEnter={() => {
                setAnimate1("");
                setTitle(<Typography variant="h1">限定ショップ</Typography>);
              }}
              onMouseLeave={() => {
                set1([0, 0, 1]);
                setAnimate1("float");
                defaultTitle();
              }}
              onMouseMove={(e) => {
                const rect1 = ref1.current.getBoundingClientRect();
                set1(calc(e.clientX, e.clientY, rect1));
              }}
            />
          </Grid>
          <Grid item xs={2} sx={{ marginTop: "5vw" }} ref={ref2}>
            <animated.img
              width={"130%"}
              src="https://i.ibb.co/f1NvJQw/left2.png"
              className={animate2}
              style={{
                transform: props2.xys2.to(trans),
              }}
              onMouseEnter={() => {
                setAnimate2("");
                setTitle(<Typography variant="h1">メガワールド</Typography>);
              }}
              onMouseLeave={() => {
                set1([0, 0, 1]);
                setAnimate2("float");
                defaultTitle();
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
            sx={{ marginLeft: "-8%", marginTop: "8vw" }}
            ref={ref3}
          >
            <animated.img
              width={"130%"}
              src="https://i.ibb.co/Qd536qL/right2.png"
              className={animate3}
              style={{
                transform: props3.xys3.to(trans),
              }}
              onMouseEnter={() => {
                setAnimate3("");
                setTitle(<Typography variant="h1">ゲーミング</Typography>);
              }}
              onMouseLeave={() => {
                set1([0, 0, 1]);
                setAnimate3("float");
                defaultTitle();
              }}
              onMouseMove={(e) => {
                const rect3 = ref3.current.getBoundingClientRect();
                set3(calc(e.clientX, e.clientY, rect3));
              }}
            />
          </Grid>
          <Grid item xs={2} sx={{ marginLeft: "8%" }} ref={ref4}>
            <animated.img
              width={"50%"}
              src="https://i.ibb.co/XS4qTQZ/right.png"
              className={animate4}
              style={{
                transform: props4.xys4.to(trans),
              }}
              onMouseEnter={() => {
                setTitle(<Typography variant="h1">メディア活動</Typography>);
                setAnimate4("");
              }}
              onMouseLeave={() => {
                set1([0, 0, 1]);
                setAnimate4("float");
                defaultTitle();
              }}
              onMouseMove={(r) => {
                const rect4 = ref4.current.getBoundingClientRect();
                set4(calc(r.clientX, r.clientY, rect4));
              }}
            />
          </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "5vw" }}>
          <Grid
            item
            sx={{
              position: "fixed",
              left: "0",
              bottom: "-5px",
            }}
          >
            <img
              className="desktopMain"
              src="https://i.ibb.co/XLMGBd1/main.png"
            />
          </Grid>
          <Grid sx={{ marginLeft: "42vw" }}>
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
