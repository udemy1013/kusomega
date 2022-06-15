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

  const [dotscolor, setdotscolor] = useState(["active_dot", ""]);

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
            className="dropshadow"
            src="https://i.ibb.co/2PqhtQ2/sketch-game.png"
            width="80%"
          />
        </Box>
      </Container>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        width="80%"
        sx={{ marginTop: "10px", margin: "0 auto" }}
      >
        <Box sx={{ display: "inline-block" }}>
          <Box id="title" sx={{ display: "flex", alignItems: "end" }}>
            <Typography
              fontFamily="Dela Gothic One"
              fontSize="1.4rem"
              lineHeight="2.2rem"
              textAlign="left"
              sx={{ whiteSpace: "nowrap" }}
            >
              KUSOGAME potg
            </Typography>
            <Box
              sx={{
                backgroundColor: "red",
                padding: "0rem .7rem",
                marginLeft: ".5rem",
                borderRadius: 1.2,
                verticalAlign: "middle",
                height: "1rem",
                lineHeight: " 1rem",
                whiteSpace: "nowrap",
              }}
            >
              <Typography fontSize="10px">準備中</Typography>
            </Box>
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
            >
              クソゲームの開発、製作を行います。
              <br />
              誰でも簡単にプレイできるスコアを競い合う仕様でゲームを作成し
              月間や週間毎に上位スコアランカーに対して、様々なプレゼントを配布。
              限定プレミアのNFTや現実世界での商品などが誰でも楽しく手に入る。
              そんな新たな楽しみ方を創っていきます。
              <br />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default RoadmapShop;
