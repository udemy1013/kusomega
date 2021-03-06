import React from "react";
import { useMediaQuery } from "react-responsive";
import AboutDesktop from "./AboutDesktop";
import AboutMobile from "./AboutMobile";

export const About = () => {
  const isDeskTopOrLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div>
      {isDeskTopOrLaptop && <AboutDesktop />}
      {isTabletOrMobile && <AboutMobile />}
    </div>
  );
};

export default About;
