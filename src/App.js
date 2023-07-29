import React, { useEffect, useState } from "react";
import "./App.css";

import img2 from "./assests/heaven.jpg";

import TopButton from "./compnents/TopButton";
import Input from "./compnents/Input";
import Time from "./compnents/Time";
import Temp from "./compnents/Temp";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [searchCity, setSearchCity] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const [wait, setWait] = useState(false);
  const [cel, setcel] = useState(true);
  const [which, setWhich] = useState(false);

  const apiKey = "d0d6644371fe124f5704777f23ac61be";

  useEffect(() => {
    const fetchDataWheather = async (latitude, longitude, city = "delhi") => {
      apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}`;
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
          setWait(true);
        } else {
          console.log("Please Enter Correct City Name");
        }
      } catch (error) {
        console.log("error");
      }
    };

    const fetchThisTime = async (lat, long) => {
      apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;

      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        setWait(true);
      }
    };

    const oncemore = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const newLatitude = position.coords.latitude;
            const newLongitude = position.coords.longitude;

            if (latitude !== newLatitude || longitude !== newLongitude) {
              setLatitude(newLatitude);
              setLongitude(newLongitude);
            }
            fetchThisTime(newLatitude, newLongitude);
          },
          (error) => {
            alert(
              "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
            );
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        setError("Geolocation is not supported");
      }
    };

    let apiUrl;
    if (which) {
      fetchDataWheather(null, null, searchCity);
    } else {
      oncemore();
    }
  }, [searchCity, longitude, latitude, which]);

  const lineDataHandler = (data) => {
    setWhich(true);
    setSearchCity(data);
  };
  const celkelHandler = () => {
    setcel(true);
  };
  const celkelHandler2 = () => {
    setcel(false);
  };

  const stateLHandler = () => {
    setWhich(false);
  };

  return (
    <>
      <div className="outer">
        <img src={img2} alt="An Image" />
        <div
          // className="mx-auto max-w-screen-md py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400"
          className="inner"
        >
          <TopButton ondata={lineDataHandler} onloc={stateLHandler} />
          <Input
            ondata={lineDataHandler}
            oncelkel={celkelHandler}
            oncelkel2={celkelHandler2}
          />
          {wait && (
            <div>
              <Time data={weatherData} cel={cel} />
              <Temp data={weatherData} cel={cel} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
