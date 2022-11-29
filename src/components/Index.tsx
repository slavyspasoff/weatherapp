import { Root } from '../styles/Index.styles';
import SearchInput from '../components/SearchInput';
import { type Dispatch, type SetStateAction } from 'react';
import { type CityData, type LocationCoord } from '../types/Global.type';

interface Props {
  fetchedCityList: CityData[] | null;
  setFetchedCityList: Dispatch<SetStateAction<CityData[] | null>>;
  setSelectedCity: Dispatch<SetStateAction<CityData | null>>;
  setLocationCoord: Dispatch<SetStateAction<LocationCoord | null>>;
}
function Index({
  setFetchedCityList,
  fetchedCityList,
  setSelectedCity,
  setLocationCoord,
}: Props) {
  return (
    <Root>
      <SearchInput
        setFetchedCityList={setFetchedCityList}
        fetchedCityList={fetchedCityList}
        setSelectedCity={setSelectedCity}
        setLocationCoord={setLocationCoord}
      />
    </Root>
  );
}
export default Index;
