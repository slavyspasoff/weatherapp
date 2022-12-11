import { Box, Typography } from '@mui/material';
import { type Snow, type Rain } from '../../types/global.types';
interface Props {
   time: number;
   temp: number;
   icon: string;
   description: string;
   rain?: Rain;
   snow?: Snow;
}
function ForecastCardItem({ time, temp, description, icon, rain, snow }: Props) {
   return (
      <Box>
         <Box>
            <Typography>{time}</Typography>
         </Box>
         <Box>
            <Typography>{temp}</Typography>
         </Box>
         <Box>
            {/*TODO: Add alt tag on all images.*/}
            <img src={`http://openweathermap.org/img/wn/${icon}@4x.png`} alt={description} />
         </Box>
         {/* <Box>
            <Typography>{rain ? rain : '--'}</Typography>
         </Box>
         <Box>
            <Typography>{snow ? snow : '--'}</Typography>
         </Box> */}
      </Box>
   );
}
export default ForecastCardItem;
