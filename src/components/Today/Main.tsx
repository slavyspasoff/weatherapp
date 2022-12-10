import Box from '@mui/material/Box';

import CurrentConditionCard from './CurrentConditionCard';
import DetailedConditionsCard from './DetailedConditionsCard';
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
      </Box>
   );
}
export default Main;
