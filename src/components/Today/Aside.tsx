import Box from '@mui/material/Box';
import { alpha } from '@mui/material';

import CardBack from '../../styles/Card/CardBack.styles';
interface Props {}
function Aside({}: Props) {
   return (
      <Box
         component='aside'
         sx={(theme) => ({
            [theme.breakpoints.up('lg')]: {
               paddingInline: theme.spacing(1, 2),
            },
         })}
      >
         <CardBack sx={{ height: 300 }}></CardBack>
         <CardBack sx={{ height: 300 }}></CardBack>
      </Box>
   );
}
export default Aside;
