import { createTheme, darkScrollbar } from '@mui/material';
import { type PaletteMode } from '@mui/material';
import { grey } from '@mui/material/colors';

declare module '@mui/material/styles' {
   interface TypeBackground {
      card: string;
   }
}
// rgba(24, 27, 40, 1);
//252, 247, 255
//196, 202, 208
//135, 140, 143
const theme = (paletteMode: PaletteMode) =>
   createTheme({
      palette: {
         mode: paletteMode,
         background: {
            card: paletteMode === 'dark' ? 'rgb(24,27,40)' : 'rgba(242,240,243,1)',
            default: paletteMode === 'dark' ? 'rgb(77, 80, 97)' : 'rgba(255,255,255,1)',
         },
      },
      components: {
         MuiCssBaseline: {
            styleOverrides: {
               body: {
                  ...darkScrollbar(
                     paletteMode === 'light'
                        ? { track: grey[200], thumb: grey[400], active: grey[400] }
                        : undefined
                  ),
               },
            },
         },
      },
   });

export { theme as default };
