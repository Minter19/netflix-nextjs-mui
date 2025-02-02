import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const base = createTheme({
  palette: {
    primary: {
      main: "#E50914",
    },
    secondary: {
      main: "#FFFFFF",
    },
    error: {
        main: red[400],
    },
  },
  breakpoints :{
    values:{
       xs: 0,
       sm: 720,
        md: 960,

    }
  }
});

const theme = responsiveFontSizes(base);

export default theme;
