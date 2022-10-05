import { Box, styled, alpha } from '@mui/material';

interface RootProps {}

const Root = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'backgroundColor' && prop !== 'backgroundImage',
})<RootProps>(({ theme }) => ({
  minHeight: '250px',
  width: '100%',
  borderRadius: '1rem',
  overflow: 'hidden',
  marginBottom: '1.25rem',
}));

export { Root };
