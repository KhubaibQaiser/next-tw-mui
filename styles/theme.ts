import { createTheme } from "@mui/material/styles";
import ComponentStyles, { Palette, Typography } from "./component-styles";

export const themeOptions = {
  palette: Palette,
  typography: Typography,
  components: ComponentStyles,
};

export const theme = createTheme(themeOptions);
export type AppTheme = typeof themeOptions;

export default theme;
