import { Root } from '../styles/Index.styles';
import SearchBar from '../components/SearchBar';

interface Props {}
function Index({}: Props) {
  return (
    <Root>
      <SearchBar
        sx={{
          width: '80%',
          maxWidth: '600px',
          height: '7.5vh',
          borderRadius: '3em',
          fontSize: 'clamp(1.25rem,5vw,2rem)',
        }}
      />
    </Root>
  );
}
export default Index;
