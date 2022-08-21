import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Content from "./Content";

function Main() {
  return (
    <Box
      sx={{
        background:
          "url(https://apimg.net/2022/algo-newbg.jpg) center 0 no-repeat",
        height: "100vh",
      }}
    >
      <Container>
        <Content/>
      </Container>
    </Box>
  );
}

export default Main;
