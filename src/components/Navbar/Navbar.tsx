import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';

import SearchBox from '../SearchBar/SearchBox';

import { ctx } from '../Context/Provider.context';

interface Props {}
function Navbar({}: Props) {
  const { toggleTheme } = useContext(ctx);
  const navigate = useNavigate();

  return (
    <AppBar
      enableColorOnDark
      sx={(theme) => ({
        height: '10vh',
        backgroundColor: 'rgb(255, 72, 0)',
        display: 'grid',
        placeItems: 'center',
      })}
    >
      {/* <Box
        sx={(theme) => ({
          position: 'relative',
          width: '80%',
          maxWidth: '600px',    
          paddingInline: theme.spacing(4),
          backgroundColor: 'rgba(255,255,255,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'text',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.8)',
          },
        })}
        onClick={handleSearchBoxClick}
      >
        <SearchInput value={searchInputValue} setValue={setSearchInputValue} inputRef={inputRef} />
        {isListShown && (
          <ItemList
            cities={fetchedCitiesList}
            setCity={handleCitySelection}
            listOffset={'3.25rem'}
          />
        )}
      </Box> */}
      <SearchBox containerStyles={{ height: '2.75em', borderRadius: 12 }} listOffset={'3rem'} />
    </AppBar>
  );
}
export default Navbar;
