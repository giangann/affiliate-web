import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

function Reels() {
  const topWebsite = [
    {
      name: "MyBid",
      avatar:
        "https://apimg.net/sponsors/circle/c78a6d37510f1083975e7bfe0c89bb9d.jpg",
      num_of_review: 14,
      rate: 5,
    },
    {
      name: "MyBid",
      avatar:
        "https://apimg.net/sponsors/circle/c78a6d37510f1083975e7bfe0c89bb9d.jpg",
      num_of_review: 14,
      rate: 5,
    },
    {
      name: "MyBid",
      avatar:
        "https://apimg.net/sponsors/circle/c78a6d37510f1083975e7bfe0c89bb9d.jpg",
      num_of_review: 14,
      rate: 5,
    },
    {
      name: "MyBid",
      avatar:
        "https://apimg.net/sponsors/circle/c78a6d37510f1083975e7bfe0c89bb9d.jpg",
      num_of_review: 14,
      rate: 5,
    },
    {
      name: "MyBid",
      avatar:
        "https://apimg.net/sponsors/circle/c78a6d37510f1083975e7bfe0c89bb9d.jpg",
      num_of_review: 14,
      rate: 5,
    },
  ];

  const [focusWebsite, setFocusWebsite] = useState(1);
  return (
    <Grid container>
      <Grid item xs={4} sx={{ backgroundColor: "white" }}>
        <Grid container>
          <Grid item xs={6}>
            {topWebsite.map((item, index) => (
              <Stack direction="row" key={index}>
                <img
                  style={{ width: "28px", height: "28px" }}
                  src={item.avatar}
                  alt="website"
                />
                <Typography
                  sx={{
                    fontWeight: 600,
                    opacity: 0.4,
                    fontSize: "18px",
                    fontFamily: "alibaba-sans, sans-serif",
                  }}
                >
                  {item.name}
                </Typography>
              </Stack>
            ))}
          </Grid>

          <Grid item xs={6}>
            <Stack>
              <Stack direction="row">
                <img
                  style={{ width: "28px", height: "28px" }}
                  src={topWebsite[focusWebsite].avatar}
                  alt="website"
                />
                <Typography
                  sx={{
                    fontWeight: 600,
                    opacity: 0.4,
                    fontSize: "18px",
                    fontFamily: "alibaba-sans, sans-serif",
                  }}
                >
                  {topWebsite[focusWebsite].name}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={8}></Grid>
    </Grid>
  );
}

export default Reels;
