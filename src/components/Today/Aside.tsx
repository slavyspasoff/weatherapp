import Box from '@mui/material/Box';
import { alpha } from '@mui/material';

import CardBack from '../../styles/Card/CardBack.styles';
interface Props {}
function Aside({}: Props) {
   return (
      <Box
         component='aside'
         sx={(theme) => ({
            paddingInline: theme.spacing(1, 2),
         })}
      >
         <CardBack></CardBack>
         <CardBack></CardBack>
      </Box>
   );
}
export default Aside;
