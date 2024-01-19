import { Stack, Typography, Button } from "@mui/material";
import Container from "../Container/Container";

const heroBg =
  "https://github.com/vicotroshenko/arusa-website/blob/main/src/images/jpeg/hero-bg.jpg?raw=true";
const heroBgTablet = "https://github.com/vicotroshenko/arusa-website/blob/main/src/images/jpeg/hero-bg-tablet.jpg?raw=true";
const Hero = () => {
  return (
    <Container bgColor="secondary">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        rowGap="48px"
        sx={{
          maxWidth: "1440px",
					width: "100%",
          height: "100vh",
					background: {
            xs: `center / cover no-repeat url(${heroBgTablet})`,
            md: `center / cover no-repeat url(${heroBg})`,
          },
          color: "textP.main",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontStyle: "italic", width: "70vw", textAlign: "center", fontSize: {
            xs: "2.4rem",
            md: "6rem"
          },
        letterSpacing: {
          xs: "-0.5px",
            md: "-2.24px"
        } }}
        >
          Seamless furniture with natural fabrics
        </Typography>
        <Button variant="contained" sx={{ width: 137, height: 30 }}>
          SHOP ALL
        </Button>
      </Stack>
    </Container>
  );
};

export default Hero;
