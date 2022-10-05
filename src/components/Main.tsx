import Index from './Index';
import { Root } from '../styles/Main.styles';
import { Route, Routes } from 'react-router-dom';
import { type WeatherData } from '../types/WeatherDataType';
import { type CityData } from '../types/CitiesDataType';
interface Props {
  data: WeatherData;
  selectedCity: CityData;
}

const Main = ({ data, selectedCity }: Props) => {
  return (
    <Root>
      <Routes>
        <Route path='/' element={<Index data={data} selectedCity={selectedCity} />} />
      </Routes>
    </Root>
  );
};
export default Main;
