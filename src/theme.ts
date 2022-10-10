import { createTheme } from '@mui/material';
import { type ThemeModeProps } from './types/GlobalTypes';

declare module '@mui/material/styles' {
  interface Theme {}
  interface ThemeOptions {}
}

const theme = (themeMode: ThemeModeProps) =>
  createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: 'rgb(0, 0,0)',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1150,
        xl: 1536,
      },
    },
  });

export default theme;
