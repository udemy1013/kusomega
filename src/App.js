import { Box, Stack } from "@mui/material";
import { Navbar } from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <Box
      sx={{
        backgroundColor: "#FCF9ED",
        height: "100%",
        backgroundImage:
          "url('https://s7.gifyu.com/images/1f48fb6bd0b2258f7.gif')",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
    </Box>
  );
}

export default App;
