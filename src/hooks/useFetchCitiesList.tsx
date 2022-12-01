import { useContext, useEffect, type Dispatch, type SetStateAction } from 'react';
import fetchData from '../helpers/fetchData';
import { ctx } from '../components/Context/Provider.context';
import { type CityData } from '../types/global.types';

interface Props {
  searchInputValue: string;
  setFetchedCitiesList: Dispatch<SetStateAction<CityData[] | null>>;
  lastSearchedCity: string;
  setLastSearchedCity: Dispatch<SetStateAction<string>>;
}
//TODO:Split this code into smaller pieces, maybe?
function useFetchCitiesList({
  searchInputValue,
  setFetchedCitiesList,
  lastSearchedCity,
  setLastSearchedCity,
}: Props): void {
  const { KEY, BASEURL } = useContext(ctx);

  useEffect(() => {
    let timeout: number | null = null;
    const controller = new AbortController();
    const signal = controller.signal;

    if (searchInputValue.length > 2 && searchInputValue !== lastSearchedCity) {
      timeout = setTimeout(async () => {
        try {
          const data = await fetchData(
            `${BASEURL}/geo/1.0/direct?q=${searchInputValue}&limit=5&appid=${KEY}`,
            { signal }
          );
          setFetchedCitiesList(data as CityData[]);
          console.log(data);
          //TODO: ADD CUSTOM ERROR
          setLastSearchedCity(searchInputValue);
        } catch (err) {}
      }, 2000);
    }
    return () => {
      timeout && clearTimeout(timeout);
      controller.abort();
    };
  }, [searchInputValue]);

  return;
}

export default useFetchCitiesList;
