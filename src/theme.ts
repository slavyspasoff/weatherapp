import { createTheme, darkScrollbar } from '@mui/material';
import { type PaletteMode } from '@mui/material';
import { grey } from '@mui/material/colors';

declare module '@mui/material/styles' {
   interface TypeBackground {
      card: string;
   }
}
// rgba(24, 27, 40, 1);
//rgba(252, 247, 255,1)
//rgba(196, 202, 208,1)
//rgba(135, 140, 143,1)
//rgba(99, 118, 141,1)
//rgba(228,230,195,1)
const theme = (paletteMode: PaletteMode) =>
   createTheme({
      palette: {
         mode: paletteMode,
         background: {
            card: paletteMode === 'dark' ? 'rgb(24,27,40)' : 'rgba(173, 181, 189,1)',
            default: paletteMode === 'dark' ? 'rgb(99, 118, 141)' : 'rgba(237, 242, 244,1)',
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
