import { React, useState } from "react";
import {
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  SvgIcon,
  Link,
} from "@mui/material";
import { Box } from "@mui/system";
import { ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

function AboutMobile() {
  document.body.style.overflow = "wrapper";
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [dotscolor, setdotscolor] = useState(["active_dot", "", "", ""]);

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
    <Box>
      <Container>
        <Container
          sx={{ marginTop: "5rem" }}
          component={motion.div}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        >
          <Box ref={emblaRef} className="embla" sx={{ paddingBottom: "2px" }}>
            <Box className="embla__container">
              <Grid
                id="slide1"
                container
                className="embla__slide"
                onTouchEnd={changeDotsColor}
                onClick={changeDotsColor}
                sx={{ display: "block" }}
              >
                <Box sx={{ display: "inline" }}>
                  <Typography
                    variant="h2"
                    fontFamily={"Dela Gothic One"}
                    fontSize="2rem"
                    lineHeight="1"
                    textAlign="left"
                    color="white"
                  >
                    メガネをかければ
                    <br />
                    みんな友達
                    <Box
                      sx={{ position: "fixed", right: "18%", top: "1rem" }}
                      component={"img"}
                      src="https://i.ibb.co/r474Nj7/image.png"
                      width="50px"
                    />
                  </Typography>
                </Box>
                <Box sx={{ paddingRight: "20%", marginTop: "2rem" }}>
                  <Typography
                    fontFamily="Noto Sans JP"
                    textAlign="left"
                    letterSpacing=".1rem"
                    lineHeight="1.3 rem"
                    sx={{ marginTop: ".5vh" }}
                    fontWeight="500"
                    fontSize="0.75rem"
                  >
                    このNFTを手にする事で
                    <br />
                    フレンズが描かれた限定ウェアを手に入れたり、今後発表されるさまざまなイベントに参加できるようになります。
                    <br /> <br /> メガネをかければ <br />
                    今まで見えていた世界がもっと鮮明にもっと美しく映ります。
                    <br />
                    <br />
                    君もメガネをかけて新しい世界を一緒に観にいこう。
                  </Typography>
                  <Box sx={{ float: "left" }}>
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
                      <Typography sx={{ fontWeight: 800, color: "#232323" }}>
                        参加する
                      </Typography>

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

              <Grid
                id="slide2"
                container
                className="embla__slide"
                onTouchEnd={changeDotsColor}
                onClick={changeDotsColor}
                sx={{ display: "block", overflow: "visible" }}
              >
                <Typography
                  variant="h2"
                  fontFamily={"Dela Gothic One"}
                  fontSize="2rem"
                  lineHeight="2rem"
                  textAlign="left"
                  color="white"
                >
                  わからないことだらけ
                  <Box
                    sx={{
                      position: "relative",
                      display: "inline",
                      float: "right",
                      marginTop: "-.5rem",
                    }}
                  >
                    <Box
                      sx={{}}
                      component={"img"}
                      src="https://i.ibb.co/CzqgCMW/image.png"
                      width="50px"
                    />
                  </Box>
                </Typography>
                <Box sx={{ paddingRight: "20%", marginTop: "2rem" }}>
                  <Typography
                    fontFamily="Noto Sans JP"
                    textAlign="left"
                    letterSpacing=".1rem"
                    lineHeight="1.3 rem"
                    fontWeight="500"
                    fontSize="0.75rem"
                  >
                    「NFTってそもそも何？」
                    <br />
                    今見ているそこのキミもそう思っているかもしれません
                    作り出した僕たちもそう感じていました。
                    <br />
                    <br />
                    本当に知れば知るほど NFTやその技術の可能性は無限大です。
                    <br />
                    <br />
                    「なにもわからない」から始まったからこそ
                    僕たちは「初心者に寄り添い、分かりやすく」
                    をメインテーマに情報発信活動も行っております。
                  </Typography>
                  <Box sx={{ float: "left" }}>
                    <Button
                      component={Link}
                      href="https://www.instagram.com/crypto.wonkey/"
                      sx={{
                        borderRadius: "20px",
                        backgroundColor: "#FFBA01",
                        color: "black",
                        lineHeight: "1",
                        marginTop: "1rem",
                      }}
                      variant="contained"
                    >
                      <Typography sx={{ fontWeight: 800, color: "#232323" }}>
                        チェックする
                      </Typography>
                      <ArrowForward sx={{ height: 18 }} />
                    </Button>
                  </Box>
                </Box>
              </Grid>

              <Grid
                id="slide3"
                container
                className="embla__slide"
                onTouchEnd={changeDotsColor}
                onClick={changeDotsColor}
                sx={{ display: "block" }}
              >
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
                  <Box
                    sx={{
                      position: "relative",
                      display: "inline",
                      float: "right",
                      marginTop: "-0rem",
                      marginLeft: "-1rem",
                    }}
                  >
                    <Box
                      sx={{}}
                      component={"img"}
                      src="https://i.ibb.co/w77M36w/image.png"
                      width="50px"
                    />
                  </Box>
                </Typography>
                <Box sx={{ paddingRight: "20%" }}>
                  <Typography
                    fontFamily="Noto Sans JP"
                    textAlign="left"
                    letterSpacing=".1rem"
                    lineHeight="1.3 rem"
                    sx={{ marginTop: "2rem" }}
                    fontWeight="500"
                    fontSize="0.75rem"
                  >
                    NFTのコレクションではよくある
                    自動生成で大量にコレクションを創っていく手法は
                    あえて行いません。
                    <br /> <br />
                    フレンズを創るうえで大事にしていきたいモノは「個性」です。
                    同じフレンズが誕生することは絶対にありません。
                    <br />
                    <br />
                    毎日１人。
                    <br />
                    新しいフレンズが誕生します。
                    <br />
                    <br />
                    数はちょっと物足りないかもしれません。
                    だからこそ大事にしたいと思える作品作りをしていきたいと思っております。
                  </Typography>
                  <Box sx={{ float: "left" }}>
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
                      <Typography sx={{ fontWeight: 800, color: "#232323" }}>
                        フレンズを見る
                      </Typography>
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

              <Grid
                container
                className="embla__slide"
                onTouchEnd={changeDotsColor}
                onClick={changeDotsColor}
              >
                <Typography
                  variant="h2"
                  fontFamily={"Dela Gothic One"}
                  fontSize="2rem"
                  lineHeight="2rem"
                  textAlign="left"
                  color="white"
                >
                  キミの考えたフレンズも生まれる！？
                  <Box
                    sx={{
                      position: "relative",
                      display: "inline",
                      float: "right",
                      marginTop: "-0rem",
                      marginLeft: "-1rem",
                    }}
                  >
                    <Box
                      sx={{}}
                      component={"img"}
                      src="https://i.ibb.co/xf2nbPt/image.png"
                      width="50px"
                    />
                  </Box>
                </Typography>
                <Box sx={{ paddingRight: "10%" }}>
                  <Typography
                    fontFamily="Noto Sans JP"
                    textAlign="left"
                    letterSpacing=".1rem"
                    lineHeight="1.3 rem"
                    sx={{ marginTop: "20px" }}
                    fontWeight="500"
                    fontSize="0.75rem"
                  >
                    アイデアやきっかけ
                    <br />
                    それらはクリエイター一人が生み出すものよりいろんな人のアイデアがあった方が絶対に「楽しい」です。
                    <br />
                    <br />
                    コミュニティ内に 「フレンズのリクエスト」ができる。
                    チャットルームを準備しております。
                    <br />
                    <br />
                    自分が好きだった動物やモノ、創作キャラ、子供の時に描いた絵、なんでも構いません。
                    <br />
                    いつでも募集しております。
                    <br />
                    <br />
                    キミのアイデアが
                    <br />
                    フレンズとして登場する日も
                    <br />
                    そう遠くないかもしれませんね。
                  </Typography>
                  <Box sx={{ float: "left" }}>
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
                      <Typography sx={{ fontWeight: 800, color: "#232323" }}>
                        リクエストする
                      </Typography>
                      <ArrowForward sx={{ height: 18 }} />
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Box>
          <Box>
            <Box
              id="dots"
              container
              sx={{ width: "30%", display: "inline-block", marginTop: "1rem" }}
            >
              <Box className={dotscolor[0]}></Box>
              <Box className={dotscolor[1]}></Box>
              <Box className={dotscolor[2]}></Box>
              <Box className={dotscolor[3]}></Box>
            </Box>
          </Box>
        </Container>
      </Container>
      <Box sx={{ height: "100%", width: "100%", position: "absolte" }}>
        <Box
          component="img"
          sx={{
            width: "50vw",
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
