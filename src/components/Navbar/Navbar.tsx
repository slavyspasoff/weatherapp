import { type MouseEventHandler, useContext } from 'react';
import { AppBar, Box, Button, SvgIcon } from '@mui/material';
import { LightModeOutlined, DarkModeOutlined } from '@mui/icons-material';

import TempUnitToggleButton from './TempUnitToggleButton';
import SearchBox from '../SearchBar/SearchBox';
import Logo from './Logo';

import { ctx } from '../Context/Provider.context';
import logo from '../../assets/images/logo.svg';

interface Props {}
function Navbar({}: Props) {
   const { paletteMode, toggleTheme } = useContext(ctx);
   const handleClick: MouseEventHandler = (evt) => {
      toggleTheme();
   };
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
         <Logo src={logo} />
         <SearchBox
            containerStyles={{ height: '2.5em', borderRadius: 12 }}
            listOffset={'2.75rem'}
            fontSize={'1.25rem'}
         />
         <Box sx={(theme) => ({ display: 'flex', gap: 1 })}>
            <TempUnitToggleButton />
            <Button onClick={handleClick} disableRipple>
               {paletteMode === 'light' ? <DarkModeOutlined /> : <LightModeOutlined />}
            </Button>
         </Box>
      </AppBar>
   );
}
export default Navbar;
