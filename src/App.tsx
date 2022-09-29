import { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState<object>({});
  useEffect(() => {
    (async () => {
      const req = await import('./data.json');
      setData(req.current);
    })();
  }, []);
  return (
    <div className='App'>
      <h1></h1>
    </div>
  );
}

export default App;
