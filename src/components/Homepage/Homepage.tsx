import Box from '@mui/material/Box';

import SearchBox from './SearchBox';

import backgroundImage from '../../assets/images/homepage.background.jpeg';

interface Props {}

function Homepage({}: Props) {
  return (
    <Box
      sx={(theme) => ({
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
          backgroundColor: 'rgba(0,0,0,0.2)',
        },
      })}
    >
      <SearchBox />
    </Box>
  );
}
export default Homepage;
