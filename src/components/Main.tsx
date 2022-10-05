import Index from './Index';
import { Root } from '../styles/Main.styles';
import { Route, Routes } from 'react-router-dom';
import { type WeatherData } from '../types/WeatherDataType';
interface Props {
  data: WeatherData;
}

const Main = ({ data }: Props) => {
  return (
    <Root>
      <Routes>
        <Route path='/' element={<Index data={data} />} />
      </Routes>
    </Root>
  );
};
export default Main;
