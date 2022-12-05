import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import ItemList from '../Homepage/ItemList';
import SearchInput from '../Homepage/SearchInput';
import { ctx } from '../Context/Provider.context';

import { useState, type Dispatch, type SetStateAction, type MouseEventHandler } from 'react';
import { type CityData } from '../../types/global.types';
import useFetchCitiesList from '../../hooks/useFetchCitiesList';

interface Props {}
function Navbar({}: Props) {
  const { toggleTheme } = useContext(ctx);
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const { setSelectedCity, setLocationCoord } = useContext(ctx);
  const [fetchedCitiesList, setFetchedCitiesList] = useState<CityData[] | null>(null);
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [lastSearchedCity, setLastSearchedCity] = useState<string>('');

  const handleCitySelection =
    ({ country, lat, local_names, lon, name, state }: CityData): MouseEventHandler =>
    (evt) => {
      setSearchInputValue('');
      setSelectedCity({ country, name, local_names, lat, lon, state });
      setLocationCoord({ lat, lon });
    };

  const handleSearchBoxClick: MouseEventHandler<HTMLDivElement> = (evt) => {
    inputRef.current?.focus();
  };

  useFetchCitiesList({
    searchInputValue,
    setFetchedCitiesList,
    lastSearchedCity,
    setLastSearchedCity,
  });
  const isListShown = lastSearchedCity === searchInputValue && fetchedCitiesList;
  return (
    <AppBar
      enableColorOnDark
      sx={(theme) => ({
        height: '10vh',
        backgroundColor: 'rgb(255, 72, 0)',
        display: 'grid',
        placeItems: 'center',
      })}
    >
      <Box
        sx={(theme) => ({
          position: 'relative',
          width: '80%',
          maxWidth: '600px',
          height: '3em',
          borderRadius: 12,
          paddingInline: theme.spacing(4),
          backgroundColor: 'rgba(255,255,255,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'text',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.8)',
          },
        })}
        onClick={handleSearchBoxClick}
      >
        <SearchInput value={searchInputValue} setValue={setSearchInputValue} inputRef={inputRef} />
        {isListShown && (
          <ItemList
            cities={fetchedCitiesList}
            setCity={handleCitySelection}
            listOffset={'3.25rem'}
          />
        )}
      </Box>
    </AppBar>
  );
}
export default Navbar;
