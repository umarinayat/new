import "./MobileInfo.css";
import smartPhone from "../../assets/smart-phone.png";

const MobileInfo = () => {
  return (
    <>
      {/* <div className="mobileInfo-container">
        <img src={smartPhone} alt="smart-phone" />
      </div> */}
      <div className="mobileInfo-desc-container">
        <h6>
          ALL THE INFO <br /> AT HAND
        </h6>
        <p>
          Consectetuer adipiscing elit, sed diam nonummy
          <br /> nibh euismod tincidunt ut laoreet dolore magna
          <br /> aliquam
        </p>
        <button>REGISTER NOW</button>
      </div>
      <div className="static-block"></div>
    </>
  );
};

export default MobileInfo;
