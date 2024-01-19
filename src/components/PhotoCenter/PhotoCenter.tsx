import { Box, Stack } from "@mui/material";
import React from "react";
import Container from "../Container/Container";

const imageBg =
  "https://github.com/vicotroshenko/arusa-website/blob/main/src/images/jpeg/third-bg.jpg?raw=true";
const imageFront =
  "https://github.com/vicotroshenko/arusa-website/blob/main/src/images/jpeg/third-center-pic.jpg?raw=true";

const PhotoCenter = () => {
  return (
    <Container bgColor="secondary">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        maxWidth="1440px"
        width="100%"
        padding="55px 0 108px 0"
        sx={{
          background: `center/cover no-repeat url(${imageBg})`,
        }}
      >
        <Box maxWidth="392px" width="392px" height="502px" sx={{
					boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
				}}>
          <img src={imageFront} alt="black vase" width="100%" />
        </Box>
      </Stack>
    </Container>
  );
};

export default PhotoCenter;
