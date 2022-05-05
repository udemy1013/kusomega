import { Box, Stack, createTheme } from "@mui/material";
import { Navbar } from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

const theme2 = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1500,
      lg: 1800,
      xl: 1936,
    },
  },
});

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutsWithNavbar />}>
        <Route path="/" element={<Home />} xs={{ margin: "auto !important" }} />
        <Route path="/About" element={<About />} />
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
