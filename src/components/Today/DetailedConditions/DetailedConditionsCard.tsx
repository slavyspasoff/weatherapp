import {
   Air,
   CompressOutlined,
   InvertColorsSharp,
   OpacityOutlined,
   VisibilitySharp,
   WbSunnyOutlined,
} from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';

import getWindDirection, { getWindDirectionIcon } from '../../../helpers/getWindDirection';
import {
   formatTempUnit,
   formatWindSpeedUnit,
   getFullCountryName,
} from '../../../helpers/IntlHelpers';
import CardBack from '../../../styles/Card/CardBack.styles';
import { ctx } from '../../Context/Provider.context';
import Detail from './DetailItem';

interface Props {}

function DetailedConditionsCard({}: Props) {
   const { data, selectedCity, unit } = useContext(ctx);

   //TODO: Add error
   if (!selectedCity || !data) return <div>No data</div>;

   const { name, country } = selectedCity;
   const { humidity, pressure, dew_point, visibility, uvi, wind_deg, wind_gust, wind_speed } =
      data.current;

   const windDirection = getWindDirection(wind_deg);

   return (
      <CardBack>
         <Box component='section'>
            <Box sx={(theme) => ({ padding: theme.spacing(2, 3) })}>
               <Typography variant='h6' component={'h2'}>
                  Weather today in {name}, {getFullCountryName(country)}
               </Typography>
            </Box>
            <Box
               sx={(theme) => ({
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  [theme.breakpoints.up('md')]: {
                     gridTemplateColumns: 'repeat(2,1fr)',
                  },
                  paddingBlock: theme.spacing(4, 6),
                  paddingInline: theme.spacing(2),
               })}
            >
               {/*TODO: Add custom styled components, fix the CSS  !DONE*/}
               <Detail Icon={OpacityOutlined} description={'Humidity'} value={`${humidity}%`} />
               <Detail Icon={CompressOutlined} description={'Pressure'} value={`${pressure} hPa`} />
               <Detail
                  Icon={Air}
                  description={'Wind'}
                  value={`${formatWindSpeedUnit(wind_speed, unit)}`}
                  WindDirection={getWindDirectionIcon(windDirection)}
               />

               <Detail Icon={WbSunnyOutlined} description={'UV Index'} value={`${uvi} of 10`} />
               <Detail
                  Icon={InvertColorsSharp}
                  description={'Dew Point'}
                  value={`${formatTempUnit(dew_point, unit)}`}
               />
               <Detail Icon={VisibilitySharp} description={'Visibility'} value={`${visibility}`} />
            </Box>
         </Box>
      </CardBack>
   );
}
export default DetailedConditionsCard;
