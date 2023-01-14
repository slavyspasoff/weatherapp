import { createTheme, darkScrollbar, type PaletteMode } from '@mui/material';
import { amber, blueGrey, grey } from '@mui/material/colors';

declare module '@mui/material/styles' {
   interface TypeBackground {
      card: string;
   }
}

const theme = (paletteMode: PaletteMode) =>
   createTheme({
      palette: {
         mode: paletteMode,
         background: {
            card: paletteMode === 'dark' ? 'rgb(24,27,40)' : 'rgba(173, 181, 189,1)',
            default: paletteMode === 'dark' ? 'rgb(99, 118, 141)' : 'rgba(237, 242, 244,1)',
         },
         warning: {
            main: paletteMode === 'dark' ? amber['700'] : blueGrey['800'],
         },
         divider: paletteMode === 'dark' ? '#eeeeee' : '#333333',
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
