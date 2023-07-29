import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import "./temp.css";

import WeatherIcon from "./WeatherIcon";

const Temp = (props) => {
  const { feels_like, humidity, pressure, temp, temp_max, temp_min } =
    props.data.main;
  const sunriseDate = new Date(props.data.sys.sunrise * 1000);
  const sunsetDate = new Date(props.data.sys.sunset * 1000);
  const sunriseTime = sunriseDate
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      hourCycle: "h12",
    })
    .toUpperCase();
  const sunsetTime = sunsetDate
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      hourCycle: "h12",
    })
    .toUpperCase();
  const cel = props.cel;
  const current = props.data.weather[0].main;
  return (
    <>
      <div className="rock">
        <p>{current}</p>
      </div>
      <div className="shawn">
        <WeatherIcon code={props.data.weather[0].icon} />
        <p className="remember">
          {cel ? (temp - 273.15).toFixed(2) + "°" : temp.toFixed(2) + "k"}
        </p>
        <div className="cm">
          <div className="punk">
            <UilTemperature size={18} className="" />
            Feels Like
            <span className="fom ">
              :{" "}
              {cel
                ? (feels_like - 273.15).toFixed(2) + "°"
                : feels_like.toFixed(2) + "k"}
            </span>
          </div>
          <div className="punk">
            <UilTemperature size={18} className="" />
            Pressure <span className="fom ">: {pressure}hpa</span>
          </div>
          <div className="punk">
            <UilTear size={18} className="" />
            Humidity <span className="fom">: {humidity}%</span>
          </div>
          <div className="punk">
            <UilWind size={18} className="" />
            Wind Speed:
            <span className="fom">
              {props.data.wind.speed.toFixed(2)}
              <span style={{ fontSize: "small" }}>km/h Towards</span>{" "}
              {props.data.wind.deg}°
            </span>
          </div>
        </div>
      </div>

      <div className="ambrose">
        <UilSun size={40} />
        <p className="punk">
          Rise <span className="last">: {sunriseTime}</span>
        </p>
        <p className="punk">|</p>
        <UilSunset size={40} />
        <p className="punk">
          Set <span className="last">: {sunsetTime}</span>
        </p>
        <p className="punk">|</p>
        <UilSun size={40} />
        <p className="punk">
          High
          <span className="last">
            :{" "}
            {cel
              ? (temp_max - 273.15).toFixed(2) + "°"
              : temp_max.toFixed(2) + "K"}
          </span>
        </p>
        <p className="punk">|</p>
        <UilSun size={40} />
        <p className="punk">
          Low
          <span className="last">
            :{" "}
            {cel
              ? (temp_min - 273.15).toFixed(2) + "°"
              : temp_min.toFixed(2) + "K"}
          </span>
        </p>
      </div>
    </>
  );
};
export default Temp;
