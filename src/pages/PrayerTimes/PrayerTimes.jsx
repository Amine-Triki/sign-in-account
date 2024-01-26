import './PrayerTimes.css'
import { Helmet } from 'react-helmet-async';
import { Time , CardPrayer  } from '../../components/index'
import { useState , useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';



const PrayerTimes = () => {


  const [timings, setTimings] = useState({
    Fajr: "04:20",
    Dhuhr: "11:50",
    Asr: "15:18",
    Sunset: "18:03",
    Isha: "19:33",
  });

  const [hijriDate, setHijriDate] = useState('');

  
  
  //select a city
  
  const handleCityChange = ( event ) => {
    const cityObject = avilableCities.find((city) => {
      return city.apiName == event.target.value;
    });
    setSelectCity(cityObject);
  }
  
  const [selectedCity , setSelectCity ] = useState({
    id:0,
    displayName:"مكة المكرمة",
    apiName:"Makkah al Mukarramah"
  });
  
  const avilableCities = [
    
    {
      id:0,
      displayName:"مكة المكرمة",
      apiName:"Makkah al Mukarramah"
    },
    {
      id:1,
      displayName:"الرياض",
      apiName:"Riyadh"
    },
    {
      id:2,
      displayName:"دمام",
      apiName:"Dammam"
    }
    
  ]

  //call api

  useEffect(() => {
    const getTimings = async () => {
      try {
        const response = await axios.get(
          `https://api.aladhan.com/v1/timingsByCity?country=SA&city=${selectedCity.apiName}`
        );
        const { timings, date } = response.data.data;
  
        setTimings(timings);
        setHijriDate(`${date.hijri.year}/${date.hijri.month.number}/${date.hijri.day}`);
      } catch (error) {
        console.error("Error fetching prayer timings:", error);
      }
    };
  
    getTimings(); 
  
  }, [selectedCity]);
  
  
  return (
    <main className='d-flex justify-content-center align-items-center flex-column gap-4'>
      <Helmet>
        <title>  أوقات الصلاة </title>
        <link rel="icon"  type="image/png" href="../../assets/logo.webp"></link>
      </Helmet>
      <Time/>
      <p className='display-6 d-flex align-items-center flex-column '>
      {hijriDate}
      </p>
      <h2>
{selectedCity.displayName }
      </h2>
      <div className='d-flex gap-5 flex-wrap justify-content-center' >
        <CardPrayer title='الصبح' img='src/assets/fajr-prayer.webp' alt='الصبح' timeP={timings.Fajr} />
        <CardPrayer title='الظهر' img='src/assets/dhhr-prayer-mosque.webp'  alt='الظهر'  timeP={timings.Dhuhr}/>
        <CardPrayer title='عصر' img='src/assets/asr-prayer-mosque.webp'  alt='عصر' timeP={timings.Asr}/>
        <CardPrayer title='المغرب' img='src/assets/sunset-prayer-mosque.webp'  alt='المغرب' timeP={timings.Sunset}/>
        <CardPrayer title='العشاء' img='src/assets/night-prayer-mosque.webp'  alt='العشاء' timeP={timings.Isha} />
      </div>
      
      


      <Form.Select onChange={handleCityChange}  className='formSize mt-4' aria-label="Default select example">
     
     {avilableCities.map(city => ( 
       <option key={city.id} value={city.apiName}>
      {city.displayName}
      </option>
))}
     
     
    </Form.Select>


    </main>
  )
}

export default PrayerTimes 