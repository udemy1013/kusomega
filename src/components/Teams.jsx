import React from "react";
import { useMediaQuery } from "react-responsive";
import AboutDesktop from "./AboutDesktop";
import TeamsMobile from "./TeamsMobile";
import TeamsDesktop from "./TeamsDesktop";
import { motion } from "framer-motion";
import { Container } from "@mui/material";

export const Teams = () => {
  const isDeskTopOrLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div>
      <Container
        component={motion.div}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        sx={{ padding: 0 }}
      >
        {isDeskTopOrLaptop && <TeamsDesktop />}
        {isTabletOrMobile && <TeamsMobile />}
      </Container>
    </div>
  );
};

export default Teams;
