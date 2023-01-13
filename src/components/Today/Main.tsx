import Box from '@mui/material/Box';

import CurrentConditionCard from './CurrentConditions/CurrentConditionsCard';
import DetailedConditionsCard from './DetailedConditions/DetailedConditionsCard';
import ForecastCard from './ForecastDaily/ForecastCard';

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
         {/*TODO: Add title section for the card and remove duplication */}
         <ForecastCard title={'Daily weather forecast'} />
      </Box>
   );
}
export default Main;
