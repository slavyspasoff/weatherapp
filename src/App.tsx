import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
function App() {
  const [data, setData] = useState<object>({});
  useEffect(() => {
    (async () => {
      const req = await import('./data.json');
      setData(req.current);
    })();
  }, []);
  return <Navbar />;
}

export default App;
