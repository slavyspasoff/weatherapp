import { Box, Typography, alpha } from '@mui/material';
import { getFullCountryName } from '../helpers/IntlHelpers';

interface Props {
  text?: string;
  temp?: string;
  icon?: string;
  rain?: string;
  currentActive: boolean;
}

const TodaysForecastCard = ({ text, temp, icon, rain, currentActive }: Props) => {
  return (
    <Box>
      <Typography
        paragraph
        sx={(theme) => ({
          textTransform: 'capitalize',
          color: currentActive
            ? 'rgb(0 122 222)'
            : alpha(theme.palette.common.black, 0.6),
          fontSize: '1.25rem',
          fontWeight: currentActive ? 500 : 400,
        })}
      >
        {text}
      </Typography>
      <Typography
        variant='h2'
        paragraph
        sx={(theme) => ({
          color: currentActive
            ? 'rgb(0 122 222)'
            : alpha(theme.palette.common.black, 0.6),
          fontWeight: currentActive ? 500 : 300,
        })}
      >
        {temp}&#176;
      </Typography>
      {/* <img src={icon} /> */}
      {/* <Typography>{rain}</Typography> */}
    </Box>
  );
};
export default TodaysForecastCard;
