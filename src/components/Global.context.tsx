import {
  createContext,
  useState,
  type SetStateAction,
  type Dispatch,
  type ReactNode,
} from 'react';

import {
  type UnitType,
  type LocationCoord,
  type CityData,
  type WeatherData,
} from '../types/Global.type';
import { type PaletteMode } from '@mui/material';
import useTheme from '../hooks/useTheme';

interface ContextInterface {
  unit: UnitType;
  setUnit: Dispatch<SetStateAction<UnitType>>;
  data: WeatherData | null;
  setData: Dispatch<SetStateAction<WeatherData | null>>;
  locationCoord: LocationCoord | null;
  setLocationCoord: Dispatch<SetStateAction<LocationCoord | null>>;
  selectedCity: CityData | null;
  setSelectedCity: Dispatch<SetStateAction<CityData | null>>;
  paletteMode: PaletteMode;
  KEY: string;
  BASEURL: string;
  toggleTheme: () => void;
}

const ctx = createContext<ContextInterface>(null!);

interface Props {
  children: ReactNode;
}
function ContextProvider({ children }: Props) {
  const [unit, setUnit] = useState<UnitType>('metric');
  const [data, setData] = useState<WeatherData | null>(null);
  const [locationCoord, setLocationCoord] = useState<LocationCoord | null>(
    null
  );
  const [selectedCity, setSelectedCity] = useState<CityData | null>(null);
  const [paletteMode, toggleTheme] = useTheme();
  const { VITE_API_KEY: KEY } = import.meta.env;
  const BASEURL = 'https://api.openweathermap.org';

  return (
    <ctx.Provider
      value={{
        KEY,
        BASEURL,
        unit,
        setUnit,
        data,
        setData,
        locationCoord,
        setLocationCoord,
        selectedCity,
        setSelectedCity,
        paletteMode,
        toggleTheme,
      }}
    >
      {children}
    </ctx.Provider>
  );
}
export { ContextProvider as default, ctx };
