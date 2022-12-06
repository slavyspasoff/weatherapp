import { useContext } from 'react';
import Box from '@mui/material/Box';

import CurrentConditionCard from './CurrentConditionCard';
import { ctx } from '../Context/Provider.context';
import { CityData } from '../../types/global.types';

interface Props {}
function Main({}: Props) {
   const { data, selectedCity } = useContext(ctx);
   return (
      <Box
         component='main'
         sx={(theme) => ({
            paddingInline: theme.spacing(2, 1),
         })}
      >
         <CurrentConditionCard data={data} city={selectedCity} />
      </Box>
   );
}
export default Main;
