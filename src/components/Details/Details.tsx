import {
  Box,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import Container from "../Container/Container";

const detailPic1 =
  "https://github.com/vicotroshenko/arusa-website/blob/main/src/images/jpeg/details1.jpg?raw=true";
const detailPic2 =
  "https://github.com/vicotroshenko/arusa-website/blob/main/src/images/jpeg/details2.jpg?raw=true";
const detailPic3 =
  "https://github.com/vicotroshenko/arusa-website/blob/main/src/images/jpeg/details3.jpg?raw=true";

const Details = () => {
  return (
    <Container bgColor="secondary">
      <Stack
        direction="row"
        maxWidth="1440px"
        width="100%"
        justifyContent="center"
      >
        <Box
          width="5%"
          height="100%"
          borderBottom="1px solid"
          borderColor="primary.dark"
          sx={{
            minHeight: {
              xs: "387px",
              md: "512px",
            },
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        ></Box>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          padding="0 10px"
          borderLeft="1px solid"
          borderBottom="1px solid"
          borderColor="primary.dark"
          sx={{
            minHeight: {
              xs: "387px",
              md: "512px",
            },
            width: {
              xs: "100%",
              md: "95%",
            },
          }}
        >
          <Stack
            direction="column"
            maxWidth="549px"
            width="100%"
            gap="36px"
            color="textP.dark1"
          >
            <Typography
              variant="h2"
              textAlign="center"
              sx={{
                fontSize: {
                  xs: "2.4rem",
                  md: "4.8rem",
                },
              }}
            >
              Every detail matter
            </Typography>
            <Typography variant="body1" textAlign="center">
              WE ARE SPECIALIZED IN ADORNMENTS, THAT BRING CHARM TO ANY
              ENVIRONMENT.
            </Typography>
            <Typography variant="subtitle1" textAlign="center">
              There are multiples of high quality pieces, with styles that
              transition from classic to contemporary. An exclusive selection of
              lampshades, vases, murals, pillows, paintings and many gifts to
              compose great projects. In order selection, a mix of basic style,
              stricter customization and more compact dimensions, composing
              sophisticated and exclusive environments.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        maxWidth="1440px"
        width="100%"
        justifyContent="center"
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
          }}
        >
          <Typography
            variant="h5"
            sx={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
          >
            DETAILS
          </Typography>
        </Stack>
        <Stack
          width="95%"
          sx={{
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Box
            height="100%"
            sx={{
              display: "flex",
              padding: {
                xs: "0",
                md: "12px 12px 18px 16px",
              },
              borderLeft: "1px solid",
              borderColor: "primary.dark",
            }}
          >
            <img
              src={detailPic1}
              alt="books"
              loading="lazy"
              height="100%"
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Stack
            gap="32px"
            justifyContent="center"
            sx={{
              flexDirection: {
                xs: "row",
                md: "column",
              },
              padding: {
                xs: "8px 7px",
                md: "12px 14px 18px 17px",
              },
              maxWidth: {
                xs: "auto",
                md: "380px",
              },
            }}
          >
            <Box
              sx={{
                height: {
                  xs: "204px",
                  md: "auto",
                },
              }}
            >
              <img
                src={detailPic2}
                alt="vase"
                loading="lazy"
                style={{ objectFit: "cover", height: "100%" }}
              />
            </Box>
            <Box
              sx={{
                height: {
                  xs: "204px",
                  md: "auto",
                },
              }}
            >
              <img
                src={detailPic3}
                alt="decor"
                loading="lazy"
                style={{ objectFit: "cover", height: "100%" }}
              />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Details;
