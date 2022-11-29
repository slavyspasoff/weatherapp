import { useContext } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { ctx } from './components/Global.context';
import useBrowserGeolocation from './hooks/useBrowserGeolocation';
import useFetchWeatherData from './hooks/useFetchWeatherData';
import Today from './components/Today';
import Index from './components/Index';
import theme from './theme';
import Weather from './components/Weather';

function App() {
  const { setLocationCoord, locationCoord, unit, setData, setSelectedCity, paletteMode } =
    useContext(ctx);

  useBrowserGeolocation({ setLocationCoord });
  useFetchWeatherData({ locationCoord, unit, setData, setSelectedCity });

  return (
    <ThemeProvider theme={theme(paletteMode)}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='weather' element={<Weather />}>
          <Route path='today' element={<Today />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
