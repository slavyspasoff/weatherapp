import { styled, alpha } from '@mui/material/styles';
import { AppBar as _AppBar, Container, InputBase as _InputBase } from '@mui/material';

const AppBar = styled(_AppBar)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.grey[900],
  height: '7.5vh',
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

const UnitContainer = styled('div')(({ theme }) => ({
  borderRadius: '1em',
  height: '1.5rem',
  width: '5rem',
  overflow: 'hidden',
  boxSizing: 'border-box',
  backgroundColor: alpha(theme.palette.common.white, 0.95),
}));

interface UnitProps {
  selected: boolean;
}

const Unit = styled('span', {
  shouldForwardProp: (prop) => prop !== 'selected',
})<UnitProps>(({ theme, selected }) => ({
  color: selected ? theme.palette.common.white : theme.palette.common.black,
  display: 'inline-block',
  textAlign: 'center',
  height: '100%',
  width: '50%',
  cursor: 'pointer',
  transition: 'background-color 0.5s linear, color 0.5s linear',
  backgroundColor: selected ? theme.palette.info.dark : 'transparent',
}));

export { AppBar, Root, SearchContainer, InputBase, UnitContainer, Unit };
