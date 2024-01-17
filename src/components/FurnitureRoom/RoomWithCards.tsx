import { Box, Stack } from "@mui/material";
import Container from "../Container/Container";
import ProductCard from "../ProductCard/ProductCard";

const pic1 =
  "https://github.com/vicotroshenko/arusa-website/blob/main/src/images/jpeg/wooden-armchair.jpg?raw=true";
const pic2 =
  "https://github.com/vicotroshenko/arusa-website/blob/main/src/images/jpeg/bedside-table.jpg?raw=true";
const bgPic =
  "https://github.com/vicotroshenko/arusa-website/blob/main/src/images/jpeg/secondary-bg.jpg?raw=true";

const RoomWithCards = () => {
  return (
    <Container bgColor="secondary">
      <Stack
        direction="row"
        width="100%"
        maxWidth="1440px"
        justifyContent="space-around"
        sx={{
          background: `center / cover no-repeat url(${bgPic})`,
          minHeight: {
            xs: "664px",
            md: "1081px",
          },
          padding: "125px 10px 173px 10px",
        }}
      >
        <Box
          height="min-content"
          sx={{
            backgroundColor: "backgroundP.secondary",
            padding: "20px",
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <ProductCard
            scrImage={pic1}
            alt="wooden chair"
            title="IGLENIX VASE"
            price="2.299"
            color="dark2"
            widthPx="251px"
            heightPx="301px"
          />
        </Box>
        <Box
          height="min-content"
          alignSelf="flex-end"
          sx={{
            backgroundColor: "backgroundP.secondary",
            padding: "20px",
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          <ProductCard
            scrImage={pic2}
            alt="bedside table"
            title="ATAJUX LAMP"
            price="2.399"
            color="dark2"
            widthPx="251px"
            heightPx="301px"
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default RoomWithCards;
