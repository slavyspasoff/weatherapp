import { useState, useContext, type MouseEventHandler } from 'react';
import Box from '@mui/material/Box';

import { type CityData } from '../../types/global.types';
import { ctx } from '../Context/Provider.context';
import useFetchCitiesList from '../../hooks/useFetchCitiesList';

import SearchInput from './SearchInput';
import ItemList from './ItemList';

interface Props {}

function SearchBox({}: Props) {
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
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.8)',
        },
      })}
    >
      <SearchInput value={searchInputValue} setValue={setSearchInputValue} />
      {isListShown && <ItemList cities={fetchedCitiesList} setCity={handleCitySelection} />}
    </Box>
  );
}
export default SearchBox;
