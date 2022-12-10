import Box from '@mui/material/Box';

import CurrentConditionCard from './CurrentConditionCard';

interface Props {}
function Main({}: Props) {
   return (
      <Box
         component='main'
         sx={(theme) => ({
            paddingInline: theme.spacing(2, 1),
         })}
      >
         <CurrentConditionCard />
      </Box>
   );
}
export default Main;
