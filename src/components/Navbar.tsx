import { useContext, type Dispatch, type SetStateAction } from 'react';
import { Box, Typography } from '@mui/material';
import { WbSunnyTwoTone } from '@mui/icons-material';
import { ctx } from './Global.context';
import { AppBar, Root, UnitContainer, Unit } from '../styles/Navbar.styles';

import SearchBar from '../components/SearchBar';
interface Props {}

function Navbar({}: Props) {
  const { toggleTheme, unit, setUnit } = useContext(ctx);
  const toggleTempUnit = () => {
    setUnit((prev) => (prev === 'metric' ? 'imperial' : 'metric'));
  };

  return (
    <AppBar enableColorOnDark>
      <Root>
        <Box
          sx={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
          onClick={() => toggleTheme()}
        >
          <WbSunnyTwoTone />
          <Typography variant='overline' component='h2'>
            Weather App
          </Typography>
        </Box>
        <SearchBar sx={{ height: '60%', borderRadius: '3em' }} />
        <UnitContainer>
          <Unit selected={unit === 'metric'} onClick={toggleTempUnit}>
            &#8451;
          </Unit>
          <Unit selected={unit === 'imperial'} onClick={toggleTempUnit}>
            &#8457;
          </Unit>
        </UnitContainer>
      </Root>
    </AppBar>
  );
}

export default Navbar;
