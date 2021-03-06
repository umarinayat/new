import "./Insights.css";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";
import barChart from "../../assets/chart-white.png";
import { Container } from "react-bootstrap";

const Insights = () => {
  return (
    <>
      <Container fluid className="p-0 section-cls">
        <div className="insights-container">
          <Container>
            <h2 className="text-left">
              INSIGHTS<span>.</span>
            </h2>
            <ul className="row px-2 col-lg-12 col-md-12 col-sm-12">
              <li className="col" style={{ backgroundColor: "#FFA800" }}>
                1.
                <br />
                Lorem Ipsum
              </li>
              <li className="col">
                2.
                <br />
                Lorem Ipsum
              </li>
              <li className="col">
                3.
                <br />
                Lorem Ipsum
              </li>
              <li className="col">
                4.
                <br />
                Lorem Ipsum
              </li>
              <li className="col">
                5.
                <br />
                Lorem Ipsum
              </li>
              <li className="col">
                6.
                <br />
                Lorem Ipsum
              </li>
              <li className="col">
                7.
                <br />
                Lorem Ipsum
              </li>
            </ul>
          </Container>

          <div className="slider-container text-center row justify-content-center m-0">
            <img
              src={leftArrow}
              alt="left-arrow"
              className="col-2 arrow-images"
            />
            <div className="slider-heading-container col col-4">
              <p className="p1">1. </p>
              <p className="p2 p-1 text-center">Valuation </p>
            </div>

            <div className="slider-desc-container col-4">
              <img src={barChart} alt="chart" />
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam. Consectetuer
                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam
              </p>
              <button>View Example</button>
            </div>
            <img
              className="col-2 arrow-images"
              src={rightArrow}
              alt="right-arrow"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Insights;
