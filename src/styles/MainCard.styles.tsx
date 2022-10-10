import { Box, styled, alpha } from '@mui/material';

interface RootProps {}

const Root = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'backgroundColor' && prop !== 'backgroundImage',
})<RootProps>(({ theme }) => ({
  minHeight: '250px',
  width: '100%',
  borderRadius: 16,
  overflow: 'hidden',
  marginBottom: theme.spacing(3),
}));

export { Root };
