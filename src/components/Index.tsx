import MainCard from './MainCard';
import MainContainer from './MainContainer';
import { Box, alpha, Typography } from '@mui/material';
import {} from '../styles/Index.styles';
import { type WeatherData } from '../types/WeatherDataType';
interface Props {
  data: WeatherData;
}

const BACKGROUND_IMG_URL = 'https://images.unsplash.com/photo-1483702721041-b23de737a886';

const Index = ({ data }: Props) => {
  return (
    <MainContainer>
      {data.cod && (
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
              {data?.city?.name} {data?.city?.country} as of{' '}
              {new Date(data?.list[0]?.dt_txt).toString()}
            </Typography>
          </Box>
          <Box>{Math.round(data?.list[0]?.main?.temp - 273.15)} &#8451;</Box>
        </MainCard>
      )}
    </MainContainer>
  );
};
export default Index;
