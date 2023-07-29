import { UilSearch } from "@iconscout/react-unicons";

import { useState } from "react";
import "./imput.css";

const Input = (props) => {
  const [city, setCity] = useState("");

  const inputHandler = () => {
    props.ondata(city);
    setCity("");
  };
  const inputValueHandler = (e) => {
    setCity(e.target.value);
  };

  const celHandler = () => {
    // console.log("hey");
    props.oncelkel();
  };
  const celHandler2 = () => {
    props.oncelkel2();
  };
  return (
    <>
      <div className="first">
        <div className="second">
          <input
            type="text"
            value={city}
            onChange={inputValueHandler}
            placeholder="Search for city......"
            className="input"
          ></input>
          <button onClick={inputHandler}>
            <UilSearch size={35} className="center" />
          </button>
        </div>
        <div className="btnss">
          <p className="tt">Temp in </p>
          <button name="metric" className="btn3" onClick={celHandler}>
            °C
          </button>
          <p className="text">|</p>
          <button name="imperial" onClick={celHandler2} className="btn3">
            K
          </button>
        </div>
      </div>
    </>
  );
};
export default Input;
