import { Box, Stack, createTheme } from "@mui/material";
import { Navbar } from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Roadmap from "./components/Roadmap";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutsWithNavbar />}>
        <Route
          path="/"
          element={<Home />}
          xs={{ margin: "auto !important" }}
          className="mobileHidden"
        />
        <Route path="/about" element={<About />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Route>
    </Routes>
  );

  function LayoutsWithNavbar() {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  }
}

export default App;
