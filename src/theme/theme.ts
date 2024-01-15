import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    textP: PaletteColor;
    backgroundP: PaletteColorBack;
  }
  interface PaletteOptions {
    textP: SimplePaletteColorOptions;
    backgroundP: BackPaletteColorOptions;
  }

  interface PaletteColor {
    light1?: string;
    light2?: string;
    light3?: string;
    dark1?: string;
    dark2?: string;
  }
  interface SimplePaletteColorOptions extends PaletteColor { }

  interface PaletteColorBack {
    main?: string;
    secondary?: string;
  }
  interface BackPaletteColorOptions extends PaletteColorBack { }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 980,
      lg: 1200,
      xl: 1440,
    }
  },
  palette: {
    primary: {
      main: "#F8F4E7",
      dark: "#DFDEDB"
    },
    backgroundP: {
      main: "#384353",
      secondary: "#FCFDFD",
    },
    textP: {
      main: "#FCFDFD",
      light2: "#F5F4F3",
      light3: "#DFDEDB",
      dark1: "#323334",
      dark2: "#384353",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    htmlFontSize: 15,
    fontFamily: "Rubik, sans-serif",
    fontSize: 15,
    h1: {
      fontFamily: "Merriweather, sans-serif",
      fontSize: "6.4rem", //96px
      fontWeight: 400,
      letterSpacing: "-4.8px",
      lineHeight: 1,
    },
    h2: {
      fontFamily: "Merriweather, sans-serif",
      fontSize: "4.8rem", //72px
      fontWeight: 400,
      letterSpacing: "-3.6px",
      lineHeight: 0.9,
    },
    h3: {
      fontFamily: "Merriweather, sans-serif",
      fontSize: "3.7rem", //55.5px
      fontWeight: 400,
      letterSpacing: "-2.24px",
      lineHeight: 1.14,
    },
    h4: {
      fontFamily: "Merriweather, sans-serif",
      fontSize: "2.4rem", //36px
      fontWeight: 400,
      letterSpacing: "-0.72px",
      lineHeight: 1.16,
    },
    h5: {
      fontFamily: "Merriweather, sans-serif",
      fontSize: "1.6rem", //24px
      fontWeight: 400,
      letterSpacing: "-0.72px",
    },
    subtitle1: {
      fontFamily: "Rubik, sans-serif",
      fontSize: "1rem",
      lineHeight: 1.27,
    },
    body1: {
      fontFamily: "Rubik, sans-serif",
      fontSize: "0.8rem", //12px
      lineHeight: 1.16,
      letterSpacing: "1.2px",
    },
    button: {
      fontFamily: "Rubik, sans-serif",
      fontSize: "0.8rem", //12px
      lineHeight: 1.16,
      letterSpacing: "1.2px",
      fontWeight: 400,
    }
  },
});

export default theme;
