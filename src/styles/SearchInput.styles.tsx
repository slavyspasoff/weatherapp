import { styled, InputBase } from '@mui/material';
import theme from '../theme';

const SearchContainer = styled('div')(({ theme }) => ({
  height: '5vh',
  minHeight: '70px',
  width: '80%',
  maxWidth: '600px',
  borderRadius: '1em',
  paddingInline: theme.spacing(6),
  backgroundColor: 'rgba(255,255,255,0.7)',
  display: 'grid',
  placeItems: 'center',
}));

const SearchInput = styled(InputBase)((theme) => ({
  fontSize: 'clamp(1.25rem,5vw,2rem)',
  color: 'black',
  width: '100%',
}));

export { SearchContainer, SearchInput };
