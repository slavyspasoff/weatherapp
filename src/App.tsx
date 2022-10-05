import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { type WeatherData } from './types/WeatherDataType';
import { type CitiesData, type CityData } from './types/CitiesDataType';
import { type UnitType, type LocationCoord } from './types/GlobalTypes';
import fetchData from './helpers/fetchData';
import getBrowserCoordinates from './helpers/getBrowserCoordinates';
import Navbar from './components/Navbar';
import Main from './components/Main';
import KEY from '../API_KEY';

const BASEURL = 'https://api.openweathermap.org';

function App() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark');
  const [tempUnit, setTempUnit] = useState<UnitType>('metric');
  const [data, setData] = useState<WeatherData>({} as WeatherData);
  const [locationCoord, setLocationCoord] = useState<LocationCoord>({} as LocationCoord);
  const [selectedCity, setSelectedCity] = useState<CityData>({} as CityData);
  const [fetchedCityList, setFetchedCityList] = useState<CitiesData>([] as CitiesData);

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  useEffect(() => {
    (async () => {
      try {
        const { coords } = (await getBrowserCoordinates()) as GeolocationPosition;
        setLocationCoord({ lat: coords.latitude, lon: coords.longitude });
        //TODO: Add error handler
      } catch (err) {}
    })();
  }, []);

  useEffect(() => {
    if (locationCoord.lat && locationCoord.lon)
      (async () => {
        try {
          const fetchedWeatherData = await fetchData(
            `${BASEURL}/data/2.5/onecall?lat=${locationCoord?.lat}&lon=${locationCoord?.lon}&units=${tempUnit}&appid=${KEY}`
          );
          setData(fetchedWeatherData as WeatherData);
          console.log(fetchedWeatherData);
          const fetchedCityData = await fetchData(
            `http://api.openweathermap.org/geo/1.0/reverse?lat=${locationCoord?.lat}&lon=${locationCoord?.lon}&limit=1&appid=${KEY}`
          );
          setSelectedCity(fetchedCityData[0] as CityData);
          //TODO: ADD CUSTOM ERROR
        } catch (err) {}
      })();
  }, [locationCoord, tempUnit]);

  return (
    <ThemeProvider theme={theme}>
      <Navbar
        toggleTheme={toggleTheme}
        fetchedCityList={fetchedCityList}
        setFetchedCityList={setFetchedCityList}
        setLocationCoord={setLocationCoord}
        tempUnit={tempUnit}
        setTempUnit={setTempUnit}
        setSelectedCity={setSelectedCity}
      />
      <Main data={data} selectedCity={selectedCity} tempUnit={tempUnit} />
    </ThemeProvider>
  );
}

export default App;
