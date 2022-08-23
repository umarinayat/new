import SymfinderList from "./SymfinderList";
import barChart from "../../assets/bar-chart.png";
import calander from "../../assets/calander.png";
import laptop from "../../assets/laptop.png";
import webpage from "../../assets/webpage.png";
import chat from "../../assets/chat.png";
import gear from "../../assets/gear.png";
import "./Symfinder.css";

const Symfinder = () => {
  return (
    <>
      <h3 className="p-5 text-center heading">SYMFINDER FEATURES</h3>
      <div className="sym-container">
        <SymfinderList
          sym-container-item="sym-container-item"
          barChart={barChart}
          text="Symbols of interests"
          p="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet"
        />

        <SymfinderList
          barChart={calander}
          text="Calendars"
          p="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet"
        />

        <SymfinderList
          barChart={laptop}
          text="Seven insights"
          p="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet"
        />

        <SymfinderList
          barChart={webpage}
          text="Full market NYSE API"
          p="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet"
        />

        <SymfinderList
          barChart={chat}
          text="Message Board"
          p="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet"
        />

        <SymfinderList
          barChart={gear}
          text="Alpaca Integration"
          p="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet"
        />
      </div>
    </>
  );
};

export default Symfinder;
