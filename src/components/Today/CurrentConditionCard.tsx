import { useContext } from 'react';
import { Box, alpha, Typography } from '@mui/material';
import { NorthWest } from '@mui/icons-material';

import CardBack from '../../styles/Card/CardBack.styles';
import { ctx } from '../Context/Provider.context';
import { getFullCountryName, getCurrentTime, formatTempUnit } from '../../helpers/IntlHelpers';

interface Props {}

function CurrentConditionCard({}: Props) {
   const { data, selectedCity, unit } = useContext(ctx);

   //TODO: Add render error or navigate to index
   if (!selectedCity || !data) return <div>No data</div>;

   const { name, country } = selectedCity;
   const { feels_like, temp } = data.current;
   const currentWeather = data.current.weather[0];

   return (
      <CardBack sx={{ backgroundColor: 'rgba(129, 112, 161, 1)', height: 300 }}>
         <section>
            <Box
               sx={(theme) => ({
                  backgroundColor: alpha(theme.palette.common.black, 0.5),
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
                     color: 'white',
                  })}
               >
                  {name}
                  {', '}
                  {getFullCountryName(country)}{' '}
               </Typography>
               <Typography
                  component='span'
                  sx={(theme) => ({
                     fontSize: '1rem',
                     color: 'white',
                  })}
               >
                  ( {getCurrentTime()} )
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
                     <Typography
                        component='span'
                        sx={(theme) => ({
                           color: 'white',
                           fontSize: '4rem',
                           fontWeight: theme.typography.fontWeightMedium,
                        })}
                     >
                        {formatTempUnit(temp, unit)}
                     </Typography>
                     <Typography
                        component='span'
                        sx={(theme) => ({
                           color: 'white',
                           fontWeight: theme.typography.fontWeightMedium,
                           textTransform: 'capitalize',
                        })}
                     >
                        {currentWeather.description}
                     </Typography>
                     <Typography
                        component='span'
                        sx={(theme) => ({
                           color: 'white',
                           fontWeight: theme.typography.fontWeightMedium,
                           textTransform: 'capitalize',
                        })}
                     >
                        feels like: {formatTempUnit(feels_like, unit)}
                     </Typography>
                  </Box>

                  <Box>
                     <img
                        src={`http://openweathermap.org/img/wn/${currentWeather.icon}@4x.png`}
                     ></img>
                  </Box>
               </Box>
            </Box>
         </section>
      </CardBack>
   );
}
export default CurrentConditionCard;
