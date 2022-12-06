import Box from '@mui/material/Box';
import { styled } from '@mui/material';

const Card = styled(Box)(({ theme }) => ({
  borderRadius: 2,
  backgroundColor: theme.palette.grey[200],
  height: 400,
}));

export default Card;
