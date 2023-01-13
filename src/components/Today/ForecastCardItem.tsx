import { useContext } from 'react';
import { Box, Typography, alpha } from '@mui/material';
import { Opacity } from '@mui/icons-material';

import { type Snow, type Rain } from '../../types/global.types';
interface Props {
   time: string;
   temp: string;
   icon: string;
   description: string;
   pop: number;
   rain?: Rain;
   snow?: Snow;
}
import { ctx } from '../Context/Provider.context';

function ForecastCardItem({ time, temp, description, icon, pop, rain, snow }: Props) {
   const { paletteMode } = useContext(ctx);
   if (snow && typeof snow !== 'number') {
      snow = snow['1h'];
   }
   if (rain && typeof rain !== 'number') {
      rain = rain['1h'];
   }

   return (
      <Box
         sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
         })}
      >
         <Box>
            <Typography>{time}</Typography>
         </Box>
         <Box>
            <Typography>{temp}</Typography>
         </Box>

         <Box
         // sx={(theme) => ({
         //    backgroundColor:
         //       paletteMode === 'dark' ? 'transparent' : alpha(theme.palette.common.black, 0.1),
         // })}
         >
            {/*TODO: Add alt tag on all images.*/}
            <img
               src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
               alt={description}
               style={{ width: '100%' }}
            />
         </Box>
         <Box
            sx={{
               display: 'flex',
               gap: '10px',
            }}
         >
            <Opacity fontSize='inherit' />
            <Typography>{Math.round(pop * 100)} &#37;</Typography>
         </Box>
         {/* <Box
            sx={{
               display: 'flex',
               gap: '10px',
            }}
         >
            <Opacity fontSize='inherit' />
            <Typography>{rain ? `${rain} mm` : '--'}</Typography>
         </Box>
         <Box
            sx={{
               display: 'flex',
               gap: '10px',
            }}
         >
            <AcUnit fontSize='inherit'></AcUnit>
            <Typography>{snow ? `${snow} mm` : '--'}</Typography>
         </Box> */}
      </Box>
   );
}
export default ForecastCardItem;
