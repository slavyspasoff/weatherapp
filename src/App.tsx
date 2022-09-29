import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
function App() {
  const [data, setData] = useState<object>({});
  useEffect(() => {
    (async () => {
      const req = await import('./data.json');
      setData(req.current);
    })();
  }, []);
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

export default App;
