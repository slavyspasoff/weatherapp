import { useContext } from 'react';
import { Box, Typography } from '@mui/material';

import ForecastCardItem from './ForecastCardItem';
import CardBack from '../../styles/Card/CardBack.styles';

import { ctx } from '../Context/Provider.context';
import { formatTempUnit, formatTime } from '../../helpers/IntlHelpers';

interface Props {
   title: string;
}

function ForecastCard({ title }: Props) {
   const { data, unit } = useContext(ctx);
   //TODO: Add error
   if (!data) return <div>No data</div>;
   const render = data.hourly.slice(0, 5);
   return (
      <CardBack sx={{ display: 'flex', flexDirection: 'column' }}>
         <Box
            sx={(theme) => ({
               padding: theme.spacing(2, 3),
            })}
         >
            <Typography>{title || `Daily weather forecast`}</Typography>
         </Box>
         <Box
            sx={(theme) => ({
               display: 'flex',
               gap: theme.spacing(1),
               padding: theme.spacing(0, 2),
            })}
         >
            {render.map((hourlyData) => {
               const { dt, temp, weather, rain, snow, pop } = hourlyData;
               const { icon, description } = weather[0];
               return (
                  <ForecastCardItem
                     time={formatTime(dt)}
                     temp={formatTempUnit(temp, unit)}
                     description={description}
                     icon={icon}
                     rain={rain}
                     snow={snow}
                     key={String(dt)}
                     pop={pop}
                  />
               );
            })}
         </Box>
      </CardBack>
   );
}
export default ForecastCard;
