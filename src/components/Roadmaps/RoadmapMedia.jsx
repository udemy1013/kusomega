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
            className="dropshadow"
            src="https://i.ibb.co/fMy0FXy/sketch-promotion.png"
            width="320px"
          />
        </Box>
      </Container>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        width="320px"
        sx={{ marginTop: "10px", margin: "auto" }}
      >
        <Box sx={{ display: "inline-block", width: "320px" }}>
          <Box id="title" sx={{ display: "flex", alignItems: "end" }}>
            <Typography
              fontFamily="Dela Gothic One"
              fontSize="1.16rem"
              lineHeight="2.2rem"
              textAlign="left"
              sx={{ whiteSpace: "nowrap" }}
            >
              JAPAN NFT promotion
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
              NFTをはじめ、ブロックチェーン技術やweb3.0の魅力や可能性を日本に広める活動を行います。
              <br />
              <br />
              メディアの発信はもちろんDAOの規模拡大に伴ってアーティストタイアップや
              製品コラボレーションなど、それを発表する会を仮想世界で行ったり...と
              様々な角度から魅力を伝え、誰もがweb3.0の世界を理解し楽しめあえる
              世界を創り上げていきます。
              <br />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default RoadmapShop;
