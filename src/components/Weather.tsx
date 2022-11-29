import { Fragment, type Dispatch, type SetStateAction } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { type UnitType, type CityData } from '../types/Global.type';
import { type LocationCoord } from '../types/Global.type';

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
