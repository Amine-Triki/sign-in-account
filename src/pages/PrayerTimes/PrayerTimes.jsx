import "./PrayerTimes.css";
import { Helmet } from "react-helmet-async";
import { Time, CardPrayer , Loading } from "../../components/index";
import { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";

import fajr from "/src/assets/fajr-prayer.webp";
import dhhr from "/src/assets/dhhr-prayer-mosque.webp";
import asr from "/src/assets/asr-prayer-mosque.webp";
import sunset from "/src/assets/sunset-prayer-mosque.webp";
import night from "/src/assets/night-prayer-mosque.webp";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

import {  Error404 } from '../index' 

const PrayerTimes = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !loading) {
      navigate("/");
    }

    if(user){
      if (!user.emailVerified) {
        navigate("/");
      }
    }
  } );

  const [timings, setTimings] = useState({
    Fajr: "04:20",
    Dhuhr: "11:50",
    Asr: "15:18",
    Sunset: "18:03",
    Isha: "19:33",
  });

  const [hijriDate, setHijriDate] = useState("");

  //select a city

  const handleCityChange = (event) => {
    const cityObject = avilableCities.find((city) => {
      return city.apiName == event.target.value;
    });
    setSelectCity(cityObject);
  };

  const [selectedCity, setSelectCity] = useState({
    id: 0,
    displayName: "مكة المكرمة",
    apiName: "Makkah al Mukarramah",
  });

  const avilableCities = [
    {
      id: 0,
      displayName: "مكة المكرمة",
      apiName: "Makkah al Mukarramah",
    },
    {
      id: 1,
      displayName: "الرياض",
      apiName: "Riyadh",
    },
    {
      id: 2,
      displayName: "دمام",
      apiName: "Dammam",
    },
  ];

  //call api

  useEffect(() => {
    const getTimings = async () => {
      try {
        const response = await axios.get(
          `https://api.aladhan.com/v1/timingsByCity?country=SA&city=${selectedCity.apiName}`
        );
        const { timings, date } = response.data.data;

        setTimings(timings);
        setHijriDate(
          `${date.hijri.year}/${date.hijri.month.number}/${date.hijri.day}`
        );
      } catch (error) {
        console.error("Error fetching prayer timings:", error);
      }
    };

    getTimings();
  }, [selectedCity]);

  if (loading) {
    return (
      <main className='d-flex align-items-center justify-content-center '>
       <Loading />
      </main>
  )
       
           }

  if (user){
    if(user.emailVerified){
      return (
        <main className="d-flex justify-content-center align-items-center flex-column gap-4">
          <Helmet>
            <title> أوقات الصلاة </title>
            <link rel="icon" type="image/png" href="../../assets/logo.webp"></link>
          </Helmet>
          <Time />
          <p className="display-6 d-flex align-items-center flex-column ">
            {hijriDate}
          </p>
          <h2>{selectedCity.displayName}</h2>
          <div className="d-flex gap-5 flex-wrap justify-content-center">
            <CardPrayer title="الصبح" img={fajr} alt="الصبح" timeP={timings.Fajr} />
            <CardPrayer
              title="الظهر"
              img={dhhr}
              alt="الظهر"
              timeP={timings.Dhuhr}
            />
            <CardPrayer title="عصر" img={asr} alt="عصر" timeP={timings.Asr} />
            <CardPrayer
              title="المغرب"
              img={sunset}
              alt="المغرب"
              timeP={timings.Sunset}
            />
            <CardPrayer
              title="العشاء"
              img={night}
              alt="العشاء"
              timeP={timings.Isha}
            />
          </div>
    
          <Form.Select
            onChange={handleCityChange}
            className="formSize mt-4"
            aria-label="Default select example"
          >
            {avilableCities.map((city) => (
              <option key={city.id} value={city.apiName}>
                {city.displayName}
              </option>
            ))}
          </Form.Select>
        </main>
      );
    }

   



  }




  

  if (error) {
    return (
      <Error404/>
    );
  }
  
};

export default PrayerTimes;
