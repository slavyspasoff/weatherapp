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

export interface WeatherData {
   lat: number;
   lon: number;
   timezone: string;
   timezone_offset: number;
   current: Current;
   minutely: Minutely[];
   hourly: Current[];
   daily: Daily[];
}

export interface Current {
   dt: number;
   sunrise?: number;
   sunset?: number;
   temp: number;
   feels_like: number;
   pressure: number;
   humidity: number;
   dew_point: number;
   uvi: number;
   clouds: number;
   visibility: number;
   wind_speed: number;
   wind_deg: number;
   wind_gust?: number;
   weather: Weather[];
   pop?: number;
   rain?: Rain;
   snow?: Snow;
}

export interface Weather {
   id: number;
   main: Main;
   description: Description;
   icon: Icon;
}

//TODO: Add to the Description, Icon and Main enums
export enum Description {
   BrokenClouds = 'broken clouds',
   ClearSky = 'clear sky',
   FewClouds = 'few clouds',
   OvercastClouds = 'overcast clouds',
   ScatteredClouds = 'scattered clouds',
}

export interface Icon {
   [K: string]: string;
}

export interface Main {
   [K: string]: string;
}

export interface Daily {
   dt: number;
   sunrise: number;
   sunset: number;
   moonrise: number;
   moonset: number;
   moon_phase: number;
   temp: Temp;
   feels_like: FeelsLike;
   pressure: number;
   humidity: number;
   dew_point: number;
   wind_speed: number;
   wind_deg: number;
   wind_gust: number;
   weather: Weather[];
   clouds: number;
   pop: number;
   uvi: number;
   rain?: Rain;
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

export interface Rain {
   [K: string]: number;
}

export interface Snow {
   [K: string]: number;
}
