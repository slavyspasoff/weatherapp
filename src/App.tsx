import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { type WeatherData } from './types/WeatherDataType';
import { type CitiesData } from './types/CitiesDataType';
import fetchData from './helpers/fetchData';
import Navbar from './components/Navbar';
import Main from './components/Main';
import KEY from '../API_KEY';

const BASEURL = 'https://api.openweathermap.org';
interface Location {
  lat: number;
  lon: number;
}

function App() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark');
  const [data, setData] = useState<WeatherData>({} as WeatherData);
  const [location, setLocation] = useState<Location>({} as Location);
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
    if (location.lat && location.lon)
      (async () => {
        try {
          setData(
            await fetchData(
              `${BASEURL}/data/2.5/forecast?lat=${location?.lat}&lon=${location?.lon}&appid=${KEY}`
            )
          );
          //TODO: ADD CUSTOM ERROR
        } catch (err) {}
      })();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Navbar
        toggleTheme={toggleTheme}
        fetchedCityList={fetchedCityList}
        setFetchedCityList={setFetchedCityList}
      />
      <Main data={data} />
    </ThemeProvider>
  );
}

export default App;
