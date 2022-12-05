import { styled, alpha } from '@mui/material/styles';
import { Grid } from '@mui/material';
const Root = styled(Grid)(({ theme }) => ({
  width: '90%',
  maxWidth: '1200px',
  minWidth: '400px',
  marginInline: 'auto',
  marginTop: '7.5vh',
  minHeight: '92.5vh',
  backgroundColor: alpha(theme.palette.common.white, 0.05),
}));

export { Root };
