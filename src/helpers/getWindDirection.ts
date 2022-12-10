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

export default (degree: number) => {
   const divider = 360 / directions.length;
   if (degree >= 360 - divider / 2) {
      return directions.at(0) as typeof directions[number];
   }
   degree = degree + 22.5;

   return directions.at(degree / divider) as typeof directions[number];
};
