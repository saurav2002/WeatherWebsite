import CLock from "react-live-clock";
import "./time.css";

const Time = (props) => {
  const country = props.data.sys.country;
  const city = props.data.name;

  return (
    <>
      <div className="john">
        <p className="cena">
          <CLock format="HH:mm:ss" interval={1000} ticking={true} />
        </p>
      </div>
      <div className="rko">
        <p className="okr">
          {city},{country}
        </p>
      </div>
    </>
  );
};
export default Time;
