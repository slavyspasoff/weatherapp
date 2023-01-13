import {
   North,
   NorthEast,
   East,
   SouthEast,
   South,
   SouthWest,
   West,
   NorthWest,
} from '@mui/icons-material';

const directions = [
   'North',
   'NorthEast',
   'East',
   'SouthEast',
   'South',
   'SouthWest',
   'West',
   'NorthWest',
] as const;

const getWindDirection = (degree: number) => {
   const divider = 360 / directions.length;
   if (degree >= 360 - divider / 2) {
      return directions.at(0) as typeof directions[number];
   }
   degree = degree + 22.5;

   return directions.at(degree / divider) as typeof directions[number];
};

const getWindDirectionIcon = (direction: string) => {
   if (direction === 'North') return North;
   if (direction === 'NorthEast') return NorthEast;
   if (direction === 'East') return East;
   if (direction === 'SouthEast') return SouthEast;
   if (direction === 'South') return South;
   if (direction === 'SouthWest') return SouthWest;
   if (direction === 'West') return West;
   if (direction === 'NorthWest') return NorthWest;
};

const getWindDirectionText = (direction: string) => {
   if (direction === 'North') return 'N';
   if (direction === 'NorthEast') return 'N/E';
   if (direction === 'East') return 'E';
   if (direction === 'SouthEast') return 'S/E';
   if (direction === 'South') return 'S';
   if (direction === 'SouthWest') return 'SW';
   if (direction === 'West') return 'W';
   if (direction === 'NorthWest') return 'NW';
};

export { getWindDirection as default, getWindDirectionIcon, getWindDirectionText };
