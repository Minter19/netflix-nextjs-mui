import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";
import theme from "../utils/theme";
import { CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Netflix - MUI</title>
        <meta name="viewport" content="inital-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
