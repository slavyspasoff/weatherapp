import { Box, Typography, alpha } from '@mui/material';

interface Props {
  text?: string;
  temp?: number;
  icon?: string;
  rain?: string;
  alreadyPassed: boolean;
  currentActive: boolean;
}

const TodaysForecastCard = ({
  text,
  temp,
  icon,
  rain,
  currentActive,
  alreadyPassed,
}: Props) => {
  return (
    <Box>
      <Typography
        paragraph
        sx={(theme) => ({
          textTransform: 'capitalize',
          color: currentActive
            ? theme.palette.info.main
            : alreadyPassed
            ? theme.palette.text.secondary
            : 'black',
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
            ? theme.palette.info.main
            : alreadyPassed
            ? theme.palette.text.secondary
            : theme.palette.text.primary,
          fontWeight: currentActive ? 500 : 300,
        })}
      >
        {temp}&#176;
      </Typography>
    </Box>
  );
};
export default TodaysForecastCard;
