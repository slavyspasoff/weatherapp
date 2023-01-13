import { Box, Typography } from '@mui/material';

import CardBack from '../../styles/Card/CardBack.styles';
import { Alert } from '../../types/global.types';

//TODO: Move to IntlHelper
const formatDate = (v: number) => {
   return new Intl.DateTimeFormat([navigator.language], {
      dateStyle: 'full',
   }).format(new Date(v * 1000));
};

interface Props extends Alert {}

function AlertCard({ description, start, end, sender_name, event, tags }: Props) {
   return (
      <CardBack sx={(theme) => ({ padding: theme.spacing(2) })}>
         <Box>
            <Typography sx={(theme) => ({ fontSize: '1.5rem' })} component={'h3'}>
               Alert:
            </Typography>
         </Box>
         <Box>
            <Typography
               sx={(theme) => {
                  console.log(theme);
                  return {};
               }}
            >
               Start date: {formatDate(end)}
            </Typography>
            <Typography>End date: {formatDate(end)}</Typography>
            {sender_name && <Typography>Sender: {sender_name}</Typography>}
            <Typography>Event: {event}</Typography>
            {description && <Typography>Description: {description}</Typography>}
         </Box>
      </CardBack>
   );
}
export default AlertCard;
