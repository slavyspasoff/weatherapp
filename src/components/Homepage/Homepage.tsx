import { type SxProps } from '@mui/material';
import Box from '@mui/material/Box';

interface Props {}

function Homepage({}: Props) {
  return <Box sx={rootSx}></Box>;
}
export default Homepage;

//SX Styles
import backgroundImage from '../../assets/images/homepage.background.jpeg';
const rootSx: SxProps = {
  backgroundImage: `url(${backgroundImage})`,
  height: '100vh',
  width: '100vw',
  display: 'grid',
  placeItems: 'center',
  position: 'absolute',
  zIndex: '-2',
  top: 0,
  left: 0,
  backgroundPosition: '50% 0%',
  backgroundSize: 'cover',
  '&::after': {
    content: '""',
    position: 'absolute',
    zIndex: '-1',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
};
