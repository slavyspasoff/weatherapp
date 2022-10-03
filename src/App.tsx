import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark');
  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });
  const [data, setData] = useState<object>({});
  useEffect(() => {
    (async () => {})();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Navbar toggleTheme={toggleTheme} />
      <Main data={data} />
    </ThemeProvider>
  );
}

export default App;
