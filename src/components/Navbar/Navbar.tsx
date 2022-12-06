import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import TempUnitToggleButton from './TempUnitToggleButton';
import SearchBox from '../SearchBar/SearchBox';

import { ctx } from '../Context/Provider.context';

interface Props {}
function Navbar({}: Props) {
  const { toggleTheme } = useContext(ctx);
  const navigate = useNavigate();

  return (
    <AppBar
      enableColorOnDark
      sx={(theme) => ({
        height: '7.5vh',
        backgroundColor: 'rgb(41, 50, 65)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      })}
    >
      <Box>Logo</Box>
      <SearchBox
        containerStyles={{ height: '2.5em', borderRadius: 12 }}
        listOffset={'2.75rem'}
        fontSize={'1.25rem'}
      />
      <TempUnitToggleButton />
    </AppBar>
  );
}
export default Navbar;
