import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { type WeatherData } from './types/WeatherDataType';
import { type CitiesData } from './types/CitiesDataType';
import { type UnitType } from './types/GlobalTypes';
import fetchData from './helpers/fetchData';
import getBrowserCoordinates from './helpers/getBrowserCoordinates';
import Navbar from './components/Navbar';
import Main from './components/Main';
import KEY from '../API_KEY';

const BASEURL = 'https://api.openweathermap.org';
interface LocationCoord {
  lat: number;
  lon: number;
}

function App() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark');
  const [tempUnit, setTempUnit] = useState<UnitType>('c');
  const [data, setData] = useState<WeatherData>({} as WeatherData);
  const [locationCoord, setLocationCoord] = useState<LocationCoord>({} as LocationCoord);
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
        const { coords }: { coords: GeolocationCoordinates } =
          (await getBrowserCoordinates()) as GeolocationPosition;
        setLocationCoord({ lat: coords.latitude, lon: coords.longitude });
        //TODO: Add error handler
      } catch (err) {}
    })();
  }, []);
  useEffect(() => {
    if (locationCoord.lat && locationCoord.lon)
      (async () => {
        try {
          const d = await fetchData(
            `${BASEURL}/data/2.5/forecast?lat=${locationCoord?.lat}&lon=${locationCoord?.lon}&appid=${KEY}`
          );
          console.log(d);
          setData(d as WeatherData);
          //TODO: ADD CUSTOM ERROR
        } catch (err) {}
      })();
  }, [locationCoord]);
  return (
    <ThemeProvider theme={theme}>
      <Navbar
        toggleTheme={toggleTheme}
        fetchedCityList={fetchedCityList}
        setFetchedCityList={setFetchedCityList}
        setLocationCoord={setLocationCoord}
        tempUnit={tempUnit}
        setTempUnit={setTempUnit}
      />
      <Main data={data} />
    </ThemeProvider>
  );
}

export default App;
