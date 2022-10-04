import { useEffect, useState } from 'react';
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
import fetchData from '../helpers/fetchData';
import { ChangeEventHandler } from 'react';
import { type CitiesData } from '../types/CitiesDataType';
import KEY from '../../API_KEY';

interface Props {
  toggleTheme: () => void;
  fetchedCityList: CitiesData;
  setFetchedCityList: (v: CitiesData) => void;
}

const BASEURL = 'https://api.openweathermap.org';

const Navbar = ({ toggleTheme, fetchedCityList, setFetchedCityList }: Props) => {
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [tempUnit, setTempUnit] = useState<'f' | 'c'>('c');

  let timeout: number | null = null;

  //TODO: Find a better way to create AbortController so it doesn't create a new one every on every component mount.
  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    if (searchInputValue.length > 2) {
      timeout = setTimeout(async () => {
        try {
          const d = await fetchData(
            `${BASEURL}/geo/1.0/direct?q=${searchInputValue}&limit=5&appid=${KEY}`,
            { signal }
          );
          setFetchedCityList(d as CitiesData);
          //TODO: ADD CUSTOM ERROR
        } catch (err) {}
      }, 2000);
    }
    return () => {
      timeout && clearTimeout(timeout);
      controller.abort();
    };
  }, [searchInputValue]);

  const toggleTempUnit = () => {
    setTempUnit((prev) => (prev === 'f' ? 'c' : 'f'));
  };

  const handleSearchInputValueChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setSearchInputValue(evt.target.value);
  };

  return (
    <AppBar>
      <Root>
        <Box
          sx={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
          onClick={() => toggleTheme()}
        >
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
