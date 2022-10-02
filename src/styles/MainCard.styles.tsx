import { Box, styled, alpha } from '@mui/material';

const Root = styled(Box)(({ theme }) => ({
  height: '250px',
  width: '100%',
  borderRadius: '1rem',
  backgroundColor: alpha(theme.palette.common.black, 0.25),
}));

export { Root };
