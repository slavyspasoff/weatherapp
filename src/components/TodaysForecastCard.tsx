import { Box, Typography } from '@mui/material';

interface Props {
  text: string;
  temp: string;
  icon: string;
  rain: string;
}

const TodaysForecastCard = ({ text, temp, icon, rain }: Props) => {
  return (
    <Box>
      <Typography>{text}</Typography>
      <Typography>{temp}</Typography>
      <img src={icon} />
      <Typography>{rain}</Typography>
    </Box>
  );
};
export default TodaysForecastCard;
