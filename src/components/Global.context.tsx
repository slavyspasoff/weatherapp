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
  fetchedCityList: CityData[] | null;
  setFetchedCityList: Dispatch<SetStateAction<CityData[] | null>>;
  paletteMode: PaletteMode;
  toggleTheme: () => void;
}

const ctx = createContext<ContextInterface>(null!);

interface Props {
  children: ReactNode;
}
function ContextProvider({ children }: Props) {
  const [unit, setUnit] = useState<UnitType>('metric');
  const [data, setData] = useState<WeatherData | null>(null);
  const [locationCoord, setLocationCoord] = useState<LocationCoord | null>(null);
  const [selectedCity, setSelectedCity] = useState<CityData | null>(null);
  const [fetchedCityList, setFetchedCityList] = useState<CityData[] | null>(null);
  const [paletteMode, toggleTheme] = useTheme();
  return (
    <ctx.Provider
      value={{
        unit,
        setUnit,
        data,
        setData,
        locationCoord,
        setLocationCoord,
        selectedCity,
        setSelectedCity,
        fetchedCityList,
        setFetchedCityList,
        paletteMode,
        toggleTheme,
      }}
    >
      {children}
    </ctx.Provider>
  );
}
export { ContextProvider as default, ctx };
