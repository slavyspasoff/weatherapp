import { Root } from '../styles/Index.styles';
import SearchInput from '../components/SearchInput';

interface Props {}
function Index({}: Props) {
  return (
    <Root>
      <SearchInput />
    </Root>
  );
}
export default Index;
