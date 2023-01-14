import { styled } from '@mui/material';

const Logo = styled('img')(({ theme }) => ({
   display: 'none',
   width: '3rem',
   [theme.breakpoints.up('sm')]: {
      display: 'inline',
   },
}));

export default Logo;
