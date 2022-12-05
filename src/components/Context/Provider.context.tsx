import { createContext, useState, type SetStateAction, type Dispatch, type ReactNode } from 'react';
import { type PaletteMode } from '@mui/material';

import {
  type UnitType,
  type LocationCoord,
  type CityData,
  type WeatherData,
} from '../../types/global.types';
import useTheme from '../../hooks/useTheme';

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
function Provider({ children }: Props) {
  const [unit, setUnit] = useState<UnitType>('metric');
  const [data, setData] = useState<WeatherData | null>(null);
  const [locationCoord, setLocationCoord] = useState<LocationCoord | null>(null);
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
export { Provider as default, ctx };
