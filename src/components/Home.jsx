import React from "react";
import { Grid } from "@mui/material";
import "../css/style.css";

function Home() {
  return (
    <Grid container>
      <Grid className="md-None" item xs={12}>
        <img
          width="auto"
          align="center"
          src="https://s1.gifyu.com/images/74c2c2.gif"
        />
      </Grid>
      <Grid className="md-Block" item xs={12} sx={{ marginBottom: "100px" }}>
        <img
          width="100%"
          align="center"
          src="https://s1.gifyu.com/images/mobile14aab97f1ac3fb26.gif"
        />
      </Grid>
    </Grid>
  );
}

export default Home;
