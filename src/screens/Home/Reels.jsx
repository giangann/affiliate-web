import { Divider, Grid, Typography, Stack } from "@mui/material";
import { useState } from "react";

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
        <Grid container gap={1}>
          <Grid item xs={5.5}>
            <Stack spacing={2}>
              {topWebsite.map((item, index) => (
                <Stack
                  direction="row"
                  key={index}
                  spacing={1}
                  pl={2}
                  py={0.5}
                  alignItems="center"
                  sx={{borderTop:'1px solid #dae1e7'}}
                >
                  <img
                    style={{ width: "18px", height: "18px" }}
                    src={item.avatar}
                    alt="website"
                  />
                  <Typography
                    sx={{
                      fontWeight: 600,
                      opacity: 0.4,
                      fontSize: "14px",
                      fontFamily: "alibaba-sans, sans-serif",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Divider orientation="vertical" flexItem />

          <Grid item xs={5.5}>
            <Stack py={2}>
              <Stack direction="row" spacing={1} justifyContent="center">
                <img
                  style={{ width: "28px", height: "28px" }}
                  src={topWebsite[focusWebsite].avatar}
                  alt="website"
                />
                <Typography
                  sx={{
                    fontWeight: 600,
                    opacity: 0.4,
                    fontSize: "14px",
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
      <Grid item xs={8}>
        <img
          style={{ width: "420px", height: "180px" }}
          src="https://apimg.net/slider/howto-setup-tracker-mylead-546x234.jpg"
          alt="website"
        />
      </Grid>
    </Grid>
  );
}

export default Reels;
