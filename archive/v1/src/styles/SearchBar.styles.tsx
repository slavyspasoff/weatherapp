import { styled } from '@mui/material';
import theme from '../theme';

const SearchContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '1em',
  paddingInline: theme.spacing(6),
  backgroundColor: 'rgba(255,255,255,0.7)',
  display: 'grid',
  placeItems: 'center',
}));

export { SearchContainer };
