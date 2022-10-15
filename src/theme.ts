import { createTheme } from '@mui/material';
import { type ThemeMode } from './types/GlobalTypes';

const theme = (themeMode: ThemeMode) =>
  createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: 'rgb(32,34,55)',
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
