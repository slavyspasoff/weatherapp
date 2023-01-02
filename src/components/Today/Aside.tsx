import Box from '@mui/material/Box';

import { useContext } from 'react';
import { ctx } from '../Context/Provider.context';

import CardBack from '../../styles/Card/CardBack.styles';
import AlertCard from './AlertCard';
import { Typography } from '@mui/material';
interface Props {}
function Aside({}: Props) {
   const { data } = useContext(ctx);
   if (!data || !data.alerts) {
      return (
         <CardBack>
            <Typography>No alerts!</Typography>
         </CardBack>
      );
   }

   const alerts = data.alerts.map((alert) => {
      console.log(alert.event);
      return <AlertCard {...alert} key={alert.description} />;
   });
   return (
      <Box
         component='aside'
         sx={(theme) => ({
            [theme.breakpoints.up('lg')]: {
               paddingInline: theme.spacing(1, 2),
            },
         })}
      >
         {alerts}
      </Box>
   );
}
export default Aside;
