import { type Dispatch, type SetStateAction } from 'react';
import { Box, Typography } from '@mui/material';
import { WbSunnyTwoTone } from '@mui/icons-material';
import { AppBar, Root, UnitContainer, Unit } from '../styles/Navbar.styles';
import { type UnitType, type CityData } from '../types/Global.type';
import { type LocationCoord } from '../types/Global.type';
import SearchInput from '../components/SearchInput';
interface Props {
  toggleTheme: () => void;
  unit: UnitType;
  fetchedCityList: CityData[] | null;
  setFetchedCityList: Dispatch<SetStateAction<CityData[] | null>>;
  setLocationCoord: Dispatch<SetStateAction<LocationCoord | null>>;
  setUnit: Dispatch<SetStateAction<UnitType>>;
  setSelectedCity: Dispatch<SetStateAction<CityData | null>>;
}

const BASEURL = 'https://api.openweathermap.org';

const Navbar = ({
  toggleTheme,

  unit,
  setUnit,
}: Props) => {
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
        <SearchInput />
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
};

export default Navbar;
