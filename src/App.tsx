import { useEffect, useState } from 'react';
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
import Index from './components/Index';
import IndexSearch from './components/IndexSeach';
import theme from './theme';
import fetchData from './helpers/fetchData';
import getBrowserCoordinates from './helpers/getBrowserCoordinates';
import Navbar from './components/Navbar';
import KEY from '../API_KEY';

const BASEURL = 'https://api.openweathermap.org';

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

  useEffect(() => {
    (async () => {
      try {
        const { coords } =
          (await getBrowserCoordinates()) as GeolocationPosition;
        setLocationCoord({ lat: coords.latitude, lon: coords.longitude });
        //TODO: Add error handler
      } catch (err) {}
    })();
  }, []);

  {
    /*Add lang prop to the url query to get the */
  }
  useEffect(() => {
    if (locationCoord.lat && locationCoord.lon)
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
  }, [locationCoord, unit]);

  return (
    <ThemeProvider theme={theme(paletteMode)}>
      <CssBaseline />
      <Navbar
        toggleTheme={toggleTheme}
        fetchedCityList={fetchedCityList}
        setFetchedCityList={setFetchedCityList}
        setLocationCoord={setLocationCoord}
        unit={unit}
        setUnit={setUnit}
        setSelectedCity={setSelectedCity}
      />

      <Routes>
        <Route
          path='/'
          element={
            <Index data={data} selectedCity={selectedCity} unit={unit} />
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
