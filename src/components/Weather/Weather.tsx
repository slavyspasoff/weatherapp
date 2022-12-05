import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

interface Props {}
function Weather({}: Props) {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
}
export default Weather;
