import React from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import Home from "./Home";
import About from "./About";
import Roadmap from "./Roadmap";
import RoadmapShop from "./Roadmaps/RoadmapShop";
import RoadmapMedia from "./Roadmaps/RoadmapMedia";
import RoadmapGame from "./Roadmaps/RoadmapGame";
import RoadmapWorld from "./Roadmaps/RoadmapWorld";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LayoutsWithNavbar />}>
          <Route
            path="/"
            element={<Home />}
            xs={{ margin: "auto !important" }}
            className="mobileHiddimport { AnimatePresence } from 'framer-motion';
en"
          />
          <Route path="/about" element={<About />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/roadmap/shop" element={<RoadmapShop />} />
          <Route path="/roadmap/world" element={<RoadmapWorld />} />
          <Route path="/roadmap/media" element={<RoadmapMedia />} />
          <Route path="/roadmap/game" element={<RoadmapGame />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function LayoutsWithNavbar() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default AnimatedRoutes;
