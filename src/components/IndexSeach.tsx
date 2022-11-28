import { Root, SearchContainer } from '../styles/IndexSearch.styles';
import { Box, InputBase } from '@mui/material';
interface Props {}
const IndexSearch = (props: Props) => {
  return (
    <Root>
      <SearchContainer>
        <InputBase
          inputProps={{ 'aria-label': 'search' }}
          placeholder='Search City or Zip Code'
          sx={(theme) => ({
            fontSize: 'clamp(1.25rem,5vw,2rem)',
            color: 'black',
          })}
        ></InputBase>
      </SearchContainer>
    </Root>
  );
};

export default IndexSearch;
