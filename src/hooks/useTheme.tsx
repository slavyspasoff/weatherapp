import { useEffect, useState } from 'react';
import { useMediaQuery, type PaletteMode } from '@mui/material';

interface Props {}
function useTheme() {
  const [paletteMode, setPaletteMode] = useState<PaletteMode>('light');
  const toggleTheme = () => {
    setPaletteMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark');
  useEffect(() => {
    if (prefersDarkMode) setPaletteMode('dark');
  }, []);
  return [paletteMode, toggleTheme] as const;
}
export default useTheme;
