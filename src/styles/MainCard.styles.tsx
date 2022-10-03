import { Box, styled, alpha } from '@mui/material';

interface RootProps {
  backgroundColor?: string;
  backgroundImage?: string;
}

const Root = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'backgroundColor' && prop !== 'backgroundImage',
})<RootProps>(({ theme, backgroundColor, backgroundImage }) => ({
  height: '250px',
  width: '100%',
  borderRadius: '1rem',
  backgroundColor,
  overflow: 'hidden',
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}));

export { Root };
