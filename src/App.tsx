import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

interface Props {}
function App({}: Props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
}
export default App;
