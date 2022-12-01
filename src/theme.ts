import { createTheme } from '@mui/material';
import { type PaletteMode } from '@mui/material';

const theme = (paletteMode: PaletteMode) =>
  createTheme({
    palette: {
      mode: paletteMode,
    },
  });

export { theme as default };
