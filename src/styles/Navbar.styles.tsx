import { styled, alpha } from '@mui/material/styles';
import { AppBar as _AppBar, Container, InputBase as _InputBase } from '@mui/material';

const AppBar = styled(_AppBar)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.grey[900],
  minHeight: '7.5vh',
}));

const Root = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const SearchContainer = styled('div')(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  borderRadius: '2em',
  display: 'flex',
  alignItems: 'center',
  paddingInline: theme.spacing(2),
  paddingBlock: theme.spacing(0.75),
  width: '40%',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

const InputBase = styled(_InputBase)(({ theme }) => ({
  color: theme.palette.common.white,
  paddingInline: theme.spacing(1),
  flex: 1,
  textAlign: 'center',
}));

export { AppBar, Root, SearchContainer, InputBase };
