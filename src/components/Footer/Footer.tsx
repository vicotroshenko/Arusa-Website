import { Stack, Typography } from "@mui/material";
import { links1, links2, links3, links4 } from "./links";
import FooterItem from "../FooterItem/FooterItem";

const Footer = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" sx={{ backgroundColor: "backgroundP.main" }}>
      <Stack
      direction="row"
      component="footer"
      flexWrap="wrap"
      width="100%"
      maxWidth="1440px"
      margin="0 auto"
    >
      <FooterItem links={links1} borders={["left", "right", "bottom"]} />
      <FooterItem links={links2} borders={["right", "bottom"]}/>
      <FooterItem links={links3} borders={["right", "bottom"]}/>
      <FooterItem links={links4} borders={["right", "bottom"]}/>
      <Stack
        direction="row"
        width="100%"
        justifyContent="center"
        alignItems="center"
        padding="92px 10px 100px 10px"
        sx={{
          borderBottom: "1px solid",
          borderColor: "primary.dark",
        }}
      >
        <img
          src="https://raw.githubusercontent.com/vicotroshenko/arusa-website/c1c143c359e163ba2f174fb19f8db34ef10da1fb/src/images/svg/logo.svg"
          alt="logo of company arusa"
        />
      </Stack>
      <Stack
        direction="row"
        padding="24px 10px"
				width="100%"
        justifyContent="center"
        alignItems="center"
				marginBottom="20px"
				sx={{
					borderBottom: "1px solid",
          borderColor: "primary.dark",
				}}
      >
        <Typography variant="body1" color="textP.light2">
          © ARUSA 2022 | AGATHA SAKOWICZ
        </Typography>
      </Stack>
    </Stack>
    </Stack>
  );
};

export default Footer;
