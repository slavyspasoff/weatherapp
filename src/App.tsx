import { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import {
  type UnitType,
  type LocationCoord,
  type CityData,
  type WeatherData,
} from './types/Global.type';
import useTheme from './hooks/useTheme';
import useBrowserGeolocation from './hooks/useBrowserGeolocation';
import useFetchWeatherData from './hooks/useFetchWeatherData';
import Today from './components/Today';
import IndexSearch from './components/IndexSeach';
import theme from './theme';
import Weather from './components/Weather';

function App() {
  const [unit, setUnit] = useState<UnitType>('metric');
  const [data, setData] = useState<WeatherData | null>(null);
  const [locationCoord, setLocationCoord] = useState<LocationCoord | null>(null);
  const [selectedCity, setSelectedCity] = useState<CityData | null>(null);
  const [fetchedCityList, setFetchedCityList] = useState<CityData[] | null>(null);
  const [paletteMode, setPaletteMode, toggleTheme] = useTheme();

  useBrowserGeolocation({ setLocationCoord });
  useFetchWeatherData({ locationCoord, unit, setData, setSelectedCity });

  return (
    <ThemeProvider theme={theme(paletteMode)}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<IndexSearch />} />
        <Route
          path='weather'
          element={
            <Weather
              toggleTheme={toggleTheme}
              fetchedCityList={fetchedCityList}
              setFetchedCityList={setFetchedCityList}
              setLocationCoord={setLocationCoord}
              unit={unit}
              setUnit={setUnit}
              setSelectedCity={setSelectedCity}
            />
          }
        >
          <Route
            path='today'
            element={<Today data={data} selectedCity={selectedCity} unit={unit} />}
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
