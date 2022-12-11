import { useContext } from 'react';
import { Box, Typography } from '@mui/material';

import CardBack from '../../styles/Card/CardBack.styles';
import { ctx } from '../Context/Provider.context';

import ForecastCardItem from './ForecastCardItem';

interface Props {
   title: string;
}

function ForecastCard({ title }: Props) {
   const { data } = useContext(ctx);
   //TODO: Add error
   if (!data) return <div>No data</div>;

   return (
      <CardBack>
         <Box>
            <Typography>{title || `Daily weather forecast`}</Typography>
         </Box>
         <Box></Box>
      </CardBack>
   );
}
export default ForecastCard;
