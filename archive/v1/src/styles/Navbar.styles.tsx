import { styled, alpha } from '@mui/material/styles';
import { AppBar as _AppBar, Container, InputBase as _InputBase } from '@mui/material';

const AppBar = styled(_AppBar)(({ theme }) => ({
  height: '7.5vh',
}));

const Root = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
}));

const SearchContainer = styled('div')(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.paper, 0.075),
  borderRadius: '2em',
  border: `1px solid ${theme.palette.grey[500]}`,
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0.75, 2),
  width: '100%',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

const InputBase = styled(_InputBase)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
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
  backgroundColor: selected ? theme.palette.info.main : 'transparent',
}));

export { AppBar, Root, SearchContainer, InputBase, UnitContainer, Unit };
