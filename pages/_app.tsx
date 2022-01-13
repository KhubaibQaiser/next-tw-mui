// import '../styles/global.css'
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { StylesProvider } from '@mui/styles';
import {theme} from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return  (
    <StylesProvider injectFirst>
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...pageProps} />
  </MuiThemeProvider>
  </StylesProvider>
  );
}

export default MyApp
