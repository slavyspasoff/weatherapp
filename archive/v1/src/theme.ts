import { createTheme, useTheme } from '@mui/material';
import { type PaletteMode } from '@mui/material';
const theme = (paletteMode: PaletteMode) =>
  createTheme({
    palette: {
      mode: paletteMode,
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
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: ({ ownerState, theme }) => ({
            backgroundColor:
              theme.palette.mode === 'light'
                ? theme.palette.primary.light
                : theme.palette.primary.dark,
            color: theme.palette.primary.contrastText,
          }),
        },
      },
    },
  });

export default theme;
