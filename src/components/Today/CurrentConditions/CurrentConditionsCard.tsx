import { useContext } from 'react';
import { alpha, Box, Typography, useMediaQuery } from '@mui/material';

import { formatTempUnit, getCurrentTime, getFullCountryName } from '../../../helpers/IntlHelpers';
import CardBack from '../../../styles/Card/CardBack.styles';
import { ctx } from '../../Context/Provider.context';

interface Props {}

function CurrentConditionCard({}: Props) {
   const { data, selectedCity, unit } = useContext(ctx);
   //TODO: Add render error or navigate to index
   if (!selectedCity || !data) return <div>No data</div>;
   const isScreenSmall = useMediaQuery('(max-width:600px)');
   const { name, country } = selectedCity;
   const { feels_like, temp } = data.current;
   const currentWeather = data.current.weather[0];

   return (
      <CardBack component='section'>
         <Box
            sx={(theme) => ({
               backgroundColor: alpha(theme.palette.background.default, 0.4),
               padding: theme.spacing(1.5, 2.5),
               display: 'flex',
               justifyContent: 'flex-start',
               alignItems: 'flex-end',
               gap: 1,
            })}
         >
            <Typography
               component='h1'
               sx={(theme) => ({
                  fontSize: '1.25rem',
                  fontWeight: theme.typography.fontWeightBold,
               })}
            >
               {name}
               <Box component='span'>
                  {', '}
                  {getFullCountryName(country)}{' '}
               </Box>
            </Typography>
            <Typography
               component='span'
               sx={(theme) => ({
                  fontSize: '1rem',

                  // display: 'none',
                  [theme.breakpoints.up('sm')]: { display: 'inline' },
               })}
            >
               ( {getCurrentTime(isScreenSmall ? 'long' : 'full')} )
            </Typography>
         </Box>
         <Box
            sx={(theme) => ({
               padding: theme.spacing(1, 2),
            })}
         >
            <Box
               sx={(theme) => ({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingInline: theme.spacing(4),
               })}
            >
               <Box
                  sx={(theme) => ({
                     display: 'flex',
                     flexDirection: 'column',
                  })}
               >
                  {/**TODO: Make a component, remove repetition */}
                  <Typography
                     component='span'
                     sx={(theme) => ({
                        fontSize: 'clamp(2.5rem,5vw,4rem)',
                        fontWeight: theme.typography.fontWeightMedium,
                     })}
                  >
                     {formatTempUnit(temp, unit)}
                  </Typography>
                  <Typography
                     component='span'
                     sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightMedium,
                        textTransform: 'capitalize',
                     })}
                  >
                     {currentWeather.description}
                  </Typography>
                  <Typography
                     component='span'
                     noWrap
                     sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightMedium,
                        textTransform: 'capitalize',
                     })}
                  >
                     feels like: {formatTempUnit(feels_like, unit)}
                  </Typography>
               </Box>
               {/**TODO: Add alt tag to images */}
               <Box
                  sx={{
                     width: 'clamp(7.25rem,15vw,12.5rem)',
                  }}
               >
                  <img
                     src={`http://openweathermap.org/img/wn/${currentWeather.icon}@4x.png`}
                     style={{ width: '100%' }}
                     alt='weather condition icon'
                  ></img>
               </Box>
            </Box>
         </Box>
      </CardBack>
   );
}
export default CurrentConditionCard;
