import React, { useState, useEffect } from 'react';

function Clock({timezone}) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', { timeZone: timezone, hour12: false });

  return (
    <div>

      <h3>{formattedTime}</h3>
    </div>
  );
}

export default Clock;

