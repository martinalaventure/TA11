import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevseconds => prevseconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="App">
      <p>Seconds: {seconds}</p>
    </div>
  );
}

export default App;
