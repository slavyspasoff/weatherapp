import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { WbSunnyTwoTone, Search } from '@mui/icons-material';
import { AppBar, Root, SearchContainer, InputBase } from '../styles/Navbar.styles';
import { ChangeEventHandler } from 'react';
interface Props {}

const Navbar = (props: Props) => {
  const [searchInputValue, setSearchInputValue] = useState<string>('');

  const handleSearchInputValueChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setSearchInputValue(evt.target.value);
  };

  return (
    <AppBar>
      <Root>
        <Box sx={{ display: 'flex', gap: '2rem' }}>
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
        <Box></Box>
      </Root>
    </AppBar>
  );
};
export default Navbar;
