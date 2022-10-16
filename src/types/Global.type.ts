export type UnitType = 'metric' | 'imperial';

export interface LocationCoord {
  lat: number;
  lon: number;
}

export interface CityData {
  name: string;
  local_names: { [key: string]: string };
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export type CitiesData = CityData[];
