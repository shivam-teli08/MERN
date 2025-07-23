import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    if (trigger === 0) return;
    fetch("https://timeapi.io/api/time/current/zone?timeZone=Asia/Kolkata")
      .then(response => response.json())
      .then(data => {
        setHour(data.hour.toString().padStart(2, '0'));
        setMinute(data.minute.toString().padStart(2, '0'));
        setSecond(data.seconds.toString().padStart(2, '0'));
      });
  }, [trigger]);
  function click() {
    console.log("Get clicked");

  }
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
        <div className="flex flex-row items-center justify-center max-w-md bg-white shadow-lg rounded-lg text-6xl px-8 py-6 mb-6 border border-black">
          <h1>{hour}</h1>
          <p>:</p>
          <h1>{minute}</h1>
          <p>:</p>
          <h1>{second}</h1>
        </div>
        <button className='p-3 bg-blue-700  ' onClick={click}>
          fake Get Result
        </button>
        <button
          className='p-3 bg-blue-800 rounded text-white hover:bg-blue-900 transition'
          onClick={() => setTrigger(trigger === 0 ? 1 : 0)}
        >
          Get result
        </button>
      </div>
    </>
  );
}

export default App;
