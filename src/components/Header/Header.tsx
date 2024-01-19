import logo from "../../images/svg/logo.svg";
import { IoMdMenu } from "react-icons/io";
import { Box, IconButton, Stack, Typography } from "@mui/material";

const Header = () => {
  return (
    <Stack
      component="header"
      direction="column"
      alignItems="center"
      sx={{
        position: 'absolute',
        right: 0,
        width: "100vw",
        height: 52,
        color: "textP.main",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap="28px"
        sx={{
          maxWidth: "1440px",
          width: "100%",
          height: "100%",
          padding: {
            xs: "0 10px",
            md: '0 72px',
          },
        }}
      >
        <Stack direction="row" alignItems="center">
          <IconButton aria-label="menu" size="medium" color="primary" sx={{verticalAlign: "top"}} >
          <IoMdMenu
            style={{
              width: 27,
              height: 14,
            }}
          />
          </IconButton>
          <Typography variant="body1" sx={{ textTransform: "uppercase" }}>
            home
          </Typography>
        </Stack>
        <img src={logo} alt="logo of company" width="117px" height="20px" />
        <Stack direction="row" alignItems="center">
          <Typography variant="body1" sx={{ textTransform: "uppercase" }}>
            bag
          </Typography>
          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor: "backgroundP.main",
              color: "textP.main",
              textAlign: "center",
            }}
          >
            0
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
