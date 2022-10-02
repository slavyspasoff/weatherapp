import {
  Root,
  LeftMainContainer,
  RightMainContainer,
  MainCard,
} from '../styles/Main.styles';
interface Props {}
const Main = (props: Props) => {
  return (
    <Root>
      <LeftMainContainer>
        <MainCard></MainCard>
      </LeftMainContainer>
      <RightMainContainer>
        <MainCard></MainCard>
      </RightMainContainer>
    </Root>
  );
};
export default Main;
