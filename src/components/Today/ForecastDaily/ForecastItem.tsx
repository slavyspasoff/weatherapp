import { Opacity } from '@mui/icons-material';
import { alpha, Box, styled, Typography } from '@mui/material';

import { type Rain, type Snow } from '../../../types/global.types';

interface Props {
   time: string;
   temp: string;
   icon: string;
   description: string;
   pop: number;
   rain?: Rain;
   snow?: Snow;
   isLast: boolean;
}

const Image = styled('img')(({ theme }) => ({
   width: '100%',
}));

function ForecastCardItem({ time, temp, description, icon, pop, rain, snow, isLast }: Props) {
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
            position: 'relative',
            '&::after': {
               content: '""',
               position: 'absolute',
               height: '70%',
               right: 0,
               top: '12.5%',
               borderImage: `linear-gradient(180deg,${theme.palette.divider}00 0,${theme.palette.divider} 25%,${theme.palette.divider} 70%,${theme.palette.divider}00 85%,${theme.palette.divider}00) 1 100%`,
               borderRight: !isLast
                  ? `1px solid ${alpha(theme.palette.text.primary, 0.15)}`
                  : undefined,
            },
         })}
      >
         <Box>
            <Typography>{time}</Typography>
         </Box>
         <Box>
            <Typography
               sx={(theme) => ({ fontSize: '1.25rem', color: theme.palette.warning.main })}
            >
               {temp}
            </Typography>
         </Box>
         <Box>
            <Image src={`http://openweathermap.org/img/wn/${icon}@4x.png`} alt={description} />
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
      </Box>
   );
}
export default ForecastCardItem;
