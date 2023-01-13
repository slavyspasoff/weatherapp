import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { ctx } from './components/Context/Provider.context';
import useBrowserGeolocation from './hooks/useBrowserGeolocation';
import useFetchWeatherData from './hooks/useFetchWeatherData';
import theme from './theme';

import Homepage from './components/Homepage/Homepage';
import Weather from './components/Weather/Weather';
import Today from './components/Today/Today';
interface Props {}

function App({}: Props) {
   const { setLocationCoord, locationCoord, unit, setData, setSelectedCity, paletteMode } =
      useContext(ctx);
   useBrowserGeolocation({ setLocationCoord });
   useFetchWeatherData({ locationCoord, unit, setData, setSelectedCity });
   return (
      <ThemeProvider theme={theme(paletteMode)}>
         <CssBaseline />
         <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='weather' element={<Weather />}>
               <Route path='today' element={<Today />} />
            </Route>
         </Routes>
      </ThemeProvider>
   );
}
export default App;
