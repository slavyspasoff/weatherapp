import Box from '@mui/material/Box';

import CurrentConditionCard from './CurrentConditionCard';
import DetailedConditionsCard from './DetailedConditionsCard';
import ForecastCard from './ForecastCard';
interface Props {}
function Main({}: Props) {
   return (
      <Box
         component='main'
         sx={(theme) => ({
            [theme.breakpoints.up('lg')]: {
               paddingInline: theme.spacing(2, 1),
            },
         })}
      >
         <CurrentConditionCard />
         <DetailedConditionsCard />
         <ForecastCard />
      </Box>
   );
}
export default Main;
