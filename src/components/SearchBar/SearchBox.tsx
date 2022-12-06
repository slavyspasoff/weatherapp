import { useState, useRef, useContext, type MouseEventHandler } from 'react';
import Box from '@mui/material/Box';

import { type CityData } from '../../types/global.types';
import { ctx } from '../Context/Provider.context';
import useFetchCitiesList from '../../hooks/useFetchCitiesList';

import SearchInput from './SearchInput';
import ItemList from './ItemList';

interface Props {
  listOffset: string;
  //TODO: FIND THE CORRECT TYPE (it's not SxProps) so Typescript chills out.
  containerStyles: object;
  isFocusedOnLoad?: boolean | undefined;
  fontSize: string;
}
// TODO: DUPLICATION WITH NAVBAR SEARCH BAR MOVE TO A HELPER OR SINGLE ELEMENT
function SearchBox({ containerStyles, listOffset, fontSize, isFocusedOnLoad = false }: Props) {
  const { setSelectedCity, setLocationCoord } = useContext(ctx);
  const [fetchedCitiesList, setFetchedCitiesList] = useState<CityData[] | null>(null);
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [lastSearchedCity, setLastSearchedCity] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleCitySelection =
    ({
      country,
      lat,
      local_names,
      lon,
      name,
      state,
    }: CityData): MouseEventHandler<HTMLDivElement> =>
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
        paddingInline: theme.spacing(4),
        backgroundColor: 'rgba(255,255,255,0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'text',
        ...containerStyles,
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.8)',
        },
      })}
      onClick={handleSearchBoxClick}
    >
      <SearchInput
        value={searchInputValue}
        setValue={setSearchInputValue}
        inputRef={inputRef}
        isFocusedOnLoad={isFocusedOnLoad}
        fontSize={fontSize}
      />
      {isListShown && (
        <ItemList
          cities={fetchedCitiesList}
          setCity={handleCitySelection}
          listOffset={listOffset}
        />
      )}
    </Box>
  );
}
export default SearchBox;
