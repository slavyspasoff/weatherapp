import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { WbSunnyTwoTone, Search } from '@mui/icons-material';
import {
  AppBar,
  Root,
  SearchContainer,
  InputBase,
  UnitContainer,
  Unit,
} from '../styles/Navbar.styles';
import { ChangeEventHandler } from 'react';
interface Props {
  toggleTheme: () => void;
}

const Navbar = ({ toggleTheme }: Props) => {
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [tempUnit, setTempUnit] = useState<'f' | 'c'>('c');

  const toggleTempUnit = () => {
    setTempUnit((prev) => (prev === 'f' ? 'c' : 'f'));
  };

  const handleSearchInputValueChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setSearchInputValue(evt.target.value);
  };

  return (
    <AppBar>
      <Root>
        <Box sx={{ display: 'flex', gap: '2rem' }} onClick={() => toggleTheme()}>
          <WbSunnyTwoTone />
          <Typography variant='overline' component='h2'>
            Weather App
          </Typography>
        </Box>
        <SearchContainer>
          <InputBase
            value={searchInputValue}
            onChange={handleSearchInputValueChange}
            inputProps={{ 'aria-label': 'search' }}
            placeholder='Search City or Zip Code'
          />
          <Search />
        </SearchContainer>
        <UnitContainer>
          <Unit selected={tempUnit === 'f'} onClick={toggleTempUnit}>
            &#8451;
          </Unit>
          <Unit selected={tempUnit === 'c'} onClick={toggleTempUnit}>
            &#8457;
          </Unit>
        </UnitContainer>
      </Root>
    </AppBar>
  );
};
export default Navbar;
