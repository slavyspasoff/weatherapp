import { useState, useEffect, Fragment, type ChangeEventHandler } from 'react';
import { CircularProgress } from '@mui/material';
import fetchData from '../helpers/fetchData';
import { SearchContainer, SearchInput } from '../styles/SearchInput.styles';

const BASEURL = 'https://api.openweathermap.org';

interface Props {}
function searchInput({}: Props) {
  const [searchInputValue, setSearchInputValue] = useState<string>('');

  const handleSearchInputValueChange: ChangeEventHandler<HTMLInputElement> = (
    evt
  ) => {
    setSearchInputValue(evt.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput
        value={searchInputValue}
        onChange={handleSearchInputValueChange}
        inputProps={{ 'aria-label': 'search' }}
        placeholder='Search City or Zip Code'

        // endAdornment={
        //   <Fragment>
        //     <CircularProgress color='inherit' size={30} />
        //   </Fragment>
        // }
      ></SearchInput>
    </SearchContainer>
  );
}
export default searchInput;
