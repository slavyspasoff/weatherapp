import MainCard from './MainCard';
import MainContainer from './MainContainer';
import { Box, alpha, Typography } from '@mui/material';
import {} from '../styles/Index.styles';
interface Props {
  data: any;
}

const BACKGROUND_IMG_URL = 'https://images.unsplash.com/photo-1483702721041-b23de737a886';

const Index = ({ data }: Props) => {
  const timeNow = new Date(data.current?.dt * 1000);
  console.log(data);
  return (
    <MainContainer>
      <MainCard backgroundImage={BACKGROUND_IMG_URL}>
        <Box
          sx={(theme) => ({
            height: '3rem',
            width: '100%',
            backgroundColor: alpha(theme.palette.common.black, 0.5),
            display: 'flex',
            alignItems: 'center',
            paddingInline: '1rem',
          })}
        >
          <Typography variant='body1' sx={{}}>
            {data.timezone} As of {timeNow.getHours()}:{timeNow.getMinutes()}{' '}
          </Typography>
        </Box>
        <Box>{Math.round(data.current.temp - 273.15)} &#8451;</Box>
      </MainCard>
    </MainContainer>
  );
};
export default Index;
