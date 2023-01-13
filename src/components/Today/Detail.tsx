import { type ComponentType } from 'react';
import { Box, Typography, alpha, type SvgIconProps } from '@mui/material';

interface Props {
   Icon: ComponentType<SvgIconProps>;
   description: string;
   value: string;
   WindDirection?: ComponentType<SvgIconProps>;
}

function Detail({ Icon, description, value, WindDirection }: Props) {
   return (
      <Box
         sx={(theme) => ({
            py: theme.spacing(1),
            position: 'relative',
            display: 'flex',
            '&::after': {
               content: '""',
               position: 'absolute',
               bottom: 0,
               left: '2.5%',
               width: '95%',
               borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.15)}`,
            },
         })}
      >
         <Icon sx={{ flexBasis: '20%' }} />
         <Typography sx={{ flexBasis: '40%', pl: 2 }}>{description}</Typography>
         <Box sx={{ flexBasis: '40%', textAlign: 'center' }}>
            {WindDirection && <WindDirection sx={{ fontSize: 'inherit' }} />}
            {value}
         </Box>
      </Box>
   );
}
export default Detail;
