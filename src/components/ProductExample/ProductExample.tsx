import { Stack, Box, Typography, Link } from "@mui/material";
import Container from "../Container/Container";

const productText =
  "Refinement Chair with Ripped Seat, made of retro Eucalyptus wood, of great resistance, Kiln dried, made with a spike system and painted with P.U. (Polyurethane) With its entire structure painted in wood, it offers a lot of elegance to your environment and when cleaning is very easy, as it is washable and light for movement. Enough of receiving visitors and not having a place to accommodate them. With the chair, your days as a host will be marked by a lot of elegance and sophistication.";

const bgImage =
  "https://github.com/vicotroshenko/arusa-website/blob/main/src/images/jpeg/chair-sec.jpg?raw=true";

const ProductExample = () => {
  return (
    <Container bgColor="main">
      <Stack
        justifyContent="space-between"
        color="textP.main"
        minHeight="670px"
        maxWidth="1440px"
        width="100%"
        sx={{
          flexDirection: {
            xs: "column-reverse",
            md: "row",
          },
					padding: {
						xs: "16px 16px 61px 16px",
            md: "0px",
					}
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: {
              xs: "100%",
              md: "50vw",
            },
          }}
        >
          <Stack maxWidth="405px" width="100%" gap="24px">
            <Typography variant="h4" textAlign="center" paddingBottom="24px">Native light chair</Typography>
            <Typography variant="subtitle1">{productText}</Typography>
            <Link href="#" underline="hover" color="textP.main">
              VIEW PRODUCT
            </Link>
          </Stack>
        </Stack>
        <Box
          sx={{
            background: `center/cover no-repeat url(${bgImage})`,
            width: {
              xs: "100%",
              md: "50vw",
            },
						height: {
              xs: "320px",
              md: "auto",
            },
          }}
        ></Box>
      </Stack>
    </Container>
  );
};

export default ProductExample;
