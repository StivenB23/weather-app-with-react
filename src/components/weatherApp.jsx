import { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import style from './weatherApp.module.css';
import Loading from "./loading";
export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);
  async function loadInfo(city = "London") {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );
      console.log(request);
      const json = await request.json();
      setTimeout(()=>{
          setWeather(json);
      }, 2000)
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }
  return (
    <div className={style.weatherContainer} >
        <h1>WEATHER APP WITH REACT</h1>
        <div>
            <WeatherForm onChangeCity={handleChangeCity} />
        </div>
            {weather ? <WeatherMainInfo weather={weather} /> : <Loading/> }
      
    </div>
  );
}
