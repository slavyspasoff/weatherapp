import { Root } from '../styles/Main.styles';
interface Props {}
const Main = (props: Props) => {
  return (
    <Root>
      <div style={{ backgroundColor: 'red', width: '100%', height: '5rem' }}></div>
      <div style={{ backgroundColor: 'yellow', width: '100%', height: '5rem' }}></div>
      <div style={{ backgroundColor: 'green', width: '100%', height: '5rem' }}></div>
      <div style={{ backgroundColor: 'blue', width: '100%', height: '5rem' }}></div>
    </Root>
  );
};
export default Main;
