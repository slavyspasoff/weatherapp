import { Box, Typography } from '@mui/material';
import { ReportGmailerrorred } from '@mui/icons-material';

import CardBack from '../../styles/Card/CardBack.styles';
import { Alert } from '../../types/global.types';

//TODO: Move to IntlHelper
const formatDate = (v: number) => {
   return new Intl.DateTimeFormat([navigator.language], {
      dateStyle: 'long',
   }).format(new Date(v * 1000));
};

interface Props extends Alert {}

function AlertCard({ description, start, end, sender_name, event, tags }: Props) {
   return (
      <CardBack sx={(theme) => ({ padding: theme.spacing(2, 3) })}>
         <Box>
            <Typography
               sx={(theme) => ({
                  fontSize: '1.5rem',
                  lineHeight: '3rem',
               })}
               component={'h3'}
            >
               <ReportGmailerrorred /> Alert
            </Typography>
         </Box>
         <Box>
            <Typography>
               {formatDate(start)} - {formatDate(end)}
            </Typography>
            {sender_name && <Typography>{sender_name}</Typography>}
            <Typography>{event[0].toUpperCase().concat(event.slice(1))}</Typography>
            <br />
            {description && <Typography>{description}</Typography>}
         </Box>
      </CardBack>
   );
}
export default AlertCard;
