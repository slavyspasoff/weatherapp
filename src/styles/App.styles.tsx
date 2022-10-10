import { styled, alpha } from '@mui/material/styles';

const Root = styled('main')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr 350px',
  },
  width: '90%',
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
