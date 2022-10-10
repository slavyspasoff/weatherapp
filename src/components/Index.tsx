import MainCard from './MainCard';
import { Box, Typography, Grid } from '@mui/material';
import { alpha } from '@mui/material/styles';
import GridContainer from './GridContainer';
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
const minutes = timeNow.getMinutes();
const hours = timeNow.getHours();
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

  const getActive = () => (Math.floor(hours / 6) === 3 ? 0 : Math.floor(hours / 6) - 1);

  let forecastCards: JSX.Element[] = [];
  if (data.daily) {
    const todayFeelsLike = data.daily[0].feels_like;
    const timeOfTheDay = ['morn', 'day', 'eve', 'night'] as const;
    const timeOfTheDayText = ['morning', 'afternoon', 'evening', 'overnight'];
    forecastCards = timeOfTheDay.map((key, idx) => (
      <TodaysForecastCard
        temp={Math.round(todayFeelsLike[key])}
        key={key}
        alreadyPassed={Math.floor(hours / 6) > idx}
        currentActive={getActive() === idx}
        text={timeOfTheDayText[idx]}
      />
    ));
  }

  return (
    <GridContainer>
      <Grid item xs={12} md={8}>
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
                  As of {String(hours)}:
                  {String(minutes).length === 1 ? `0${minutes}` : minutes} ({timezone})
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
            <Typography
              paragraph
              sx={(theme) => ({ paddingInline: '2rem', fontSize: '1.15rem' })}
            >
              Today's Forecast for {selectedCity.name},{' '}
              {getFullCountryName(selectedCity?.country)}
            </Typography>
            <Box
              sx={(theme) => ({
                height: '80%',
                display: 'grid',
                textAlign: 'center',
                paddingTop: '1rem',
                gridTemplateColumns: 'repeat(4,1fr)',
              })}
            >
              {forecastCards}
            </Box>
          </MainCard>
        )}
      </Grid>
      <Grid item xs={12} md={4}></Grid>
    </GridContainer>
  );
};
export default Index;
