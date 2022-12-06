import Box from '@mui/material/Box';
import { alpha } from '@mui/material';

import CardBack from '../../styles/Card/CardBack.styles';
interface Props {}
function Aside({}: Props) {
  return (
    <Box
      component='aside'
      sx={(theme) => ({
        height: 1200,
        backgroundColor: alpha(theme.palette.grey[100], 0.2),
      })}
    ></Box>
  );
}
export default Aside;
