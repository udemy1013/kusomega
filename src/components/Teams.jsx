import React from "react";
import { useMediaQuery } from "react-responsive";
import AboutDesktop from "./AboutDesktop";
import TeamsMobile from "./TeamsMobile";
import TeamsDesktop from "./TeamsDesktop";

export const Teams = () => {
  const isDeskTopOrLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div>
      {isDeskTopOrLaptop && <TeamsDesktop />}
      {isTabletOrMobile && <TeamsMobile />}
    </div>
  );
};

export default Teams;
