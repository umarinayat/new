import { Container } from "react-bootstrap";
import "./WebInfo.css";
import laptopBg from "../../assets/laptop-bg.png";

const WebInfo = () => {
  return (
    <Container fluid className="p-0" style={{position: "relative"}}>
      <div className="webinfo-container">
        <div className="webinfo-text-container">
          <h3>
            ALL THE INFO <br /> AT HAND<span>.</span>
          </h3>
          <p>
            Consectetuer adipiscing elit, sed diam nonummy
            <br /> nibh euismod tincidunt ut laoreet dolore magna
            <br /> aliquam
          </p>
          <button>REGISTAR NOW</button>
        </div>
        <img className="webinfo-img-laptop" src={laptopBg} alt="laptop" />
      </div>
      {/* <div className="row">
        <h3>
          ALL THE INFO <br /> AT HAND<span>.</span>
        </h3>
        <p>
          Consectetuer adipiscing elit, sed diam nonummy
          <br /> nibh euismod tincidunt ut laoreet dolore magna
          <br /> aliquam
        </p>
        <button className="btn btn-primary btn-md col-lg-1 ">
          REGISTAR NOW
        </button>
      </div> */}
    </Container>
  );
};

export default WebInfo;
