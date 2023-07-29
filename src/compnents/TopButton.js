import { UilLocationPinAlt } from "@iconscout/react-unicons";
import "./top.css";

const TopButton = (props) => {
  const quickCities = [
    { id: 1, name: "Mumbai" },
    { id: 2, name: "Delhi" },
    { id: 3, name: "Chennai" },
    { id: 4, name: "Bangalore" },
  ];

  const btnHandler = (event) => {
    props.ondata(event.target.value);
  };
  const btnHandlerforLocation = () => {
    props.onloc();
  };

  return (
    <>
      <ul className="ul">
        {quickCities.map((city) => {
          return (
            <li key={city.id}>
              <button onClick={btnHandler} className="btn" value={city.name}>
                {city.name}
              </button>
            </li>
          );
        })}
        <li>
          <button onClick={btnHandlerforLocation} className="btn btn2">
            <UilLocationPinAlt size={35} className="cl" />
            <p className="txt">Current Location</p>
          </button>
        </li>
      </ul>
    </>
  );
};
export default TopButton;
