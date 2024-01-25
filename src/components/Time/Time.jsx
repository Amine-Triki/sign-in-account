import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import arLocale from 'date-fns/locale/ar-TN';

const Time = () => {
  const [currentTime, setCurrentTime] = useState(getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getTime() {
    const today = new Date();
    // date
    return format(today, 'EEEE, yyyy/dd/MM  HH:mm:ss', { locale: arLocale });
  }

  return <div className='display-6'>{currentTime}</div>;
};

export default Time;
