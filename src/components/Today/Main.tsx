import Box from '@mui/material/Box';
import { alpha } from '@mui/material';

import CardBack from '../../styles/Card/CardBack.styles';
interface Props {}
function Main({}: Props) {
  return (
    <Box
      component='main'
      sx={(theme) => ({
        height: 1200,
        backgroundColor: alpha(theme.palette.grey[100], 0.1),
      })}
    ></Box>
  );
}
export default Main;
