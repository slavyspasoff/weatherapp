import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import Homepage from './components/Homepage/Homepage';
import Weather from './components/Weather/Weather';
import Today from './components/Today/Today';
interface Props {}

function App({}: Props) {
  return (
    <Fragment>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='weather' element={<Weather />}>
          <Route path='today' element={<Today />} />
        </Route>
      </Routes>
    </Fragment>
  );
}
export default App;
