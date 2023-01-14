import Box from '@mui/material/Box';
import Main from './Main';
import Aside from './Aside';

interface Props {}

function Today({}: Props) {
   return (
      <Box
         sx={(theme) => ({
            marginTop: '10vh',
            width: '90%',
            maxWidth: 1200,
            marginInline: 'auto',
            display: 'grid',
            gridTemplateColumns: 'auto',
            [theme.breakpoints.up('lg')]: {
               gridTemplateColumns: 'minmax(600px,1fr) 400px',
            },
         })}
         component='section'
      >
         <Main />
         <Aside />
      </Box>
   );
}
export default Today;
