import "./Insights.css";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";
import barChart from "../../assets/chart-white.png";

const Insights = () => {
  return (
    <>
      <div className="insights-container">
        <h2>
          INSIGHTS<span>.</span>
        </h2>
        <ul>
          <li>
            1.
            <br />
            Lorem Ipsum
          </li>
          <li>
            2.
            <br />
            Lorem Ipsum
          </li>
          <li>
            3.
            <br />
            Lorem Ipsum
          </li>
          <li>
            4.
            <br />
            Lorem Ipsum
          </li>
          <li>
            5.
            <br />
            Lorem Ipsum
          </li>
          <li>
            6.
            <br />
            Lorem Ipsum
          </li>
          <li>
            7.
            <br />
            Lorem Ipsum
          </li>
        </ul>
        <div className="slider">
          <div className="slider-container">
            <img src={leftArrow} alt="left-arrow" />
            <div className="slider-heading-container">
              <p className="p1">1. </p>
              <p className="p2">Valuation </p>
            </div>

            <div className="slider-desc-container">
              <img src={barChart} alt="chart" />
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam. Consectetuer
                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam
              </p>
              <button>View Example</button>
            </div>
            <img src={rightArrow} alt="right-arrow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
