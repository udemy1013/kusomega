import React from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  SvgIcon,
  Link,
} from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";

const ResponsiveContainer = styled(Container)({
  marginTop: "250px",
  maxWidth: "1600px !important",
  marginLeft: "5rem",
});

const TypoBox = styled(Box)({
  margin: "300px 0",
});

const Discliption = styled(Typography)({
  fontSize: "18px",
});

function AboutDesktop() {
  document.body.style.overflow = "visible";

  return (
    <ResponsiveContainer
      component={motion.div}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Box sx={{ display: "inline" }}>
            <Typography
              fontFamily={"Dela Gothic One"}
              fontSize="4rem"
              lineHeight="4rem"
              sx={{ display: "inline" }}
            >
              メガネをかければ
              <br />
              誰でもともだち
            </Typography>
            <Box
              sx={{ display: "inline" }}
              component={"img"}
              src="https://i.ibb.co/r474Nj7/image.png"
              width="60px"
            />
          </Box>

          <Box sx={{ paddingRight: "20%", marginTop: "2rem" }}>
            <Typography
              fontFamily="Noto Sans JP"
              textAlign="left"
              letterSpacing=".1rem"
              lineHeight="1.3 rem"
              sx={{ marginTop: ".5vh" }}
              fontWeight="300"
              fontSize="16px"
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
                href="https://opensea.io/KUSOMEGANEFRIENDS"
              >
                手に入れる
                <SvgIcon sx={{ height: 18 }}>
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
              </Button>
            </Box>
          </Box>

          <TypoBox>
            <Box>
              <Typography
                variant="h2"
                fontFamily={"Dela Gothic One"}
                fontSize="4rem"
                lineHeight="4rem"
                textAlign="left"
                color="white"
                sx={{ display: "inline" }}
              >
                わからないことだらけ
              </Typography>
              <Box
                sx={{ marginLeft: "1rem" }}
                component={"img"}
                src="https://i.ibb.co/CzqgCMW/image.png"
                width="70px"
              />
            </Box>
            <Box sx={{ paddingRight: "20%", marginTop: "2rem" }}>
              <Typography
                fontFamily="Noto Sans JP"
                textAlign="left"
                letterSpacing=".1rem"
                lineHeight="1.3 rem"
                fontWeight="300"
                fontSize="16px"
              >
                「NFTってそもそも何？」
                <br />
                今見ているそこのキミもそう思っているかもしれません。作り出した僕たちもそう感じていました。
                <br />
                <br />
                本当に知れば知るほど NFTやその技術の可能性は無限大です。
                <br />
                <br />
                「なにもわからない」から始まったからこそ
                <br />
                僕たちは「初心者に寄り添い、分かりやすく」
                <br />
                をメインテーマに情報発信活動も行っております。
              </Typography>
              <Box sx={{ float: "right" }}>
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
                  チェックする
                  <ArrowForward sx={{ height: 18 }} />
                </Button>
              </Box>
            </Box>
          </TypoBox>
          <TypoBox>
            <Typography
              variant="h2"
              fontFamily={"Dela Gothic One"}
              fontSize="4rem"
              lineHeight="4rem"
              textAlign="left"
              color="white"
            >
              フレンズは
              <Box
                sx={{ marginLeft: "1rem" }}
                component={"img"}
                src="https://i.ibb.co/w77M36w/image.png"
                width="80px"
              />
              <br />
              みんな一から手書き
            </Typography>
            <Box sx={{ paddingRight: "20%" }}>
              <Typography
                fontFamily="Noto Sans JP"
                textAlign="left"
                letterSpacing=".1rem"
                lineHeight="1.3 rem"
                sx={{ marginTop: "2rem" }}
                fontWeight="300"
                fontSize="16px"
              >
                NFTのコレクションではよくある
                <br />
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
                  Opensea
                  <SvgIcon sx={{ height: 18 }}>
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
                </Button>
              </Box>
            </Box>
          </TypoBox>
          <TypoBox>
            <Typography
              variant="h2"
              fontFamily={"Dela Gothic One"}
              fontSize="4rem"
              lineHeight="4rem"
              textAlign="left"
              color="white"
            >
              キミの考えたフレンズ
              <br />
              も生まれる！？
              <Box
                sx={{}}
                component={"img"}
                src="https://i.ibb.co/xf2nbPt/image.png"
                width="80px"
              />
              <br />
            </Typography>
            <Box sx={{ paddingRight: "20%" }}>
              <Typography
                fontFamily="Noto Sans JP"
                textAlign="left"
                letterSpacing=".1rem"
                lineHeight="1.3 rem"
                sx={{ marginTop: "2rem" }}
                fontWeight="300"
                fontSize="16px"
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
                  リクエストしてみる
                  <SvgIcon sx={{ height: 18 }}>
                    <ArrowForward />
                  </SvgIcon>
                </Button>
              </Box>
            </Box>
          </TypoBox>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            position: "fixed",
            right: "0",
            bottom: "-5px",
          }}
        >
          <img
            src="https://i.ibb.co/tLT4Wnp/DDB21-BBF-02-C4-4236-982-C-601-D71-B1-F5-FE.png"
            width={"90%"}
          />
        </Grid>
      </Grid>
    </ResponsiveContainer>
  );
}

export default AboutDesktop;
