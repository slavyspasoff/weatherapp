import { Box, alpha, Typography } from '@mui/material';

import CardBack from '../../styles/Card/CardBack.styles';
import { type WeatherData, type CityData } from '../../types/global.types';
import { getFullCountryName, getCurrentTime } from '../../helpers/IntlHelpers';
import { NorthWest } from '@mui/icons-material';

interface Props {
   data: WeatherData | null;
   city: CityData | null;
}

function CurrentConditionCard({ data, city }: Props) {
   //TODO: Add error
   if (!city || !data) return <div>No data</div>;
   const { name, country } = city;

   return (
      <CardBack sx={{ backgroundColor: 'rgba(129, 112, 161, 1)' }}>
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
         </section>
      </CardBack>
   );
}
export default CurrentConditionCard;
