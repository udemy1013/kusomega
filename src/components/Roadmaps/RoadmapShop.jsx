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
            src="https://i.ibb.co/SnQmJdk/sketch-shop.png"
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
              fontSize="2rem"
              lineHeight="2.2rem"
              textAlign="left"
              sx={{ whiteSpace: "nowrap" }}
            >
              KUSOMEGANE
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
              NFTartを利用した現実世界でのプロダクト商品の限定販売を行います。<br/><br/>
              NFTを購入すると商品と引き換えできるチケット（別途NFT）が無料で手に入ります。チケットは数種類からランダムで手に入るため、希少性が高く、コンプリートも難易度が高い仕様になりますが、新しくてわくわくするショップの在り方を研究し、創り上げていきます。

              <br />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default RoadmapShop;
