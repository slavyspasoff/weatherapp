import { styled } from '@mui/material';
import backgroundImage from '../assets/images/searchIndex.background.jpeg';
import snow from '../assets/images/snow.jpeg';
const Root = styled('div')({
  backgroundImage: `url(${snow})`,
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

const SearchContainer = styled('div')({
  height: '5vh',
  minHeight: '70px',
  width: '80%',
  maxWidth: '600px',
  borderRadius: '1rem',
  paddingInline: '1rem',
  backgroundColor: 'rgba(255,255,255,0.7)',
  display: 'grid',
  placeItems: 'center',
});

export { Root, SearchContainer };
