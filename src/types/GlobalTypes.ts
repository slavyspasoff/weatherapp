export type UnitType = 'f' | 'c';

export interface LocationCoord {
  lat: number;
  lon: number;
}

export interface CityType extends LocationCoord {
  name: string;
  local_names: { [key: string]: string };
  country: string;
  state?: string;
}
