import MainCard from './MainCard';
import MainContainer from './MainContainer';
import { Root } from '../styles/Main.styles';
interface Props {}

const Main = (props: Props) => {
  return (
    <Root>
      <MainContainer>
        <MainCard></MainCard>
      </MainContainer>
      <MainContainer>
        <MainCard></MainCard>
      </MainContainer>
    </Root>
  );
};
export default Main;
