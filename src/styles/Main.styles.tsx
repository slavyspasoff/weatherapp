import { styled, alpha } from '@mui/material/styles';
import {} from '@mui/material';

const Root = styled('main')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 300px',
  width: '62.5%',
  maxWidth: '1200px',
  minWidth: '400px',
  marginInline: 'auto',
  marginTop: '7.5vh',
  color: theme.palette.common.white,
  minHeight: '192.5vh',
  fontSize: '5rem',
  backgroundColor: alpha(theme.palette.common.white, 0.05),
}));

export { Root };
