import Box from '@mui/material/Box';
import { styled } from '@mui/material';

const Card = styled(Box)(({ theme }) => ({
   borderRadius: 12,
   backgroundColor: theme.palette.background.card,
   marginTop: theme.spacing(2),
   overflow: 'hidden',
   boxShadow: theme.shadows[10],
}));

export default Card;
