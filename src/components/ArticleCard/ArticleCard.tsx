import { Box, Divider, Link, Stack, Typography } from "@mui/material";

const article1 =
  "https://github.com/vicotroshenko/arusa-website/blob/main/src/images/jpeg/imgCard-1.jpg?raw=true";
const article2 =
  "https://github.com/vicotroshenko/arusa-website/blob/main/src/images/jpeg/imgCard-2.jpg?raw=true";
const article3 =
  "https://github.com/vicotroshenko/arusa-website/blob/main/src/images/jpeg/imgCard-3.jpg?raw=true";

const ArticleCard = () => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center">
      <Stack
        direction="column"
        maxWidth="477px"
        sx={{
          padding: "24px 10px 0 10px",
					border: "1px solid",
					borderColor: "primary.dark"
        }}
      >
        <Box>
          <img src={article1} alt="bed" loading="lazy" />
        </Box>
        <Stack
          direction="column"
          sx={{
            padding: "16px 0 70px 0",
          }}
        >
          <Typography variant="h5">
            Inside a playful, bohemian beach house on Martha's Vineyard
          </Typography>
          <Typography variant="subtitle1">
            I would follow Jessica to the end of the Earth,” Johanna Hynes says,
            referring to her designer, Jessica Stambaugh. The Nashville-based
            principal of JS Interiors designed Hynes’ Boston wellness studio,
            Asana Charlestown, her family’s townhouse—and most recently, their
            beach chalet in Katama on Martha’s Vineyard.
          </Typography>
          <Link
            variant="overline"
            sx={{
              color: "black",
              cursor: "pointer",
							letterSpacing: 1.3,
            }}
          >
            READ ARTICLE
          </Link>
        </Stack>
      </Stack>

      <Stack
        direction="column"
        maxWidth="477px"
        sx={{
          padding: "24px 10px 0 10px",
					border: "1px solid",
					borderColor: "primary.dark",
					borderRight: "none",
					borderLeft: "none",
        }}
      >
        <Box>
          <img src={article2} alt="bed" loading="lazy" />
        </Box>
        <Stack
          direction="column"
          sx={{
            padding: "16px 0 70px 0",
          }}
        >
          <Typography variant="h5">
            Modern Texas home is beautiful and completely kid-friendly
          </Typography>
          <Typography variant="subtitle1">
            I would follow Jessica to the end of the Earth,” Johanna Hynes says,
            referring to her designer, Jessica Stambaugh. The Nashville-based
            principal of JS Interiors designed Hynes’ Boston wellness studio,
            Asana Charlestown, her family’s townhouse—and most recently, their
            beach chalet in Katama on Martha’s Vineyard.
          </Typography>
          <Link
            variant="overline"
            sx={{
              color: "black",
              cursor: "pointer",
							letterSpacing: 1.3,
            }}
          >
            READ ARTICLE
          </Link>
        </Stack>
      </Stack>

      <Stack
        direction="column"
        maxWidth="477px"
        sx={{
          padding: "24px 10px 0 10px",
					border: "1px solid",
					borderColor: "primary.dark",
        }}
      >
        <Box>
          <img src={article3} alt="bed" loading="lazy" />
        </Box>
        <Stack
          direction="column"
          sx={{
            padding: "16px 0 70px 0",
          }}
        >
          <Typography variant="h5">
            Tudor-style home in Chicago's North Shore is chock-full
          </Typography>
          <Typography variant="subtitle1">
            I would follow Jessica to the end of the Earth,” Johanna Hynes says,
            referring to her designer, Jessica Stambaugh. The Nashville-based
            principal of JS Interiors designed Hynes’ Boston wellness studio,
            Asana Charlestown, her family’s townhouse—and most recently, their
            beach chalet in Katama on Martha’s Vineyard.
          </Typography>
          <Link
            variant="overline"
            sx={{
              color: "black",
              cursor: "pointer",
							letterSpacing: 1.3,
            }}
          >
            READ ARTICLE
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ArticleCard;
