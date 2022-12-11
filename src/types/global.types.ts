export type UnitType = 'metric' | 'imperial';

export interface LocationCoord {
   lat: number;
   lon: number;
}

export interface CityData {
   name: string;
   local_names: { [K: string]: string };
   lat: number;
   lon: number;
   country: string;
   state?: string;
}

export interface WeatherData {
   lat: number;
   lon: number;
   timezone: string;
   timezone_offset: number;
   current: Current;
   minutely: Minutely[];
   hourly: Hourly[];
   daily: Daily[];
   alerts?: Alert[];
}

export interface Base {
   dt: number;
   sunrise: number;
   sunset: number;
   pressure: number;
   humidity: number;
   dew_point: number;
   clouds: number;
   wind_speed: number;
   wind_deg: number;
   wind_gust?: number;
   weather: Weather[];
   uvi: number;
   rain?: Rain;
   snow?: Snow;
}

export interface Current extends Base {
   temp: number;
   feels_like: number;
   visibility: number;
}
export interface Hourly extends Current {
   pop: number;
}

export interface Daily extends Base {
   moonrise: number;
   moonset: number;
   moon_phase: number;
   temp: Temp;
   feels_like: FeelsLike;
   pop: number;
}

export interface Weather {
   id: number;
   main: string;
   description: string;
   icon: string;
}

export interface FeelsLike {
   day: number;
   night: number;
   eve: number;
   morn: number;
}

export interface Temp {
   day: number;
   min: number;
   max: number;
   night: number;
   eve: number;
   morn: number;
}

export interface Minutely {
   dt: number;
   precipitation: number;
}

export interface Alert {
   sender_name: string;
   event: string;
   start: number;
   end: number;
   description: string;
   tags: string[];
}

export type Rain = { '1h': number } | number;
export type Snow = { '1h': number } | number;
