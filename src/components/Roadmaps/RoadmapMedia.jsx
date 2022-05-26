import { React, useCallback, useState } from "react";
import { Container, Typography, Box, Grid, SvgIcon } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import useEmblaCarousel from "embla-carousel-react";

export const RoadmapShop = () => {
  document.body.style.overflow = "visible";
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
    changeDotsColor();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
    changeDotsColor();
  }, [emblaApi]);

  const [dotscolor, setdotscolor] = useState(["active_dot", "", ""]);

  function changeDotsColor() {
    var newColors = [];
    var targetNum = emblaApi.slidesInView(true);

    dotscolor.map((value, index) =>
      index == targetNum ? newColors.push("active_dot") : newColors.push("")
    );
    console.log(targetNum[0].parseInt);
    console.log(newColors);
    setdotscolor(newColors);
  }

  return (
    <Container sx={{ padding: "0 16px", marginBottom: "3rem" }}>
      <Container
        component={motion.div}
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        align="center"
        sx={{ marginTop: "100px", padding: "0" }}
      >
        <Link to="/roadmap" align="left" style={{ display: "block" }}>
          <ArrowBack />
        </Link>
        <Box class="image_container_park">
          <img
            className="float"
            src="https://i.ibb.co/XS4qTQZ/right.png"
            width="40%"
          />
        </Box>
      </Container>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        sx={{ marginTop: "10px" }}
      >
        <Box sx={{ display: "inline-block" }}>
          <Box id="title">
            <Typography
              fontFamily="Dela Gothic One"
              fontSize="2.5rem"
              lineHeight="2.5rem"
              textAlign="center"
            >
              BUSINESS
            </Typography>
            <Typography
              fontFamily="Noto Sans JP"
              fontSize="1rem"
              lineHeight="1rem"
              textAlign="center"
              fontWeight="500"
            >
              誰でもプロジェクトリーダー
            </Typography>
          </Box>
          <Box id="discription">
            <Typography
              fontFamily="Noto Sans JP"
              textAlign="left"
              letterSpacing=".1rem"
              fontSize=".75rem"
              sx={{ marginTop: "20px" }}
              fontWeight="300"
              transition={{ duration: 1.5 }}
              padding={"0 10%"}
            >
              我々はKUSOMEGANEFRIENDSを世に広める活動を全力でサポートします。
              <br />
              二次創作や収益かも承諾し、全てのアイディアを尊重し、挑む姿勢を全力でサポートできるようにコミュニティ活動、及び広告活動に力を注いでおります。
            </Typography>
          </Box>
        </Box>
      </Box>
      <Grid container sx={{ justifyContent: "center", marginTop: "3rem" }}>
        <Grid item xs={2.4}>
          <button
            class="embla__button embla__button--prev"
            onClick={() => {
              scrollPrev();
            }}
          >
            <svg
              class="embla__button__svg"
              viewBox="137.718 -1.001 366.563 643.999"
            >
              <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"></path>
            </svg>
          </button>
        </Grid>
        <Grid item xs={7.2}>
          <Box id="projects" className="embla" ref={emblaRef}>
            <Box className="embla__container">
              <Box
                className="embla__slide"
                onTouchEnd={changeDotsColor}
                onClick={changeDotsColor}
              >
                <Box
                  sx={{
                    display: "flex",
                    verticalAlign: "middle",
                    marginBottom: ".5rem",
                  }}
                >
                  <Typography
                    fontFamily="Noto Sans JP"
                    fontWeight="700"
                    lineHeight="1rem"
                  >
                    #プロジェクトギャラリー
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: "red",
                      padding: "0rem 1rem",
                      marginLeft: ".5rem",
                      borderRadius: 1.2,
                      verticalAlign: "middle",
                      height: "1rem",
                      lineHeight: " 1rem",
                    }}
                  >
                    <Typography
                      fontSize="10px"
                      sx={{ whiteSpace: "nowrap", overflow: " hidden" }}
                    >
                      制作中
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  fontFamily="Noto Sans JP"
                  textAlign="left"
                  letterSpacing=".1rem"
                  fontSize=".75rem"
                  fontWeight="300"
                >
                  全てのプロジェクトの進行度、概要、プロジェクトの詳細が確認できます。
                </Typography>
              </Box>
              <Box
                className="embla__slide"
                onTouchEnd={changeDotsColor}
                onClick={changeDotsColor}
              >
                <Box
                  sx={{
                    display: "flex",
                    verticalAlign: "middle",
                    marginBottom: ".5rem",
                  }}
                >
                  <Typography
                    fontFamily="Noto Sans JP"
                    fontWeight="700"
                    fontSize="1rem"
                    lineHeight="1rem"
                  >
                    #収益化システム開発
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: "#313131",
                      padding: "0rem 1rem",
                      marginLeft: ".5rem",
                      borderRadius: 1.2,
                      verticalAlign: "middle",
                      height: "1rem",
                      lineHeight: " 1rem",
                    }}
                  >
                    <Typography
                      fontSize="10px "
                      sx={{ whiteSpace: "nowrap", overflow: " hidden" }}
                    >
                      準備中
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  fontFamily="Noto Sans JP"
                  textAlign="left"
                  letterSpacing=".1rem"
                  fontSize=".75rem"
                  fontWeight="100"
                >
                  プロジェクトで発生した収益を安心して受け取れるシステムを提供します。
                </Typography>
              </Box>
              <Box
                className="embla__slide"
                onTouchEnd={changeDotsColor}
                onClick={changeDotsColor}
              >
                <Box
                  sx={{
                    display: "flex",
                    verticalAlign: "middle",
                    marginBottom: ".5rem",
                  }}
                >
                  <Typography
                    fontFamily="Noto Sans JP"
                    fontSize="1rem"
                    lineHeight="1rem"
                    fontWeight="700"
                  >
                    #プロジェクト補助
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: "#313131",
                      padding: "0rem 1rem",
                      marginLeft: ".5rem",
                      borderRadius: 1.2,
                      verticalAlign: "middle",
                      height: "1rem",
                      lineHeight: " 1rem",
                      whiteSpace: "nowrap",
                      overflow: " hidden",
                    }}
                  >
                    <Typography fontSize="10px">準備中</Typography>
                  </Box>
                </Box>
                <Typography
                  fontFamily="Noto Sans JP"
                  textAlign="left"
                  letterSpacing=".1rem"
                  fontSize=".75rem"
                  fontWeight="100"
                >
                  プロジェクトに必要な資金をNFTのロイヤリティ売上から排出します。
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={2.4}>
          <button
            class="embla__button embla__button--next"
            onClick={() => {
              scrollNext();
            }}
          >
            <svg class="embla__button__svg" viewBox="0 0 238.003 238.003">
              <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"></path>
            </svg>
          </button>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center" }}>
        <Box
          id="dots"
          container
          sx={{ width: "30%", display: "inline-block", paddingTop: "5px" }}
        >
          <Box className={dotscolor[0]}></Box>
          <Box className={dotscolor[1]}></Box>
          <Box className={dotscolor[2]}></Box>
        </Box>
      </Box>
    </Container>
  );
};

export default RoadmapShop;
