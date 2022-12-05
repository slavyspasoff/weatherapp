import { useState, useRef, useContext, type MouseEventHandler } from 'react';
import Box from '@mui/material/Box';

import { type CityData } from '../../types/global.types';
import { ctx } from '../Context/Provider.context';
import useFetchCitiesList from '../../hooks/useFetchCitiesList';

import SearchInput from './SearchInput';
import ItemList from './ItemList';

interface Props {}
// TODO: DUPLICATION WITH NAVBAR SEARCH BAR MOVE TO A HELPER OR SINGLE ELEMENT
function SearchBox({}: Props) {
  const { setSelectedCity, setLocationCoord } = useContext(ctx);
  const [fetchedCitiesList, setFetchedCitiesList] = useState<CityData[] | null>(null);
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [lastSearchedCity, setLastSearchedCity] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);

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
    <Box
      sx={(theme) => ({
        position: 'relative',
        width: '80%',
        maxWidth: '600px',
        height: '6.5vh',
        borderRadius: '1em',
        paddingInline: theme.spacing(4),
        backgroundColor: 'rgba(255,255,255,0.7)',
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
        <ItemList cities={fetchedCitiesList} setCity={handleCitySelection} listOffset={'6.75vh'} />
      )}
    </Box>
  );
}
export default SearchBox;
