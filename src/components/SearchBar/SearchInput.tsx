import {
  type ChangeEventHandler,
  type Dispatch,
  type SetStateAction,
  type MutableRefObject,
} from 'react';
import InputBase from '@mui/material/InputBase';

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  isFocusedOnLoad: boolean;
  fontSize: string;
}
function SearchInput({ value, setValue, inputRef, isFocusedOnLoad, fontSize }: Props) {
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setValue(evt.target.value);
  };

  return (
    <InputBase
      sx={{
        fontSize,
        color: 'black',
        height: '100%',
        width: '80%',
        '&>::placeholder': {
          textAlign: 'center',
        },
      }}
      inputRef={inputRef}
      value={value}
      onChange={handleInputChange}
      inputProps={{ 'aria-label': 'search' }}
      placeholder='Search City or Zip Code'
      autoFocus={isFocusedOnLoad}
    />
  );
}
export default SearchInput;
