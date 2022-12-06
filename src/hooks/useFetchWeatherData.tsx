import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ctx } from '../components/Context/Provider.context';
import {
  type LocationCoord,
  type UnitType,
  type CityData,
  type WeatherData,
} from '../types/global.types';
import fetchData from '../helpers/fetchData';

/*Add lang prop to the url query to get the */

interface Props {
  locationCoord: LocationCoord | null;
  unit: UnitType;
  setData: React.Dispatch<React.SetStateAction<WeatherData | null>>;
  setSelectedCity: React.Dispatch<React.SetStateAction<CityData | null>>;
}

function useFetchWeatherData({ locationCoord, unit, setData, setSelectedCity }: Props): void {
  const navigate = useNavigate();
  const { KEY, BASEURL } = useContext(ctx);
  useEffect(() => {
    if (locationCoord?.lat && locationCoord?.lon) {
      (async () => {
        try {
          const fetchedWeatherData = await fetchData(
            `${BASEURL}/data/2.5/onecall?lat=${locationCoord?.lat}&lon=${locationCoord?.lon}&units=${unit}&appid=${KEY}`
          );
          setData(fetchedWeatherData as WeatherData);
          const fetchedCityData = await fetchData(
            `${BASEURL}/geo/1.0/reverse?lat=${locationCoord?.lat}&lon=${locationCoord?.lon}&limit=1&appid=${KEY}`
          );
          setSelectedCity(fetchedCityData[0] as CityData);
          //TODO: Move navigate outside of this useEffect/Hook
          navigate('/weather/today', { replace: true });
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }, [locationCoord, unit]);
}
export default useFetchWeatherData;
