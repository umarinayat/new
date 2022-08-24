import "./Insights.css";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";
import barChart from "../../assets/chart-white.png";
import { Container } from "react-bootstrap";

const Insights = () => {
  return (
    <>
      <Container fluid className="p-0">
        <div className="insights-container">
          <Container>
            <h2 className="text-left">
              INSIGHTS<span>.</span>
            </h2>
            <ul className="row px-2 col-lg-12 col-md-12 col-sm-12">
              <li className="col">
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
          <Container fluid className="p-0">
            <div className="slider">
              <Container className="p-0">
                <div className="slider-container text-center">
                  <img src={leftArrow} alt="left-arrow" />
                  <div className="slider-heading-container">
                    <p className="p1">1. </p>
                    <p className="p2 p-1 text-center">Valuation </p>
                  </div>

                  <div className="slider-desc-container">
                    <img src={barChart} alt="chart" />
                    <p>
                      Consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod tincidunt ut laoreet dolore magna aliquam.
                      Consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod tincidunt ut laoreet dolore magna aliquam
                    </p>
                    <button>View Example</button>
                  </div>
                  <img src={rightArrow} alt="right-arrow" />
                </div>
              </Container>
            </div>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Insights;
