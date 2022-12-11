import { useContext } from 'react';
import { Box, Typography, styled, alpha } from '@mui/material';
import {
   North,
   NorthEast,
   East,
   SouthEast,
   South,
   SouthWest,
   West,
   NorthWest,
   OpacityOutlined,
   Air,
   CompressOutlined,
   WbSunnyOutlined,
   VisibilitySharp,
   InvertColorsSharp,
} from '@mui/icons-material';

import { ctx } from '../Context/Provider.context';
import CardBack from '../../styles/Card/CardBack.styles';
import { getFullCountryName, formatWindSpeedUnit, formatTempUnit } from '../../helpers/IntlHelpers';
import getWindDirection from '../../helpers/getWindDirection';

interface Props {}

const Detail = styled(Box)(({ theme }) => ({
   padding: theme.spacing(1, 2),
   borderBottom: `1px solid ${alpha('rgb(0,0,0)', 0.2)}`,
}));

const getWindDirectionIcon = (
   direction: string,
   size: 'small' | 'inherit' | 'medium' | 'large'
) => {
   if (direction === 'North') return <North fontSize={size} />;
   if (direction === 'NorthEast') return <NorthEast fontSize={size} />;
   if (direction === 'East') return <East fontSize={size} />;
   if (direction === 'SouthEast') return <SouthEast fontSize={size} />;
   if (direction === 'South') return <South fontSize={size} />;
   if (direction === 'SouthWest') return <SouthWest fontSize={size} />;
   if (direction === 'West') return <West fontSize={size} />;
   if (direction === 'NorthWest') return <NorthWest fontSize={size} />;
};

const getWindDirectionText = (direction: string) => {
   if (direction === 'North') return 'N';
   if (direction === 'NorthEast') return 'N/E';
   if (direction === 'East') return 'E';
   if (direction === 'SouthEast') return 'S/E';
   if (direction === 'South') return 'S';
   if (direction === 'SouthWest') return 'SW';
   if (direction === 'West') return 'W';
   if (direction === 'NorthWest') return 'NW';
};

function DetailedConditionsCard({}: Props) {
   const { data, selectedCity, unit } = useContext(ctx);

   //TODO: Add error
   if (!selectedCity || !data) return <div>No data</div>;

   const { name, country } = selectedCity;
   const { humidity, pressure, dew_point, visibility, uvi, wind_deg, wind_gust, wind_speed } =
      data.current;

   const windDirection = getWindDirection(wind_deg);

   return (
      <CardBack sx={(theme) => ({})}>
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
               {/*TODO: Add custom styled components, fix the CSS*/}
               <Detail>
                  <Typography variant='body1'>
                     <OpacityOutlined />
                     Humidity
                     {humidity}&#37;
                  </Typography>
               </Detail>
               <Detail>
                  <Typography variant='body1'>
                     <CompressOutlined /> Pressure
                     {pressure} hPa
                  </Typography>
               </Detail>
               <Detail>
                  <Typography variant='body1'>
                     <Air /> Wind
                     {getWindDirectionIcon(windDirection, 'inherit')}
                     {formatWindSpeedUnit(wind_speed, unit)}{' '}
                  </Typography>
               </Detail>
               <Detail>
                  <Typography variant='body1'>
                     <WbSunnyOutlined />
                     UV Index
                     {uvi} of 10
                  </Typography>
               </Detail>
               <Detail>
                  <Typography variant='body1'>
                     <InvertColorsSharp />
                     Dew Point
                     {formatTempUnit(dew_point, unit)}
                  </Typography>
               </Detail>
               <Detail>
                  <Typography variant='body1'>
                     <VisibilitySharp />
                     Visibility
                     {visibility}
                  </Typography>
               </Detail>
            </Box>
         </Box>
      </CardBack>
   );
}
export default DetailedConditionsCard;
