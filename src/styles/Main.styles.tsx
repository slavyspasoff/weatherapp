import { styled, alpha } from '@mui/material/styles';
import { Box } from '@mui/material';

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

const MainContainers = {
  padding: '1.25rem',
};

const LeftMainContainer = styled(Box)(({ theme }) => ({
  ...MainContainers,
}));

const MainCard = styled(Box)(({ theme }) => ({
  height: '250px',
  width: '100%',
  borderRadius: '1rem',
  backgroundColor: alpha(theme.palette.common.white, 0.25),
}));

const RightMainContainer = styled(Box)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  ...MainContainers,
}));

export { Root, LeftMainContainer, RightMainContainer, MainCard };
