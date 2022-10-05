import Index from './Index';
import { Root } from '../styles/Main.styles';
import { Route, Routes } from 'react-router-dom';
import { type WeatherData } from '../types/WeatherDataType';
import { type CityData } from '../types/CitiesDataType';
interface Props {
  data: WeatherData;
  selectedCity: CityData;
  tempUnit: string;
}

const Main = ({ data, selectedCity, tempUnit }: Props) => {
  return (
    <Root>
      <Routes>
        <Route
          path='/'
          element={<Index data={data} selectedCity={selectedCity} tempUnit={tempUnit} />}
        />
      </Routes>
    </Root>
  );
};
export default Main;
