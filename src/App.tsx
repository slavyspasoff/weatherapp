import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { type WeatherData } from './types/DataType';
import fetchData from './helpers/fetchData';
import Navbar from './components/Navbar';
import Main from './components/Main';
import KEY from '../API_KEY';

const BASEURL = 'https://api.openweathermap.org';
const lat = 52.52;
const lon = 13.84;

function App() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark');
  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });
  const [data, setData] = useState<WeatherData>({} as WeatherData);
  useEffect(() => {
    (async () => {
      setData(
        await fetchData(`${BASEURL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${KEY}`)
      );
    })();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Navbar toggleTheme={toggleTheme} />
      <Main data={data} />
    </ThemeProvider>
  );
}

export default App;
