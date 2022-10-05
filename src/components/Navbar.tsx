import {
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
  MouseEventHandler,
  Fragment,
  ChangeEventHandler,
} from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
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
import { getFullCountryName } from '../helpers/IntlHelpers';
import { type CitiesData, type CityData } from '../types/CitiesDataType';
import { type UnitType } from '../types/GlobalTypes';
import KEY from '../../API_KEY';

interface Props {
  toggleTheme: () => void;
  tempUnit: UnitType;
  fetchedCityList: CitiesData;
  setFetchedCityList: Dispatch<SetStateAction<CitiesData>>;
  setLocationCoord: Dispatch<SetStateAction<{ lat: number; lon: number }>>;
  setTempUnit: Dispatch<SetStateAction<UnitType>>;
  setSelectedCity: Dispatch<SetStateAction<CityData>>;
}

const BASEURL = 'https://api.openweathermap.org';

const Navbar = ({
  toggleTheme,
  fetchedCityList,
  setFetchedCityList,
  setLocationCoord,
  tempUnit,
  setTempUnit,
  setSelectedCity,
}: Props) => {
  const [searchInputValue, setSearchInputValue] = useState<string>('');

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
    setTempUnit((prev) => (prev === 'metric' ? 'imperial' : 'metric'));
  };

  const handleSearchInputValueChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setSearchInputValue(evt.target.value);
  };
  //TODO: Add Type for city
  const handleCitySelection =
    ({ country, lat, local_names, lon, name, state }: CityData): MouseEventHandler =>
    (evt) => {
      setSearchInputValue('');
      setSelectedCity({ country, name, local_names, lat, lon, state });
      setLocationCoord({ lat, lon });
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
                <Fragment key={`${city.lat}${city.lon}`}>
                  <ListItem
                    //TODO: Move the theming to styled component
                    sx={(theme) => ({
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: theme.palette.grey[900],
                      },
                    })}
                    onClick={handleCitySelection(city)}
                  >
                    <ListItemText>
                      {city.name}, {getFullCountryName(city.country)}{' '}
                      {city.state && city.state}
                    </ListItemText>
                  </ListItem>
                  {idx < fetchedCityList.length - 1 && <Divider />}
                </Fragment>
              ))}
            </List>
          )}
        </Box>

        <UnitContainer>
          <Unit selected={tempUnit === 'metric'} onClick={toggleTempUnit}>
            &#8451;
          </Unit>
          <Unit selected={tempUnit === 'imperial'} onClick={toggleTempUnit}>
            &#8457;
          </Unit>
        </UnitContainer>
      </Root>
    </AppBar>
  );
};

export default Navbar;
