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
  const [data, setData] = useState<WeatherData>({} as WeatherData);
  const [locationCoord, setLocationCoord] = useState<LocationCoord>(
    {} as LocationCoord
  );
  const [selectedCity, setSelectedCity] = useState<CityData>({} as CityData);
  const [fetchedCityList, setFetchedCityList] = useState<CitiesData>(
    [] as CitiesData
  );

  const [paletteMode, setPaletteMode, toggleTheme] = useTheme();
  useBrowserGeolocation({ setLocationCoord });
  useFetchWeatherData({ locationCoord, unit, setData, setSelectedCity });

  return (
    <ThemeProvider theme={theme(paletteMode)}>
      <CssBaseline />

      <Routes>
        <Route path='/' element={<IndexSearch />} />
        {/* <Navbar
          toggleTheme={toggleTheme}
          fetchedCityList={fetchedCityList}
          setFetchedCityList={setFetchedCityList}
          setLocationCoord={setLocationCoord}
          unit={unit}
          setUnit={setUnit}
          setSelectedCity={setSelectedCity}
        /> */}
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
