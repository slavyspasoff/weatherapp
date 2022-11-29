import { Fragment, type Dispatch, type SetStateAction } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { type UnitType, type CityData } from '../types/Global.type';
import { type LocationCoord } from '../types/Global.type';

interface Props {
  toggleTheme: () => void;
  unit: UnitType;
  fetchedCityList: CityData[] | null;
  setFetchedCityList: Dispatch<SetStateAction<CityData[] | null>>;
  setLocationCoord: Dispatch<SetStateAction<LocationCoord | null>>;
  setUnit: Dispatch<SetStateAction<UnitType>>;
  setSelectedCity: Dispatch<SetStateAction<CityData | null>>;
}

function Weather({
  toggleTheme,
  fetchedCityList,
  setFetchedCityList,
  setLocationCoord,
  unit,
  setUnit,
  setSelectedCity,
}: Props) {
  return (
    <Fragment>
      <Navbar
        toggleTheme={toggleTheme}
        fetchedCityList={fetchedCityList}
        setFetchedCityList={setFetchedCityList}
        setLocationCoord={setLocationCoord}
        unit={unit}
        setUnit={setUnit}
        setSelectedCity={setSelectedCity}
      />
      <Outlet />
    </Fragment>
  );
}
export default Weather;
