import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
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
    (async () => {
      const req = await import('./data.json');
      setData(req.current);
    })();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Navbar toggleTheme={toggleTheme} />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
