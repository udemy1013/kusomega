import { React, useRef, useState } from "react";
import RoadmapDesktop from "./RoadmapDesktop";
import RoadmapMobile from "./RoadmapMobile.jsx";
import "../css/style.css";

function Roadmap() {
  return (
    <div>
      <div className="md-None">
        <RoadmapDesktop />
      </div>
      <div className="md-block">
        <RoadmapMobile />
      </div>
    </div>
  );
}

export default Roadmap;
