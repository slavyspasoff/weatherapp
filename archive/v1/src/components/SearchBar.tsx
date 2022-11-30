import { useState, useEffect, useContext, type MouseEventHandler } from 'react';
import { type SxProps } from '@mui/material';
import { ctx } from './Global.context';
import fetchData from '../helpers/fetchData';
import { SearchContainer } from '../styles/SearchBar.styles';
import { type CityData } from '../types/Global.type';
import SearchList from './SearchList';
import SearchInput from './SearchInput';

interface Props {
  sx: SxProps;
}
function SearchBar({ sx }: Props) {
  const { setSelectedCity, setLocationCoord, KEY, BASEURL } = useContext(ctx);
  const [fetchedCityList, setFetchedCityList] = useState<CityData[] | null>(null);
  const [searchInputValue, setSearchInputValue] = useState<string>('');

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
          const data = await fetchData(
            `${BASEURL}/geo/1.0/direct?q=${searchInputValue}&limit=5&appid=${KEY}`,
            { signal }
          );
          setFetchedCityList(data as CityData[]);
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
    <SearchContainer sx={sx}>
      <SearchInput searchInputValue={searchInputValue} setSearchInputValue={setSearchInputValue} />
      {fetchedCityList && fetchedCityList.length > 0 && searchInputValue.length > 0 && (
        <SearchList handleCitySelection={handleCitySelection} fetchedCityList={fetchedCityList} />
      )}
    </SearchContainer>
  );
}
export { SearchBar as default };
