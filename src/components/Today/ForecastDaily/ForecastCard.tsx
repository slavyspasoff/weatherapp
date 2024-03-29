import { Box, Typography } from '@mui/material';
import { useContext } from 'react';

import CardBack from '../../../styles/Card/CardBack.styles';
import ForecastCardItem from './ForecastItem';

import { formatTempUnit, formatTime } from '../../../helpers/IntlHelpers';
import { ctx } from '../../Context/Provider.context';

interface Props {
   title: string;
}

function ForecastCard({ title }: Props) {
   const { data, unit } = useContext(ctx);
   //TODO: Add error
   if (!data) return <div>No data</div>;

   const render = data.hourly.slice(0, 5);
   {
      /*TODO: Display only 3 cards on small screen */
   }
   return (
      <CardBack sx={{ display: 'flex', flexDirection: 'column', pb: 2 }}>
         <Box
            sx={(theme) => ({
               padding: theme.spacing(2, 3),
            })}
         >
            <Typography>{title}</Typography>
         </Box>
         <Box
            sx={(theme) => ({
               display: 'flex',
               gap: theme.spacing(1),
               padding: theme.spacing(0, 2),
            })}
         >
            {render.map((hourlyData, idx) => {
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
                     isLast={idx === render.length - 1}
                  />
               );
            })}
         </Box>
      </CardBack>
   );
}
export default ForecastCard;
