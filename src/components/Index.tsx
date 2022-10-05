import MainCard from './MainCard';
import MainContainer from './MainContainer';
import { Box, alpha, Typography, styled } from '@mui/material';
import {} from '../styles/Index.styles';
import { getFullCountryName } from '../helpers/IntlHelpers';
import TodaysForecastCard from './TodaysForecastCard';
import { type WeatherData } from '../types/WeatherDataType';
import { type CityData } from '../types/CitiesDataType';
interface Props {
  data: WeatherData;
  selectedCity: CityData;
  tempUnit: string;
}

const BACKGROUND_IMG_URL = 'https://images.unsplash.com/photo-1483702721041-b23de737a886';
const timeNow = new Date();
const minutes = String(timeNow.getMinutes());
const hours = String(timeNow.getHours());
const timezone = timeNow.toTimeString().replace(/[0-9()+:]/g, '');

const Index = ({ data, selectedCity, tempUnit }: Props) => {
  //TODO: Move Intl to helper function
  const locale = navigator.language || 'en-EN';
  const unit = tempUnit === 'metric' ? 'celsius' : 'fahrenheit';
  const formatTempUnit = (temp: number) =>
    new Intl.NumberFormat(locale, { style: 'unit', unit }).format(Math.round(temp));

  const tempCurrent = data.current ? formatTempUnit(data.current.temp) : '';
  const tempDay = data.current ? formatTempUnit(data.daily[0].temp.day) : '';
  const tempNight = data.current ? formatTempUnit(data.daily[0].temp.min) : '';

  return (
    <MainContainer>
      <MainCard
        sx={(theme) => ({
          backgroundImage: `url(${BACKGROUND_IMG_URL})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        })}
      >
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
          {/*TODO: Add a loader and a better conditional */}
          {selectedCity.name && data.current && (
            <>
              <Typography
                variant='body1'
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  marginRight: '1ch',
                })}
              >
                {selectedCity?.name}, {getFullCountryName(selectedCity?.country)}
              </Typography>
              <Typography variant='body1'>
                As of {hours}:{minutes.length === 1 ? `0${minutes}` : minutes} ({timezone}
                )
              </Typography>
            </>
          )}
        </Box>
        <Box sx={(theme) => ({ paddingInline: theme.spacing(3) })}>
          <Typography variant='h2' component='p'>
            {tempCurrent}
          </Typography>
          <Typography variant='h4' component='p'>
            {data.current && data.current.weather[0].description}
          </Typography>
          <Typography variant='subtitle1' component='p'>
            Day: {data.current && tempDay}
          </Typography>
          <Typography variant='subtitle1' component='p'>
            Night: {data.current && tempNight}
          </Typography>
        </Box>
      </MainCard>
      {/*TODO: Add a loader and a better conditional, maybe make it global */}
      {selectedCity.name && data.current && (
        <MainCard
          sx={{
            backgroundColor: 'white',
            color: 'black',
            paddingBlock: '1rem',
            paddingInline: '0.25rem',
            height: '16rem',
          }}
        >
          <Typography variant='h6' component='p'>
            Today's Forecast for {selectedCity.name},{' '}
            {getFullCountryName(selectedCity?.country)}
          </Typography>
          <Box
            sx={(theme) => ({
              backgroundColor: theme.palette.grey[300],
              height: '80%',
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
            })}
          >
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
          </Box>
        </MainCard>
      )}
    </MainContainer>
  );
};
export default Index;
