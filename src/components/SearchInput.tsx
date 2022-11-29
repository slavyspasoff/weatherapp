import {
  useState,
  useEffect,
  Fragment,
  type ChangeEventHandler,
  type Dispatch,
  type SetStateAction,
  type MouseEventHandler,
} from 'react';
import { CircularProgress, List, ListItem, ListItemText, Divider } from '@mui/material';
import fetchData from '../helpers/fetchData';
import { getFullCountryName } from '../helpers/IntlHelpers';
import { SearchContainer, SearchInput } from '../styles/SearchInput.styles';
import { type CityData, type LocationCoord } from '../types/Global.type';
import KEY from '../../API_KEY';

const BASEURL = 'https://api.openweathermap.org';

interface Props {
  fetchedCityList: CityData[] | null;
  setFetchedCityList: Dispatch<SetStateAction<CityData[] | null>>;
  setSelectedCity: Dispatch<SetStateAction<CityData | null>>;
  setLocationCoord: Dispatch<SetStateAction<LocationCoord | null>>;
}
function searchInput({
  setFetchedCityList,
  fetchedCityList,
  setSelectedCity,
  setLocationCoord,
}: Props) {
  const [searchInputValue, setSearchInputValue] = useState<string>('');

  const handleSearchInputValueChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setSearchInputValue(evt.target.value);
  };
  const handleCitySelection =
    ({ country, lat, local_names, lon, name, state }: CityData): MouseEventHandler =>
    (evt) => {
      setSearchInputValue('');
      setSelectedCity({ country, name, local_names, lat, lon, state });
      setLocationCoord({ lat, lon });
    };

  useEffect(() => {
    let timeout: number | null = null;
    const controller = new AbortController();
    const signal = controller.signal;
    if (searchInputValue.length > 2) {
      timeout = setTimeout(async () => {
        try {
          const d = await fetchData(
            `${BASEURL}/geo/1.0/direct?q=${searchInputValue}&limit=5&appid=${KEY}`,
            { signal }
          );
          setFetchedCityList(d as CityData[]);
          //TODO: ADD CUSTOM ERROR
        } catch (err) {}
      }, 2000);
    }
    return () => {
      timeout && clearTimeout(timeout);
      controller.abort();
    };
  }, [searchInputValue]);

  return (
    <SearchContainer sx={{ position: 'relative' }}>
      <SearchInput
        value={searchInputValue}
        onChange={handleSearchInputValueChange}
        inputProps={{ 'aria-label': 'search' }}
        placeholder='Search City or Zip Code'

        // endAdornment={
        //   <Fragment>
        //     <CircularProgress color='inherit' size={30} />
        //   </Fragment>
        // }
      ></SearchInput>
      {fetchedCityList && fetchedCityList.length > 0 && searchInputValue.length > 0 && (
        <List
          sx={(theme) => ({
            position: 'absolute',
            top: '5rem',
            width: '100%',
            backgroundColor: theme.palette.grey[800],
            borderRadius: '1rem',
            overflow: 'hidden',
          })}
        >
          {fetchedCityList?.map((city, idx) => (
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
              {idx < fetchedCityList?.length - 1 && <Divider />}
            </Fragment>
          ))}
        </List>
      )}
    </SearchContainer>
  );
}
export default searchInput;
