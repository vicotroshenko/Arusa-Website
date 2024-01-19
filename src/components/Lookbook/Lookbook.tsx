import { Box, Stack, Typography } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import Container from "../Container/Container";
import LookbookItem from "../LookbookItem/LookbookItem";
import TitleDivider from "../TitleDivider/TitleDivider";

const Lookbook = () => {
  return (
    <Container bgColor="main">
      <Stack
        direction="row"
        color="textP.light3"
        flexWrap="wrap"
        justifyContent="center"
        width="100%"
        maxWidth="1440px"
      >
        <Stack
          direction="column"
          justifyContent="flex-end"
          paddingBottom="20px"
          paddingRight="18px"
          width="5%"
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            borderRight: "1px solid",
            borderColor: "primary.dark",
          }}
        >
          <Typography
            variant="h5"
            sx={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
          >
            LOOKBOOK
          </Typography>
        </Stack>
        <Stack
          direction="column"
          alignItems="center"
					justifyContent="space-between"
          padding="50px 10px 170px 10px"
          sx={{
            height: {
              xs: "265px",
              md: "auto",
            },
            width: {
              xs: "100%",
              md: "52%",
            }
          }}
        >
          <Typography
            variant="h3"
            textAlign="center"
            sx={{
              fontSize: {
                xs: "2.4rem",
                md: "3.7rem",
              },
              marginBottom: "56px",
            }}
          >
            LOOKBOOK
          </Typography>
          <Typography variant="subtitle1" textAlign="center" maxWidth="414px" width="100%">
            The pieces stand out for their contemporary straight lines and
            imposing presence. Current, following the world trend of the great
            masters, the furniture stands out for its noble and innovative
            materials, composing sophisticated and exclusive environments.
          </Typography>
        </Stack>
        <Stack
          direction="column"
          alignItems="center"
          sx={{
            flexDirection: {
              xs: "column-reverse",
              md: "column",
            },
            width: {
              xs: "100vw",
              md: "43%",
            },
            borderLeft: "1px solid",
            borderColor: "primary.dark",
            padding: "22px 0 23px 0",
          }}
        >
          <LookbookItem title="ITEM" desc="DESCRIPTION" mobileNone="none" />
          <Stack
            padding="20px 20px 95px 21px"
            margin="20px 20px 23px 21px"
            sx={{ backgroundColor: "backgroundP.grey" }}
          >
            <Box>
              <ProductCard
                scrImage="https://github.com/vicotroshenko/arusa-website/blob/main/src/images/jpeg/fabric.jpg?raw=true"
                title="SEE LOOKBOOK"
                price="SHOP ALL"
                alt="fabric"
                color="dark2"
                widthPx="422px"
                heightPx="auto"
              />
            </Box>
          </Stack>
          <LookbookItem
            title="MATERIALS"
            desc="CERAMIC, GLASS, IRON, WOOD"
            mobileNone="flex"
          />
          <LookbookItem
            title="PRODUCED IN:"
            desc="CANADA, ITALY, UNITED STATES"
            mobileNone="flex"
          />
          <LookbookItem
            title="CATEGORIES:"
            desc="DECORATION, LAMP, FURNITURE"
            mobileNone="flex"
          />
        </Stack>
        <TitleDivider color="light2" bgColor="main" text="Enjoy our feature products" />
      </Stack>
    </Container>
  );
};

export default Lookbook;
