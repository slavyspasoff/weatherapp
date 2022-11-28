import { styled } from '@mui/material';
import background from '../assets/images/index.background.jpeg';
const Root = styled('div')({
  backgroundImage: `url(${background})`,
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
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

export { Root };
