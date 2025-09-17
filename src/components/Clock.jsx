import { useState, useEffect } from 'react';
import '../App.css';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return <div className="clock">{time}</div>;
}

export default Clock;
