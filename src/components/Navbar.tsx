import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  alpha,
} from '@mui/material';
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
  //TODO: Make a global LocationCoordType
  locationCoord: { lat: number; lon: number };
  setLocationCoord: (v: { lat: number; lon: number }) => void;
}

const BASEURL = 'https://api.openweathermap.org';

const Navbar = ({
  toggleTheme,
  fetchedCityList,
  setFetchedCityList,
  locationCoord,
  setLocationCoord,
}: Props) => {
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
        <Box sx={{ position: 'relative', width: '40%' }}>
          <SearchContainer>
            <InputBase
              value={searchInputValue}
              onChange={handleSearchInputValueChange}
              inputProps={{ 'aria-label': 'search' }}
              placeholder='Search City or Zip Code'
            />
            <Search />
          </SearchContainer>
          {fetchedCityList.length > 0 && searchInputValue.length > 0 && (
            <List
              sx={(theme) => ({
                position: 'absolute',
                top: '3rem',
                width: '100%',
                backgroundColor: theme.palette.grey[800],
                borderRadius: '1rem',
                overflow: 'hidden',
              })}
            >
              {fetchedCityList.map((city, idx) => (
                <>
                  <ListItem
                    sx={(theme) => ({
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: theme.palette.grey[900],
                      },
                    })}
                    // TODO: Add handle function
                    onClick={() => {
                      setSearchInputValue('');
                      setLocationCoord({ lat: city.lat, lon: city.lon });
                    }}
                  >
                    <ListItemText>
                      {city.name} {city.country} {city.state ?? city.state}
                    </ListItemText>
                  </ListItem>
                  {idx < fetchedCityList.length - 1 && <Divider />}
                </>
              ))}
            </List>
          )}
        </Box>

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
