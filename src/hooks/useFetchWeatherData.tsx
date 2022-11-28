import { useEffect } from 'react';

import {
  type LocationCoord,
  type UnitType,
  type CityData,
} from '../types/Global.type';
import { type WeatherData } from '../types/Weather.type';
import fetchData from '../helpers/fetchData';
import KEY from '../../API_KEY';

const BASEURL = 'https://api.openweathermap.org';
/*Add lang prop to the url query to get the */

interface Props {
  locationCoord: LocationCoord;
  unit: UnitType;
  setData: React.Dispatch<React.SetStateAction<WeatherData>>;
  setSelectedCity: React.Dispatch<React.SetStateAction<CityData>>;
}

function useFetchWeatherData({
  locationCoord,
  unit,
  setData,
  setSelectedCity,
}: Props) {
  useEffect(() => {
    if (locationCoord.lat && locationCoord.lon) {
      (async () => {
        try {
          const fetchedWeatherData = await fetchData(
            `${BASEURL}/data/2.5/onecall?lat=${locationCoord?.lat}&lon=${locationCoord?.lon}&units=${unit}&appid=${KEY}`
          );
          setData(fetchedWeatherData as WeatherData);
          console.log(fetchedWeatherData);
          const fetchedCityData = await fetchData(
            `${BASEURL}/geo/1.0/reverse?lat=${locationCoord?.lat}&lon=${locationCoord?.lon}&limit=1&appid=${KEY}`
          );
          setSelectedCity(fetchedCityData[0] as CityData);
          //TODO: ADD CUSTOM ERROR
        } catch (err) {}
      })();
    }
  }, [locationCoord, unit]);
  return null;
}
export default useFetchWeatherData;
