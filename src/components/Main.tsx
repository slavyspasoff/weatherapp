import Index from './Index';
import { Root } from '../styles/Main.styles';
import { Route, Routes } from 'react-router-dom';
interface Props {
  data: any;
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
