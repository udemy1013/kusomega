import React from 'react'
import { Grid } from "@mui/material"

function Home() {
  return (
    <Grid container>
        <Grid item xs={4}>
            <img width="100%" height="auto"src="https://i.imgur.com/pzrWag6.png"/>
        </Grid>
        <Grid item xs={8}>
            <img width="100%" height="auto"src="https://i.imgur.com/pzrWag6.png"/>
        </Grid>
        
  </Grid>
  )
}

export default Home