import {
  type ChangeEventHandler,
  type Dispatch,
  type SetStateAction,
} from 'react';

import { SearchInput } from '../styles/SearchInput.styles';

interface Props {
  searchInputValue: string;
  setSearchInputValue: Dispatch<SetStateAction<string>>;
}
function searchInput({ searchInputValue, setSearchInputValue }: Props) {
  const handleSearchInputValueChange: ChangeEventHandler<HTMLInputElement> = (
    evt
  ) => {
    setSearchInputValue(evt.target.value);
  };

  return (
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
  );
}
export default searchInput;
