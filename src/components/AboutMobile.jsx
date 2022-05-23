import { React, useEffect, useState, useCallback } from "react";
import {
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  SvgIcon,
} from "@mui/material";
import { Box } from "@mui/system";
import { ArrowDownward } from "@mui/icons-material";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

function AboutMobile() {
  document.body.style.overflow = "wrapper";
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [imageBottom, setImageBottom] = useState("");

  const slideto1 = useCallback(() => {
    if (emblaApi) emblaApi.scrollTo(0);
  }, [emblaApi]);

  const slideto2 = useCallback(() => {
    if (emblaApi) emblaApi.scrollTo(1);
  }, [emblaApi]);

  const slideto3 = useCallback(() => {
    if (emblaApi) emblaApi.scrollTo(2);
  }, [emblaApi]);

  return (
    <Box>
      <Container>
        <Container
          sx={{ marginTop: "6rem" }}
          component={motion.div}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        >
          <Box ref={emblaRef} className="embla" sx={{ paddingBottom: "2rem" }}>
            <Box className="embla__container">
              <Grid id="slide1" container className="embla__slide">
                <Typography
                  variant="h2"
                  fontFamily={"Dela Gothic One"}
                  fontSize="2rem"
                  lineHeight="2rem"
                  textAlign="left"
                  color="white"
                >
                  メガネをかければ
                  <br />
                  みんな友達
                </Typography>
                <Box sx={{ paddingRight: "20%" }}>
                  <Typography
                    fontFamily="Noto Sans JP"
                    textAlign="left"
                    letterSpacing=".1rem"
                    fontSize=".8rem"
                    lineHeight="1.3 rem"
                    sx={{ marginTop: "20px" }}
                    fontWeight="300"
                  >
                    このNFTを手にする事で
                    <br />
                    誰もが自由にKUSOMEGANEFRIENDSを使った二次創作プロジェクトを立ち上
                    げたり、参加したりすることができます。
                    <br /> <br /> まるで友達のように <br />
                    励ましあい、アイデアを尊重しあう、
                    そんな関係をみんなと築きながらクリエイター支援活動を行っていきたい。
                    <br />
                    <br />
                    そんな思いでプロジェクトをはじめました。
                  </Typography>
                  <Box sx={{ float: "right" }}>
                    <Button
                      sx={{
                        borderRadius: "20px",
                        backgroundColor: "#FFBA01",
                        color: "black",
                        lineHeight: "1",
                        marginTop: "1rem",
                      }}
                      variant="contained"
                    >
                      参加する
                      <SvgIcon sx={{ height: 18 }}>
                        <svg
                          id="レイヤー_1"
                          data-name="レイヤー 1"
                          viewBox="0 0 24 18.29"
                        >
                          <defs>
                            <clipPath
                              id="clip-path"
                              transform="translate(0 -2.84)"
                            >
                              <rect
                                class="cls-1"
                                y="2.7"
                                width="24"
                                height="18.59"
                              />
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
                    </Button>
                  </Box>
                </Box>
              </Grid>

              <Grid id="slide2" container className="embla__slide">
                <Typography
                  variant="h2"
                  fontFamily={"Dela Gothic One"}
                  fontSize="2rem"
                  lineHeight="2rem"
                  textAlign="left"
                  color="white"
                >
                  わからないことだらけ
                </Typography>
                <Box sx={{ paddingRight: "20%" }}>
                  <Typography
                    fontFamily="Noto Sans JP"
                    textAlign="left"
                    letterSpacing=".1rem"
                    fontSize=".8rem"
                    lineHeight="1.3 rem"
                    sx={{ marginTop: "20px" }}
                    fontWeight="300"
                  >
                    このNFTを手にする事で
                    <br />
                    誰もが自由にKUSOMEGANEFRIENDSを使った二次創作プロジェクトを立ち上
                    げたり、参加したりすることができます。
                    <br /> <br /> まるで友達のように <br />
                    励ましあい、アイデアを尊重しあう、
                    そんな関係をみんなと築きながらクリエイター支援活動を行っていきたい。
                    <br />
                    <br />
                    そんな思いでプロジェクトをはじめました。
                  </Typography>
                  <Box sx={{ float: "right" }}>
                    <Button
                      sx={{
                        borderRadius: "20px",
                        backgroundColor: "#FFBA01",
                        color: "black",
                        lineHeight: "1",
                        marginTop: "1rem",
                      }}
                      variant="contained"
                    >
                      参加する
                      <SvgIcon sx={{ height: 18 }}>
                        <svg
                          id="レイヤー_1"
                          data-name="レイヤー 1"
                          viewBox="0 0 24 18.29"
                        >
                          <defs>
                            <clipPath
                              id="clip-path"
                              transform="translate(0 -2.84)"
                            >
                              <rect
                                class="cls-1"
                                y="2.7"
                                width="24"
                                height="18.59"
                              />
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
                    </Button>
                  </Box>
                </Box>
              </Grid>

              <Grid id="slide3" container className="embla__slide">
                <Typography
                  variant="h2"
                  fontFamily={"Dela Gothic One"}
                  fontSize="2rem"
                  lineHeight="2rem"
                  textAlign="left"
                  color="white"
                >
                  フレンズは
                  <br />
                  みんな一から手書き
                </Typography>
                <Box sx={{ paddingRight: "20%" }}>
                  <Typography
                    fontFamily="Noto Sans JP"
                    textAlign="left"
                    letterSpacing=".1rem"
                    fontSize=".8rem"
                    lineHeight="1.3 rem"
                    sx={{ marginTop: "40px" }}
                    fontWeight="300"
                  >
                    このNFTを手にする事で
                    <br />
                    誰もが自由にKUSOMEGANEFRIENDSを使った二次創作プロジェクトを立ち上
                    げたり、参加したりすることができます。
                    <br /> <br /> まるで友達のように <br />
                    励ましあい、アイデアを尊重しあう、
                    そんな関係をみんなと築きながらクリエイター支援活動を行っていきたい。
                    <br />
                    <br />
                    そんな思いでプロジェクトをはじめました。
                  </Typography>
                  <Box sx={{ float: "right" }}>
                    <Button
                      sx={{
                        borderRadius: "20px",
                        backgroundColor: "#FFBA01",
                        color: "black",
                        lineHeight: "1",
                        marginTop: "1rem",
                      }}
                      variant="contained"
                    >
                      参加する
                      <SvgIcon sx={{ height: 18 }}>
                        <svg
                          id="レイヤー_1"
                          data-name="レイヤー 1"
                          viewBox="0 0 24 18.29"
                        >
                          <defs>
                            <clipPath
                              id="clip-path"
                              transform="translate(0 -2.84)"
                            >
                              <rect
                                class="cls-1"
                                y="2.7"
                                width="24"
                                height="18.59"
                              />
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
                    </Button>
                  </Box>
                </Box>
              </Grid>

              <Grid container className="embla__slide">
                <Typography
                  variant="h2"
                  fontFamily={"Dela Gothic One"}
                  fontSize="2rem"
                  lineHeight="2rem"
                  textAlign="left"
                  color="white"
                >
                  キミの考えたフレンズも生まれる！？
                  <br />
                </Typography>
                <Box sx={{ paddingRight: "20%" }}>
                  <Typography
                    fontFamily="Noto Sans JP"
                    textAlign="left"
                    letterSpacing=".1rem"
                    fontSize=".8rem"
                    lineHeight="1.3 rem"
                    sx={{ marginTop: "20px" }}
                    fontWeight="300"
                  >
                    このNFTを手にする事で
                    <br />
                    誰もが自由にKUSOMEGANEFRIENDSを使った二次創作プロジェクトを立ち上
                    げたり、参加したりすることができます。
                    <br /> <br /> まるで友達のように <br />
                    励ましあい、アイデアを尊重しあう、
                    そんな関係をみんなと築きながらクリエイター支援活動を行っていきたい。
                    <br />
                    <br />
                    そんな思いでプロジェクトをはじめました。
                  </Typography>
                  <Box sx={{ float: "right" }}>
                    <Button
                      sx={{
                        borderRadius: "20px",
                        backgroundColor: "#FFBA01",
                        color: "black",
                        lineHeight: "1",
                        marginTop: "1rem",
                      }}
                      variant="contained"
                    >
                      参加する
                      <SvgIcon sx={{ height: 18 }}>
                        <svg
                          id="レイヤー_1"
                          data-name="レイヤー 1"
                          viewBox="0 0 24 18.29"
                        >
                          <defs>
                            <clipPath
                              id="clip-path"
                              transform="translate(0 -2.84)"
                            >
                              <rect
                                class="cls-1"
                                y="2.7"
                                width="24"
                                height="18.59"
                              />
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
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Box>
          <Box
            id="dots"
            container
            sx={{ width: "30%", display: "inline-block" }}
          >
            <Box className="active_dot"></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </Box>
        </Container>
      </Container>
      <Box
        id="selection"
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "30vh",
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
          alt="The house from the offer."
          src="https://i.ibb.co/tLT4Wnp/DDB21-BBF-02-C4-4236-982-C-601-D71-B1-F5-FE.png"
        />
      </Box>
    </Box>
  );
}

export default AboutMobile;
