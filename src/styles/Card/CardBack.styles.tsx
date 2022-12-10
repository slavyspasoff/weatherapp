import Box from '@mui/material/Box';
import { styled } from '@mui/material';

const Card = styled(Box)(({ theme }) => ({
   borderRadius: 6,
   backgroundColor: theme.palette.grey[200],
   marginTop: theme.spacing(2),
   overflow: 'hidden',
}));

export default Card;
