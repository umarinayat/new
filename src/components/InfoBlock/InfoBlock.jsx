import { Container } from "react-bootstrap";
import "./InfoBlock.css";

const InfoBlock = () => {
  return (
    <Container fluid className="p-0">
      <div className="infoBlock-container">
        <h3>
          TRANSPARENT<span>.</span> QUICK<span>.</span> EASY<span>.</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod
          <br /> tincidunt ut laoreet dolore magna aliquam erat volutpat.{" "}
        </p>
        <button>REGISTER NOW</button>
      </div>
    </Container>
  );
};

export default InfoBlock;
