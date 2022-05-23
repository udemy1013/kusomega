import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import AboutDesktop from "./AboutDesktop";
import AboutMobile from "./AboutMobile";

export const About = () => {
  return (
    <div>
      <div className="md-None">
        <AboutDesktop />
      </div>
      <div className="md-block">
        <AboutMobile />
      </div>
    </div>
  );
};

export default About;
