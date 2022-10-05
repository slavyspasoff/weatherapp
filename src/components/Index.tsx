import MainCard from './MainCard';
import MainContainer from './MainContainer';
import { Box, alpha, Typography } from '@mui/material';
import {} from '../styles/Index.styles';
import { type WeatherData } from '../types/WeatherDataType';
import { type CityData } from '../types/CitiesDataType';
interface Props {
  data: WeatherData;
  selectedCity: CityData;
}

const BACKGROUND_IMG_URL = 'https://images.unsplash.com/photo-1483702721041-b23de737a886';

const Index = ({ data, selectedCity }: Props) => {
  return (
    <MainContainer>
      <MainCard backgroundImage={BACKGROUND_IMG_URL}>
        <Box
          sx={(theme) => ({
            height: '3rem',
            width: '100%',
            backgroundColor: alpha(theme.palette.common.black, 0.5),
            display: 'flex',
            alignItems: 'center',
            paddingInline: '1rem',
          })}
        >
          <Typography variant='body1' sx={{}}>
            {selectedCity?.name} {selectedCity?.country}
          </Typography>
        </Box>
        <Box>{Math.round(data?.current?.feels_like)} &#8451;</Box>
      </MainCard>
    </MainContainer>
  );
};
export default Index;
