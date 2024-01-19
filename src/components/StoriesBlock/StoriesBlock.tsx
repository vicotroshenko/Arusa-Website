import { Link, Stack, Box, Typography } from "@mui/material";
import Container from "../Container/Container";
import TitleDivider from "../TitleDivider/TitleDivider";
import ButtonDivider from "../ButtonDivider/ButtonDivider";

const bgImage =
  "https://github.com/vicotroshenko/arusa-website/blob/main/src/images/jpeg/advertise-pic.jpg?raw=true";
const productText =
  "Interior designer Sarah Vaile remembers eyeing a New York City apartment—one with bold colors and a personality as distinct as its chic owner—in a 2014 issue of House Beautiful, and tucking it away for future design inspiration. Years later, in a serendipitous turn of events, the woman she’d seen in the magazine—a stylish figure now in her 30s—just moved to Chicago.";

const StoriesBlock = () => {
  const handleClick = () => {
    console.log("button see all articles - done");
  };

  return (
    <Container bgColor="secondary">
      <TitleDivider
        color="dark1"
        bgColor="secondary"
        text="Enjoy our articles"
      />
      <Stack
        justifyContent="space-between"
        color="textP.dark2"
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
          },
        }}
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
            READER STORIES
          </Typography>
        </Stack>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: {
              xs: "100%",
              md: "45%",
            },
          }}
        >
          <Stack maxWidth="405px" width="100%" gap="56px">
            <Typography variant="h4" textAlign="center" paddingBottom="24px">
              Manhattan Pià-terre for a new Chicago apartment
            </Typography>
            <Typography variant="subtitle1">{productText}</Typography>
            <Link href="#" underline="hover" color="textP.dark2">
              VIEW PRODUCT
            </Link>
          </Stack>
        </Stack>
        <Box
          sx={{
            background: `center/cover no-repeat url(${bgImage})`,
            width: {
              xs: "100%",
              md: "50%",
            },
            height: {
              xs: "320px",
              md: "auto",
            },
          }}
        ></Box>
      </Stack>
      <ButtonDivider
        color="dark1"
        bgColor="secondary"
        text="SEE ALL ARTICLES"
        onClick={handleClick}
      />
    </Container>
  );
};

export default StoriesBlock;
