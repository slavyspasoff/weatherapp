import { useContext } from 'react';
import { AppBar, Box, Button } from '@mui/material';

import TempUnitToggleButton from './TempUnitToggleButton';
import SearchBox from '../SearchBar/SearchBox';

import { ctx } from '../Context/Provider.context';

interface Props {}
function Navbar({}: Props) {
   const { paletteMode, toggleTheme } = useContext(ctx);

   return (
      <AppBar
         enableColorOnDark
         sx={(theme) => ({
            height: '7.5vh',
            backgroundColor: theme.palette.background.default,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            gap: theme.spacing(2),
            paddingInline: theme.spacing(2),
         })}
      >
         <Box>Logo</Box>
         <SearchBox
            containerStyles={{ height: '2.5em', borderRadius: 12 }}
            listOffset={'2.75rem'}
            fontSize={'1.25rem'}
         />
         <Box>
            <TempUnitToggleButton />
            <Button
               onClick={() => {
                  toggleTheme();
               }}
            >
               {paletteMode}
            </Button>
         </Box>
      </AppBar>
   );
}
export default Navbar;
