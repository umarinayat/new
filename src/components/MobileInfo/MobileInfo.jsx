import "./MobileInfo.css";
import smartPhone from "../../assets/smart-phone.png";
import {Container} from "react-bootstrap";

const MobileInfo = () => {
  return (
    <>
        <Container fluid className="p-0" style={{position:"relative"}}>
            <img className="mobileInfo-img-mobile" src={smartPhone} alt="smart-phone" />
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
        </Container>

    </>
  );
};

export default MobileInfo;
