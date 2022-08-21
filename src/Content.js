import { Container, Grid } from "@mui/material";
import React from "react";
import Reels from "./Reels";

function Content() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={8}>
          <Reels />
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Container>
  );
}

export default Content;
