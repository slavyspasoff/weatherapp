import { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import { type WeatherData } from './types/Weather.type';
import {
  type UnitType,
  type LocationCoord,
  type CitiesData,
  type CityData,
} from './types/Global.type';
import useTheme from './hooks/useTheme';
import useBrowserGeolocation from './hooks/useBrowserGeolocation';
import useFetchWeatherData from './hooks/useFetchWeatherData';
import Index from './components/Index';
import IndexSearch from './components/IndexSeach';
import theme from './theme';
import Navbar from './components/Navbar';

function App() {
  const [unit, setUnit] = useState<UnitType>('metric');
  const [data, setData] = useState<WeatherData | null>(null);
  const [locationCoord, setLocationCoord] = useState<LocationCoord | null>(
    null
  );
  const [selectedCity, setSelectedCity] = useState<CityData | null>(null);
  const [fetchedCityList, setFetchedCityList] = useState<CitiesData | null>(
    null
  );

  const [paletteMode, setPaletteMode, toggleTheme] = useTheme();
  useBrowserGeolocation({ setLocationCoord });
  useFetchWeatherData({ locationCoord, unit, setData, setSelectedCity });

  return (
    <ThemeProvider theme={theme(paletteMode)}>
      <CssBaseline />

      {/* <Navbar
        toggleTheme={toggleTheme}
        fetchedCityList={fetchedCityList}
        setFetchedCityList={setFetchedCityList}
        setLocationCoord={setLocationCoord}
        unit={unit}
        setUnit={setUnit}
        setSelectedCity={setSelectedCity}
      /> */}
      <Routes>
        <Route path='/' element={<IndexSearch />} />
        <Route
          path='/weather/today'
          element={
            <Index data={data} selectedCity={selectedCity} unit={unit} />
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
