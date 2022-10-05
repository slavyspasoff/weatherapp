import MainCard from './MainCard';
import MainContainer from './MainContainer';
import { Box, alpha, Typography } from '@mui/material';
import {} from '../styles/Index.styles';
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
          {selectedCity.name && (
            <>
              <Typography
                variant='body1'
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  marginRight: '1ch',
                })}
              >
                {selectedCity?.name}, {selectedCity?.country}
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
    </MainContainer>
  );
};
export default Index;
